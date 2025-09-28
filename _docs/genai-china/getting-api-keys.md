---
layout: documentation
title: Getting API Keys
permalink: /docs/genai-china/getting-api-keys/
nav_order: 3
---

To connect your Unreal project to Chinese AI models, you need to obtain API keys from the respective service providers.

---

## Supported AI Providers

### Alibaba Cloud (Qwen, Wan Models)

<div>
    <figure>
        <img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1759017061/Screenshot_2025-09-28_004705_cogcpg.webp" alt="Conversation Example" style="width: 100%;">
        <figcaption class="image-caption">
           Alibaba Dashboard Example (Outside Mainland-China)
        </figcaption>
    </figure>
</div>

1. If you are from **Mainland China** Navigate to the <a href="https://bailian.console.alibabacloud.com/" target="_blank" rel="noopener noreferrer">Alibaba Cloud Bailian Console</a>. For **Worldwide (Singapore)** access, use the <a href="https://modelstudio.console.alibabacloud.com/" target="_blank" rel="noopener noreferrer">Model Studio Console</a> instead.
2.  Create an account or log in.
3.  Go to the **API Key Management** section to create and copy your key.

### Moonshot AI (Kimi Models)

1.  Go to the <a href="https://platform.moonshot.ai/" target="_blank" rel="noopener noreferrer">Moonshot AI Platform</a> and sign in.
2.  Navigate to the **API Keys** section in your account settings to generate a new key.

### Bytedance (Skylark, Seedream, Deepseek Models)

1.  Visit the <a href="https://console.byteplus.com/ark/region:ark+ap-southeast-1/apiKey?apikey=%7B%7D" target="_blank" rel="noopener noreferrer">Byteplus Console</a>.
2.  After signing up, find the **API Key Management** section in the console to create your key.

---
## Storing Your API Keys Securely

<div class="image-wrapper">
   <figure>
       <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1759016629/254659cf-f4e4-42b6-b827-ddc046158b1c.webp" alt="Blueprint Node for getting all voices" style="width: 100%;">
          <figcaption class="image-caption">
            Settings Window
          </figcaption>
     </figure>
</div>

Once you have your keys, you must add them to the plugin's settings panel.

1.  In the Unreal Editor, navigate to **Edit > Project Settings**.
2.  Scroll to the **Plugins** section and select **GenAI Chinese Models**.
3.  Enter your API keys into the corresponding fields.

These keys are automatically saved to an encrypted binary file. For more details, see the **[Authentication & Security](/docs/genai-china/authentication-and-security/)** guide.