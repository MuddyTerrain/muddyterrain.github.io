---
layout: documentation
title: API Reference & Models
permalink: /docs/genai-china/api-reference/
nav_order: 13
---

This page serves as a central hub for essential links, provider documentation, and a high-level overview of the core C++ classes and enums used in the Gen AI China plugin.

---

## AI Provider Documentation

Refer to the official documentation for each provider for detailed information on their models, API parameters, and pricing.

- **Alibaba Qwen:** [https://www.alibabacloud.com/help/en/model-studio/](https://www.alibabacloud.com/help/en/model-studio/)
- **Moonshot AI (Kimi):** [https://platform.moonshot.ai/docs/api/chat](https://platform.moonshot.ai/docs/api/chat)
- **Bytedance:** [https://docs.byteplus.com/en/docs/ModelArk/Chat](https://docs.byteplus.com/en/docs/ModelArk/Chat)
- **ZhipuAI (GLM):** [https://z.ai/model-api](https://z.ai/model-api) / [https://open.bigmodel.cn/](https://open.bigmodel.cn/)
- **Baidu (ERNIE/Qianfan):** [https://console.bce.baidu.com/qianfan/](https://console.bce.baidu.com/qianfan/)

---

## Core C++ Classes Reference

This is a high-level look at the key C++ classes you will interact with. For detailed function signatures, please refer to the header files within the plugin's source code.

#### **Chat Completion**
-   `UGenZhAlibabaChat`, `UGenZhBytedanceChat`, `UGenZhMoonshotAIChat`, `UGenZhZhipuAIChat`, `UGenZhBaiduChat`
    -   *Purpose:* Static libraries for sending chat requests to a specific provider.
-   `FGenZhAlibabaChatSettings`, `FGenZhBytedanceChatSettings`, `FGenZhZhipuAIChatSettings`, `FGenZhBaiduChatSettings`, etc.
    -   *Purpose:* Structs used to configure all parameters for a chat request.
-   `FGenZhChatMessage` & `FGenZhMessageContent`
    -   *Purpose:* The fundamental structs representing a single message and its content (which can be text or image).

#### **Streaming Chat**
-   `UGenZhAlibabaChatStream`, `UGenZhBytedanceChatStream`, `UGenZhZhipuAIChatStream`, `UGenZhBaiduChatStream`, etc.
    -   *Purpose:* Static libraries for sending streaming chat requests.

#### **Image Generation**
-   `UGenZhAlibabaImageGeneration`, `UGenZhBytedanceImageGeneration`
    -   *Purpose:* Static libraries for sending image generation requests.
-   `FGenZhAlibabaImageSettings`, `FGenZhBytedanceImageSettings`
    -   *Purpose:* Structs for configuring image prompts, resolution, etc.

#### **Audio Processing**
-   `UGenZhAlibabaTextToSpeech`
    -   *Purpose:* Static library for handling TTS requests.
-   `UGenZhAlibabaTextToSpeechStream`
    -   *Purpose:* Static library for handling real-time streaming TTS requests, delivering audio in chunks as it's generated.
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
    -   *Values:* `Alibaba`, `Alibaba_Singapore`, `MoonshotAI`, `MoonshotAI_China`, `Bytedance`, `Bytedance_China`, `ZhipuAI`, `ZhipuAI_China`, `Baidu`
    -   *Use:* Specifies the AI provider and region for API key retrieval, endpoint routing, and other internal logic.
-   **`EAlibabaApiRegion`**
    -   *Values:* `MainlandChina`, `SingaporeWorldwide`
    -   *Use:* Selects the correct API endpoint and key for Alibaba services.
-   **`EZhipuAIApiRegion`**
    -   *Values:* `International`, `MainlandChina`
    -   *Use:* Selects the correct API endpoint for ZhipuAI services (z.ai vs open.bigmodel.cn).
-   **`EAlibabaAIVoice`**
    -   *Values:* A selection of voices for Alibaba's Text-to-Speech service (e.g., `Cherry`, `Serena`).
-   **`EGenZhAlibabaStreamEventType`**, **`EGenZhBytedanceStreamEventType`**, **`EGenZhZhipuAIStreamEventType`**, **`EGenZhBaiduStreamEventType`**, etc.
    -   *Values:* Defines the event type within a streaming response (e.g., `ResponseOutputTextDelta`, `ResponseCompleted`, `Error`).
-   **`EGenZhAlibabaTTSStreamEventType`**
    -   *Values:* `AudioChunk`, `Completed`, `Error`
    -   *Use:* Defines events during a streaming TTS session.

---

## Full Model List

Below is a complete list of all models supported by the plugin (v1.3.0), organized by provider and service. 90+ models across 5 providers.

### Alibaba (Qwen)

**Chat & Streaming:**
- qwen-max, qwen3-max, qwen3-max-2025-09-23, qwen-plus, qwen-flash, qwen-coder, qwen3-max-preview, qwen-plus-latest, qwen-plus-2025-12-01, qwen-plus-2025-09-11, qwen-plus-2025-07-28, qwen-plus-2025-07-14, qwen-plus-2025-04-28, qwen-plus-2025-01-25, qwen-flash-2025-07-28, qwen-turbo, qwen-turbo-latest, qwen-turbo-2025-04-28, qwen-turbo-2024-11-01, qwq-plus, qwen3-coder-plus, qwen3-coder-plus-2025-07-22, qwen3-coder-flash, qwen3-coder-flash-2025-07-28, qwen-mt-plus, qwen-mt-turbo, qwen3-coder-480b-a35b-instruct, qwen3-coder-30b-a3b-instruct, qwen3.5-plus, qwen3.5-plus-2026-02-15, qwen3.5-flash, qwen3.5-flash-2026-02-23

**Multimodal Chat:**
- qwen-omni-turbo, qwen-omni-turbo-latest, qwen-omni-turbo-2025-03-26, qwen-omni-turbo-realtime, qwen-omni-turbo-realtime-latest, qwen-omni-turbo-realtime-2025-05-08, qvq-max, qvq-max-latest, qvq-max-2025-03-25, qwen-vl-max, qwen-vl-max-latest, qwen-vl-max-2025-08-13, qwen-vl-max-2025-04-08, qwen-vl-ocr, qwen2.5-omni-7b, qwen2.5-vl-72b-instruct, qwen2.5-vl-32b-instruct, qwen2.5-vl-7b-instruct, qwen2.5-vl-3b-instruct, qwen3-vl-plus-2025-12-19, qwen3-vl-flash-2026-01-22, qwen3-omni-flash-realtime-2025-12-01

**Image Generation:**
- qwen-image, qwen-image-edit, wan2.2-t2i-plus

**Text-to-Speech (TTS & Streaming TTS):**
- qwen3-tts-flash, qwen3-tts-flash-2025-09-18, qwen-tts, qwen-tts-latest, qwen-tts-2025-05-22, qwen-tts-2025-04-10

### Moonshot AI (Kimi)

**Chat & Streaming:**
- kimi-k2-0905-preview, kimi-k2-0711-preview, kimi-k2-turbo-preview, kimi-k2-thinking, kimi-k2-thinking-turbo, moonshot-v1-8k, moonshot-v1-32k, moonshot-v1-128k

**Multimodal Chat:**
- kimi-k2.5, moonshot-v1-8k-vision-preview, moonshot-v1-32k-vision-preview, moonshot-v1-128k-vision-preview, kimi-latest, kimi-thinking-preview

### Bytedance

**Chat & Streaming:**
- deepseek-v3-2-251201, deepseek-v3-1-250821, deepseek-r1-250528, skylark-pro-250415, seed-2-0-lite-260228

**Multimodal Chat:**
- seed-2-0-mini-260215, seed-1-8-251228, seed-1-6-250915, seed-1-6-250615, seed-1-6-flash-250715, skylark-vision-250515

**Image Generation:**
- seedream-4-0-250828, seedream-3-0-t2i-250415, seededit-3-0-i2i-250628

### ZhipuAI (BigModel)

**Chat & Streaming:**
- glm-5, glm-4.7, glm-4.7-flash, glm-4.7-flashx, glm-4.6, glm-4.5, glm-4.5-flash, glm-4.5-air, glm-4.5-airx

**Multimodal Chat:**
- glm-4.6v, glm-4.6v-flash, glm-4.5v

### Baidu (Qianfan)

**Chat & Streaming:**
- ernie-5.0-8k, ernie-4.5-8k, ernie-4.5-128k, ernie-4.5-turbo-128k, ernie-x1-32k, ernie-x1-turbo-32k, ernie-speed-128k, ernie-speed-8k, ernie-lite-128k, ernie-lite-8k, ernie-tiny-8k