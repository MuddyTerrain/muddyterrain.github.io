---
layout: documentation
title: Getting API Keys
permalink: /docs/genai-unreal/getting-api-keys/
nav_order: 4
---

![API Keys for GenAI Plugin](https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1751298000/GenAI_API_Keys_Banner.webp){: .full-bleed }

Ready to power your Unreal projects with AI? The first step is securing your API keys. Each provider has its own portal, quirks, and best practices. Follow this guide to obtain and manage keys like a pro.

---

## Overview

• Quick links to each provider’s portal
• Environment variable & CI/CD secret tips
• Security best practices to protect your keys

---

## OpenAI (GPT models, DALL·E, Whisper, TTS)

1. Go to the <a href="https://platform.openai.com/signup" target="_blank" rel="noopener noreferrer">OpenAI Platform</a> and sign up or log in.
2. Navigate to **API Keys** in your dashboard.
3. Click **Create new secret key**, name it (e.g., `MyUnrealGame`), and copy it immediately.
4. (Optional) Set usage limits or alerts to avoid unexpected costs.

### Dev Setup
• **Local env var**: add to your `.env`:
```bash
OPENAI_API_KEY=sk-...
```
• **Unreal Editor** automatically picks up `OPENAI_API_KEY` if set before launch.

---

## Anthropic (Claude models)

1. Visit the <a href="https://console.anthropic.com/" target="_blank" rel="noopener noreferrer">Anthropic Console</a>.
2. In **Account Settings**, go to **API Keys**.
3. Generate, name per environment, and copy your new key.

---

## Other Providers (DeepSeek, XAI, Google Gemini)

- DeepSeek: <a href="https://platform.deepseek.com/" target="_blank" rel="noopener noreferrer">platform.deepseek.com</a>
- XAI (Grok): <a href="https://x.ai/" target="_blank" rel="noopener noreferrer">x.ai</a>
- Google Gemini: <a href="https://ai.google.dev/" target="_blank" rel="noopener noreferrer">ai.google.dev</a>

Keep each key separate per environment and follow portal instructions.

---

## Tips & Best Practices

- Store keys in environment variables, not in code.
- Use CI/CD secrets (GitHub Actions Secrets, Azure Key Vault).
- Rotate keys every 90 days; revoke unused keys.
- Limit permissions with scopes or IP allowlists.
- Monitor usage and set up provider alerts for spikes.

---

## Next Steps

1. Securely add your keys in **[Authentication & Security](/docs/genai-unreal/authentication-and-security/)**.
2. Jump into the **[Quick Start](/docs/genai-unreal/quick-start/)** for a 5-minute chat example.

Happy coding with GenAI for Unreal!

