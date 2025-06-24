---
layout: page
title: GEnAI for Unreal - Documentation
category: documentation
permalink: /genai-unreal-documentation
---

# GEnAI for Unreal Plugin: Documentation

Welcome to the documentation for the GEnAI for Unreal plugin. This guide provides all the necessary information to integrate and use the plugin in your Unreal Engine projects. The plugin will be available on **Fab.com**.

## Supported AI Models and APIs

The GEnAI plugin currently supports the following models and APIs:

*   **OpenAI:**
    *   Chat API: `gpt-4o`, `gpt-4o-mini`
    *   Whisper API: `whisper-1` (Audio Transcription)
    *   Text-to-Speech API: `tts-1`, `tts-1-hd`
    *   DALL-E API (Image Generation)
    *   Vision API (Multimodal)
    *   Structured Outputs
*   **Anthropic Claude:**
    *   Chat API: `claude-3-7-sonnet-latest`, `claude-3-5-sonnet`, `claude-3-5-haiku-latest`, `claude-3-opus-latest`
    *   Multimodal capabilities with supported Claude models.
*   **XAI (Grok):**
    *   Chat Completions API: `grok-3-latest`, `grok-3-mini-beta`
*   **Google Gemini:**
    *   Chat API: `gemini-2.5-flash`, `gemini-2.5-pro`, `gemini-1.5-flash`
    *   (Multimodal capabilities typically available with Gemini models)
*   **DeepSeek:**
    *   Chat API: `deepseek-chat` (DeepSeek-V3)
    *   Reasoning API: `deepseek-reasoning-r1`

## Setting API Keys

### For Editor Usage:

Set the environment variable `PS_<ORGNAME>` to your API key. (e.g., `PS_OPENAIAPIKEY`).

**Windows:**
```cmd
setx PS_<ORGNAME> "your_api_key_here"
```

**Linux/MacOS:**
1.  Run the following command in your terminal, replacing `your_api_key_here` with your API key and `<ORGNAME>` with the respective organization identifier.
    ```bash
    echo "export PS_<ORGNAME>='your_api_key_here'" >> ~/.zshrc
    ```
    (If using bash, replace `~/.zshrc` with `~/.bashrc` or `~/.bash_profile`)
2.  Update the shell with the new variable:
    ```bash
    source ~/.zshrc
    ```
    (Or `source ~/.bashrc`, etc.)

**Important:** Restart the Unreal Editor AND any connected IDE after setting the environment variable.

`<ORGNAME>` can be one of:
`PS_OPENAIAPIKEY`, `PS_DEEPSEEKAPIKEY`, `PS_ANTHROPICAPIKEY`, `PS_XAIAPIKEY`, `PS_GOOGLEAPIKEY`.

### For Packaged Builds:

Storing API keys directly in packaged builds is a significant security risk. It is strongly recommended to route API requests through your own backend server where API keys can be kept secure.

For development or internal test builds **only**, you can use the `GenSecureKey::SetGenAIApiKeyRuntime` function (available in both C++ and Blueprints) to set your API key at runtime. Use this method with extreme caution.

## Adding the Plugin to Your Project

1.  Acquire the GEnAI for Unreal plugin from **Fab.com**.
2.  Extract and place the plugin into your Unreal Engine project's `Plugins` directory. If a `Plugins` directory doesn't exist at the root of your project, create one.
3.  **Regenerate Project Files:** Right-click your project's `.uproject` file and select "Generate Visual Studio project files" (or the equivalent for your development environment, e.g., "Refresh Xcode Project" or "Generate CMake files").
4.  **Enable the Plugin in Unreal Editor:**
    *   Open your project in the Unreal Editor.
    *   Navigate to `Edit > Plugins`.
    *   Search for "GenerativeAISupport" (or the official name of the plugin as listed on Fab.com) in the plugin list.
    *   Ensure the "Enabled" checkbox is ticked for the plugin.
    *   You may need to restart the Unreal Editor if prompted.
5.  **For C++ Projects:** To use the plugin's C++ classes, add its module name to your project's `Build.cs` file (e.g., `MyProject.Build.cs`).
    ```cpp
    PublicDependencyModuleNames.AddRange(new string[] { "GenerativeAISupport", /* other modules */ });
    // Alternatively, you might add it to PrivateDependencyModuleNames
    // PrivateDependencyModuleNames.AddRange(new string[] { "GenerativeAISupport" });
    ```
    Recompile your project code after updating the `Build.cs` file.

## Usage Examples

An example Unreal project demonstrating plugin features is typically provided with the plugin assets on Fab.com.

*(Image paths like `Docs/BpExample...png` from the original source are referenced below. These would ideally be actual images or more detailed textual descriptions of the Blueprint graphs in the final documentation.)*

### OpenAI

#### 1. Chat

**C++ Example:**
```cpp
#include "GenOAIChat.h" // Actual path may vary based on plugin structure
#include "GenAITypes.h"   // For FGenChatMessage, FGenChatSettings

void AMyActor::SendOpenAIChatRequest(const FString& UserPrompt)
{
    FGenChatSettings ChatSettings;
    ChatSettings.Model = TEXT("gpt-4o-mini"); // Or "gpt-4o"
    ChatSettings.MaxTokens = 500;
    ChatSettings.Messages.Add(FGenChatMessage{ EGenAIChatRole::System, TEXT("You are a helpful assistant for a video game.") });
    ChatSettings.Messages.Add(FGenChatMessage{ EGenAIChatRole::User, UserPrompt });

    FOnChatCompletionResponse OnComplete = FOnChatCompletionResponse::CreateLambda(
        [](const FString& Response, const FString& ErrorMessage, bool bSuccess)
    {
        if (bSuccess)
        {
            UE_LOG(LogTemp, Log, TEXT("OpenAI Chat Response: %s"), *Response);
        }
        else
        {
            UE_LOG(LogTemp, Error, TEXT("OpenAI Chat Error: %s"), *ErrorMessage);
        }
    });

    UGenOAIChat::SendChatRequest(ChatSettings, OnComplete);
}
```

**Blueprint Example:** (Conceptual description of `Docs/BpExampleOAIChat.png`)
1.  Get a reference to the `Gen OpenAI Chat` subsystem or use a static Blueprint function node.
2.  Construct `Gen Chat Settings`:
    *   Set `Model` (e.g., "gpt-4o-mini").
    *   Set `Max Tokens`.
    *   Make an array of `Gen Chat Message` structs. For each message, set `Role` (System, User, Assistant) and `Content`.
3.  Call the `Send OpenAI Chat Request` node, passing in the Chat Settings.
4.  Connect to the `OnComplete` output pin, which will execute when the response is received. From this pin, you can access the `Response` string, `Error Message` string, and a `Success` boolean.

#### 2. Structured Outputs

**C++ Example (Inline Schema):**
```cpp
#include "GenAISchemaService.h" // Actual path may vary
#include "GenAITypes.h"

void AMyActor::RequestOpenAIStructuredOutput()
{
    FString UserPrompt = TEXT("Generate details for three fantasy characters: a warrior, a mage, and an archer.");
    FString MySchemaJson = R"({
        "type": "object",
        "properties": {
            "characters": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "name": { "type": "string", "description": "Character's name." },
                        "class": { "type": "string", "description": "Character's class (e.g., warrior, mage)." },
                        "backstory_summary": { "type": "string", "description": "A brief summary of their backstory." }
                    },
                    "required": ["name", "class", "backstory_summary"]
                }
            }
        },
        "required": ["characters"]
    })";

    UGenAISchemaService::RequestStructuredOutput(
        UserPrompt,
        MySchemaJson,
        [](const FString& ResponseJson, const FString& Error, bool Success) {
            if (Success)
            {
                UE_LOG(LogTemp, Log, TEXT("OpenAI Structured Output: %s"), *ResponseJson);
                // Process the ResponseJson (which should conform to MySchemaJson)
            }
            else
            {
                UE_LOG(LogTemp, Error, TEXT("OpenAI Structured Output Error: %s"), *Error);
            }
        }
    );
}
```

**Blueprint Example:** (Conceptual description of `Docs/BpExampleOAIStructuredOp.png`)
1.  Use the `Request OpenAI Structured Output` Blueprint node.
2.  Input the `Prompt` string.
3.  Input the `JSON Schema` string.
4.  Handle the `OnComplete` event to get the `Response` (JSON string), `Error Message`, and `Success` boolean.

#### 3. Vision API (Multimodal)
*Details specific to the plugin's implementation for sending image data (e.g., as base64 strings or texture references) along with a text prompt would be here.*

#### 4. DALL-E API (Image Generation)
*Details on how to send a text prompt and any parameters (like image size, quality) and receive image data (e.g., as a texture or URL) would be here.*

#### 5. Whisper API (Speech-to-Text / Audio Transcription)
*Details on providing audio data (e.g., from a sound wave or microphone input) and receiving the transcribed text.*

#### 6. Text-to-Speech API
*Details on providing text and parameters (e.g., voice model) to receive audio data (e.g., to play as a sound or save as a sound wave).*

### DeepSeek API

**Important Configuration:** For the DeepSeek R1 reasoning model, API calls can take longer than default HTTP timeouts. Add or modify the following in your project's `Config/DefaultEngine.ini` file:
```ini
[HTTP]
HttpConnectionTimeout=180
HttpReceiveTimeout=180
HttpMaxConnectionsPerServer=16 ; Optional: good for multiple concurrent requests
```

#### 1. Chat and Reasoning

**C++ Example:**
```cpp
#include "GenDSeekChat.h" // Actual path may vary
#include "GenAITypes.h"   // For FGenChatMessage, FGenDSeekChatSettings etc.

void AMyActor::SendDeepSeekRequest()
{
    FGenDSeekChatSettings RequestSettings;
    // For Reasoning Model (R1):
    RequestSettings.Model = EDeepSeekModels::Reasoner; // Assuming an enum EDeepSeekModels exists with Reasoner/Chat members
    RequestSettings.Messages.Add(FGenChatMessage{ EGenAIChatRole::System, TEXT("You are a meticulous logical reasoner.")}); // System message is mandatory for R1
    RequestSettings.Messages.Add(FGenChatMessage{ EGenAIChatRole::User, TEXT("If all blips are blops, and some blops are bleeps, are all blips definitely bleeps? Explain your reasoning.")});

    // For Chat Model (e.g., DeepSeek-V3):
    // RequestSettings.Model = EDeepSeekModels::Chat;
    // RequestSettings.Messages.Add(FGenChatMessage{ EGenAIChatRole::User, TEXT("Tell me a short story about a space explorer.")});

    RequestSettings.MaxTokens = 1500;
    RequestSettings.bStreamResponse = false; // Streaming for R1 is not currently supported by the plugin.

    UGenDSeekChat::SendChatRequest(
        RequestSettings,
        FOnDSeekChatCompletionResponse::CreateLambda(
            [](const FString& Response, const FString& ErrorMessage, bool bSuccess)
            {
                if (bSuccess) {
                    UE_LOG(LogTemp, Log, TEXT("DeepSeek Response: %s"), *Response);
                } else {
                    UE_LOG(LogTemp, Error, TEXT("DeepSeek Error: %s. Response: %s"), *ErrorMessage, *Response); // Error might be in Response
                }
            })
    );
}
```

**Blueprint Example:** (Conceptual description of `Docs/BpExampleDeepseekChat.png`)
1.  Construct `Gen DeepSeek Chat Settings`.
    *   Set `Model` (e.g., `Reasoner` or `Chat`).
    *   Add `Messages` (Array of `Gen Chat Message`). Remember System prompt for Reasoner.
    *   Set `Max Tokens`.
2.  Call `Send DeepSeek Chat Request` node.
3.  Handle the `OnComplete` event.

### Anthropic API

#### 1. Chat (including Multimodal)

**C++ Example:**
```cpp
#include "GenClaudeChat.h" // Actual path may vary
#include "GenAITypes.h"    // For FGenChatMessage, FGenClaudeChatSettings etc.

void AMyActor::SendClaudeChatRequest(const FString& UserPrompt)
{
    FGenClaudeChatSettings ChatSettings;
    ChatSettings.Model = EClaudeModels::Claude_3_5_Sonnet; // Assuming an enum EClaudeModels
    ChatSettings.MaxTokens = 2048;
    ChatSettings.Temperature = 0.7f; // Optional
    ChatSettings.Messages.Add(FGenChatMessage{ EGenAIChatRole::System, TEXT("You are a creative and helpful assistant.")});
    ChatSettings.Messages.Add(FGenChatMessage{ EGenAIChatRole::User, UserPrompt});

    // For multimodal requests with images, you would add messages with image content here,
    // following the plugin's specific structure for FGenChatMessage (e.g., a field for base64 image data and media type).

    UGenClaudeChat::SendChatRequest(
        ChatSettings,
        FOnClaudeChatCompletionResponse::CreateLambda(
            [](const FString& Response, const FString& ErrorMessage, bool bSuccess)
            {
                if (bSuccess)
                {
                    UE_LOG(LogTemp, Log, TEXT("Claude Chat Response: %s"), *Response);
                }
                else
                {
                    UE_LOG(LogTemp, Error, TEXT("Claude Chat Error: %s"), *ErrorMessage);
                }
            })
    );
}
```

**Blueprint Example:** (Conceptual description of `Docs/BpExampleClaudeChat.png`)
1.  Construct `Gen Claude Chat Settings`.
    *   Set `Model`.
    *   Add `Messages`. For multimodal, some messages would include image data.
    *   Set `Max Tokens`, `Temperature` (optional).
2.  Call `Send Claude Chat Request` node.
3.  Handle `OnComplete`.

### XAI's Grok API

#### 1. Chat

**C++ Example:**
```cpp
#include "GenXAIChat.h" // Actual path may vary
#include "GenAITypes.h" // For FGenXAIMessage, FGenXAIChatSettings etc.

void AMyActor::SendGrokChatRequest()
{
    FGenXAIChatSettings ChatSettings;
    ChatSettings.Model = TEXT("grok-3-latest"); // Or "grok-3-mini-beta"
    ChatSettings.Messages.Add(FGenXAIMessage{ // Assuming FGenXAIMessage, might be FGenChatMessage
        TEXT("system"), // Or EGenAIChatRole::System
        TEXT("You are a witty AI assistant with a penchant for sarcasm, but always helpful.")
    });
    ChatSettings.Messages.Add(FGenXAIMessage{
        TEXT("user"), // Or EGenAIChatRole::User
        TEXT("Suggest three unconventional uses for a rubber chicken in a video game.")
    });
    ChatSettings.MaxTokens = 1000;

    UGenXAIChat::SendChatRequest(
        ChatSettings,
        FOnXAIChatCompletionResponse::CreateLambda(
            [](const FString& Response, const FString& ErrorMessage, bool bSuccess)
            {
                if (bSuccess) {
                    UE_LOG(LogTemp, Log, TEXT("XAI Grok Chat response: %s"), *Response);
                } else {
                    UE_LOG(LogTemp, Error, TEXT("XAI Grok Chat error: %s"), *ErrorMessage);
                }
            })
    );
}
```
**Blueprint Example:**
(Similar structure to other chat examples: Construct Grok Chat Settings, Call Send Grok Chat Request, Handle OnComplete).

### Google Gemini API

#### 1. Chat (including Multimodal)

**C++ Example:**
```cpp
#include "GenGeminiChat.h" // Assuming actual path and naming
#include "GenAITypes.h"    // For FGenChatMessage, FGenGeminiChatSettings etc.

void AMyActor::SendGeminiChatRequest(const FString& UserPrompt)
{
    FGenGeminiChatSettings ChatSettings; // Assuming FGenGeminiChatSettings struct
    ChatSettings.Model = TEXT("gemini-1.5-flash"); // Or "gemini-2.5-pro", "gemini-2.5-flash"
    ChatSettings.MaxTokens = 1500;
    // For Gemini, chat history is often sent as a sequence of 'user' and 'model' roles.
    // A system prompt might be handled differently or as the first 'user' message with instructions.
    // Consult Gemini API docs for best practices.
    ChatSettings.Messages.Add(FGenChatMessage{ EGenAIChatRole::User, UserPrompt });
    // For multimodal, add content parts with image data as per plugin's Gemini implementation.

    // Assuming a static function like UGenGeminiChat::SendChatRequest exists:
    /*
    UGenGeminiChat::SendChatRequest(
        ChatSettings,
        FOnGeminiChatCompletionResponse::CreateLambda( // Assuming FOnGeminiChatCompletionResponse
            [](const FString& Response, const FString& ErrorMessage, bool bSuccess)
            {
                if (bSuccess) {
                    UE_LOG(LogTemp, Log, TEXT("Gemini Chat Response: %s"), *Response);
                } else {
                    UE_LOG(LogTemp, Error, TEXT("Gemini Chat Error: %s"), *ErrorMessage);
                }
            })
    );
    */
    UE_LOG(LogTemp, Warning, TEXT("Gemini C++ example is conceptual; verify actual plugin implementation."));
}
```
**Blueprint Example:**
(Similar structure: Construct Gemini Chat Settings, Call Send Gemini Chat Request node, Handle OnComplete. Pay attention to how messages and roles are structured for Gemini).

## Known Issues

*   No streaming support for Deepseek R1 reasoning model (API calls are blocking).
*   (List other known issues from the original document or current plugin status)
*   When LLM compiles a blueprint no proper error handling in its response (if this is a plugin feature).
*   Issues spawning certain nodes, especially with getters and setters (if LLM assists with BP node creation).

## Quick Links

*   [OpenAI API Documentation](https://platform.openai.com/docs/api-reference)
*   [Anthropic API Documentation](https://docs.anthropic.com/en/docs/models)
*   [XAI API Documentation](https://docs.x.ai/api)
*   [Google Gemini API Documentation](https://ai.google.dev/gemini-api/docs)
*   [DeepSeek API Documentation](https://platform.deepseek.com/api-docs)

---
*This documentation is based on the GEnAI for Unreal plugin. Specific function names, struct members, and Blueprint node names may vary slightly based on the final plugin version. Always refer to the plugin's source code or example project for the most accurate implementation details.*
