---
layout: documentation
title: Core Concepts
permalink: /docs/genai-unreal/core-concepts/
nav_order: 6
---

This section covers the fundamental design principles of the GenAI for Unreal plugin. Understanding these concepts will
help you use the plugin effectively and avoid common pitfalls.

---

## 1. Finding and Using Plugin Nodes

The plugin follows a consistent naming convention to make its features easily discoverable.

#### In Blueprints

All asynchronous Blueprint nodes start with **"Request"** followed by the provider and the service. You can find any
function by simply searching for this pattern in the Blueprint context menu.

* `Request OpenAI Chat Completion`
* `Request Google Text To Speech`
* `Request Anthropic Chat Stream`

https://res.cloudinary.com/dqq9t4hyy/image/upload/v1752497712/cffb6e4b-c546-4517-a548-91f8603e94d1.png
   <div class="image-wrapper">
       <figure>
           <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1752497712/cffb6e4b-c546-4517-a548-91f8603e94d1.webp" alt="Blueprint Node Search" style="width: 100%;">
              <figcaption class="image-caption">
                Example Nodes.
              </figcaption>
         </figure>
    </div>

#### In C++

The static C++ functions follow a similar pattern, typically starting with **"Send"**.

* `UGenOAIChat::SendChatRequest(...)`
* `UGenGoogleTTS::SendTextToSpeechRequest(...)`
* `UGenAnthropicChatStream::SendStreamChatRequest(...)`

---

## 2. Unified Settings Structs

Every API request is configured using a dedicated **Settings struct**. These structs (
e.g., `FGenOAIChatSettings`, `FGenOAIImageSettings`) package all the necessary parameters for a request, such as the
model, prompt, temperature, and other options.

<div class="image-wrapper">
    <figure>
        <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1752497876/9e91d980-dd0f-458c-ae05-8e605b30b0a7.webp" alt="Settings Struct Example" style="width: 100%;">
        <figcaption class="image-caption">
            Example Settings Struct for OpenAI Chat.
        </figcaption>
    </figure>
</div>

This design keeps the function signatures clean and makes it easy to configure and reuse settings for different
requests. In Blueprints, you will use the corresponding **"Make..."** node (e.g., `Make GenOAI Chat Settings`) to
configure these parameters.

---

## 3. Asynchronous by Design

All API calls in this plugin are **asynchronous** (non-blocking). This is essential to prevent your game from freezing
while it waits for a response from a web server. The workflow is always:

1. You call a function to send a request.
2. You provide a **callback delegate** (in C++) or connect to an **event pin** (in Blueprints).
3. Your game continues running without interruption.
4. When the response arrives, your callback function or event is executed with the result.

---

## 4. Automatic Lifetime Management

A critical challenge in Unreal with asynchronous operations is **Object Lifetime**. If an Actor is destroyed while a
request is still in-flight, the callback can try to access invalid memory, causing a crash. The plugin solves this
automatically for you.

#### Blueprint Solution: Built-in Safety

Blueprint nodes are built on `UCancellableAsyncAction` and are inherently safe. They use weak pointers to track the
calling object and will automatically skip the callback if the object has been destroyed.

- **Automatic Cleanup:** No extra work is needed. If the Actor is gone, the callback won't fire.
- **Explicit Cancellation:** You can use the `Cancel` node to terminate requests early if needed.
  <div class="image-wrapper-half">
      <figure>
          <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1751930469/7ba052f5-e44d-402a-b113-0fc1d07cce09.webp" alt="Blueprint lifetime safety" style="width: 100%;">
          <figcaption class="image-caption">
          Blueprint nodes automatically handle lifetime safety.
          </figcaption>
      </figure>
  </div>

#### C++ Solution: Developer-Managed Safety

When calling the static C++ functions, you are responsible for managing lifetime. The required pattern is to capture
a `TWeakObjectPtr` in your callback lambda.

```cpp
// Essential C++ safety pattern
void AMyActor::RequestData()
{
    // Create a weak pointer to 'this' for safe callback capture
    TWeakObjectPtr<AMyActor> WeakThis(this);

    // Store the request handle for potential cancellation
    ActiveRequest = UMyApiService::SendRequest(Settings,
        FOnMyApiResponse::CreateLambda([WeakThis](/*...response params...*/)
        {
            // CRITICAL: Always check if the object is still valid before proceeding.
            if (!WeakThis.IsValid()) return;

            AMyActor* StrongThis = WeakThis.Get();
            StrongThis->HandleResponse(/*...response params...*/);
        })
    );
}
```

## 5. Using New AI Models Instantly

AI providers release new models frequently. You don't have to wait for a plugin update to use them. All settings objects
allow you to specify a model name as a simple string, which will always override the enum selection.

#### Blueprint Example

In the "Make..." node for your settings, simply type the new model's name (e.g., "gpt-5-turbo-2025") into
the `Model (String)` or `Custom Model Name` input field.

<div class="image-wrapper">
    <figure>
        <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1751930092/9f333958-9150-4d63-ad82-2e24443ca5c9.webp" alt="Using a custom model in Blueprint" style="width: 100%;">
        <figcaption class="image-caption">
        The string input overrides the enum dropdown, allowing immediate use of new models.
        </figcaption>
    </figure>
</div>

#### C++ Example

In C++, set the model enum to `Custom` and provide the name in the `CustomModelName` property.

```cpp
#include "Models/OpenAI/GenOAIChat.h"

void AMyActor::SendCustomModelRequest()
{
    FGenOAIChatSettings ChatSettings;
    ChatSettings.Model = EOpenAIChatModel::Custom;
    ChatSettings.CustomModelName = TEXT("gpt-5-turbo-2025");

    // ... complete the rest of the request
}
```

---

## 6. Additional Notes

- **HTTP Timeouts:** For complex reasoning models that may take longer, consider increasing timeout values
  in `Config/DefaultEngine.ini`.
```ini
[HTTP]
HttpConnectionTimeout=180
HttpReceiveTimeout=180
```
- **Audio Formats (TTS):** The Text-to-Speech feature outputs raw PCM audio data. The plugin includes Blueprint
  utilities to convert this data into a playable `USoundWave` asset at runtime.
- **Platform Compatibility:** The plugin uses standard engine modules (HTTP, Json) for maximum cross-platform
  compatibility.
- **Dependencies:** The plugin relies only on core Unreal Engine modules, ensuring a clean and stable integration
  without external third-party libraries.