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

1.  Navigate to the [OpenAI Platform](https://platform.openai.com/signup) and create an account or log in.
2.  From the dashboard menu, select **API Keys**.
3.  Click **"Create new secret key,"** give it a descriptive name (e.g., `MyUnrealProject_Dev`), and copy the key immediately. **For security, OpenAI will not show you the key again.**
4.  *(Recommended)* Visit the **Billing** section to set usage limits and prevent unexpected costs.

### Anthropic (Claude Models)

Anthropic offers the Claude family of models, known for their large context windows and strong performance in complex reasoning.

1.  Go to the [Anthropic Console](https://console.anthropic.com/) and sign in.
2.  In your **Account Settings**, find the **API Keys** section.
3.  Generate a new key, name it according to its use (e.g., `Development`), and copy it.

### Google Gemini

Google's Gemini models offer powerful multimodal capabilities and a generous free tier for developers.

1.  Visit the [Google AI Studio](https://ai.google.dev/) to get started.
2.  Follow the on-screen instructions to create or select a project and generate your API key.

✨ **Developer Offer: Free Tier for Gemini**
Google provides a **free tier** for the Gemini API, designed for development and testing. This is an excellent way to experiment with the model's capabilities without initial costs. The free tier has certain rate limits, but usage within Google AI Studio itself is completely free in supported regions.

### Other Providers

-   **DeepSeek:** [platform.deepseek.com](https://platform.deepseek.com/)
-   **XAI (Grok):** [x.ai](https://x.ai/)

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