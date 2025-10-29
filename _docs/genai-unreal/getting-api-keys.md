---
layout: documentation
title: Getting API Keys
permalink: /docs/genai-unreal/getting-api-keys/
nav_order: 4
---

To connect your Unreal project to powerful AI models, you first need to obtain API keys from the respective service providers. This guide provides direct links and best practices to get you started securely and efficiently.

---

## Supported AI Providers

Below are the primary AI services integrated with the plugin. Each has a unique portal for generating and managing API keys.

### OpenAI (GPT Models, DALL·E, Whisper)

OpenAI provides access to industry-leading models for text generation, image creation, and speech-to-text.
<div class="image-wrapper">
   <figure>
       <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1752497514/27bc21c8-da55-40fe-8860-3e45ace8d709.webp" alt="Settings panel for API keys" style="width: 50%;">
       <figcaption class="image-caption">
       Enter your API keys here; they are stored securely for local development.
       </figcaption>
   </figure>
</div>

1.  Navigate to the <a href="https://platform.openai.com/signup" class="track-click" data-event-name="lnk_clk_openai_platform" data-event-location="docs_getting_api_keys" target="_blank" rel="noopener noreferrer">OpenAI Platform</a> and create an account or log in.
2.  From the dashboard menu, select **API Keys**.
3.  Click **"Create new secret key,"** give it a descriptive name (e.g., `MyUnrealProject_Dev`), and copy the key immediately. **For security, OpenAI will not show you the key again.**
4.  *(Recommended)* Visit the **Billing** section to set usage limits and prevent unexpected costs.

### Anthropic (Claude Models)

Anthropic offers the Claude family of models, known for their large context windows and strong performance in complex reasoning.

1.  Go to the <a href="https://console.anthropic.com/" class="track-click" data-event-name="lnk_clk_anthropic_console" data-event-location="docs_getting_api_keys" target="_blank" rel="noopener noreferrer">Anthropic Console</a> and sign in.
2.  In your **Account Settings**, find the **API Keys** section.
3.  Generate a new key, name it according to its use (e.g., `Development`), and copy it.

### Google Gemini

Google's Gemini models offer powerful multimodal capabilities and a generous free tier for developers.

1.  Visit the <a href="https://ai.google.dev/" class="track-click" data-event-name="lnk_clk_google_ai_studio" data-event-location="docs_getting_api_keys" target="_blank" rel="noopener noreferrer">Google AI Studio</a> to get started.
2.  Follow the on-screen instructions to create or select a project and generate your API key.

<div style="padding: 10px 15px; background-color: #e6f7ff; border-left: 4px solid #07a2ff; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold; color: #1f6a9c;">✨ Developer Offer: Free Tier for Gemini</p>
  <p style="margin: 5px 0 0 0; color: #1f6a9c;">Google provides a <strong>free tier</strong> for the Gemini API, designed for development and testing. This is an excellent way to experiment with the model's capabilities without initial costs. The free tier has certain rate limits, but usage within Google AI Studio itself is completely free in supported regions.</p>
</div>

### ElevenLabs (High-Quality TTS & Sound Effects)

ElevenLabs is a leader in realistic, expressive text-to-speech and generative audio.

1.  Go to the <a href="https://elevenlabs.io/" class="track-click" data-event-name="lnk_clk_elevenlabs_platform" data-event-location="docs_getting_api_keys" target="_blank" rel="noopener noreferrer">ElevenLabs website</a> and sign up or log in.
2.  Click on your profile icon in the top-right corner and select **"Profile + API Key"**.
3.  You can find and copy your API key from this page.

<div style="padding: 10px 15px; background-color: #e6f7ff; border-left: 4px solid #07a2ff; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold; color: #1f6a9c;">✨ Developer Offer: Free Tier for ElevenLabs</p>
  <p style="margin: 5px 0 0 0; color: #1f6a9c;">ElevenLabs provides a <strong>free tier</strong> for its API, designed for development and testing. This is an excellent way to experiment with the model's capabilities without initial costs. The free tier has certain rate limits.</p>
</div>

### Other Providers

-   **DeepSeek:** <a href="https://platform.deepseek.com/" class="track-click" data-event-name="lnk_clk_deepseek_platform" data-event-location="docs_getting_api_keys" target="_blank" rel="noopener noreferrer">platform.deepseek.com</a>
-   **XAI (Grok):** <a href="https://x.ai/" class="track-click" data-event-name="lnk_clk_xai" data-event-location="docs_getting_api_keys" target="_blank" rel="noopener noreferrer">x.ai</a>

Follow the instructions on each provider's platform to generate and manage your keys.

---

## Storing Your API Keys Securely

Never hard-code API keys directly in your source code. The plugin provides a secure, centralized panel for managing your keys.

1.  In the Unreal Editor, navigate to **Edit > Project Settings**.
2.  Scroll to the **Plugins** section and select **GenAI Plugin**.
3.  Enter your API keys into the corresponding fields for each provider.

These keys are automatically saved to an encrypted binary file at `YourProject/Saved/Config/GenAI/secureconfig.bin`. This file should **never** be committed to source control. Ensure your project's `.gitignore` file includes the `Saved/` directory to prevent leaking your keys.

For production environments requiring maximum security, please see the **[Authentication & Security](/docs/genai-unreal/authentication-and-security/)** guide to learn about using a proxy server.

---

## Next Steps

Now that you have your keys, you can configure how the plugin uses them.

➡️ **Continue to: [Authentication & Security](/docs/genai-unreal/authentication-and-security/)**