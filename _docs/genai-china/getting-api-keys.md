---
layout: documentation
title: Getting API Keys
permalink: /docs/genai-china/getting-api-keys/
nav_order: 3
description: "Obtain and configure API keys from Alibaba, Bytedance, Moonshot AI, ZhipuAI, and Baidu providers."
tags: [genai-china, api-keys, authentication, alibaba, bytedance, moonshot, zhipuai, baidu, setup]
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

1. If you are from **Mainland China** Navigate to the <a href="https://bailian.console.alibabacloud.com/" class="track-click" data-event-name="lnk_clk_alibaba_bailian" data-event-location="docs_getting_api_keys_china" target="_blank" rel="noopener noreferrer">Alibaba Cloud Bailian Console</a>. For **Worldwide (Singapore)** access, use the <a href="https://modelstudio.console.alibabacloud.com/" class="track-click" data-event-name="lnk_clk_alibaba_modelstudio" data-event-location="docs_getting_api_keys_china" target="_blank" rel="noopener noreferrer">Model Studio Console</a> instead.
2.  Create an account or log in.
3.  Go to the **API Key Management** section to create and copy your key.

### Moonshot AI (Kimi Models)

1.  Go to the <a href="https://platform.moonshot.ai/" class="track-click" data-event-name="lnk_clk_moonshot_platform" data-event-location="docs_getting_api_keys_china" target="_blank" rel="noopener noreferrer">Moonshot AI Platform</a> and sign in.
2.  Navigate to the **API Keys** section in your account settings to generate a new key.

### Bytedance (Skylark, Seedream, Deepseek Models)

1.  Visit the <a href="https://console.byteplus.com/ark/region:ark+ap-southeast-1/apiKey?apikey=%7B%7D" class="track-click" data-event-name="lnk_clk_byteplus_console" data-event-location="docs_getting_api_keys_china" target="_blank" rel="noopener noreferrer">Byteplus Console</a> for the International endpoint, or the Volcanic Engine console for Mainland China.
2.  After signing up, find the **API Key Management** section in the console to create your key.

### ZhipuAI (GLM Models)

1.  For **International** access, go to <a href="https://z.ai/model-api" class="track-click" data-event-name="lnk_clk_zhipuai_intl" data-event-location="docs_getting_api_keys_china" target="_blank" rel="noopener noreferrer">z.ai</a>. For **Mainland China**, use <a href="https://open.bigmodel.cn/" class="track-click" data-event-name="lnk_clk_zhipuai_china" data-event-location="docs_getting_api_keys_china" target="_blank" rel="noopener noreferrer">open.bigmodel.cn</a>.
2.  Create an account or log in and navigate to the **API Keys** section to generate a new key.

### Baidu (ERNIE / Qianfan Models)

1.  Visit the <a href="https://console.bce.baidu.com/qianfan/" class="track-click" data-event-name="lnk_clk_baidu_qianfan" data-event-location="docs_getting_api_keys_china" target="_blank" rel="noopener noreferrer">Baidu Qianfan Console</a>.
2.  Create an account or log in and navigate to the **API Key Management** section to create your key.

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
3.  Enter your API keys into the corresponding fields for **Alibaba**, **Moonshot AI**, **Bytedance**, **ZhipuAI**, and **Baidu**.

These keys are automatically saved to an encrypted binary file. For more details, see the **[Authentication & Security](/docs/genai-china/authentication-and-security/)** guide.