---
layout: documentation
title: Additional Notes
permalink: /docs/genai-china/additional-notes/
nav_order: 11
---

This final section contains important supplementary information, including compatibility details, troubleshooting tips, and best practices to ensure a smooth and successful integration of the Gen AI China plugin.

---

## Compatibility

The plugin is designed for broad compatibility across modern Unreal Engine versions and platforms.

-   **Unreal Engine:** Fully compatible with versions of **UE 5.1+**.
-   **Blueprint & C++:** The plugin offers **100% feature parity** between Blueprints and C++, ensuring all developers have access to the same powerful tools.

---

## Troubleshooting Common Issues

If you encounter problems, here are the most common areas to investigate:

#### **API Key & Authentication Issues**
-   **Invalid Key:** Double-check that your API keys are correctly entered in **Project Settings** and that the associated account is active with a valid payment method.
-   **Corrupted Config:** In rare cases, the `secureconfig.bin` file can become corrupted. Delete it from `YourProject/Saved/Config/GenAIChineseModels/` and re-enter your keys in the editor.

#### **Network & Connection Problems**
-   **No Internet:** Verify that the editor has a stable internet connection.
-   **Firewall:** Ensure your firewall is not blocking the Unreal Editor from making outbound HTTPS requests to the provider endpoints (e.g., `aliyuncs.com`, `moonshot.cn`, `bytepluses.com`).
-   **Rate Limiting:** If you make many requests in a short time, the AI provider may temporarily block you. Wait a few minutes before trying again.

---

## Development & Production Best Practices

Following these guidelines will help you build a more robust, secure, and maintainable project.

#### **Security**
1.  **Never hard-code API keys.** Use the plugin's settings panel for local development.
2.  **For production builds, consider a proxy server.** While the plugin does not have a built-in proxy feature, routing API calls through your own backend is the industry standard for protecting keys in a shipped product.
3.  **Validate user input** before sending it to an AI service to prevent prompt injection or other exploits.

#### **Performance & Cost**
-   **Use Streaming:** For any real-time chat interface, use streaming to provide immediate feedback to the user and improve perceived performance.
-   **Cache Responses:** If you expect to request the same information repeatedly (e.g., a character's backstory), cache the response in a variable or data table to avoid redundant API calls and save costs.
-   **Monitor Token Usage:** Keep an eye on your API provider's dashboard to understand your costs. Long conversation histories can consume a large number of tokens.

#### **C++ Development**
-   **Always use `TWeakObjectPtr`** in asynchronous callbacks to prevent crashes from dangling pointers if the calling object is destroyed mid-request.

---

Thank you for choosing Gen AI China. We can't wait to see the incredible experiences you build!