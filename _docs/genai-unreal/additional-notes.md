---
layout: documentation
title: Additional Notes
permalink: /docs/genai-unreal/additional-notes/
nav_order: 16
---

This final section contains important supplementary information, including compatibility details, troubleshooting tips, and best practices to ensure a smooth and successful integration of the GenAI for Unreal plugin.

---

## Compatibility

The plugin is designed for broad compatibility across modern Unreal Engine versions and platforms.

-   **Unreal Engine:** Fully compatible with versions of **UE 5.1+**.
-   **Platform Support:** Built for **Windows**, **Mac**, **Linux** and **Mobile**, console support is ongoing and will be expanded in future updates.
-   **Blueprint & C++:** The plugin offers **100% feature parity** between Blueprints and C++, ensuring all developers have access to the same powerful tools.

---

## Troubleshooting Common Issues

If you encounter problems, here are the most common areas to investigate:

#### **API Key & Authentication Issues**
-   **Invalid Key:** Double-check that your API keys are correctly entered in **Project Settings** and that the associated account is active with a valid payment method.
-   **Corrupted Config:** In rare cases, the `secureconfig.bin` file can become corrupted. Delete it from `YourProject/Saved/Config/GenAI/` and re-enter your keys in the editor.

#### **Network & Connection Problems**
-   **No Internet:** Verify that the editor has a stable internet connection.
-   **Firewall:** Ensure your firewall is not blocking the Unreal Editor from making outbound HTTPS requests.
-   **Rate Limiting:** If you make many requests in a short time, the AI provider may temporarily block you. Wait a few minutes before trying again.

---

## Development & Production Best Practices

Following these guidelines will help you build a more robust, secure, and maintainable project.

#### **Security**
1.  **Never hard-code API keys.** Use the plugin's settings panel for local development.
2.  **Use a proxy server for all production builds.** This is the only way to completely secure your API keys in a shipped product.
3.  **Validate user input** before sending it to an AI service to prevent prompt injection or other exploits.

#### **Performance & Cost**
-   **Use Streaming:** For any real-time chat interface, use streaming to provide immediate feedback to the user and improve perceived performance.
-   **Cache Responses:** If you expect to request the same information repeatedly (e.g., a character's backstory), cache the response in a variable or data table to avoid redundant API calls and save costs.
-   **Monitor Token Usage:** Keep an eye on your API provider's dashboard to understand your costs. Long conversation histories can consume a large number of tokens.

#### **C++ Development**
-   **Always use `TWeakObjectPtr`** in asynchronous callbacks to prevent crashes from dangling pointers.
-   **Always cancel active requests** in your object's `EndPlay` or `BeginDestroy` methods to clean up resources.

---

## The Future of the Plugin

The GenAI for Unreal plugin is under active development. We are committed to providing regular updates to support:

-   New and emerging AI models as they are released.
-   Additional AI service providers.
-   Performance optimizations and stability improvements.
-   New features and enhanced Blueprint/C++ functionality based on community feedback.

Thank you for choosing GenAI for Unreal. We can't wait to see the incredible experiences you build!