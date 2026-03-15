---
layout: documentation
title: Unreal Ollama - Home
permalink: /docs/unreal-ollama/
nav_order: 1
image: https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1759079669/Screenshot_2025-09-28_133409_e7uag9.webp
---

<div class="image-wrapper">
<figure>
    <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1759079669/Screenshot_2025-09-28_133409_e7uag9.webp" alt="Unreal Ollama Plugin" style="width: 100%;">
</figure>
</div>

**Welcome to the official documentation for Unreal Ollama, a free and open-source plugin that integrates [Ollama](https://ollama.com/) with Unreal Engine.** Run powerful, open-source large language models locally within your games and applications — no cloud APIs, no API keys, no per-request costs.

The plugin provides asynchronous Blueprint nodes and C++ classes for chat completions, streaming chat, and multimodal interactions with models that support it.

<div class="button-row">
  <a href="https://github.com/MuddyTerrain/unreal-ollama" class="cta-button primary track-click" data-event-name="btn_clk_unreal_ollama_github" data-event-location="top_cta" target="_blank" rel="noopener noreferrer">View on GitHub</a>
  <a href="/t/discord" class="cta-button secondary track-click" data-event-name="btn_clk_join_discord" data-event-location="top_cta" target="_blank" rel="noopener noreferrer">Join Discord</a>
</div>

---

## Prerequisites

Before using the plugin, you need two things set up on your machine:

#### 1. Install Ollama

Download and install Ollama from the official website: [https://ollama.com/](https://ollama.com/). Ollama is available for **Windows**, **macOS**, and **Linux**.

#### 2. Pull a Model

Once Ollama is installed, open your terminal and pull a model. You only need to do this once per model.

```bash
ollama pull llama3
```

You can browse the full list of available models at the [Ollama Library](https://ollama.com/library). Some recommended models:

| Use Case | Model | Description |
|----------|-------|-------------|
| General Chat | `llama3` | Meta's latest Llama model |
| General Chat | `mistral` | High-performance open model |
| General Chat | `gemma` | Google's open model |
| Multimodal (Text + Images) | `llava` | Popular vision-language model |
| Coding | `codellama` | Specialized coding assistant |

---

## Setup and Configuration

1.  **Install the Plugin:** Add the `UnrealOllama` plugin to your project's `Plugins` folder and enable it in **Edit > Plugins**.
2.  **Run Ollama:** The Ollama application **must be running in the background** on your machine. The plugin communicates with the local Ollama server at `http://localhost:11434`.
3.  **Firewall:** The first time you run your project, your OS firewall may ask for permission for Unreal Engine to accept network connections. Allow it — this is required for the Ollama server to send responses back to the engine.

> **Compatibility:** The plugin supports **Unreal Engine 5.1 through 5.6**. It is built with UE 5.1 for maximum compatibility, following Unreal's "Develop Low, Upgrade High" approach.

---

## Chat Completion

The standard chat completion sends a request and returns a single, complete response.

### Blueprint

Use the **"Request Ollama Chat Completion"** node. It is an asynchronous latent node built on `UCancellableAsyncAction`.

1.  **Chat Settings:** Use a **"Make Unreal Ollama Chat Settings"** node to configure:
    -   **Model:** The name of the model (e.g., `llama3`, `llava`, `codellama`). Must be a model you have already pulled.
    -   **Messages:** An array of `FUnrealOllamaChatMessage` structs forming the conversation history. Each message has a **Role** (`user` or `assistant`) and **Content** (the text).
    -   **Format:** (Optional) Set to `json` to force JSON-formatted responses.
2.  **OnComplete:** This event pin fires when the request finishes, providing the response `Message`, an `Error` string, and a `Success` boolean.

### C++

```cpp
#include "Models/UnrealOllamaChat.h"
#include "Data/UnrealOllamaChatStructs.h"

void AMyActor::SendChatRequest()
{
    // 1. Configure the request
    FUnrealOllamaChatSettings ChatSettings;
    ChatSettings.Model = TEXT("llama3");

    FUnrealOllamaChatMessage Message;
    Message.Role = TEXT("user");
    Message.Content = TEXT("Tell me a short story about a robot.");
    ChatSettings.Messages.Add(Message);

    // 2. Create a weak pointer for safe async callbacks
    TWeakObjectPtr<AMyActor> WeakThis(this);

    // 3. Send the request
    UUnrealOllamaChat::SendChatRequest(ChatSettings,
        FOnOllamaChatCompletionResponse::CreateLambda(
            [WeakThis](const FUnrealOllamaChatMessage& ResponseMessage,
                        const FString& Error, bool bSuccess)
        {
            if (!WeakThis.IsValid()) return;

            if (bSuccess)
            {
                UE_LOG(LogTemp, Log, TEXT("Response: %s"), *ResponseMessage.Content);
            }
            else
            {
                UE_LOG(LogTemp, Error, TEXT("Error: %s"), *Error);
            }
        })
    );
}
```

#### C++ Module Setup

To use the plugin in C++, add the module dependency to your project's `.Build.cs` file:

```csharp
PublicDependencyModuleNames.AddRange(new string[] { "UnrealOllama" });
```

---

## Streaming Chat

Streaming delivers the AI response in real-time chunks as it is generated, creating a typewriter effect ideal for chat interfaces.

### Blueprint

Use the **"Request Ollama Chat Stream"** node. It exposes a single **OnEvent** pin that fires for every chunk received.

The event provides an `FUnrealOllamaStreamEvent` struct with:
-   **PartialMessage:** Contains the latest chunk of the response in its `Content` field. Append this to your UI text.
-   **bIsFinished:** `true` when the stream is complete.

### C++

```cpp
#include "Models/UnrealOllamaChatStream.h"
#include "Data/UnrealOllamaChatStructs.h"

void AMyActor::SendStreamingRequest()
{
    FUnrealOllamaChatSettings ChatSettings;
    ChatSettings.Model = TEXT("llama3");

    FUnrealOllamaChatMessage Message;
    Message.Role = TEXT("user");
    Message.Content = TEXT("Write a haiku about game development.");
    ChatSettings.Messages.Add(Message);

    TWeakObjectPtr<AMyActor> WeakThis(this);

    UUnrealOllamaChatStream::SendStreamChatRequest(ChatSettings,
        FOnUnrealOllamaChatStreamResponse::CreateLambda(
            [WeakThis](const FUnrealOllamaStreamEvent& StreamEvent)
        {
            if (!WeakThis.IsValid()) return;

            if (StreamEvent.bIsFinished)
            {
                UE_LOG(LogTemp, Log, TEXT("Stream Complete!"));
            }
            else
            {
                // Append partial content to your UI
                UE_LOG(LogTemp, Log, TEXT("Chunk: %s"),
                    *StreamEvent.PartialMessage.Content);
            }
        })
    );
}
```

---

## Multimodal (Sending Images)

To send images alongside text, use a model that supports multimodal input such as `llava`. You have two options in the `FUnrealOllamaChatMessage` struct:

#### Images As Textures (Recommended)

An array of `UTexture2D*` objects. Pass texture assets directly from your project content or render targets. The plugin handles the Base64 PNG conversion automatically.

```cpp
FUnrealOllamaChatMessage Message;
Message.Role = TEXT("user");
Message.Content = TEXT("What do you see in this image?");
Message.ImagesAsTextures.Add(MyTexture2D); // UTexture2D*
```

#### Images as Base64 Strings (Advanced)

An array of `FString` values, each being a Base64-encoded image. Useful when you already have Base64 data from another source.

```cpp
FUnrealOllamaChatMessage Message;
Message.Role = TEXT("user");
Message.Content = TEXT("Describe this image.");
Message.Images.Add(MyBase64String);
```

Both arrays can be used in the same message — the plugin will process and send all images.

---

## Building Conversations

To create a multi-turn conversation, maintain an array of messages and append both the user's input and the assistant's responses after each exchange.

```cpp
// Member variable
TArray<FUnrealOllamaChatMessage> ConversationHistory;

void AMyActor::SendMessage(const FString& UserInput)
{
    // Add user message to history
    FUnrealOllamaChatMessage UserMessage;
    UserMessage.Role = TEXT("user");
    UserMessage.Content = UserInput;
    ConversationHistory.Add(UserMessage);

    FUnrealOllamaChatSettings ChatSettings;
    ChatSettings.Model = TEXT("llama3");
    ChatSettings.Messages = ConversationHistory;

    TWeakObjectPtr<AMyActor> WeakThis(this);

    UUnrealOllamaChat::SendChatRequest(ChatSettings,
        FOnOllamaChatCompletionResponse::CreateLambda(
            [WeakThis](const FUnrealOllamaChatMessage& Response,
                        const FString& Error, bool bSuccess)
        {
            if (!WeakThis.IsValid()) return;

            if (bSuccess)
            {
                // Add assistant response to history
                WeakThis->ConversationHistory.Add(Response);
            }
        })
    );
}
```

In Blueprints, use an array variable of type `Unreal Ollama Chat Message` and use **Add** to append messages before each request.

---

## Platform Support

-   **Editor:** Works on any platform that can run both Unreal Engine and Ollama (Windows, macOS, Linux).
-   **Packaged Builds:** The plugin works in packaged builds. The game connects to `http://localhost:11434`, so the end user must have Ollama installed and running on their machine.

---

## Troubleshooting

#### Ollama Not Responding
-   Make sure the Ollama application is running. You should see it in your system tray or task manager.
-   Verify it is accessible by visiting `http://localhost:11434` in your browser — you should see "Ollama is running".

#### Model Not Found
-   Ensure you have pulled the model first with `ollama pull <model-name>` in your terminal.
-   The model name in your settings must match exactly (e.g., `llama3`, not `Llama3`).

#### Firewall Blocking Connections
-   Allow Unreal Engine through your OS firewall for local network connections.

#### Multimodal Not Working
-   Make sure you are using a vision-capable model like `llava`. Standard text models will ignore image inputs.
