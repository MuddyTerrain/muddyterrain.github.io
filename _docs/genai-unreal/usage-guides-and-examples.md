---
layout: documentation
title: Usage Guides and Examples
permalink: /docs/genai-unreal/usage-guides-and-examples/
nav_order: 7
---

## Finding the Example Assets

- **Blueprint Examples:** Example blueprints can be found either inside the plugin's content folder at `Engine/Plugins/GenAIForUnrealContent/ExampleBlueprints/`, or by downloading the example project [here](https://drive.google.com/file/d/1m58UpTRafxiEc836-tG1-GsYZ8NIuoYH/view?usp=sharing)
    <div class="image-wrapper" style="max-width: 80%;">
        <figure>
        <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1751299058/d2243d10-ecd0-401c-93c8-524916a096aa.webp" alt="Blueprint Examples" style="width: 100%;">
        <figcaption class="image-caption">Blueprint Examples</figcaption>
        </figure>
    </div>

- **C++ Examples:** The plugin includes a separate module called `GenAIExamples` with C++ implementation samples

## Blueprint Usage Walkthrough

All Blueprint nodes are asynchronous (latent) and have a similar structure. Here is a walkthrough for an OpenAI multimodal chat request.

<img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1751299301/86187345-e044-4862-9acd-0c078ade41ab.webp" alt="Blueprint Node Example">

1. **Request OpenAI Chat Completion:** This is the main node that initiates the API call.
2. **Settings:** Use a "Make" node (e.g., `Make Gen OpenAI Chat Settings`) to configure the request. Here you set the model, temperature, max tokens, and importantly, the messages.
3. **OnComplete (Event):** This event pin fires as soon as a response is received from the server. It provides the final Response string, an Error Message if something went wrong, and a `Success` boolean.

> **Blueprint Pattern**: All async nodes follow a consistent pattern with Settings input, OnComplete event, and proper error handling outputs.

## C++ Usage Walkthrough (OpenAI Chat)

```cpp
#include "Models/OpenAI/GenOAIChat.h"

void AMyActor::SendChatRequest()
{
    FGenOAIChatSettings ChatSettings;
    ChatSettings.Model = EOpenAIChatModel::GPT_4o;
    ChatSettings.MaxTokens = 150;
    ChatSettings.Temperature = 0.7f;
    
    TArray<FGenChatMessage> Messages;
    Messages.Add(FGenChatMessage{EGenChatRole::User, TEXT("Tell me about Unreal Engine")});
    
    TWeakObjectPtr<AMyActor> WeakThis(this);
    
    UGenOAIChat::SendChatRequest(ChatSettings, Messages,
        FOnChatCompletionResponse::CreateLambda([WeakThis](const FString& Response, const FString& Error, bool bSuccess)
        {
            if (!WeakThis.IsValid()) return;
            
            AMyActor* StrongThis = WeakThis.Get();
            if (bSuccess)
            {
                StrongThis->OnChatResponseReceived(Response);
            }
            else
            {
                StrongThis->OnChatError(Error);
            }
        })
    );
}
```
