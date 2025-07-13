---
layout: documentation
title: Authentication and Security
permalink: /docs/genai-unreal/authentication-and-security/
nav_order: 5
---

Security is paramount when integrating AI services. Mismanaged API keys can lead to unauthorized usage, unexpected costs, or data leaks. This guide walks through secure storage, access control, and best practices to keep your game and infrastructure safe.

## Setting API Keys

Never hard-code API keys or commit them to your repository. The plugin provides a centralized, encrypted settings panel:

1. In the Unreal Editor, navigate to **Edit > Project Settings**.
2. Scroll down to the **Plugins** section on the left and click on **GenAI Plugin**.

   <div class="image-wrapper">
       <figure>
           <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1751294875/d6a467e8-b94a-498b-b062-432eaef4e81b.webp" alt="Settings panel for API keys" style="width: 100%;">
           <figcaption class="image-caption">
           Enter your API keys here; they are stored securely.
           </figcaption>
       </figure>
   </div>

3. Paste your **OpenAI**, **Anthropic**, or other provider keys into the corresponding fields.
4. Keys are encrypted and saved to `Saved/Config/GenAI/secureconfig.bin` (binary format).

   > **Note:** This file is non-portable and cannot be decrypted outside this project.

5. Prevent accidental commits by adding to your `.gitignore`:
   ```gitignore
   # Ignore encrypted API keys for GenAI plugin
   /Saved/Config/GenAI/secureconfig.bin
   ```

## Using a Proxy Server (Optional, For Production)

### Why use a proxy?

- **Security:** API keys reside on a controlled backend, never exposed to clients.
- **Centralized Control:** Audit usage, rate-limit requests, and rotate keys without updating clients.
- **Custom Logic:** Implement caching, logging, or input validation in your server layer.

### Retargeting the plugin to proxy

1. In **Project Settings > Plugins > GenAI Plugin**, find **API Endpoint Management**.
2. Check **Override** for the provider you wish to proxy.
3. Enter your backend endpoint (e.g., `https://api.mygame.com/openai`).

All requests to that provider will now route through your proxy server.

## Best Practices

- Rotate API keys regularly and revoke unused keys in your AI provider dashboard.
- Use separate keys per environment (development, staging, production) to limit blast radius.
- Store CI/CD secrets using environment variables or a secure vault (e.g., GitHub Secrets, Azure Key Vault).
- Restrict permissions on your API keys (scopes, IP allowlists) when supported.
- Monitor usage and set up alerts for unexpected spikes in API calls.
- In team settings, share access via your preferred secret manager rather than plaintext files.

By following these recommendations, you can ensure your GenAI integration remains secure, reliable, and maintainable.

