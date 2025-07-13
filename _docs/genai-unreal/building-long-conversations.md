---
layout: documentation
title: Building Long Conversations
permalink: /docs/genai-unreal/building-long-conversations/
nav_order: 8
---

## How Conversation Context Works

AI models are stateless - they don't remember previous messages unless you explicitly provide them with the conversation history. To build meaningful conversations, you must maintain and send the entire conversation context with each request.

## Conversation Structure Example

A typical conversation structure includes:
- System message (optional): Sets the AI's behavior and personality
- User messages: What the human has said
- Assistant messages: What the AI has responded

```cpp
TArray<FGenChatMessage> ConversationHistory;

// System message (optional)
ConversationHistory.Add(FGenChatMessage{
    EGenChatRole::System, 
    TEXT("You are a helpful NPC in a fantasy RPG game.")
});

// First user message
ConversationHistory.Add(FGenChatMessage{
    EGenChatRole::User, 
    TEXT("What quests do you have for me?")
});

// AI's response (you add this after receiving it)
ConversationHistory.Add(FGenChatMessage{
    EGenChatRole::Assistant, 
    TEXT("I have three quests available: rescue the princess, find the ancient artifact, or clear the goblin cave.")
});

// Next user message
ConversationHistory.Add(FGenChatMessage{
    EGenChatRole::User, 
    TEXT("Tell me more about the ancient artifact quest.")
});
```

## C++ Implementation

```cpp
class YOURGAME_API AConversationManager : public AActor
{
private:
    TArray<FGenChatMessage> ConversationHistory;
    
public:
    void StartConversation(const FString& SystemPrompt);
    void SendUserMessage(const FString& UserMessage);
    void OnAIResponse(const FString& Response, const FString& Error, bool bSuccess);
};

void AConversationManager::SendUserMessage(const FString& UserMessage)
{
    // Add user message to history
    ConversationHistory.Add(FGenChatMessage{EGenChatRole::User, UserMessage});
    
    // Send entire conversation history
    FGenOAIChatSettings ChatSettings;
    ChatSettings.Model = EOpenAIChatModel::GPT_4o;
    
    TWeakObjectPtr<AConversationManager> WeakThis(this);
    
    UGenOAIChat::SendChatRequest(ChatSettings, ConversationHistory,
        FOnChatCompletionResponse::CreateLambda([WeakThis](const FString& Response, const FString& Error, bool bSuccess)
        {
            if (!WeakThis.IsValid()) return;
            WeakThis->OnAIResponse(Response, Error, bSuccess);
        })
    );
}

void AConversationManager::OnAIResponse(const FString& Response, const FString& Error, bool bSuccess)
{
    if (bSuccess)
    {
        // Add AI response to conversation history
        ConversationHistory.Add(FGenChatMessage{EGenChatRole::Assistant, Response});
        
        // Display response to player
        DisplayMessageToPlayer(Response);
    }
}
```

## Advanced Context Management

### Context Length Management

AI models have token limits. Long conversations may exceed these limits. Implement strategies like:
- Summarizing old messages
- Keeping only recent messages
- Maintaining important context while trimming less relevant parts

### Multi-Character Conversations

For games with multiple NPCs, maintain separate conversation histories for each character to preserve their individual personalities and memory.

## Best Practices for Conversation Context

1. **Always include system messages** to maintain consistent AI behavior
2. **Implement context trimming** for long conversations
3. **Store conversation state** persistently if needed across game sessions
4. **Use appropriate models** - longer context models for complex conversations
5. **Monitor token usage** to manage API costs effectively
