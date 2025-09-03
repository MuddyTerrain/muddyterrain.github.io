---
layout: documentation
title: Authentication and Security
permalink: /docs/genai-unreal/authentication-and-security/
nav_order: 5
---

Security is paramount when integrating AI services. Mismanaged API keys can lead to unauthorized usage, unexpected costs, or data leaks. This guide walks through secure storage, access control, and best practices to keep your game and infrastructure safe.

---

## 1. Secure Key Storage: The Settings Panel

Never hard-code API keys or commit them to your repository. The plugin provides a centralized and encrypted method for storing keys locally during development.

1.  In the Unreal Editor, navigate to **Edit > Project Settings**.
2.  Scroll down to the **Plugins** section on the left and click on **GenAI Plugin**.

   <div class="image-wrapper">
       <figure>
           <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1751294875/d6a467e8-b94a-498b-b062-432eaef4e81b.webp" alt="Settings panel for API keys" style="width: 100%;">
           <figcaption class="image-caption">
           Enter your API keys here; they are stored securely for local development.
           </figcaption>
       </figure>
   </div>

3.  Paste your **OpenAI**, **Anthropic**, or other provider keys into the corresponding fields.
4.  These keys are immediately encrypted and saved to `YourProject/Saved/Config/GenAI/secureconfig.bin`.

    > **Important:** This file is non-portable and machine-specific. It cannot be decrypted outside of the project on the machine where it was created.

5.  Prevent this file from ever being committed to your repository by adding it to your `.gitignore` file:
    ```gitignore
    # Ignore encrypted API keys for GenAI plugin
    /Saved/Config/GenAI/secureconfig.bin
    ```

---

## 2. Production Security: Using a Proxy Server

For any shipped product or collaborative project, using a proxy server is the industry-standard approach for protecting your API keys.

### What is a Proxy Server?

A proxy server is a backend service that **you create and host**. It acts as a secure middleman between your game clients and the AI provider. The flow works like this:
1.  Your Unreal application sends a request to your proxy server (e.g., `https://api.mygame.com/openai`).
2.  Your proxy server receives the request, securely attaches the appropriate API key (which is stored safely on the server), and then forwards the request to the actual AI provider (e.g., `api.openai.com`).
3.  The AI provider responds to your proxy, which then relays the response back to your game client.

> **Your Responsibility:** Building, deploying, and maintaining this backend server is a significant task and is your responsibility. The GenAI for Unreal plugin only provides the functionality to **connect to** your existing proxy; it does not provide the proxy server itself.

### Key Benefits of a Proxy

-   **Ultimate Security:** API keys are never stored on client machines and are never exposed to network traffic.
-   **Centralized Control:** You can audit usage, implement rate-limiting, and rotate keys on your backend without needing to update the game client.
-   **Custom Logic:** Add caching, logging, or input validation layers on your server before communicating with the AI provider.

### How to Connect the Plugin to Your Proxy

Once your backend server is operational:

1.  In **Project Settings > Plugins > GenAI Plugin**, find the **API Endpoint Management** section.
2.  Check the **Override** box for the provider you wish to proxy.
3.  Enter the URL of your proxy endpoint (e.g., `https://api.mygame.com/v1/chat`).

All requests to that provider from the plugin will now be routed through your custom server.

---

## 3. General Security Best Practices

-   **Understand Local Encryption:** The `secureconfig.bin` file is encrypted using a key. This is effective at preventing accidental key exposure (e.g., in screenshots, screen shares). However, a determined attacker with access to the game's files could potentially reverse-engineer the decryption process. **Never rely on this method for shipping a commercial product.**
-   **Key Rotation:** Regularly rotate API keys and immediately revoke any unused keys in your AI provider's dashboard.
-   **Environment-Specific Keys:** Use different keys for development, staging, and production environments to limit the impact of a potential compromise.
-   **Scoped Permissions:** When supported by the provider, create keys with the minimum required permissions (e.g., read-only, specific model access).
-   **Usage Monitoring:** Set up alerts in your provider's billing dashboard to be notified of any unexpected spikes in API calls.