---
layout: documentation
title: Structured Output
permalink: /docs/genai-unreal/structured-output/
nav_order: 10
---

Structured Output allows you to request AI responses in specific JSON formats, ensuring consistent data structures that your game can reliably parse and use. This is particularly useful for generating game data, character stats, quest information, or any scenario where you need predictable output format.

## Key Benefits

- **Guaranteed Format**: AI responses always match your specified JSON schema
- **Type Safety**: Easier to parse and validate in your game code
- **Consistency**: Eliminates parsing errors from free-form text responses
- **Game Integration**: Perfect for generating structured game data

## Blueprint Implementation

1. Use the structured output version of chat completion nodes
2. Define your desired JSON schema as a string
3. The AI response will conform to your specified structure
4. Parse the JSON response using Unreal's JSON utilities

<div class="image-wrapper">
    <figure> 
        <img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1751932093/22c1fdf7-72b8-4727-930e-b52e9434c94f.webp" alt="Blueprint Structured Output Example" style="width: 100%;">
        <figcaption class="image-caption">Example of JSON response from ChatGPT API for NPCs</figcaption>
    </figure>
</div>

> **Structured Output Setup**: Use the structured output nodes with a JSON schema string to ensure AI responses match your exact data format requirements.

## C++ Implementation

```cpp
void AMyActor::RequestStructuredData()
{
    FGenOAIChatSettings ChatSettings;
    ChatSettings.Model = EOpenAIChatModel::GPT_4o;
    ChatSettings.bUseStructuredOutput = true;
    
    // Define JSON schema for character stats
    FString JSONSchema = TEXT(R"({
        "type": "object",
        "properties": {
            "name": {"type": "string"},
            "level": {"type": "integer"},
            "health": {"type": "integer"},
            "mana": {"type": "integer"},
            "skills": {
                "type": "array",
                "items": {"type": "string"}
            }
        },
        "required": ["name", "level", "health", "mana", "skills"]
    })");
    
    ChatSettings.ResponseFormat = JSONSchema;
    
    TArray<FGenChatMessage> Messages;
    Messages.Add(FGenChatMessage{
        EGenChatRole::User, 
        TEXT("Generate a fantasy RPG character with stats and skills")
    });
    
    TWeakObjectPtr<AMyActor> WeakThis(this);
    
    UGenOAIChat::SendChatRequest(ChatSettings, Messages,
        FOnChatCompletionResponse::CreateLambda([WeakThis](const FString& JSONResponse, const FString& Error, bool bSuccess)
        {
            if (!WeakThis.IsValid()) return;
            
            if (bSuccess)
            {
                WeakThis->ParseCharacterData(JSONResponse);
            }
        })
    );
}

void AMyActor::ParseCharacterData(const FString& JSONResponse)
{
    TSharedPtr<FJsonObject> JsonObject;
    TSharedRef<TJsonReader<>> Reader = TJsonReaderFactory<>::Create(JSONResponse);
    
    if (FJsonSerializer::Deserialize(Reader, JsonObject))
    {
        FString CharacterName = JsonObject->GetStringField("name");
        int32 Level = JsonObject->GetIntegerField("level");
        int32 Health = JsonObject->GetIntegerField("health");
        int32 Mana = JsonObject->GetIntegerField("mana");
        
        // Create character with parsed data
        CreateCharacterWithStats(CharacterName, Level, Health, Mana);
    }
}
```

<div>
    <figure> 
        <img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1751482808/6e114b72-0424-4725-8491-31e816ba81e4.webp" alt="Blueprint Structured Output Example" style="width: 100%;">
        <figcaption class="image-caption">Blueprint Structured Output Example</figcaption>
    </figure>
</div>

> **JSON Parsing**: Use Unreal's built-in JSON utilities to parse structured responses into game-usable data structures.

## Common Use Cases

- **Character Generation**: Create NPCs with consistent stat structures
- **Quest Data**: Generate quests with specific required fields
- **Item Creation**: Generate game items with proper attributes
- **Dialogue Options**: Create branching dialogue with structured choices
- **World Building**: Generate locations with consistent properties
