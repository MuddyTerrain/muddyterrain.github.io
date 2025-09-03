---
layout: documentation
title: Example Projects and Guides
permalink: /docs/genai-unreal/usage-guides-and-examples/
nav_order: 7
---

This section provides access to our comprehensive example projects, which are the best resources for learning how to use the GenAI for Unreal plugin effectively.

---

## The New Example Projects

To provide the best learning experience, we have moved away from small, in-plugin examples to a complete, standalone suite of projects. Thanks to a new automated build system, we now provide dedicated example projects for each supported version of Unreal Engine.

<div style="padding: 10px 15px; background-color: #fffbe6; border-left: 4px solid #ffc107; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold; color: #856404;">Important Requirements</p>
  <p style="margin: 5px 0 0 0; color: #856404;">Please note that these example projects require <strong><a href="/t/genai-fab" target="_blank" rel="noopener noreferrer">GenAI for Unreal plugin</a> version 1.3 or higher</strong> to function correctly.</p>
  <p style="margin: 5px 0 0 0; color: #856404;">The plugin must be installed to your engine from the Fab store before opening these projects. Without it, the Blueprint project will have errors, and the C++ project will fail to compile or open.</p>
</div>

## 📥 Download Example Projects
<p>Projects are available for each supported Unreal Engine version. Please download the one that matches your engine. All links point to Google Drive.</p>

<table class="download-table">
  <thead>
    <tr>
      <th>Engine Version</th>
      <th>C++ Project</th>
      <th>Blueprint-Only Project</th>
    </tr>
  </thead>
  <tbody>
    {% for project in site.data.settings.example_projects %}
    <tr>
      <td>Unreal Engine {{ project.version }}</td>
      <td><a href="{{ project.cpp_link }}" target="_blank" rel="noopener noreferrer">GenAIExample_UE{{ project.version }}_CPP.zip</a></td>
      <td><a href="{{ project.bp_link }}" target="_blank" rel="noopener noreferrer">GenAIExample_UE{{ project.version }}_BP.zip</a></td>
    </tr>
    {% endfor %}
  </tbody>
</table>

### What's Inside the Projects?

The new example projects are packed with features and are designed to be a practical starting point for your own integrations.

-   **Interactive UMG Widgets:** Explore pre-built UI for:
    -   **Chat:** A complete chat interface demonstrating standard, streaming, and multimodal requests.
    -   **Image Generation:** A simple UI to write a prompt and generate an image.
    -   **TTS & Transcription:** A panel to test text-to-speech and audio transcription.
    -   **Model Listing:** A demonstration of the new "Get All Models" feature to dynamically populate a dropdown of available models.
-   **Simple Actor Examples:** For quick, non-UI testing, the Blueprint project also includes simple actors you can drag into your level. These actors execute a single function on `BeginPlay` and print the results to the log and the screen.
-   **Best Practices:** The C++ project demonstrates essential patterns for safety and efficiency, such as using weak pointers in asynchronous callbacks.

<div class="image-wrapper">
    <figure>
    <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1756928458/Screenshot_2025-09-02_103410_iesgph.webp" alt="New Example Project UI" style="width: 60%;">
    <figcaption class="image-caption">The new example projects feature interactive widgets to demonstrate core features.</figcaption>
    </figure>
</div>

### "Become Human" - Upcoming Optional Game Template (Paid)

Coming soon to the Fab Marketplace is **"Become Human,"** a complete, game-ready template built with the GenAI for Unreal plugin.
<div class="image-wrapper" style="max-width: 80%;">
    <figure>
    <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_50/v1751282014/BeFunky-collage232_logwgw.webp" alt="Become Human Game Template" style="width: 100%;">
    <figcaption class="image-caption">Become Human - A complete game template for GenAI for Unreal.</figcaption>
    </figure>
</div>

This project will serve as the ultimate learning resource and a powerful starting point for your own AI-driven games. It will feature a fully implemented, conversational NPC in a small, interactive environment, showcasing advanced techniques for dialogue management, real-time streaming, and dynamic character interaction. Keep an eye on the marketplace for its release!

---

## Quick Walkthroughs

Here are some quick, copy-paste-ready examples to demonstrate the core API patterns.

### Blueprint Usage Walkthrough

All asynchronous Blueprint nodes share a similar structure. Note the new **"Make..." node with the fire logo**, which allows you to select models from a convenient dropdown list.

<div>
    <figure>
        <img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1756927016/495af904-bfdb-47fe-9292-c7b306628526.webp" alt="Quick Start Blueprint Example" style="width: 100%;">
        <figcaption class="image-caption">
        A simple setup for testing chat completion.
        </figcaption>
    </figure>
</div>

1.  **Request OpenAI Chat Completion:** The main latent node that initiates the API call.
2.  **Settings:** Use the **`Make Gen OpenAI Chat Settings (Advanced)`** node (with the fire logo) to get a dropdown list of supported models. You can still use the standard `Make` node if you need to pass in a custom model name as a string.
3.  **OnComplete (Event):** This event pin fires when a response is received. It provides the final `Response`, an `Error Message`, and a `Success` boolean.

### C++ Usage Walkthrough (OpenAI Chat)

The C++ workflow is clean and powerful, using a settings struct and a completion delegate.

```cpp
#include "Models/OpenAI/GenOAIChat.h"
#include "Data/OpenAI/GenOAIChatStructs.h" // Required for settings and message structs

void AMyActor::SendSimpleChatRequest()
{
    // 1. Configure the request settings
    FGenOAIChatSettings ChatSettings;
    ChatSettings.Model = EOpenAIChatModel::GPT_4o; // Select model from the enum
    ChatSettings.MaxTokens = 150;
    
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
            
            if (bSuccess)
            {
                // Process the successful response
                WeakThis->OnChatResponseReceived(Response);
            }
            else
            {
                // Handle the error
                WeakThis->OnChatError(Error);
            }
        })
    );
}
```
---

## Find More Examples

Ready to dive deeper? The guides below provide detailed walkthroughs for specific features, all of which are demonstrated in the new example projects.

1.  **[Building Long Conversations](/docs/genai-unreal/building-long-conversations/)** 📝
2.  **[Streaming](/docs/genai-unreal/streaming/)** ⚡️
3.  **[Structured Output](/docs/genai-unreal/structured-output/)** 🗂️
4.  **[Text-to-Speech & Transcription](/docs/genai-unreal/text-to-speech-and-transcription/)** 🔊
5.  **[Image Generation & Editing](/docs/genai-unreal/image-generation/)** 🎨
6.  **[Realtime Conversational AI](/docs/genai-unreal/realtime-conversational-ai/)** 🎭