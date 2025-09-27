---
layout: documentation
title: Usage Guides & Examples
permalink: /docs/genai-china/usage-guides-and-examples/
nav_order: 5
---

This section provides access to our comprehensive example project, which is the best resource for learning how to use the GenAI China plugin effectively.

---

## 📥 Download Example Project
<p>A Blueprint-only project is available for each supported Unreal Engine version. Please download the one that matches your engine. All links point to Google Drive.</p>

<div style="padding: 10px 15px; background-color: #fffbe6; border-left: 4px solid #ffc107; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold; color: #856404;">Important Requirements</p>
  <p style="margin: 5px 0 0 0; color: #856404;">The plugin must be installed to your engine from the Fab store before opening these projects. Without it, the Blueprint project will have errors and fail to open.</p>
</div>

<table class="download-table">
  <thead>
    <tr>
      <th>Engine Version</th>
      <th>Blueprint-Only Project</th>
    </tr>
  </thead>
  <tbody>
    {% for project in site.data.settings.example_projects_china %}
    <tr>
      <td>Unreal Engine {{ project.version }}</td>
      <td><a href="{{ project.bp_link }}" target="_blank" rel="noopener noreferrer">GenAIExample_UE{{ project.version }}_BP_China.zip</a></td>
    </tr>
    {% endfor %}
  </tbody>
</table>

## Blueprint Usage Walkthrough

All asynchronous Blueprint nodes share a similar structure. Use the **"Make..." node** to configure the settings for a request. For model selection, these nodes provide a convenient dropdown list of all supported models for that provider and service.

<div>
    <figure>
        <img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1756927016/495af9t4hyy/image/upload/q_60/v1756927016/495af904-bfdb-47fe-9292-c7b306628526.webp" alt="Quick Start Blueprint Example" style="width: 100%;">
        <figcaption class="image-caption">
        A simple setup for testing chat completion with an Alibaba model.
        </figcaption>
    </figure>
</div>

1.  **Request Alibaba Chat Completion:** The main latent node that initiates the API call.
2.  **Settings:** Use the **`Make GenAI Alibaba Chat Settings`** node to get a dropdown list of supported models.
3.  **OnComplete (Event):** This event pin fires when a response is received. It provides the final `Response`, an `Error Message`, and a `Success` boolean.

---
## C++ Usage Walkthrough (Alibaba Chat)

The C++ workflow is clean and powerful, using a settings struct and a completion delegate. This pattern is consistent across all providers in the plugin.

```cpp
#include "Models/Alibaba/GenZhAlibabaChat.h"
#include "Data/Alibaba/GenZhAlibabaChatStructs.h"
#include "Data/GenZhMessageStructs.h"

void AMyActor::SendSimpleChatRequest()
{
    // 1. Configure the request settings
    FGenZhAlibabaChatSettings ChatSettings;
    ChatSettings.Model = TEXT("qwen-plus");
    
    // 2. Create the message payload
    TArray<FGenZhChatMessage> Messages;
    FGenZhChatMessage Message;
    Message.Role = TEXT("user");
    Message.Content.Add(FGenZhMessageContent::FromText(TEXT("Tell me a short story.")));
    Messages.Add(Message);
    ChatSettings.Messages = Messages;

    // 3. Create a weak pointer for a safe callback
    TWeakObjectPtr<AMyActor> WeakThis(this);
    
    // 4. Send the request with a lambda for the callback
    UGenZhAlibabaChat::SendChatRequest(ChatSettings,
        FOnAlibabaChatCompletionResponse::CreateLambda([WeakThis](const FString& Response, const FString& Error, bool bSuccess)
        {
            // Always check if the calling object is still valid
            if (!WeakThis.IsValid()) return;
            
            if (bSuccess)
            {
                // Process the successful response
            }
            else
            {
                // Handle the error
            }
        })
    );
}
```

---

## Find More Examples

Ready to dive deeper? The guides below provide detailed walkthroughs for specific features.

1.  **[Building Long Conversations](/docs/genai-china/building-long-conversations/)** 📝
2.  **[Streaming](/docs/genai-china/streaming/)** ⚡️
3.  **[Image Generation](/docs/genai-china/image-generation/)** 🎨
4.  **[Text-to-Speech](/docs/genai-china/text-to-speech/)** 🔊