---
layout: documentation
title: Core Concepts
permalink: /docs/genai-china/core-concepts/
nav_order: 6
---

This section covers the fundamental design principles of the Gen AI China plugin. Understanding these concepts will help you use the plugin effectively and avoid common pitfalls.

---

## 1. Finding and Using Plugin Nodes

The plugin follows a consistent naming convention to make its features easily discoverable.

#### In Blueprints

All asynchronous Blueprint nodes start with **"Request"** followed by the provider and the service. You can find any function by simply searching for this pattern in the Blueprint context menu.

- `Request Alibaba Chat Completion`
- `Request Bytedance Image Generation`
- `Request MoonshotAI Chat Stream`

#### In C++

The static C++ functions follow a similar pattern, typically starting with **"Send"**.

- `UGenZhAlibabaChat::SendChatRequest(...)`
- `UGenZhBytedanceImageGeneration::SendImageGenerationRequest(...)`
- `UGenZhMoonshotAIChatStream::SendStreamChatRequest(...)`

---

## 2. Unified Settings Structs & Model Selection

Every API request is configured using a dedicated **Settings struct** (e.g., `FGenZhAlibabaChatSettings`). In Blueprints, you use a **"Make..."** node to create these structs. To make model selection easy and reliable, the plugin uses a powerful feature of the Unreal Editor.

### The Model Dropdown

The **"Make..."** nodes for settings feature a dropdown menu that is dynamically populated with all the known supported models for that provider and service. This is possible thanks to an internal **Model Registry** that reads from a list of official models. This is the easiest and recommended way to select a model, as it prevents typos and ensures you are using a valid model ID.

<div class="image-wrapper">
    <figure>
        <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1756927016/495af904-bfdb-47fe-9292-c7b306628526.webp" alt="Advanced Make Node with Dropdown" style="width: 100%;">
        <figcaption class="image-caption">
            The "Make..." node for settings provides a convenient dropdown for model selection.
        </figcaption>
    </figure>
</div>

### Custom Model String

For maximum flexibility, you can also type a model's exact API ID directly into the `Model` input field on the struct. This is useful for:
- Using a brand-new model that hasn't been added to the dropdown yet.
- Dynamically selecting a model at runtime based on a variable.

> **Important:** The string input will always override the enum dropdown if both are set.

---

## 3. Asynchronous by Design

All API calls in this plugin are **asynchronous** (non-blocking). This is essential to prevent your game from freezing while it waits for a response from a web server. The workflow is always:

1. You call a function to send a request.
2. You provide a **callback delegate** (in C++) or connect to an **event pin** (in Blueprints).
3. Your game continues running without interruption.
4. When the response arrives, your callback function or event is executed with the result.

---

## 4. Automatic Lifetime Management

A critical challenge in Unreal with asynchronous operations is **Object Lifetime**. If an Actor is destroyed while a request is still in-flight, the callback can try to access invalid memory, causing a crash. The plugin solves this automatically for you.

#### Blueprint Solution: Built-in Safety

Blueprint nodes are built on `UCancellableAsyncAction` and are inherently safe. They use weak pointers to track the calling object and will automatically skip the callback if the object has been destroyed.

#### C++ Solution: Developer-Managed Safety

When calling the static C++ functions, you are responsible for managing lifetime. The required pattern is to capture a `TWeakObjectPtr` in your callback lambda.

```cpp
// Essential C++ safety pattern
void AMyActor::RequestData()
{
    TWeakObjectPtr<AMyActor> WeakThis(this);
    UGenZhAlibabaChat::SendChatRequest(Settings,
        FOnAlibabaChatCompletionResponse::CreateLambda([WeakThis](/*...params...*/)
        {
            // CRITICAL: Always check if the object is still valid.
            if (!WeakThis.IsValid()) return;
            WeakThis->HandleResponse(/*...params...*/);
        })
    );
}
```

---

## 5. Extended Debug Mode

To help with troubleshooting, the plugin includes an **Extended Logging Mode**. When enabled, every API request and response will be printed to the Unreal output log.

- **What it Logs:** The full request body (including headers and parameters) and the full response from the server.
- **Security:** To prevent log spam and protect data, any `base64` encoded strings (typically used for images) will be truncated in the log output.
- **How to Enable:**
    1. Go to **Project Settings > Plugins > GenAI Chinese Models**.
    2. Find the **"Enable Extended Logging Mode"** checkbox and enable it.

This is an invaluable tool for debugging issues with your API calls without needing external network monitoring tools.