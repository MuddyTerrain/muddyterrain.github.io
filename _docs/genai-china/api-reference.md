---
layout: documentation
title: API Reference & Models
permalink: /docs/genai-china/api-reference/
nav_order: 12
---

This page serves as a central hub for essential links, provider documentation, and a high-level overview of the core C++ classes and enums used in the Gen AI China plugin.

---

## AI Provider Documentation

Refer to the official documentation for each provider for detailed information on their models, API parameters, and pricing.

- **Alibaba Qwen:** [https://www.alibabacloud.com/help/en/model-studio/](https://www.alibabacloud.com/help/en/model-studio/)
- **Moonshot AI (Kimi):** [https://platform.moonshot.ai/docs/api/chat](https://platform.moonshot.ai/docs/api/chat)
- **Bytedance:** [https://docs.byteplus.com/en/docs/ModelArk/Chat](https://docs.byteplus.com/en/docs/ModelArk/Chat)

---

## Core C++ Classes Reference

This is a high-level look at the key C++ classes you will interact with. For detailed function signatures, please refer to the header files within the plugin's source code.

#### **Chat Completion**
-   `UGenZhAlibabaChat`, `UGenZhBytedanceChat`, `UGenZhMoonshotAIChat`
    -   *Purpose:* Static libraries for sending chat requests to a specific provider.
-   `FGenZhAlibabaChatSettings`, `FGenZhBytedanceChatSettings`, etc.
    -   *Purpose:* Structs used to configure all parameters for a chat request.
-   `FGenZhChatMessage` & `FGenZhMessageContent`
    -   *Purpose:* The fundamental structs representing a single message and its content (which can be text or image).

#### **Streaming Chat**
-   `UGenZhAlibabaChatStream`, `UGenZhBytedanceChatStream`, etc.
    -   *Purpose:* Static libraries for sending streaming chat requests.

#### **Image Generation**
-   `UGenZhAlibabaImageGeneration`, `UGenZhBytedanceImageGeneration`
    -   *Purpose:* Static libraries for sending image generation requests.
-   `FGenZhAlibabaImageSettings`, `FGenZhBytedanceImageSettings`
    -   *Purpose:* Structs for configuring image prompts, resolution, etc.

#### **Audio Processing**
-   `UGenZhAlibabaTextToSpeech`
    -   *Purpose:* Static library for handling TTS requests.
-   `UGenZhAudioUtils`
    -   *Purpose:* A critical helper library with static functions for converting audio formats (e.g., raw PCM data to playable `USoundWave` assets).

#### **Blueprint Async Actions**
-   `URequestAlibabaChat`, `URequestBytedanceImage`, etc.
    -   *Purpose:* The underlying C++ classes for all the asynchronous Blueprint nodes. They are built on `UCancellableAsyncAction` for automatic lifetime management.

---

## Common Enums

This is a selection of the most frequently used enums for configuring requests.

-   **`EGenZhContentType`**
    -   *Values:* `Text`, `Image`
    -   *Use:* Defines the type of content within a chat message.
-   **`EGenZhOrgs`**
    -   *Values:* `Alibaba`, `Alibaba_Singapore`, `MoonshotAI`, `Bytedance`
    -   *Use:* Specifies the AI provider for API key retrieval and other internal logic.
-   **`EAlibabaApiRegion`**
    -   *Values:* `MainlandChina`, `SingaporeWorldwide`
    -   *Use:* Selects the correct API endpoint and key for Alibaba services.
-   **`EAlibabaAIVoice`**
    -   *Values:* A selection of voices for Alibaba's Text-to-Speech service (e.g., `Cherry`, `Serena`).
-   **`EGenZhAlibabaStreamEventType`**, **`EGenZhBytedanceStreamEventType`**, etc.
    -   *Values:* Defines the event type within a streaming response (e.g., `ResponseOutputTextDelta`, `ResponseCompleted`, `Error`).

---

## Full Model List

Below is a complete list of all models supported by the plugin, organized by provider and service.

### Alibaba (Qwen)

**Chat & Multimodal Chat:**
- qwen-max
- qwen3-max
- qwen-plus
- qwen-flash
- qwen-coder
- qwen-omni-turbo (Multimodal)
- qvq-max (Multimodal)
- qwen-vl-max (Multimodal)
- qwen-vl-ocr (Multimodal)
- And various versioned and regional models.

**Image Generation:**
- qwen-image
- wan2.2-t2i-plus

**Text-to-Speech (TTS):**
- qwen3-tts-flash
- qwen-tts

### Moonshot AI (Kimi)

**Chat & Multimodal Chat:**
- kimi-k2-0905-preview
- moonshot-v1-8k
- moonshot-v1-32k
- moonshot-v1-128k
- kimi-latest (Multimodal)
- moonshot-v1-8k-vision-preview (Multimodal)
- moonshot-v1-32k-vision-preview (Multimodal)
- moonshot-v1-128k-vision-preview (Multimodal)

### Bytedance

**Chat & Multimodal Chat:**
- deepseek-v3-1-250821
- deepseek-r1-250528
- skylark-pro-250415
- seed-1-6-250615 (Multimodal)
- seed-1-6-flash-250715 (Multimodal)
- skylark-vision-250515 (Multimodal)

**Image Generation:**
- seedream-4-0-250828
- seedream-3-0-t2i-250415
- seededit-3-0-i2i-250628