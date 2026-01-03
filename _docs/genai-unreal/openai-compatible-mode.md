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

## 3. How It Works Internally

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

## 4. Use Cases

### Local LLM Development

During development, you can run a local OpenAI-compatible server (like Ollama or LM Studio) and use this mode to test your game with local models without changing any code.

### Provider Switching

Easily switch between different OpenAI-compatible providers (like Together AI, OpenRouter, or custom deployments) by updating the API key and endpoint in settings.

### Fallback Mechanisms

Implement fallback logic where you can switch to a compatible provider if the primary OpenAI service is unavailable.

---

## 5. Best Practices

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
A: This mode is specifically for OpenAI-compatible APIs. For other providers, use their dedicated settings and nodes.</content>
<parameter name="filePath">c:\Core\Code\Ship\muddyterrain.github.io\_docs\genai-unreal\openai-compatible-mode.md