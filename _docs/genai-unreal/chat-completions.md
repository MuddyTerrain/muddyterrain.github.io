---
layout: documentation
title: Chat Completions
permalink: /docs/genai-unreal/chat-completions/
nav_order: 8
---

Chat completions are the core of conversational AI in the GenAI for Unreal plugin. This page covers how to send text-based and multimodal chat requests to AI models, including best practices for structuring messages and handling responses.

---

## 1. Basic Text Chat

The simplest way to interact with AI models is through text-only chat completions. This involves sending a series of messages (system prompt, user input, assistant responses) and receiving a generated response.

#### In Blueprints

Use the **"Request [Provider] Chat Completion"** node, such as `Request OpenAI Chat Completion`. You'll need to provide:

- **Settings**: A struct containing model selection, temperature, max tokens, etc.
- **Messages**: An array of message structs (role: system/user/assistant, content: text)
- **Callback**: An event to handle the response

<div class="image-wrapper">
    <figure>
        <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1767463869/44f6ccad-e752-4d28-be0e-8a77f651b8e4.webp" alt="Basic Chat Blueprint Node" style="width: 100%;">
        <figcaption class="image-caption">
        Example of a basic chat completion request in Blueprints.
        </figcaption>
    </figure>
</div>

#### In C++

Use the static function from the provider's chat class:

```cpp
UGenOAIChat::SendChatRequest(Settings, Messages, FOnChatCompletionResponse::CreateLambda([](/* response params */) {
    // Handle response
}));
```

---

## 2. Multimodal Chat (Vision)

Many modern AI models support multimodal inputs, allowing you to include images alongside text in your chat messages. This enables powerful use cases like analyzing in-game screenshots, describing scenes, or generating responses based on visual context.

#### Supported Providers

- OpenAI
- Google
- Anthropic
- XAI

#### Setting up image Content

To include images in your chat messages, You can either import texture as a file or as a raw buffer or even as a Unreal Texture (Uncompressed only)

##### Important: Texture Format Support

<div style="padding: 10px 15px; background-color: #fff3cd; border-left: 4px solid #ffc107; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold; color: #856404;">⚠️ Texture Compression Warning</p>
  <p style="margin: 5px 0 0 0; color: #856404;"><strong>Plugin Version 1.6.0 and Below:</strong> The <code>FromTexture2D</code> and <code>Make Image Content from Texture</code> nodes only support uncompressed textures (UserInterface2D/RGBA format). Compressed textures (DXT1/DXT5) will either fail to convert or in rare cases crash the editor!</p>
  <p style="margin: 5px 0 0 0; color: #856404;"><strong>Plugin Version 1.7.0+ (Upcoming):</strong> <code>FromTexture2D</code> now supports ALL texture formats including compressed ones in EDITOR, and only uncompressed one's in Game Builds. So, we recommend using UserInterface2D (RGBA) compression on textures you plan to send to AI models.</p>
  <p style="margin: 5px 0 0 0; color: #856404;">Compressed textures in packaged builds will return an error - use RGBA format for production.</p>
</div>

<div class="image-wrapper">
   <figure>
       <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1767465359/Screenshot_2026-01-02_202918_d8w5cx.webp" alt="Blueprint Node for getting all models" style="width: 100%;">
          <figcaption class="image-caption">
            Use Uncompressed textures
          </figcaption>
     </figure>
</div>


##### Blueprint Nodes

- **Make Image Content from Texture**: Converts a UTexture2D to image content for chat messages
- **From Texture 2D**: Alternative node for texture conversion

<div>
    <figure>
        <img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1767464858/c24078d9-139d-49ab-a698-fb7255c95093.webp" alt="Multimodal Chat Setup" style="width: 100%;">
        <figcaption class="image-caption">
        Setting up a multimodal chat message with text and image content.
        </figcaption>
    </figure>
</div>

<div class="image-wrapper">
   <figure>
       <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1767464770/a2f8d46d-8211-4dde-91ae-b201ed067dec.webp" alt="Blueprint Node for getting all models" style="width: 100%;">
          <figcaption class="image-caption">
            Blueprint node to get all models example
          </figcaption>
     </figure>
</div>


#### Message Structure

When creating multimodal messages, use the "Make [Provider] Message" node with content that includes both text and image parts:

```blueprint
// Pseudo-code
Make OpenAI Message:
    Role: User
    Content: Array of content parts
        - Text: "What's in this image?"
        - Image: (from Make Image Content from Texture)
```

---

## 3. OpenAI Responses API (Beta)

The OpenAI Responses API is a newer API designed for models that are **Responses API-only**, such as `gpt-5.4`, `gpt-5.4-pro`, `gpt-5.2-pro`, `gpt-5.3-codex`, and other Codex models. These models do not support the standard Chat Completions endpoint and must use the Responses API instead.

The plugin provides a dedicated class, `UGenOAIResponses`, that handles the Responses API with the same familiar async pattern.

#### When to Use

- Use **`UGenOAIChat`** (Chat Completions) for standard models like `gpt-5-mini`, `gpt-5.1`, `gpt-4o`, etc.
- Use **`UGenOAIResponses`** (Responses API) for Pro and Codex models like `gpt-5.4-pro`, `gpt-5.3-codex`, `gpt-5.2-pro`, etc.

#### Key Settings (`FGenOpenAIResponsesSettings`)

| Property | Type | Description |
|---|---|---|
| `Model` | `FString` | The model to use (defaults to `gpt-5.4-pro`). |
| `Messages` | `TArray<FGenChatMessage>` | Conversation history, same format as Chat Completions. |
| `Instructions` | `FString` | System-level instructions (equivalent to a system message). |
| `Temperature` | `float` | Controls randomness (0.0 to 2.0). |
| `MaxOutputTokens` | `int32` | Maximum tokens to generate (default: 4096). |
| `ReasoningEffort` | `EGenAIResponsesReasoningEffort` | Controls reasoning depth: `Low`, `Medium`, `High`, or `Default`. |
| `Tools` | `TArray<FGenAIToolDefinition>` | Optional function/tool definitions the model can call. |
| `AdditionalToolsJson` | `FString` | Raw JSON for built-in tools like `web_search` or `code_interpreter`. |

#### C++ Example

```cpp
#include "Models/OpenAI/GenOAIResponses.h"
#include "Data/OpenAI/GenOAIResponsesStructs.h"

void AMyActor::RequestFromResponsesAPI()
{
    FGenOpenAIResponsesSettings Settings;
    Settings.Model = TEXT("gpt-5.4-pro");
    Settings.Instructions = TEXT("You are a helpful game design assistant.");
    Settings.Temperature = 0.7f;
    Settings.ReasoningEffort = EGenAIResponsesReasoningEffort::High;

    FGenChatMessage UserMsg;
    UserMsg.Role = TEXT("user");
    UserMsg.TextContent = TEXT("Design a boss encounter for a dark fantasy RPG.");
    Settings.Messages.Add(UserMsg);

    UGenOAIResponses::SendResponsesRequest(Settings,
        FOnResponsesCompletionResponse::CreateLambda([](const FString& Response, const FString& Error, bool bSuccess)
        {
            if (bSuccess)
            {
                UE_LOG(LogTemp, Log, TEXT("Responses API result: %s"), *Response);
            }
            else
            {
                UE_LOG(LogTemp, Error, TEXT("Error: %s"), *Error);
            }
        })
    );
}
```

#### Blueprint Implementation

Use the **"Request OpenAI Response (Pro/Codex)"** node. Configure it with the `Make Gen OpenAI Responses Settings` node, which provides the same familiar fields (model, messages, temperature) plus Responses API-specific options like `Instructions` and `Reasoning Effort`.

---

## 4. Streaming Chat Responses

For real-time chat experiences, use the streaming versions of chat nodes. These provide incremental responses as they're generated, allowing for typewriter effects and interruptible conversations.

See the **[Streaming](/docs/genai-unreal/streaming/)** page for detailed information on implementing streaming chat.

---

## 5. Best Practices

- **Message History**: Maintain conversation context by including previous messages in the array
- **System Prompts**: Use system messages to set the AI's behavior and role
- **Token Limits**: Monitor token usage to avoid hitting API limits
- **Error Handling**: Always implement proper error handling for failed requests
- **Texture Optimization**: Use RGBA textures for multimodal chat to ensure compatibility across all build types

---

## 6. Example Use Cases

- **NPC Dialogue**: Generate dynamic responses based on player input
- **Scene Analysis**: Describe or analyze in-game screenshots
- **Procedural Content**: Generate descriptions for dynamically created assets
- **Interactive Storytelling**: Build branching narratives with AI assistance