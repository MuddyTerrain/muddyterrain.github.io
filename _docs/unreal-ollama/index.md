---
layout: documentation
title: GenAI Llama - Home
permalink: /docs/genai-llama/
nav_order: 1
image: https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1774520082/MainBanners_10_gniskq.webp
description: "Run local LLMs in Unreal Engine with Ollama, LM Studio, or embedded llama.cpp inference. Fully offline AI for games on PC, mobile, and console."
tags: [unreal-engine, ollama, llama-cpp, local-llm, offline-ai, game-development]
---

<div class="image-wrapper">
<figure>
    <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1774520082/MainBanners_10_gniskq.webp" alt="GenAI Llama Plugin" style="width: 100%;">
</figure>
</div>

**Welcome to the official documentation for GenAI Llama, an Unreal Engine plugin for running local AI models inside your games and applications.** No cloud API keys, no internet required, no per-token costs.

GenAI Llama supports two modes of operation:

- **HTTP Providers** — Connect to any local inference server (Ollama, LM Studio, llama.cpp server, vLLM, LocalAI, Jan, or any OpenAI-compatible endpoint). Works out of the box.
- **Embedded Inference (llama.cpp)** — Run GGUF models directly inside your game process with no server required. Works offline on PC and mobile. Optional — requires downloading prebuilt libraries or compiling llama.cpp for your target platform.

<div class="button-row">
  <a href="/t/genai-llama-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-llama-plugin" class="cta-button primary track-click" data-event-name="btn_clk_genai_llama_fab" data-event-location="docs_top_cta" target="_blank" rel="noopener noreferrer">View on Fab.com</a>
  <a href="/t/discord" class="cta-button secondary track-click" data-event-name="btn_clk_join_discord" data-event-location="docs_top_cta" target="_blank" rel="noopener noreferrer">Join Discord</a>
</div>

---

## What Ships With This Plugin

| Component | Included | Notes |
|---|---|---|
| Plugin source code | Yes | Full C++ source for all features |
| HTTP provider support | Yes | Works immediately with any local inference server |
| llama.cpp headers | Yes | In `ThirdParty/LlamaCpp/include/` |
| llama.cpp compiled libraries | No | Download prebuilt or compile — see [Embedded Inference Setup](#embedded-inference-setup) |
| Example project | Yes | Blueprint examples demonstrating all features |

**HTTP providers work out of the box.** Embedded inference is opt-in — download prebuilt libraries from [llama.cpp GitHub releases](https://github.com/ggml-org/llama.cpp/releases) or compile from source.

---

## Supported Providers

| Provider | API Format | Default Port | Notes |
|---|---|---|---|
| **Ollama** | Ollama Native | 11434 | Full-featured, easiest setup |
| **LM Studio** | OpenAI Compatible | 1234 | GUI-based, great for prototyping |
| **llama.cpp server** | OpenAI Compatible | 8080 | Lightweight HTTP server |
| **vLLM** | OpenAI Compatible | 8000 | High-throughput production serving |
| **LocalAI** | OpenAI Compatible | 8080 | Drop-in OpenAI replacement |
| **Jan** | OpenAI Compatible | 1337 | Desktop app with model management |
| **Embedded (llama.cpp)** | Direct / In-process | N/A | No server needed. Requires compiled libs. |

---

## Compatibility

- **Unreal Engine:** 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7
- **Platforms (HTTP):** Windows, macOS, Linux, Android, iOS, PS4, Xbox One, Switch, HoloLens
- **Platforms (Embedded):** Windows, macOS, Linux, Android, iOS

---

## Quick Start — HTTP Providers

1. Enable the plugin in your project (**Edit > Plugins** > search "GenAI Llama").
2. Install and start your inference server (e.g., [Ollama](https://ollama.com/)).
3. Pull a model: `ollama pull llama3`
4. In a Blueprint, right-click and search for **"Request Chat Completion"** or **"Request Chat Stream"**.
5. Configure the node:
   - **Connection > Provider** = `Ollama` or `OpenAI Compatible`
   - **Connection > Base URL** = your server address (default: `http://localhost:11434`)
   - **Model** = the model name (e.g., `llama3`)
   - **Messages** = add at least one message with Role = `user` and your prompt as Content
6. Connect the **On Complete** (or **On Event** for streaming) delegate to handle the response.

### Recommended Models

| Use Case | Model | Description |
|----------|-------|-------------|
| General Chat | `llama3` | Meta's Llama 3 — strong general quality |
| General Chat | `mistral` | High-performance, multilingual |
| General Chat | `gemma3:1b` | Google's ultra-fast small model |
| Small & Fast | `phi3:mini` | Microsoft's compact model |
| Multimodal (Vision) | `llava` | Vision-language model |
| Coding / Structured Output | `codellama` | Code-specialized |

---

## Quick Start — Embedded Inference

1. Download prebuilt libraries or compile llama.cpp for your platform (see [Embedded Inference Setup](#embedded-inference-setup)).
2. Place a GGUF model file in your project (e.g., `Content/Models/tinyllama-1.1b-q4_k_m.gguf`).
3. In a Blueprint, use **"Load Embedded Model"**:
   - **Model Alias** = a name you choose (e.g., `npc-brain`)
   - **Model Path** = path to the `.gguf` file (absolute or relative to Content/)
   - **GPU Layers** = `99` for full GPU, `0` for CPU only
4. Use **"Request Chat Completion"** or **"Request Chat Stream"** with:
   - **Connection > Provider** = `Embedded (llama.cpp)`
   - **Model** = the alias you chose (e.g., `npc-brain`)

### Recommended Models for Embedded

| Model | Parameters | Q4_K_M Size | Best For |
|---|---|---|---|
| Qwen2.5-0.5B | 0.5B | ~400 MB | Ultra-lightweight, mobile devices |
| TinyLlama | 1.1B | ~637 MB | Lightweight NPC dialogue |
| Gemma-2B | 2B | ~1.4 GB | Balanced size and quality |
| Phi-3-mini | 3.8B | ~2.2 GB | Smarter game AI, desktop/console |

Download GGUF models from [Hugging Face](https://huggingface.co/models?search=gguf).

---

## Blueprint Nodes

### Request Chat Completion

Sends a chat request and returns a single complete response. Works with all providers.

**Inputs:**
- `Chat Settings` — Model name, messages, connection settings, generation options.

**Output delegate — On Complete** fires with `FGenAILlamaChatResponse`:
- `Message` — The assistant's response (Role + Content).
- `Model` — The model name that generated the response.
- `TokenUsage` — Prompt tokens, completion tokens, and total token count.
- `ErrorMessage` — Error details if the request failed.
- `bSuccess` — Whether the request succeeded.

### Request Chat Stream

Receives the response token-by-token for real-time display. Works with all providers.

**Inputs:**
- `Chat Settings` — Same as Request Chat Completion.

**Output delegate — On Event** fires for each token with `FGenAILlamaStreamEvent`:
- `PartialMessage` — The token content (Role + Content).
- `bIsFinished` — `true` when the stream is complete.

### Load Embedded Model

Asynchronously loads a GGUF model file for in-process inference. Only available when llama.cpp libraries are compiled and present.

**Inputs:**
- `Model Alias` — Name to reference this model in Chat Settings.
- `Model Path` — Path to the `.gguf` file. Absolute path, or relative to the project's Content/ directory.
- `GPU Layers` — Number of model layers to offload to GPU. `0` = CPU only, `99` = all layers (recommended).
- `Context Size` — Maximum context window in tokens (default: 2048).
- `Thread Count` — CPU threads for inference. `0` = auto-detect (recommended).

**Output delegate — On Complete** fires with:
- `bSuccess` — Whether the model loaded successfully.
- `Error` — Error details if loading failed.

### Unload Embedded Model / Unload All

Unloads previously loaded models and frees their memory.

### Is Embedded Inference Available

Returns `true` if llama.cpp libraries were found at build time. Use this to check before offering embedded inference options to users.

### Check Server Health

Sends a GET request to verify an HTTP server is running and reachable.

### List Available Models

Queries an HTTP server for all available models. Returns an array of model names.

---

## Chat Settings

| Field | Type | Description |
|---|---|---|
| **Model** | `FString` | Model name (for HTTP) or alias (for Embedded). |
| **Messages** | `TArray<FGenAILlamaChatMessage>` | Conversation history. Each message has Role, Content, and optional Images. |
| **Connection** | `FGenAILlamaConnectionSettings` | Provider, Base URL, API Key. |
| **System Prompt** | `FString` | Optional. Automatically prepended as the first message with role `system`. |
| **Options** | `FGenAILlamaGenerationOptions` | Temperature, Top P, Max Tokens, Seed, Stop sequences. |
| **Format** | `FString` | Set to `json` to force JSON output from the model. |

## Connection Settings

| Field | Type | Description | Default |
|---|---|---|---|
| **Provider** | `EGenAILlamaProvider` | `Ollama`, `OpenAI Compatible`, or `Embedded (llama.cpp)` | `Ollama` |
| **Base URL** | `FString` | Server address. Not used for Embedded provider. | `http://localhost:11434` |
| **API Key** | `FString` | Optional Bearer token for authentication. Not used for Embedded. | Empty |

## Generation Options

All options default to `-1` (use the model's default value).

| Option | Type | Description | Range |
|---|---|---|---|
| **Temperature** | `float` | Randomness. Higher = more creative. | 0.0 - 2.0 |
| **Top P** | `float` | Nucleus sampling threshold. | 0.0 - 1.0 |
| **Max Tokens** | `int32` | Maximum tokens to generate. `-1` = unlimited. | 1+ |
| **Seed** | `int32` | Random seed for reproducible output. | 0+ |
| **Stop** | `TArray<FString>` | Stop sequences. | -- |

---

## Multimodal Vision

For models that support image input (e.g., `llava`, `llama3.2-vision`, `gpt-4o`):

**Option 1 — Images As Textures (Recommended):**
Add `UTexture2D` references to the `ImagesAsTextures` array on any chat message. The plugin converts them to PNG Base64 internally.

**Option 2 — Images (Base64):**
Add pre-encoded Base64 image strings to the `Images` array.

Image format is handled automatically per provider:
- **Ollama:** Base64 strings in the `images` array.
- **OpenAI Compatible:** Content parts with `image_url` data URIs.
- **Embedded:** Not yet supported for multimodal models.

---

## C++ API

Add `"GenAILlama"` to your module's `Build.cs` dependencies:

```csharp
PrivateDependencyModuleNames.Add("GenAILlama");
```

### Chat Completion (C++)

```cpp
#include "Models/GenAILlamaChat.h"

FGenAILlamaChatSettings Settings;
Settings.Model = TEXT("llama3");
Settings.Connection.Provider = EGenAILlamaProvider::Ollama;
Settings.Connection.BaseUrl = TEXT("http://localhost:11434");
Settings.SystemPrompt = TEXT("You are a helpful NPC in a fantasy RPG.");

FGenAILlamaChatMessage Msg;
Msg.Role = TEXT("user");
Msg.Content = TEXT("What quests do you have for me?");
Settings.Messages.Add(Msg);

FOnGenAILlamaChatCompletionResponse Callback;
Callback.BindLambda([](const FGenAILlamaChatResponse& Response)
{
    if (Response.bSuccess)
    {
        UE_LOG(LogTemp, Log, TEXT("Response: %s"), *Response.Message.Content);
    }
});

UGenAILlamaChat::SendChatRequest(Settings, Callback);
```

### Streaming (C++)

```cpp
#include "Models/GenAILlamaChatStream.h"

FOnGenAILlamaChatStreamResponse StreamCallback;
StreamCallback.BindLambda([](const FGenAILlamaStreamEvent& Event)
{
    UE_LOG(LogTemp, Log, TEXT("Token: %s (Done: %s)"),
        *Event.PartialMessage.Content,
        Event.bIsFinished ? TEXT("true") : TEXT("false"));
});

UGenAILlamaChatStream::SendStreamChatRequest(Settings, StreamCallback);
```

### Embedded Inference (C++)

```cpp
#include "Models/GenAILlamaModelManager.h"

if (UGenAILlamaModelManager::IsEmbeddedInferenceAvailable())
{
    Settings.Connection.Provider = EGenAILlamaProvider::Embedded;
    Settings.Model = TEXT("npc-brain"); // alias from LoadEmbeddedModel
    UGenAILlamaChat::SendChatRequest(Settings, Callback);
}
```

---

## Building Conversations

Maintain an array of messages and append both user input and assistant responses:

```cpp
TArray<FGenAILlamaChatMessage> ConversationHistory;

void AMyActor::SendMessage(const FString& UserInput)
{
    FGenAILlamaChatMessage UserMessage;
    UserMessage.Role = TEXT("user");
    UserMessage.Content = UserInput;
    ConversationHistory.Add(UserMessage);

    FGenAILlamaChatSettings Settings;
    Settings.Model = TEXT("llama3");
    Settings.Messages = ConversationHistory;

    TWeakObjectPtr<AMyActor> WeakThis(this);

    UGenAILlamaChat::SendChatRequest(Settings,
        FOnGenAILlamaChatCompletionResponse::CreateLambda(
            [WeakThis](const FGenAILlamaChatResponse& Response)
        {
            if (!WeakThis.IsValid()) return;
            if (Response.bSuccess)
            {
                WeakThis->ConversationHistory.Add(Response.Message);
            }
        })
    );
}
```

---

## Embedded Inference Setup

Embedded inference runs llama.cpp directly inside your game process. This is optional — HTTP providers work out of the box.

### Option A: Download Prebuilt Libraries (Easiest)

Download prebuilt shared libraries from [llama.cpp GitHub Releases](https://github.com/ggml-org/llama.cpp/releases) and place them in `ThirdParty/LlamaCpp/lib/<Platform>/`. Available for **Windows, macOS, and Linux**.

| Platform | Archive Pattern |
|---|---|
| Windows (NVIDIA) | `llama-b*-bin-win-cuda-cu*.*.zip` |
| Windows (AMD/Intel) | `llama-b*-bin-win-vulkan-*.zip` |
| macOS (Apple Silicon) | `llama-b*-bin-macos-arm64.zip` |
| Linux (NVIDIA) | `llama-b*-bin-ubuntu-x64-cuda-cu*.*.tar.gz` |

Copy the `.dll` / `.dylib` / `.so` files into the platform directory, rebuild your project, and you're done.

### Option B: Compile From Source (Advanced)

Build llama.cpp yourself for custom GPU backends, optimizations, or mobile platforms (Android/iOS).

```bash
git clone https://github.com/ggml-org/llama.cpp.git
cd llama.cpp
cmake -B build -DBUILD_SHARED_LIBS=OFF -DGGML_CUDA=ON
cmake --build build --config Release
```

Copy the `.lib` / `.a` files into `ThirdParty/LlamaCpp/lib/<Platform>/`.

### How Auto-Detection Works

The plugin automatically detects libraries at compile time:

- **Static libraries** (`.lib`/`.a`) found → linked at compile time
- **Shared libraries** (`.dll`/`.dylib`/`.so`) found → loaded at runtime
- **No libraries found** → embedded inference disabled, HTTP providers still work

### Directory Structure

```
ThirdParty/LlamaCpp/
    include/            <- Headers (already included, do not modify)
    lib/
        Win64/          <- .lib or .dll files
        Mac/            <- .a or .dylib files
        Linux/          <- .a or .so files
        Android/        <- .a files (ARM64, compile only)
        IOS/            <- .a files (ARM64, compile only)
```

For full per-platform instructions, see the [Embedded Inference Setup Guide](/docs/genai-llama/embedded-setup/).

### GPU Backend Notes

| Platform | Recommended Backend | Notes |
|---|---|---|
| Windows (NVIDIA) | CUDA | Best performance on NVIDIA GPUs |
| Windows (AMD/Intel) | Vulkan | Cross-vendor GPU support |
| macOS / iOS | Metal | Hardware accelerated on Apple Silicon |
| Linux (NVIDIA) | CUDA | Best performance |
| Linux (AMD) | Vulkan | Cross-vendor |
| Android | Vulkan | Supported on most modern devices |
| Any | CPU | Always works, just slower |

---

## Platform Support

| Platform | HTTP Providers | Embedded Inference |
|---|---|---|
| Windows (x64) | Yes | Yes (CUDA, Vulkan, CPU) |
| macOS | Yes | Yes (Metal, CPU) |
| Linux (x64) | Yes | Yes (CUDA, Vulkan, CPU) |
| Android (ARM64) | Yes | Yes (Vulkan, CPU) |
| iOS (ARM64) | Yes | Yes (Metal, CPU) |
| PS4 | Yes | No |
| Xbox One | Yes | No |
| Switch | Yes | No |
| HoloLens | Yes | No |

---

## Cancellation

All async actions support cancellation via `Cancel()`:

- **HTTP requests:** Cancelled immediately.
- **Streaming:** Stream terminated, no further tokens delivered.
- **Embedded inference:** Thread-safe cancel flag stops generation on the next token boundary.

---

## Troubleshooting

#### Server Not Responding
- Make sure your inference server is running. Use **Check Server Health** to verify.
- Verify accessibility by visiting the server URL in your browser.

#### Model Not Found
- Ensure the model is pulled/downloaded for your server.
- Model names are case-sensitive (e.g., `llama3`, not `Llama3`).

#### Embedded Inference Not Available
- Check build log for `GenAILlama: llama.cpp libraries found` or `not found`.
- Verify library files (`.lib`/`.a`/`.dll`/`.dylib`/`.so`) are in the correct `ThirdParty/LlamaCpp/lib/<Platform>/` directory.
- See the [Embedded Inference Setup Guide](/docs/genai-llama/embedded-setup/) for detailed troubleshooting.

#### Multimodal Not Working
- Use a vision-capable model (e.g., `llava`, `llama3.2-vision`).
- Embedded inference does not yet support multimodal models.
