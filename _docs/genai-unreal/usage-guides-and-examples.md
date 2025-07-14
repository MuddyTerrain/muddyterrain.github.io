---
layout: documentation
title: Usage Guides and Examples
permalink: /docs/genai-unreal/usage-guides-and-examples/
nav_order: 7
---

This section provides practical examples and resources to help you get started with the GenAI for Unreal plugin. Whether you prefer dissecting pre-built examples or following step-by-step guides, you'll find what you need here.

---

## Learning Resources

We offer several resources to help you learn and master the plugin, catering to different needs and skill levels.

### 1. Examples Included with the Plugin

Directly within the plugin, you can find fundamental examples to get you started:

-   **Blueprint Content:** Basic example Blueprints are located in the plugin's content directory at `Engine/Plugins/GenAIForUnrealContent/ExampleBlueprints/`. You may need to enable "Show Plugin Content" in your Content Drawer's view options to see this folder.
-   **C++ Module:** For C++ developers, the plugin includes a dedicated module named `GenAIExamples` containing clean, practical implementation samples for various features.

<div class="image-wrapper" style="max-width: 80%;">
    <figure>
    <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1751299058/d2243d10-ecd0-401c-93c8-524916a096aa.webp" alt="Blueprint Examples" style="width: 100%;">
    <figcaption class="image-caption">Blueprint examples can be found in the plugin content.</figcaption>
    </figure>
</div>

### 2. Blueprint-Only Example Project

For a more comprehensive set of examples, we provide a standalone Blueprint project. This project demonstrates more complex use cases and is the best place to see the plugin in action.

-   **Download Link:** [**GenAI for Unreal - Example Project**](https://muddyterrain.com/t/genai-example)
-   **Future Updates:** This project will be regularly updated with more advanced implementations, including examples with UMG, runtime audio recording, and more.

For detailed explanations of each feature, you can always refer to this **[full documentation](/docs/genai-unreal/)**.

### 3. "Become Human" - Upcoming Optional Game Template (Paid)

Coming soon to the Fab Marketplace is **"Become Human,"** a complete, game-ready template built with the GenAI for Unreal plugin.
<div class="image-wrapper" style="max-width: 80%;">
    <figure>
    <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_70/v1751282014/BeFunky-collage232_logwgw.webp" alt="Become Human Game Template" style="width: 100%;">
    <figcaption class="image-caption">Become Human - A complete game template for GenAI for Unreal.</figcaption>
    </figure>
</div>

This project will serve as the ultimate learning resource and a powerful starting point for your own AI-driven games. It will feature a fully implemented, conversational NPC in a small, interactive environment, showcasing advanced techniques for dialogue management, real-time streaming, and dynamic character interaction. Keep an eye on the marketplace for its release!

---

## Quick Walkthroughs

Here are some quick, copy-paste-ready examples to demonstrate the core API patterns.

### Blueprint Usage Walkthrough

All asynchronous Blueprint nodes share a similar structure. Here is a walkthrough for a multimodal (text and image) chat request with OpenAI.

<img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1751299301/86187345-e044-4862-9acd-0c078ade41ab.webp" alt="Blueprint Node Example">

1.  **Request OpenAI Chat Completion:** This is the main latent node that initiates the API call.
2.  **Settings:** Use a **"Make..."** node (e.g., `Make Gen OpenAI Chat Settings`) to configure the request. This is where you set the model, temperature, max tokens, and the user messages.
3.  **OnComplete (Event):** This event pin fires as soon as a response is received from the server. It provides the final `Response` string, an `Error Message` if something went wrong, and a `Success` boolean for easy branching.

### C++ Usage Walkthrough (OpenAI Chat)

The C++ workflow mirrors the Blueprint logic, using a settings struct and a completion delegate.

```cpp
#include "Models/OpenAI/GenOAIChat.h"
#include "Data/OpenAI/GenOAIChatStructs.h" // Required for FGenOAIChatSettings and FGenChatMessage

void AMyActor::SendSimpleChatRequest()
{
    // 1. Configure the request settings
    FGenOAIChatSettings ChatSettings;
    ChatSettings.Model = EOpenAIChatModel::GPT_4o;
    ChatSettings.MaxTokens = 150;
    ChatSettings.Temperature = 0.7f;
    
    // 2. Create the message payload
    TArray<FGenChatMessage> Messages;
    Messages.Add(FGenChatMessage{EGenChatRole::User, TEXT("Tell me a short story about a robot who discovers music.")});
    
    // 3. Create a weak pointer for a safe callback
    TWeakObjectPtr<AMyActor> WeakThis(this);
    
    // 4. Send the request with a lambda for the callback
    UGenOAIChat::SendChatRequest(ChatSettings, Messages,
        FOnChatCompletionResponse::CreateLambda([WeakThis](const FString& Response, const FString& Error, bool bSuccess)
        {
            // Always check if the calling object is still valid
            if (!WeakThis.IsValid()) return;
            
            AMyActor* StrongThis = WeakThis.Get();
            if (bSuccess)
            {
                // Process the successful response
                StrongThis->OnChatResponseReceived(Response);
            }
            else
            {
                // Handle the error
                StrongThis->OnChatError(Error);
            }
        })
    );
}
```
---

## Find More Examples

Ready to dive deeper? The guides below provide detailed walkthroughs and code examples for specific features.

1.  **[Building Long Conversations](/docs/genai-unreal/building-long-conversations/)** 📝 — Learn how to manage chat history and context.
2.  **[Streaming](/docs/genai-unreal/streaming/)** ⚡️ — Implement real-time, typewriter-style responses.
3.  **[Structured Output](/docs/genai-unreal/structured-output/)** 🗂️ — Force AI responses into a reliable JSON format.
4.  **[Text-to-Speech & Transcription](/docs/genai-unreal/text-to-speech-and-transcription/)** 🔊 — Bring your characters to life with voice.
5.  **[Image Generation](/docs/genai-unreal/image-generation/)** 🎨 — Create dynamic images and textures from prompts.
6.  **[Realtime Conversational AI](/docs/genai-unreal/realtime-conversational-ai/)** 🎭 — Combine all features for advanced, interactive NPCs.