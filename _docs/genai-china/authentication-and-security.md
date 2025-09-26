---
layout: documentation
title: Authentication and Security
permalink: /docs/genai-china/authentication-and-security/
nav_order: 4
---

Security is paramount when integrating AI services. Mismanaged API keys can lead to unauthorized usage and unexpected costs. This guide walks through the secure storage method provided by the plugin.

---

## Secure Key Storage: The Settings Panel

Never hard-code API keys or commit them to your repository. The plugin provides a centralized and encrypted method for storing keys.

1.  In the Unreal Editor, navigate to **Edit > Project Settings**.
2.  Scroll down to the **Plugins** section and click on **GenAI Chinese Models**.
3.  Paste your **Alibaba**, **Moonshot AI**, and **Bytedance** keys into the corresponding fields.
4.  These keys are immediately encrypted and saved to a binary file. By default, this is `YourProject/Saved/Config/GenAIChineseModels/secureconfig.bin`.
5.  This file should be added to your `.gitignore` to prevent it from ever being committed to your repository.