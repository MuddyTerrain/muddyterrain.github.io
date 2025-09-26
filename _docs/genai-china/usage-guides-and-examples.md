---
layout: documentation
title: Usage Guides & Examples
permalink: /docs/genai-china/usage-guides-and-examples/
nav_order: 5
---

This section provides practical examples for using the Gen AI China plugin.

---
## Blueprint Usage Walkthrough

All asynchronous Blueprint nodes share a similar structure. Use the **"Make..." node with the fire logo** to select models from a convenient dropdown list.

<div>
    <figure>
        <img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1756927016/495af904-bfdb-47fe-9292-c7b306628526.webp" alt="Quick Start Blueprint Example" style="width: 100%;">
        <figcaption class="image-caption">
        A simple setup for testing chat completion with an Alibaba model.
        </figcaption>
    </figure>
</div>

1.  **Request Alibaba Chat Completion:** The main latent node that initiates the API call.
2.  **Settings:** Use the **`Make GenAI Alibaba Chat Settings`** node (with the fire logo) to get a dropdown list of supported models.
3.  **OnComplete (Event):** This event pin fires when a response is received. It provides the final `Response`, an `Error Message`, and a `Success` boolean.

---
## C++ Usage Walkthrough (Alibaba Chat)

The C++ workflow uses a settings struct and a completion delegate.

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
    
    // 4. Send the request
    UGenZhAlibabaChat::SendChatRequest(ChatSettings,
        FOnAlibabaChatCompletionResponse::CreateLambda([WeakThis](const FString& Response, const FString& Error, bool bSuccess)
        {
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
