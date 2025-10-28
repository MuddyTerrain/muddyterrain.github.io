---
layout: documentation
title: Structured Output
permalink: /docs/genai-unreal/structured-output/
nav_order: 10
---

Structured Output is a critical feature for game development that forces the AI to respond in a strict, predictable JSON format. This eliminates the need to parse unreliable free-form text and allows you to directly integrate AI-generated data into your game systems.
#### Currently Supported Providers:
- OpenAI

#### Example Project Status:
- **UI Not Yet Included:** The current example projects do not yet have a dedicated UI widget for structured output, but the underlying functionality is fully supported. Usage Examples can be found in the QuickExamples Folder of the example project.

---

## Why Use Structured Output?

When you ask an AI for game data (like character stats or quest objectives) in plain text, you might get a slightly different format every time. This makes parsing the data brittle and prone to errors. Structured Output solves this by making the AI adhere to a specific **JSON Schema** you provide.

-   **Guaranteed Format:** The AI's response is guaranteed to match the JSON structure you define. No more missing fields or incorrect data types.
-   **Reliable Parsing:** You can reliably deserialize the JSON response directly into your C++ or Blueprint data structures.
-   **Simplified Prompts:** You no longer need to write complex prompts begging the AI to format its response correctly. The schema handles the formatting rules.
-   **Perfect for Game Data:** Ideal for generating character stats, quest data, item properties, procedural level layouts, or any other data that needs to fit into your game's logic.

<div class="image-wrapper">
    <figure>
        <img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1751932093/22c1fdf7-72b8-4727-930e-b52e9434c94f.webp" alt="Blueprint Structured Output Example" style="width: 100%;">
        <figcaption class="image-caption">Example of a structured JSON response for NPC data.</figcaption>
    </figure>
</div>
---

## Blueprint Implementation

The Blueprint workflow involves defining a JSON schema as a string and passing it to the request node. You can then use Unreal's built-in JSON utility nodes to parse the response.

1.  **Define Your Schema:** Create a string variable containing your desired JSON schema. This schema defines the "shape" of the data you want back.
2.  **Request Structured Output:** Use the `Request OpenAI Chat Completion` node (or the equivalent for your provider). In the `Settings`, set the `Response Format` to your schema string and enable the appropriate JSON mode (if required by the model, like with `gpt-4-turbo`).
3.  **Parse the Response:** On `OnComplete`, take the JSON `Response` string and use a JSON parsing library or Unreal's built-in nodes (like those from the VaRest or JsonBlueprintUtilities plugins) to convert it into usable data.

<div>
    <figure>
        <img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1751482808/6e114b72-0424-4725-8491-31e816ba81e4.webp" alt="Blueprint Structured Output Example" style="width: 100%;">
        <figcaption class="image-caption">Example of a Blueprint graph sending a request and preparing to parse the structured JSON response.</figcaption>
    </figure>
</div>

---

## C++ Implementation

The C++ implementation offers a robust way to handle structured data, especially when paired with structs that mirror your JSON schema.

```cpp
#include "Models/OpenAI/GenOAIChat.h"
#include "Data/OpenAI/GenOAIChatStructs.h"
#include "Serialization/JsonSerializer.h" // For JSON parsing

// It's a good practice to have a C++ struct that matches your JSON schema
USTRUCT(BlueprintType)
struct FCharacterStats
{
    GENERATED_BODY()

    UPROPERTY(BlueprintReadOnly) FString Name;
    UPROPERTY(BlueprintReadOnly) int32 Level;
    UPROPERTY(BlueprintReadOnly) int32 Health;
    UPROPERTY(BlueprintReadOnly) TArray<FString> Skills;
};


void AMyDataManager::RequestCharacterData()
{
    // 1. Define the JSON schema as a string.
    const FString JSONSchema = TEXT(R"({
        "type": "object",
        "properties": {
            "name": {"type": "string", "description": "The character's name."},
            "level": {"type": "integer", "description": "The character's current level."},
            "health": {"type": "integer", "description": "The character's health points."},
            "skills": {
                "type": "array",
                "items": {"type": "string"},
                "description": "A list of the character's unique skills."
            }
        },
        "required": ["name", "level", "health", "skills"]
    })");

    // 2. Configure the chat settings for structured output.
    FGenOAIChatSettings ChatSettings;
    ChatSettings.Model = EOpenAIChatModel::GPT_4o;
    ChatSettings.ResponseFormat.JsonObject = JSONSchema; // Set the schema
    
    TArray<FGenChatMessage> Messages;
    Messages.Add(FGenChatMessage{EGenChatRole::User, TEXT("Generate a unique fantasy RPG character with a name, level, health, and three skills.")});
    
    TWeakObjectPtr<AMyDataManager> WeakThis(this);
    
    // 3. Send the request.
    UGenOAIChat::SendChatRequest(ChatSettings, Messages,
        FOnChatCompletionResponse::CreateLambda([WeakThis](const FString& JSONResponse, const FString& Error, bool bSuccess)
        {
            if (!WeakThis.IsValid() || !bSuccess) return;
            // 4. Parse the response on success.
            WeakThis->ParseCharacterData(JSONResponse);
        })
    );
}

void AMyDataManager::ParseCharacterData(const FString& JSONResponse)
{
    TSharedPtr<FJsonObject> JsonObject;
    const TSharedRef<TJsonReader<>> Reader = TJsonReaderFactory<>::Create(JSONResponse);

    if (FJsonSerializer::Deserialize(Reader, JsonObject) && JsonObject.IsValid())
    {
        FCharacterStats NewCharacter;
        NewCharacter.Name = JsonObject->GetStringField("name");
        NewCharacter.Level = JsonObject->GetIntegerField("level");
        NewCharacter.Health = JsonObject->GetIntegerField("health");
        
        const TArray<TSharedPtr<FJsonValue>>* SkillsJsonArray;
        if (JsonObject->TryGetArrayField("skills", SkillsJsonArray))
        {
            for (const auto& SkillValue : *SkillsJsonArray)
            {
                NewCharacter.Skills.Add(SkillValue->AsString());
            }
        }
        
        // Now you have a populated FCharacterStats struct to use in your game!
        UE_LOG(LogTemp, Log, TEXT("Successfully parsed character: %s, Level %d"), *NewCharacter.Name, NewCharacter.Level);
    }
}
```
---

## Common Use Cases

-   **Character Generation:** Create NPCs with a consistent set of stats (health, mana, strength, etc.).
-   **Quest System:** Generate quests with guaranteed fields like `title`, `description`, `objectives` (as an array), and `reward`.
-   **Item Creation:** Procedurally generate weapons or armor with predictable attributes like `damage`, `durability`, and `special_effects`.
-   **Dynamic Dialogue:** Generate branching dialogue options for NPCs, where each option is an object with `text` and a `consequence_id`.
-   **World Generation:** Define the structure for points of interest on a map, each with a `name`, `type` (e.g., "village", "dungeon"), and `description`.