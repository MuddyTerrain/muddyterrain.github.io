---
layout: documentation
title: Getting API Keys
permalink: /docs/genai-china/getting-api-keys/
nav_order: 3
---

To connect your Unreal project to Chinese AI models, you need to obtain API keys from the respective service providers.

---

## Supported AI Providers

### Alibaba Cloud (Qwen Models)

1.  Navigate to the <a href="https://bailian.console.alibabacloud.com/" target="_blank" rel="noopener noreferrer">Alibaba Cloud Bailian Console</a>. For **Worldwide (Singapore)** access, use the <a href="https://modelstudio.console.alibabacloud.com/" target="_blank" rel="noopener noreferrer">Model Studio Console</a> instead.
2.  Create an account or log in.
3.  Go to the **API Key Management** section to create and copy your key.

### Moonshot AI (Kimi Models)

1.  Go to the <a href="https://platform.moonshot.ai/" target="_blank" rel="noopener noreferrer">Moonshot AI Platform</a> and sign in.
2.  Navigate to the **API Keys** section in your account settings to generate a new key.

### Bytedance (Skylark, Seedream)

1.  Visit the <a href="https://console.byteplus.com/ark/region:ark+ap-southeast-1/apiKey?apikey=%7B%7D" target="_blank" rel="noopener noreferrer">Byteplus Console</a>.
2.  After signing up, find the **API Key Management** section in the console to create your key.

---

## Storing Your API Keys Securely

Once you have your keys, you must add them to the plugin's settings panel.

1.  In the Unreal Editor, navigate to **Edit > Project Settings**.
2.  Scroll to the **Plugins** section and select **GenAI Chinese Models**.
3.  Enter your API keys into the corresponding fields.

These keys are automatically saved to an encrypted binary file. For more details, see the **[Authentication & Security](/docs/genai-china/authentication-and-security/)** guide.