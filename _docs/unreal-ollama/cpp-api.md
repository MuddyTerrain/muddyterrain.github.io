---
layout: documentation
title: C++ API
permalink: /docs/genai-llama/cpp-api/
nav_order: 4
description: Production-quality C++ snippets for GenAI Llama — chat completion, streaming, embedded model loading, multi-turn conversations, cancellation, and lifetime safety patterns.
tags: [cpp, unreal-engine, genai-llama, api, llama-cpp, ollama, integration]
---

Every Blueprint node the plugin exposes has a C++ equivalent. This page shows the patterns you actually need in production — proper lifetime capture so the callback doesn't crash when the calling actor is destroyed, cancellation on level teardown, multi-turn conversation state, and provider fallback.

For the Blueprint-side reference, see [Blueprint Nodes](/docs/genai-llama/blueprint-nodes/). This page assumes you're reading the struct definitions alongside — they're in `Data/GenAILlamaChatStructs.h`.

---

## Module Setup

Add `GenAILlama` as a dependency in your module's `Build.cs`:

```csharp
PrivateDependencyModuleNames.AddRange(new string[]
{
    "GenAILlama",
});
```

Include paths are exposed automatically — no extra public include directory setup needed.

---

## Chat Completion

The static helper `UGenAILlamaChat::SendChatRequest` takes a settings struct and a regular (non-dynamic) delegate. It returns a shared HTTP request pointer you can hold onto for cancellation.

```cpp
#include "Models/GenAILlamaChat.h"
#include "Data/GenAILlamaChatStructs.h"

void AMyNpcActor::AskForGreeting()
{
    FGenAILlamaChatSettings Settings;
    Settings.Model = TEXT("llama3");
    Settings.Connection.Provider = EGenAILlamaProvider::Ollama;
    Settings.Connection.BaseUrl = TEXT("http://localhost:11434");
    Settings.SystemPrompt = TEXT("You are a helpful NPC in a fantasy RPG. Keep replies under 20 words.");

    FGenAILlamaChatMessage Msg;
    Msg.Role = TEXT("user");
    Msg.Content = TEXT("Greet the player.");
    Settings.Messages.Add(Msg);

    // Capture a weak pointer — the callback may fire after this actor is destroyed.
    TWeakObjectPtr<AMyNpcActor> WeakThis(this);

    FOnGenAILlamaChatCompletionResponse Callback;
    Callback.BindLambda([WeakThis](const FGenAILlamaChatResponse& Response)
    {
        AMyNpcActor* Self = WeakThis.Get();
        if (!Self) { return; }

        if (!Response.bSuccess)
        {
            UE_LOG(LogTemp, Warning, TEXT("Chat failed: %s"), *Response.ErrorMessage);
            return;
        }

        Self->OnGreetingReceived(Response.Message.Content);
    });

    UGenAILlamaChat::SendChatRequest(Settings, Callback);
}
```

**Lifetime rule:** never capture `this` directly in the lambda. HTTP responses can arrive milliseconds or seconds after the actor has been destroyed — `TWeakObjectPtr` checks make the callback safe to drop silently in that case.

---

## Streaming

Stream events arrive one per token. Append each `PartialMessage.Content` to a running buffer, then drive your UI from that buffer.

```cpp
#include "Models/GenAILlamaChatStream.h"

void AMyDialogueWidget::StartStreamingResponse(const FString& UserInput)
{
    FGenAILlamaChatSettings Settings;
    Settings.Model = TEXT("llama3");
    Settings.Connection.Provider = EGenAILlamaProvider::Ollama;
    Settings.Connection.BaseUrl = TEXT("http://localhost:11434");

    FGenAILlamaChatMessage Msg;
    Msg.Role = TEXT("user");
    Msg.Content = UserInput;
    Settings.Messages.Add(Msg);

    // Reset the rolling buffer before starting a new stream.
    AssembledResponse.Reset();

    TWeakObjectPtr<AMyDialogueWidget> WeakThis(this);

    FOnGenAILlamaChatStreamResponse StreamCallback;
    StreamCallback.BindLambda([WeakThis](const FGenAILlamaStreamEvent& Event)
    {
        AMyDialogueWidget* Self = WeakThis.Get();
        if (!Self) { return; }

        Self->AssembledResponse.Append(Event.PartialMessage.Content);
        Self->UpdateDialogueText(Self->AssembledResponse);

        if (Event.bIsFinished)
        {
            Self->OnStreamFinished(Self->AssembledResponse);
        }
    });

    // Hold on to the HTTP request so we can cancel it (e.g. if the user closes the dialogue).
    ActiveStreamRequest = UGenAILlamaChatStream::SendStreamChatRequest(Settings, StreamCallback);
}

void AMyDialogueWidget::CancelStream()
{
    if (ActiveStreamRequest.IsValid())
    {
        ActiveStreamRequest->CancelRequest();
        ActiveStreamRequest.Reset();
    }
}
```

**`AssembledResponse` is an `FString` member.** Don't try to rebuild the full response from scratch each event — each event gives you only the new delta since the last event.

---

## Embedded Inference

Embedded model loading is exposed only as an async action (no static helper). Call the action class directly and bind to its dynamic delegate.

### Loading a Model

```cpp
#include "Models/GenAILlamaModelManager.h"

void AMyGameMode::LoadNpcBrain()
{
    if (!UGenAILlamaModelManager::IsEmbeddedInferenceAvailable())
    {
        UE_LOG(LogTemp, Warning, TEXT("Embedded inference not available — check plugin settings."));
        return;
    }

    FGenAILlamaModelParams Params;
    Params.ModelAlias   = TEXT("npc-brain");
    Params.ModelPath    = TEXT("Models/qwen2.5-0.5b-instruct-q4_k_m.gguf");
    Params.GpuLayers    = 0;    // 0 = CPU-safe default; bump once GPU backend verified.
    Params.ContextSize  = 2048;
    Params.ThreadCount  = 0;    // auto

    UGenAILlamaLoadModel* LoadAction = UGenAILlamaLoadModel::LoadEmbeddedModel(this, Params);
    if (!LoadAction) { return; }

    LoadAction->OnComplete.AddDynamic(this, &AMyGameMode::HandleNpcBrainLoaded);
    LoadAction->Activate();
}

UFUNCTION()
void AMyGameMode::HandleNpcBrainLoaded(bool bSuccess, const FString& Error)
{
    if (!bSuccess)
    {
        UE_LOG(LogTemp, Error, TEXT("Failed to load NPC brain: %s"), *Error);
        return;
    }

    UE_LOG(LogTemp, Log, TEXT("NPC brain ready."));
    // Spawn NPCs, enable dialogue, etc.
}
```

**`Activate()` is called automatically** when the action is returned to Blueprint. In C++, you may need to call it explicitly if the action isn't being returned through a Blueprint node path — check both paths in your project.

`OnComplete` is a dynamic multicast delegate, so the handler must be a `UFUNCTION()` — lambdas don't work here. This is an Unreal constraint, not a plugin one.

### Using a Loaded Model

Once loaded, reference it by alias in any Chat node:

```cpp
FGenAILlamaChatSettings Settings;
Settings.Connection.Provider = EGenAILlamaProvider::Embedded;
Settings.Model = TEXT("npc-brain");   // alias from LoadEmbeddedModel
Settings.Messages.Add(/* ... */);

UGenAILlamaChat::SendChatRequest(Settings, Callback);
```

### Unloading

```cpp
// Unload a single model.
UGenAILlamaModelManager::UnloadEmbeddedModel(TEXT("npc-brain"));

// Unload everything — call on level teardown if you don't want models persisting.
UGenAILlamaModelManager::UnloadAllEmbeddedModels();
```

### Querying Loaded State

```cpp
if (UGenAILlamaModelManager::IsEmbeddedModelLoaded(TEXT("npc-brain")))
{
    // Safe to use this alias.
}

TArray<FString> Loaded = UGenAILlamaModelManager::GetLoadedEmbeddedModels();
```

---

## Multi-Turn Conversations

Keep an `FGenAILlamaChatMessage` array as a member on your actor or component. Append both sides of every turn:

```cpp
UCLASS()
class AMyNpcActor : public AActor
{
    GENERATED_BODY()

    UPROPERTY()
    TArray<FGenAILlamaChatMessage> History;

public:
    void SendMessage(const FString& UserInput);

private:
    void HandleResponse(const FGenAILlamaChatResponse& Response);
};

void AMyNpcActor::SendMessage(const FString& UserInput)
{
    // 1. Record the user's turn.
    FGenAILlamaChatMessage UserMsg;
    UserMsg.Role = TEXT("user");
    UserMsg.Content = UserInput;
    History.Add(UserMsg);

    // 2. Copy the full history into the request.
    FGenAILlamaChatSettings Settings;
    Settings.Model = TEXT("llama3");
    Settings.Connection.Provider = EGenAILlamaProvider::Ollama;
    Settings.SystemPrompt = TEXT("You are a gruff dwarven blacksmith.");
    Settings.Messages = History;

    TWeakObjectPtr<AMyNpcActor> WeakThis(this);
    FOnGenAILlamaChatCompletionResponse Callback;
    Callback.BindLambda([WeakThis](const FGenAILlamaChatResponse& Response)
    {
        if (AMyNpcActor* Self = WeakThis.Get())
        {
            Self->HandleResponse(Response);
        }
    });

    UGenAILlamaChat::SendChatRequest(Settings, Callback);
}

void AMyNpcActor::HandleResponse(const FGenAILlamaChatResponse& Response)
{
    if (!Response.bSuccess) { return; }

    // 3. Record the assistant's turn so the next user message has context.
    History.Add(Response.Message);

    DisplayDialogue(Response.Message.Content);
}
```

**Context budget:** the conversation size is bounded by the model's context window (e.g. `ContextSize = 2048` tokens). For long sessions, trim `History` once it grows beyond ~75% of the budget — the easiest approach is to drop the oldest user/assistant pair at a time (never drop the `system` message).

---

## Provider Fallback (Embedded → HTTP)

A common shipping pattern: prefer embedded when available, fall back to a local HTTP server otherwise.

```cpp
FGenAILlamaChatSettings Settings;
Settings.Model = TEXT("");  // set below
// ... fill in messages ...

if (UGenAILlamaModelManager::IsEmbeddedInferenceAvailable() &&
    UGenAILlamaModelManager::IsEmbeddedModelLoaded(TEXT("npc-brain")))
{
    Settings.Connection.Provider = EGenAILlamaProvider::Embedded;
    Settings.Model = TEXT("npc-brain");
}
else
{
    Settings.Connection.Provider = EGenAILlamaProvider::Ollama;
    Settings.Connection.BaseUrl = TEXT("http://localhost:11434");
    Settings.Model = TEXT("llama3");
}

UGenAILlamaChat::SendChatRequest(Settings, Callback);
```

Neither path changes the rest of your code — the response format, delegate shape, and error fields are identical across providers.

---

## Cancellation

Every async action is a `UCancellableAsyncAction`, so calling `Cancel()` on the action object aborts it cleanly. The static helpers (`SendChatRequest`, `SendStreamChatRequest`) return the underlying HTTP request instead; use that for HTTP-side cancellation.

### HTTP Cancellation

```cpp
TSharedPtr<IHttpRequest, ESPMode::ThreadSafe> ActiveRequest;

// Start a request — store the shared pointer.
ActiveRequest = UGenAILlamaChat::SendChatRequest(Settings, Callback);

// Later, cancel it (e.g. on level teardown).
if (ActiveRequest.IsValid())
{
    ActiveRequest->CancelRequest();
    ActiveRequest.Reset();
}
```

### Async Action Cancellation

When you've gone through the async-action path (e.g. for `UGenAILlamaLoadModel`), hold the action pointer and call `Cancel()`:

```cpp
UPROPERTY()
UGenAILlamaLoadModel* PendingLoad = nullptr;

// Start:
PendingLoad = UGenAILlamaLoadModel::LoadEmbeddedModel(this, Params);
PendingLoad->OnComplete.AddDynamic(this, &AMyGameMode::HandleLoaded);
PendingLoad->Activate();

// Cancel:
if (IsValid(PendingLoad))
{
    PendingLoad->Cancel();
    PendingLoad = nullptr;
}
```

### Embedded Stream Cancellation

Streaming from an embedded model uses a thread-safe flag checked on every token boundary. Calling `Cancel()` on the `UGenAILlamaChatStream` action stops generation within a few milliseconds (the time to finish the current token).

---

## Server Health + Model List

Both follow the same async-action pattern as `LoadEmbeddedModel` — dynamic delegate, `UFUNCTION` handler.

```cpp
#include "Models/GenAILlamaHealthCheck.h"
#include "Models/GenAILlamaListModels.h"

FGenAILlamaConnectionSettings Conn;
Conn.Provider = EGenAILlamaProvider::Ollama;
Conn.BaseUrl = TEXT("http://localhost:11434");

// Health check
UGenAILlamaHealthCheck* Health = UGenAILlamaHealthCheck::CheckServerHealth(this, Conn);
Health->OnComplete.AddDynamic(this, &AMyActor::HandleHealth);
Health->Activate();

// Model listing
UGenAILlamaListModels* List = UGenAILlamaListModels::ListAvailableModels(this, Conn);
List->OnComplete.AddDynamic(this, &AMyActor::HandleModelList);
List->Activate();
```

Handler signatures (note the parameter order — `bSuccess` is last for List, first for Health):

```cpp
UFUNCTION()
void HandleHealth(bool bIsHealthy, const FString& ServerInfo, const FString& Error);

UFUNCTION()
void HandleModelList(const TArray<FString>& ModelNames, const FString& Error, bool bSuccess);
```

---

## Key Headers

| Use case | Include |
|---|---|
| Chat completion | `Models/GenAILlamaChat.h` |
| Streaming chat | `Models/GenAILlamaChatStream.h` |
| Embedded model loading + management | `Models/GenAILlamaModelManager.h` |
| Server health check | `Models/GenAILlamaHealthCheck.h` |
| Model listing | `Models/GenAILlamaListModels.h` |
| All structs + the `EGenAILlamaProvider` enum | `Data/GenAILlamaChatStructs.h` |

---

## See Also

- **[Blueprint Nodes](/docs/genai-llama/blueprint-nodes/)** — The equivalent node-by-node reference for BP users.
- **[Quick Start](/docs/genai-llama/quick-start/)** — If you haven't confirmed the plugin works end-to-end yet, start there.
- **[GGUF Models](/docs/genai-llama/gguf-models/)** — What to put in `ModelPath`.
- **[Troubleshooting](/docs/genai-llama/troubleshooting/)** — When a call errors out.
