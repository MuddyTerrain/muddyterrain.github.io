---
layout: documentation
title: Building Long Conversations
permalink: /docs/genai-unreal/building-long-conversations/
nav_order: 8
---

Creating believable, stateful conversations is a cornerstone of compelling AI characters. This guide covers the principles and techniques for managing conversation history, ensuring your NPCs can remember past interactions and respond intelligently.

<div class="image-wrapper">
    <figure>
        <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1752498478/968eee3c-9dc3-46e8-8508-f1aebe4ce8cb.webp" alt="Conversation Example" style="width: 100%;">
        <figcaption class="image-caption">
           
        </figcaption>
    </figure>
</div>

---

## The Core Concept: Overcoming Statelessness

By default, large language models are **stateless**. This means they have no memory of previous interactions. Each API request is treated as an isolated event. To create the illusion of memory, you must manually send the entire conversation history with every new request.

The process looks like this:

1.  **Initial Prompt:** Start the conversation, usually with a hidden "system" message that defines the AI's personality and a "user" message from the player.
2.  **Send & Receive:** Send this initial history to the API and get a response.
3.  **Append History:** Add the AI's response (as an "assistant" message) to your history array.
4.  **Repeat:** For the next turn, add the new user message to the history and send the *entire, updated array* back to the API.

This growing array of messages is called the **conversation context**.

The new example projects include a complete, interactive chat widget that demonstrates how to manage conversation history effectively. We highly recommend using it as a reference.

---

This growing array of messages is called the **conversation context**.

### Multimodal Conversations

The `Gen Chat Message` struct also supports multimodal inputs. For providers like Google Gemini and OpenAI, you can include image data directly in a message alongside text. This allows you to create AI that can "see" and comment on in-game screenshots or other visual information. This is demonstrated in the new example project's chat widget.

---

## Blueprint Implementation

In Blueprints, you manage the conversation context using an array of the `Gen Chat Message` struct.

1.  **Create a History Variable:** In your Blueprint (e.g., an Actor or Actor Component), create a new variable. Set its type to `Gen Chat Message` and make it an **Array**. Let's name it `ConversationHistory`.

2.  **Build and Send the Request:** When the player sends a message, you add it to the `ConversationHistory` array and then feed the entire array into the `Request Chat Completion` node.

3.  **Update History with the Response:** On the `OnComplete` event, you take the response message, create a new `Gen Chat Message` with the `Assistant` role, and add it to your `ConversationHistory` array.

---

## C++ Implementation

The C++ implementation follows the same logic, managing a `TArray<FGenChatMessage>`.

```cpp
// In your AConversationalNpc.h
#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "Data/GenAIChatStructs.h" // Needed for FGenChatMessage
#include "AConversationalNpc.generated.h"

UCLASS()
class YOURGAME_API AConversationalNpc : public AActor
{
    GENERATED_BODY()

public:
    // Call this to start the conversation with a defining system prompt
    UFUNCTION(BlueprintCallable)
    void InitializeConversation(const FString& SystemPrompt);

    // Call this when the player speaks to the NPC
    UFUNCTION(BlueprintCallable)
    void HandlePlayerMessage(const FString& PlayerInput);

private:
    // Stores the entire conversation history
    TArray<FGenChatMessage> ConversationHistory;

    void SendChatRequest();
    void OnAIResponseReceived
            (const FString& Response, const FString& Error, bool bSuccess);
};

// In your AConversationalNpc.cpp
#include "Models/OpenAI/GenOAIChat.h" // Or the provider you are using

void AConversationalNpc::InitializeConversation(const FString& SystemPrompt)
{
    ConversationHistory.Empty();
    ConversationHistory.Add(FGenChatMessage{EGenChatRole::System, SystemPrompt});
}

void AConversationalNpc::HandlePlayerMessage(const FString& PlayerInput)
{
    // Add the player's message to our history
    ConversationHistory.Add(FGenChatMessage{EGenChatRole::User, PlayerInput});
    SendChatRequest();
}

void AConversationalNpc::SendChatRequest()
{
    FGenOAIChatSettings ChatSettings;
    ChatSettings.Model = EOpenAIChatModel::GPT_4o; // Choose your model
    
    TWeakObjectPtr<AConversationalNpc> WeakThis(this);
    
    // Send the entire conversation history with the request
    UGenOAIChat::SendChatRequest(ChatSettings, ConversationHistory,
        FOnChatCompletionResponse::CreateLambda(
        [WeakThis](const FString& Response, const FString& Error, bool bSuccess)
        {
            if (!WeakThis.IsValid()) return;
            WeakThis->OnAIResponseReceived(Response, Error, bSuccess);
        })
    );
}

void AConversationalNpc::OnAIResponseReceived(
    const FString& Response, const FString& Error, bool bSuccess)
{
    if (bSuccess)
    {
        // Add the AI's response to our history to maintain context for the next turn
        ConversationHistory.Add(FGenChatMessage{EGenChatRole::Assistant, Response});
        
        // Now, display the message to the player, play audio, etc.
        // ...
    }
    else
    {
        // Handle the error appropriately
        UE_LOG(LogTemp, Error, TEXT("AI Chat Error: %s"), *Error);
    }
}
```