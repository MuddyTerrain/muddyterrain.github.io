---
layout: documentation
title: Streaming
permalink: /docs/genai-unreal/streaming/
nav_order: 9
---

## How It Works

Streaming allows you to receive AI responses in real-time as they're generated, rather than waiting for the complete response. This creates a more interactive experience where users can see text appearing progressively, similar to ChatGPT's interface.

## Blueprint Implementation

1. Use the streaming version of chat completion nodes
2. Connect to the `OnStreamUpdate` event to receive partial responses
3. Connect to `OnComplete` for the final result
4. Optionally connect to `OnError` for error handling

<div>
    <figure>
        <img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1751931357/39887254-a015-456b-a566-d964e2560f4b.webp" alt="Blueprint streaming example" style="width: 100%;">
        <figcaption class="image-caption">
        Blueprint streaming implementation example
        </figcaption>
    </figure>
</div>

The streaming nodes provide these events:
- **OnStreamUpdate**: Fires for each chunk of text received
- **OnComplete**: Fires when streaming is finished with the complete response
- **OnError**: Fires if an error occurs during streaming

## C++ Implementation

```cpp
void AMyActor::SendStreamingChatRequest()
{
    FGenOAIChatSettings ChatSettings;
    ChatSettings.Model = EOpenAIChatModel::GPT_4o;
    ChatSettings.bStream = true; // Enable streaming
    
    TArray<FGenChatMessage> Messages;
    Messages.Add(FGenChatMessage{EGenChatRole::User, TEXT("Write a short story about a robot.")});
    
    TWeakObjectPtr<AMyActor> WeakThis(this);
    
    // Streaming callback for partial responses
    auto StreamCallback = FOnChatStreamResponse::CreateLambda([WeakThis](const FString& PartialResponse)
    {
        if (!WeakThis.IsValid()) return;
        WeakThis->OnStreamUpdate(PartialResponse);
    });
    
    // Completion callback for final result
    auto CompletionCallback = FOnChatCompletionResponse::CreateLambda([WeakThis](const FString& CompleteResponse, const FString& Error, bool bSuccess)
    {
        if (!WeakThis.IsValid()) return;
        WeakThis->OnStreamComplete(CompleteResponse, Error, bSuccess);
    });
    
    UGenOAIChat::SendStreamingChatRequest(ChatSettings, Messages, StreamCallback, CompletionCallback);
}
```

## Best Practices

1. **UI Updates**: Use streaming for better user experience in chat interfaces
2. **Error Handling**: Always implement error callbacks for robust streaming
3. **Performance**: Be mindful of UI update frequency with very fast streams
4. **Cancellation**: Implement request cancellation for long streaming operations
5. **Buffer Management**: Consider buffering partial responses for smoother display
