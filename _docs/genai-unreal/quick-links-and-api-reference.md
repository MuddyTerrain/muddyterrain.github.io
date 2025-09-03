---
layout: documentation
title: Quick Links & API Reference
permalink: /docs/genai-unreal/quick-links-and-api-reference/
nav_order: 15
---

This page serves as a central hub for essential links, provider documentation, and a high-level overview of the core C++ classes and enums used in the GenAI for Unreal plugin.

---

## AI Provider Documentation

Refer to the official documentation for each provider for detailed information on their models, API parameters, and pricing.

-   **OpenAI API Docs:** [platform.openai.com/docs](https://platform.openai.com/docs)
-   **Anthropic API Docs:** [docs.anthropic.com](https://docs.anthropic.com/)
-   **Google Gemini API Docs:** [ai.google.dev/docs](https://ai.google.dev/docs)
-   **DeepSeek API Docs:** [platform.deepseek.com/api-docs](https://platform.deepseek.com/api-docs)
-   **XAI (Grok) API Docs:** [x.ai/api](https://x.ai/api)

---

## Core C++ Classes Reference

This is a high-level look at the key C++ classes you will interact with. For detailed function signatures, please refer to the header files within the plugin's source code.

#### **Chat Completion**
-   `UGenOAIChat`, `UGenAnthropicChat`, etc.
    -   *Purpose:* Static libraries for sending chat requests to a specific provider.
-   `FGenOAIChatSettings`, `FGenAnthropicChatSettings`, etc.
    -   *Purpose:* Structs used to configure all parameters for a chat request.
-   `FGenChatMessage`
    -   *Purpose:* The fundamental struct representing a single message in a conversation, containing a `Role` and `Content`.

#### **Model Discovery**
-   `UGenOAIModels`, `UGenGoogleModels`, etc.
    -   *Purpose:* Static libraries for fetching a list of all available models from a provider.

#### **Image Generation & Editing**
-   `UGenOAIImageGeneration`
    -   *Purpose:* Static library for sending image generation and editing requests.
-   `FGenOAIImageSettings`
    -   *Purpose:* Struct for configuring image prompts, resolution, quality, etc.

#### **Audio Processing**
-   `UGenOAITextToSpeech`, `UGenOAITranscription`
    -   *Purpose:* Static libraries for handling TTS and Transcription requests.
-   `UGenAIAudioUtils`
    -   *Purpose:* A critical helper library with static functions for converting audio formats (e.g., raw PCM data to playable `USoundWave` assets).

#### **Blueprint Async Actions**
-   `URequestOpenAIChatCompletion`, `URequestOpenAIImageGeneration`, etc.
    -   *Purpose:* The underlying C++ classes for all the asynchronous Blueprint nodes. They are built on `UCancellableAsyncAction` for automatic lifetime management.

---

## Common Enums

This is a selection of the most frequently used enums for configuring requests.

-   **`EGenChatRole`**
    -   *Values:* `System`, `User`, `Assistant`
    -   *Use:* Defines the author of a message in a conversation.
-   **`EOpenAIChatModel`**, **`EAnthropicChatModel`**, etc.
    -   *Values:* A list of officially supported models for each provider (e.g., `GPT_4o`, `Claude_3_5_Sonnet`).
-   **`EOpenAIImageModel`**
    -   *Values:* `DALL_E_2`, `DALL_E_3`, `GPT_Image_1`.
-   **`EOpenAIImageSize`**
    -   *Values:* Defines the output resolution for generated images (e.g., `Size_1024x1024`).
-   **`EGenAIVoice`**
    -   *Values:* A selection of voices for OpenAI's Text-to-Speech service (e.g., `Alloy`, `Echo`, `Nova`).