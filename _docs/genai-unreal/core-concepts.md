---
layout: documentation
title: Core Concepts
permalink: /docs/genai-unreal/core-concepts/
nav_order: 6
---

## Asynchronous by Design

All API calls in this plugin are **asynchronous** (non-blocking). This is essential to prevent your game from freezing while waiting for a response from the AI server. The workflow is always:

1. You call a function to send a request (e.g., `UGenOAIChat::SendChatRequest`).
2. You provide a **callback delegate** (in C++) or connect to an **event pin** (in Blueprints).
3. Your game continues running without interruption.
4. When the response arrives, your callback function or event is executed with the result.

## Lifetime Management for Asynchronous Operations

When working with asynchronous API calls, a critical challenge in Unreal Engine is **Object Lifetime**. The core problem occurs when an Actor is destroyed while an API request is in-flight—the callback can attempt to access a "dangling pointer," causing crashes.

### Blueprint Solution: Automatic Safety

Blueprint nodes are built on `UCancellableAsyncAction` and handle lifetime automatically using `TWeakObjectPtr`. The nodes check if the calling object is still valid before executing callbacks, preventing crashes. Key features:

- **Automatic Cleanup:** When objects are destroyed, weak pointers become invalid and callbacks are safely skipped.
- **Explicit Cancellation:** Use the Cancel node to terminate requests early and clean up resources.
    <div class="image-wrapper-half">
        <figure>
            <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1751930469/7ba052f5-e44d-402a-b113-0fc1d07cce09.webp" alt="Blueprint lifetime safety" style="width: 100%;">
            <figcaption class="image-caption">
            Blueprint nodes automatically handle lifetime safety
            </figcaption>
        </figure>
    </div>
- **No Extra Work Required:** Blueprint developers can trust the async nodes to handle all safety automatically.

### C++ Solution: Developer-Managed

When using static C++ functions, you must handle lifetime yourself. Always capture a `TWeakObjectPtr` and check validity:

```cpp
// Essential C++ safety pattern
void AMyActor::RequestImageGeneration()
{
    FGenOAIImageSettings ImageSettings;
    ImageSettings.Prompt = TEXT("A beautiful sunset over mountains")~~~~;

    // Create weak pointer for safe callback capture
    TWeakObjectPtr<AMyActor> WeakThis(this);

    // Store request handle for potential cancellation
    ActiveRequest = UGenOAIImageGeneration::SendImageGenerationRequest(ImageSettings,
        FOnImageGenerationCompletionResponse::CreateLambda([WeakThis](const TArray<uint8>& ImageBytes, const FString& Error, bool bSuccess)
        {
            // CRITICAL: Always check validity first
            if (!WeakThis.IsValid()) return;

            AMyActor* StrongThis = WeakThis.Get();
            StrongThis->OnImageReceived(ImageBytes, Error, bSuccess);
        })
    );
}
```

## Using Custom Models (Not in Enums)

AI providers release new models frequently. You don't have to wait for a plugin update to use them. All settings objects (e.g., `FGenOAIChatSettings`) allow you to specify a model name as a simple string, which will always override the enum selection.

### Blueprint Example:

In the "Make Gen OpenAI Chat Settings" node, simply type the new model's name (e.g., "gpt-5-exclusive-preview") into the `Model (String)` input field. This will be used instead of the enum dropdown.

<div class="image-wrapper">
    <figure>
        <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1751930092/9f333958-9150-4d63-ad82-2e24443ca5c9.webp" alt="Using a custom model in Blueprint" style="width: 100%;">
        <figcaption class="image-caption">
        Using a custom model in Blueprint
        </figcaption>
    </figure>
</div>

### C++ Example:

```cpp
#include "Models/OpenAI/GenOAIChat.h"

void AMyActor::SendCustomModelRequest()
{
    FGenOAIChatSettings ChatSettings;
    ChatSettings.Model = EOpenAIChatModel::Custom;
    ChatSettings.CustomModelName = TEXT("gpt-5-exclusive-preview");

    // ... complete the rest of the request
}
```

## Additional Points to Note

1. **HTTP Timeouts**: For complex reasoning models, consider increasing timeout values in DefaultEngine.ini
2. **Audio Formats (TTS):** The Text-to-Speech feature currently outputs audio in the PCM format. The plugin includes Blueprint utilities to convert this raw data into a playable USoundWave asset at runtime.
    <div class="image-wrapper-small" style="max-width: 35%;">
        <figure>
            <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1751930771/6a1a4394-efe4-4490-bd00-ff917c35c4b0.webp" alt="Audio conversion utilities" style="width: 100%;">
        </figure>
    </div>

3. **API Key Security**: Never commit `secureconfig.bin` to source control
4. **Platform Compatibility**: Uses standard engine modules for cross-platform support
5. **Plugin Dependencies**: Relies only on core Unreal Engine modules

