---
layout: documentation
title: Authentication and Security
permalink: /docs/genai-china/authentication-and-security/
nav_order: 4
---

Security is paramount when integrating AI services. Mismanaged API keys can lead to unauthorized usage and unexpected costs. This guide walks through the secure storage method provided by the plugin and discusses best practices for production environments.

---

## 1. Secure Key Storage: The Settings Panel

Never hard-code API keys or commit them to your repository. The plugin provides a centralized and encrypted method for storing keys locally during development.

1.  In the Unreal Editor, navigate to **Edit > Project Settings**.
2.  Scroll down to the **Plugins** section on the left and click on **GenAI Chinese Models**.
3.  Paste your **Alibaba**, **Moonshot AI**, and **Bytedance** keys into the corresponding fields.
4.  These keys are immediately encrypted and saved to a binary file. By default, this is `YourProject/Saved/Config/GenAIChineseModels/secureconfig.bin`.

    > **Important:** This file is non-portable and machine-specific. It cannot be decrypted outside of the project on the machine where it was created.

5.  Prevent this file from ever being committed to your repository by adding it to your `.gitignore` file:
    ```gitignore
    # Ignore encrypted API keys for GenAI China plugin
    /Saved/Config/GenAIChineseModels/
    ```

## For Packaged Builds:
Storing API keys in packaged builds is a security risk. This is what the OpenAI API documentation says about it for example:

"Exposing your OpenAI API key in client-side environments like browsers or mobile apps allows malicious users to take that key and make requests on your behalf – which may lead to unexpected charges or compromise of certain account data. Requests should always be routed through your own backend server where you can keep your API key secure."

---

## 3. General Security Best Practices

-   **Understand Local Encryption:** The `secureconfig.bin` file is effective at preventing accidental key exposure (e.g., in screenshots). However, a determined attacker with access to the game's files could potentially reverse-engineer the decryption process. **Never rely on this method for shipping a commercial product.**
-   **Key Rotation:** Regularly rotate API keys and immediately revoke any unused keys in your AI provider's dashboard.
-   **Scoped Permissions:** When supported by the provider, create keys with the minimum required permissions.
-   **Usage Monitoring:** Set up alerts in your provider's billing dashboard to be notified of any unexpected spikes in API calls.