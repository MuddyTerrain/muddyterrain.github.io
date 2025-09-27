---
layout: documentation
title: Streaming
permalink: /docs/genai-china/streaming/
nav_order: 8
---

Streaming is a powerful feature that allows you to receive AI responses in real-time, word-by-word, as they are generated. This creates a much more interactive and engaging user experience, similar to the typewriter effect seen in modern chat applications.

#### Currently Supported Providers
- Alibaba (Qwen)
- Bytedance
- Moonshot AI (Kimi)

---

## How It Works

Without streaming, you send a request and wait for the entire response to be generated before it's sent back. This can lead to noticeable delays, especially for longer responses.

With streaming, the connection to the AI provider remains open. The server sends back small chunks of data (called "deltas") as soon as they are generated. Your application is responsible for handling these chunks as they arrive—for example, by appending them to a text block in your UI.

---

## Blueprint Implementation

The Blueprint implementation is handled by dedicated latent nodes that manage the streaming connection for you.

1.  Find the **"Request... Stream"** node for your chosen provider (e.g., `Request Alibaba Chat Stream`).
2.  Provide the necessary `Settings` and `Messages`, just like a standard request.
3.  The node exposes a single **OnEvent** pin that fires for every event in the stream's lifecycle. You should check the `EventType` from the event struct to determine how to handle it.
    * **On Stream Update:** The `ResponseOutputTextDelta` event fires for every chunk of text received. Use this to append the `Delta` content to your UI.
    * **On Complete:** The `ResponseCompleted` event fires once the stream has successfully finished.
    * **On Error:** The `Error` event fires if a network or API error occurs.

<div>
    <figure>
        <img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1751931357/39887254-a015-456b-a566-d964e2560f4b.webp" alt="Blueprint streaming example" style="width: 100%;">
        <figcaption class="image-caption">
        A typical Blueprint setup for handling a streaming chat response.
        </figcaption>
    </figure>
</div>

---

## C++ Implementation

The C++ implementation offers more fine-grained control and follows a similar event-driven pattern. You use the static `SendStreamChatRequest` function from the relevant provider's stream class.

This function requires a callback delegate that will be invoked for every event in the stream's lifecycle (update, completion, error).

```cpp
// In your header file (e.g., AMyStreamingActor.h)
#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "Models/Alibaba/GenZhAlibabaChatStream.h" // Include the stream class
#include "AMyStreamingActor.generated.h"

UCLASS()
class YOURGAME_API AMyStreamingActor : public AActor
{
    GENERATED_BODY()

public:
    UFUNCTION(BlueprintCallable)
    void SendStreamingRequest(const FString& Prompt);

private:
    // This function will handle all events from the stream
    void OnStreamingEvent(const FGenZhAlibabaStreamEvent& StreamEvent);

    // Store the active request to allow for cancellation
    TSharedPtr<IHttpRequest> ActiveStreamingRequest;
};

// In your source file (e.g., AMyStreamingActor.cpp)
#include "Data/Alibaba/GenZhAlibabaChatStructs.h"
#include "Data/GenZhMessageStructs.h"

void AMyStreamingActor::SendStreamingRequest(const FString& Prompt)
{
    FGenZhAlibabaChatSettings ChatSettings;
    ChatSettings.Model = TEXT("qwen-plus");
    
    FGenZhChatMessage Message;
    Message.Role = TEXT("user");
    Message.Content.Add(FGenZhMessageContent::FromText(Prompt));
    ChatSettings.Messages.Add(Message);
    
    ChatSettings.bStream = true;

    // The SendStreamChatRequest function takes a single delegate that handles all event types.
    // It returns the request handle, which you should store for cancellation.
    ActiveStreamingRequest = UGenZhAlibabaChatStream::SendStreamChatRequest(
        ChatSettings,
        FOnAlibabaChatStreamResponse::CreateUObject(this, &AMyStreamingActor::OnStreamingEvent)
    );
}

void AMyStreamingActor::OnStreamingEvent(const FGenZhAlibabaStreamEvent& StreamEvent)
{
    if (!StreamEvent.bSuccess)
    {
        UE_LOG(LogTemp, Error, TEXT("Streaming Error: %s"), *StreamEvent.ErrorMessage);
        ActiveStreamingRequest.Reset(); // Clean up on error
        return;
    }

    switch (StreamEvent.EventType)
    {
        case EGenZhAlibabaStreamEventType::ResponseOutputTextDelta:
            // This is a new chunk of text. Append it to your UI.
            UE_LOG(LogTemp, Log, TEXT("Delta: %s"), *StreamEvent.DeltaContent);
            // MyUITextBlock->SetText(MyUITextBlock->GetText().ToString() + StreamEvent.DeltaContent);
            break;

        case EGenZhAlibabaStreamEventType::ResponseCompleted:
            // The stream has finished successfully.
            UE_LOG(LogTemp, Log, TEXT("Stream Complete!"));
            ActiveStreamingRequest.Reset(); // Clean up the request handle
            break;
    }
}

// Don't forget to cancel the request if the actor is destroyed!
void AMyStreamingActor::EndPlay(const EEndPlayReason::Type EndPlayReason)
{
    if (ActiveStreamingRequest.IsValid() && ActiveStreamingRequest->GetStatus() == EHttpRequestStatus::Processing)
    {
        ActiveStreamingRequest->CancelRequest();
    }
    ActiveStreamingRequest.Reset();
    Super::EndPlay(EndPlayReason);
}
```

---

## Best Practices

1.  **UI Performance:** Appending text to a UMG `UTextBlock` every frame can be inefficient. For very fast streams, consider buffering the deltas and updating the UI at a fixed interval (e.g., every 0.1 seconds) for smoother performance.
2.  **Graceful Cancellation:** Always give the user a way to cancel a long streaming response. Store the `IHttpRequest` handle (as shown in the C++ example) and call `CancelRequest()` when needed.
3.  **Error Handling:** Network connections can be unreliable. Always implement logic in your `OnError` or `!bSuccess` paths to inform the user that the stream failed and allow them to retry.
4.  **Buffer and Reconstruct:** The `OnEvent` gives you the raw `Delta`. You should maintain a separate `FString` variable to accumulate these deltas. This gives you the complete message-so-far at any point during the stream.