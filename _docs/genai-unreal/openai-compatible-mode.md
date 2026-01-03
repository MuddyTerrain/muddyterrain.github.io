---
layout: documentation
title: OpenAI Compatible Mode
permalink: /docs/genai-unreal/openai-compatible-mode/
nav_order: 16
---

OpenAI Compatible Mode allows you to seamlessly switch all OpenAI-related API calls (chat completions, real-time conversations, text-to-speech, image generation, and more) to use a different API key and endpoint. This feature is particularly useful for routing requests to local LLMs, self-hosted models, or other OpenAI-compatible providers without modifying your game code.

---

## 1. Setting Up the OpenAI Compatible API Key

Before enabling the mode, you need to configure the API key for the compatible provider.

1.  In the Unreal Editor, navigate to **Edit > Project Settings**.
2.  Scroll down to the **Plugins** section on the left and click on **GenAI Plugin**.

   <div class="image-wrapper">
       <figure>
           <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1767465610/1c555769-98f7-4131-a398-f97e90b81a1c.webp" alt="Settings panel for API keys" style="width: 100%;">
           <figcaption class="image-caption">
           The GenAI Plugin settings panel showing API key fields.
           </figcaption>
       </figure>
   </div>

3.  Locate the **OpenAI Compatible** section and enter your API key in the corresponding field.
4.  Configure the custom endpoint if your provider uses a different base URL than the standard OpenAI API. In the example above we have picked Alibaba's Qwen. 

   > **Note:** The OpenAI Compatible key is stored securely using the same encryption as other API keys in `YourProject/Saved/Config/GenAI/secureconfig.bin`.

---

## 2. Enabling and Disabling OpenAI Compatible Mode

Use the provided Blueprint nodes to control when OpenAI Compatible Mode is active. When enabled, all requests that would normally target OpenAI (such as chat completions, image generation, TTS, etc.) will automatically use the OpenAI Compatible API key and endpoint instead.

### Blueprint Usage

<div class="image-wrapper">
    <figure> 
        <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1767465741/8d337c6c-6a63-4d76-a31e-da6fb64f7958.webp" alt="Set OpenAI Compatible Mode Blueprint Node" style="width: 100%;">
        <figcaption class="image-caption">
        The "Set OpenAI Compatible Mode" Blueprint node.
        </figcaption>
    </figure>
</div>

- **Set OpenAI Compatible Mode**: Call this node with `bEnable` set to `true` to activate the mode, or `false` to disable it and revert to standard OpenAI settings.
- **Is OpenAI Compatible Mode Enabled**: Use this node to check the current state of the mode.

### Example: Toggling Between Providers

```blueprint
// Pseudo-code for Blueprint
BeginPlay:
    If PlayerPrefersLocalLLM:
        Set OpenAI Compatible Mode (Enable: true)
    Else:
        Set OpenAI Compatible Mode (Enable: false)

// Later in game:
Request OpenAI Chat Completion (Messages, Settings, OnResponse)
    // This will use OpenAI Compatible key if mode is enabled
```

---

## 3. Supported Providers and Models

OpenAI Compatible Mode supports a wide range of providers, from hosted cloud services to local models running on your machine. This allows for incredible flexibility, cost savings, and privacy. Below is a list of tested and supported providers, including setup instructions and example models.

### Alibaba Qwen
Alibaba's Qwen series offers powerful multimodal models, including vision-language models for image understanding and generation.

- **Endpoint:** `https://dashscope-intl.aliyuncs.com/compatible-mode/v1`
- **API Key:** Obtain from [Alibaba Cloud Model Studio](https://www.alibabacloud.com/help/en/model-studio/qwen-vl-compatible-with-openai).
- **Example Models:** `qvq-max`, `qvq-max-latest`, `qwen-vl-max`, `qwen-vl-plus`, `qwen2.5-vl-72b-instruct`, `qwen2.5-vl-32b-instruct`, `qwen2.5-vl-7b-instruct`, `qwen2.5-vl-3b-instruct`.
- **More Info:** [Qwen VL Documentation](https://www.alibabacloud.com/help/en/model-studio/qwen-vl-compatible-with-openai?spm=a2c63.p38356.help-menu-2400256.d_2_12_2.229a6972qYUoT0).

### Ollama (Local Models)
Run AI models locally on your machine for maximum privacy and offline capability. Perfect for development and testing.

- **Endpoint:** `http://localhost:11434/v1`
- **API Key:** Not required (local).
- **Setup:** Install Ollama from [ollama.com](https://ollama.com), then pull models with `ollama pull <model-name>`.
- **Example Models:** `gemma3:1b`, `nemotron-3-nano`, `gpt-oss`, `llama3.1`, `phi3` (Phi-3 family by Microsoft), `llama3.2`.
- **Note:** Local models can be very large (GBs) and may impact game performance. Not recommended for customer-facing products.
- **More Info:** [Ollama OpenAI Compatibility](https://docs.ollama.com/api/openai-compatibility).

### Mistral AI
Mistral offers fast, efficient models with strong reasoning capabilities.

- **Endpoint:** `https://api.mistral.ai/v1`
- **API Key:** Get from [Mistral Admin](https://admin.mistral.ai/organization/api-keys).
- **Example Models:** `mistral-large-2512`, `mistral-medium-2508`, `mistral-small-2506`, `ministral-14b-2512`, `ministral-8b-2512`, `ministral-3b-2512`, `magistral-medium-2509`, `magistral-small-2509`.
- **More Info:** [Mistral Completion API](https://docs.mistral.ai/capabilities/completion/usage).

### Groq
Groq provides ultra-fast inference using their custom hardware.

- **Endpoint:** `https://api.groq.com/openai/v1`
- **API Key:** Obtain from [Groq Console](https://console.groq.com/keys).
- **Example Models:** Various Groq-optimized models (check their docs for current list).
- **More Info:** [Groq Overview](https://console.groq.com/docs/overview).

### OpenRouter
A unified API for accessing multiple AI providers through a single interface.

- **Endpoint:** `https://openrouter.ai/api/v1`
- **API Key:** Get from [OpenRouter](https://openrouter.ai/keys).
- **Example Models:** Access to hundreds of models from various providers.
- **More Info:** [OpenRouter Quickstart](https://openrouter.ai/docs/quickstart).

### Meta Llama
Meta's open-source Llama models, hosted via their API.

- **Endpoint:** `https://api.llama.com/compat/v1`
- **API Key:** Obtain from [Meta Llama Developer](https://llama.developer.meta.com/).
- **Example Models:** Various Llama versions (check their docs).
- **More Info:** [Llama Compatibility](https://llama.developer.meta.com/docs/features/compatibility).

### BigModel GLM-4
Chinese AI provider offering GLM-4 models with strong multilingual capabilities.

- **Endpoint:** `https://open.bigmodel.cn/api/paas/v4`
- **API Key:** Get from [BigModel](https://open.bigmodel.cn/).
- **Example Models:** `glm-4` and variants.
- **More Info:** [BigModel OpenAI SDK](https://open.bigmodel.cn/dev/api/thirdparty-frame/openai-sdk).

## 4. How It Works Internally

When OpenAI Compatible Mode is enabled:

- All OpenAI API calls are routed through the `OpenAICompatible` provider settings.
- The plugin automatically selects the appropriate API key based on the current mode.
- No changes to your existing Blueprints or C++ code are required.
- You can switch modes at runtime without restarting the game.

### Affected Features

The following OpenAI features are redirected when the mode is enabled:

- Chat Completions (standard and streaming)
- Real-time Conversational AI
- Text-to-Speech (TTS)
- Speech-to-Text (Transcription)
- Image Generation and Editing
- Any other OpenAI-based API calls

### C++ Implementation Details

For developers working in C++, the mode is managed through static functions in `UGenUtils`:

```cpp
// Enable the mode
UGenUtils::SetOpenAICompatibleMode(true);

// Check if enabled
bool bIsEnabled = UGenUtils::IsOpenAICompatibleModeEnabled();

// The API key retrieval automatically handles the mode
FString ApiKey = UGenSecureKey::GetGenerativeAIApiKey(EGenAIOrgs::OpenAI);
// This returns the OpenAI Compatible key if mode is enabled
```

---

## 5. Use Cases

### Local LLM Development

During development, you can run a local OpenAI-compatible server (like Ollama or LM Studio) and use this mode to test your game with local models without changing any code.

### Provider Switching

Easily switch between different OpenAI-compatible providers (like Together AI, OpenRouter, or custom deployments) by updating the API key and endpoint in settings.

### Fallback Mechanisms

Implement fallback logic where you can switch to a compatible provider if the primary OpenAI service is unavailable.

---

## 6. Best Practices

- **Test Thoroughly**: Always test your game with both modes enabled and disabled to ensure compatibility.
- **Secure Storage**: Treat your OpenAI Compatible API key with the same security as your primary keys.
- **Endpoint Configuration**: If using a custom endpoint, ensure it's properly formatted (e.g., `https://api.example.com/v1`).
- **Runtime Switching**: You can enable/disable the mode at runtime, allowing players to choose their preferred provider in-game.

---

## Troubleshooting

**Q: My requests are still using the standard OpenAI key even when the mode is enabled.**  
A: Ensure you've entered a valid API key in the "OpenAI Compatible" field in settings. Also, verify that the mode is actually enabled by checking `Is OpenAI Compatible Mode Enabled`.

**Q: The custom endpoint isn't working.**  
A: Check that the endpoint URL is correct and accessible. Some providers may require specific URL formats or additional headers.

**Q: Can I use this for non-OpenAI compatible providers?**  
A: This mode is specifically for OpenAI-compatible APIs. For other providers, use their dedicated settings and nodes.