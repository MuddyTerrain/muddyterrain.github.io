---
layout: wide
title: "GenAI for Unreal 插件 - 虚幻引擎 AI 集成"
category: products
permalink: /zh/genai-unreal
author: "Muddy Terrain"
tags: [documentation,sample]
lang: zh
hreflang_group: genai-unreal
image: https://res.cloudinary.com/dqq9t4hyy/image/upload//q_60/v1751299301/86187345-e044-4862-9acd-0c078ade41ab.webp
---

<html lang="zh">

<body>

<div class="image-wrapper">
<figure>
    <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1772931701/MainBanners_4_d9nmqo.webp" alt="用例示例" style="width: 100%;">
</figure>
</div>



<p><strong>厌倦了每天跟踪新的 AI 模型发布？不用再烦了。</strong> GenAI for Unreal 是一款终极的、生产就绪的插件，为您处理所有集成工作。专注于您的游戏玩法，我们为您提供稳定、统一且强大的接口，连接全球领先的 AI 模型。该插件支持所有当前最前沿的 LLM API，包括 OpenAI 的 ChatGPT（含最新的 GPT-5.4、GPT-5.3 Codex、GPT-5.2）、Anthropic 的 Claude Opus/Sonnet 4.6、Google 的 Gemini 3.1 / Nano Banana 2、XAI 的 Grok 4.1/4/3、DeepSeek 的 R1、Inworld AI TTS 等。此外，通过 OpenAI Compatible Mode，您可以无缝切换到 Alibaba Qwen、Mistral、Groq、OpenRouter、Meta Llama、BigModel GLM-4，甚至通过 Ollama 运行本地模型，实现极致的灵活性和成本效益。</p>

<p>现已支持 <strong>GPT-5.4</strong>、<strong>Claude 4.6</strong>、<strong>Gemini 3.1</strong>、<strong>Inworld AI TTS</strong>、<strong>Function Calling</strong> 和 OpenAI <strong>Responses API</strong>！！🎉</p>

<div class="button-row">
  <a href="/t/genai-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-plugin" class="cta-button primary track-click" data-event-name="btn_clk_gen_ai_fab"  data-event-location="top_cta" target="_blank" rel="noopener noreferrer">在 Fab.com 上查看</a>
  <a href="/docs/genai-unreal" class="cta-button secondary track-click" data-event-name="btn_clk_gen_ai_documentation"  data-event-location="top_cta">产品文档</a>
</div>

<div style="padding: 15px 20px; background-color: #f0f8ff; border-left: 4px solid #007acc; margin: 25px 0; border-radius: 6px;">
  <h2 style="margin-top: 0; font-size: 1.2em;">v2.0.1 更新内容！</h2>
  <p style="margin-bottom: 15px; font-size: 1em;">本次发布包含大量全新功能、集成及关键修复：</p>
  <ul style="margin: 0; padding-left: 20px;">
        <li>🌐 <strong>Inworld AI 集成：</strong>全面支持 Inworld 文本转语音，包括标准和实时流式端点。</li>
        <li>🔗 <strong>OpenAI Responses API（Beta）：</strong>集成全新 GenOAIResponses 类，支持 OpenAI 的结构化 Responses API。</li>
        <li>🛠️ <strong>函数调用（工具使用）：</strong>为 Anthropic Claude 和 OpenAI Chat 模型新增工具/函数调用支持。</li>
        <li>🧠 <strong>新增模型：</strong>Anthropic Claude 4.6 Opus & Sonnet、OpenAI GPT-5.4/5.3 Codex/Image-1.5、Google Gemini 3.1 Pro/Flash Lite/Flash Image Preview、ElevenLabs Scribe V2 & V2 Realtime 以及 Inworld TTS 1.5 Max/Mini/1。</li>
  </ul>
</div>

<h2>核心功能：</h2>
<ul>
    <li>
        <p><strong>实时文本流式传输：</strong> ⚡️<br>
        通过动态的实时响应让您的角色栩栩如生。我们的流式传输支持在文本生成的同时分块推送，非常适合创建实时旁白对话、响应式 AI 伙伴和无需等待的互动叙事。</p>
    </li>
    <li>
        <p><strong>高级聊天补全：</strong> 🤖<br>
        使用来自 OpenAI、Anthropic、Google、XAI 和 DeepSeek 的模型，为您的游戏提供动态 NPC 对话、程序化任务生成和实时叙事适配。</p>
    </li>
    <li>
        <p><strong>推理模型：</strong> 🧠<br>
        利用 DeepSeek R1 和 XAI Grok 等模型独有的"先思考再表达"能力，生成核心叙事组件和复杂的逻辑输出。</p>
    </li>
    <li>
        <p><strong>多模态视觉/文本输入：</strong> 📸<br>
        让模型能够"看见"您的游戏。将截图或其他图像与文本一起作为直接输入——现已支持 Google Gemini！非常适合创建 AI 驱动的观战解说、动态玩家指南或环境感知的 NPC 交互。</p>
    </li>
    <li>
        <p><strong>图像编辑：</strong> 🎨<br>
        超越生成。使用强大的 AI 驱动工具编辑现有图像，直接在引擎中迭代您的视觉概念。</p>
    </li>
    <li>
        <p><strong>结构化 JSON 输出：</strong> ❤️‍🔥<br>
        从任何支持的模型可靠地获取复杂的 JSON 响应。例如，为 100 个 AI 生成的 NPC 生成 JSON 数据，每个 NPC 都拥有独特的故事、种族、性别和名字。</p>
    </li>
    <li>
        <p><strong>高质量图像生成：</strong> 🖼️<br>
        将最先进的图像生成直接集成到您的工作流程中，支持 OpenAI 的 DALL-E 2、DALL-E 3 和 GPT-Image-1 模型。</p>
    </li>
    <li>
        <p><strong>文本转语音（TTS）：</strong> 🔊<br>
        使用 OpenAI 和 ElevenLabs 的 TTS 模型，为游戏内对话、旁白或与 AI 角色的实时对话生成动态、高品质的语音。</p>
    </li>
    <li>
        <p><strong>函数调用（工具使用）：</strong> 🔧<br>
        让 AI 模型直接调用您的游戏函数。支持 Anthropic Claude 和 OpenAI Chat 模型，实现 AI 驱动的游戏玩法操作、数据查询和动态世界交互。</p>
    </li>
    <li>
        <p><strong>OpenAI Responses API：</strong> 📋<br>
        访问 OpenAI 全新的结构化 Responses API，获得更强大、更可控的模型输出，完整支持 Blueprint 和 C++。</p>
    </li>
    <li>
        <p><strong>音效生成：</strong> 🎶<br>
        使用 ElevenLabs 最先进的音频模型，通过文本提示生成自定义音效。</p>
    </li>
    <li>
        <p><strong>音频转写：</strong> 📝<br>
        通过 OpenAI 的 Whisper、GPT-4o 和 ElevenLabs 的转写模型将玩家语音转换为文本，赋能游戏内语音指令或创建互动对话。</p>
    </li>
    <li>
        <p><strong>轻松实现服务器代理：</strong> ☁️<br>
        需要将请求通过自己的后端路由以保障安全或实现自定义逻辑？我们的服务器代理功能只需一项设置即可覆盖任何提供商的 API 端点，让您完全掌控数据流向。</p>
    </li>
    <li>
        <p><strong>OpenAI 兼容模式：</strong> 🔄<br>
        支持 Alibaba Qwen、Mistral、Groq、OpenRouter、Meta Llama、BigModel GLM-4 以及通过 Ollama 运行的本地模型，解锁非凡的灵活性。无需修改代码即可无缝切换提供商，实现成本节约、隐私保护或离线功能。</p>
    </li>
    <li>
        <p><strong>安全且集中的身份验证：</strong> 🔐<br>
        在一个安全、集中的设置面板中管理所有 API 密钥。我们的系统使用不可移植的加密文件来保护您的密钥安全，并与源代码控制隔离。</p>
    </li>
    <li>
        <p><strong>Blueprint 和 C++ 双重支持：</strong> 🔗<br>
        享受简洁、强大的 Blueprint 节点实现快速迭代，同时在 C++ 中访问同样健壮的自管理函数，获得最佳性能和控制力。</p>
    </li>
    <li>
        <p><strong>为跨平台而设计：</strong> 🌐<br>
        该插件仅使用标准的高级虚幻引擎网络和文件管理模块，确保在引擎支持的所有平台上都能正常运行。</p>
    </li>
</ul>

<img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1756926286/Tests_4_rgysms.webp" alt="GenAI for Unreal Plugin Tests">


<h2>可用集成与模型</h2>
<div style="padding: 10px 15px; background-color: #fffbe6; border-left: 4px solid #ffc107; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold; color: #856404;">免责声明</p>
  <p style="margin: 5px 0 0 0; color: #856404;">本插件需要至少一个受支持 AI 提供商的有效 API 密钥才能运行。请参阅我们的文档了解更多关于<a href="/docs/genai-unreal/getting-api-keys/" class="track-click" data-event-name="lnk_clk_genai_api_keys_docs" data-event-location="post_genai" target="_blank" rel="noopener noreferrer">如何获取 API 密钥</a>的信息。</p>
</div>
<p>为当今最优秀的模型提供简洁、统一的 API。</p>
<ul>
    <li><strong>OpenAI：</strong>
        <ul>
            <li><strong>聊天：</strong> <code>gpt-5.2</code>, <code>gpt-5.1</code>, <code>gpt-5</code>, <code>gpt-5-mini</code>, <code>gpt-5-nano</code>, <code>gpt-4.1</code>, <code>gpt-4o</code>, <code>gpt-4.1-mini</code>, <code>gpt-4.1-nano</code>, <code>gpt-4o-mini</code>.</li>
            <li><strong>Responses API：</strong> <code>gpt-5.4</code>, <code>gpt-5.4-pro</code>, <code>gpt-5.2</code>, <code>gpt-5.2-pro</code>, <code>gpt-5.3-codex</code>, <code>gpt-5.2-codex</code>, <code>gpt-5.1-codex-max</code>, <code>gpt-5-codex-mini</code>.</li>
            <li><strong>推理模型：</strong> <code>o4-mini</code>, <code>o3</code>, <code>o3-pro</code>, <code>o3-mini</code>, <code>o1</code>, <code>o1-pro</code>.</li>
            <li><strong>图像生成：</strong> <code>gpt-image-1.5</code>, <code>gpt-image-1</code>, <code>gpt-image-1-mini</code>, <code>dall-e-3</code>, <code>dall-e-2</code>.</li>
            <li><strong>音频 TTS：</strong> <code>gpt-4o-mini-tts</code>, <code>tts-1</code>, <code>tts-1-hd</code>.</li>
            <li><strong>音频转写：</strong> <code>gpt-4o-transcribe</code>, <code>gpt-4o-mini-transcribe</code>, <code>whisper-1</code>.</li>
            <li><strong>结构化输出（JSON 模式）</strong>  ✔</li>
            <li><strong>函数调用（工具使用）</strong>   ✔</li>
            <li><strong>文本与音频流式传输</strong>   ✔</li>
            <li><strong>多模态聊天</strong>   ✔</li>
            <li><strong>实时 API：</strong> <code>gpt-realtime</code>, <code>gpt-realtime-mini</code>.</li>
        </ul>
    </li>
    <li><strong>Anthropic：</strong>
        <ul>
            <li><strong>聊天：</strong> <code>claude-opus-4-6</code>, <code>claude-sonnet-4-6</code>, <code>claude-opus-4.5</code>, <code>claude-sonnet-4.5</code>, <code>claude-haiku-4.5</code>, <code>claude-opus-4.1</code>, <code>claude-opus-4</code>, <code>claude-sonnet-4</code>, <code>claude-3-7-sonnet</code>, <code>claude-3-5-sonnet</code>, <code>claude-3-5-haiku</code>, <code>claude-3-haiku</code>, <code>claude-3-opus</code>.</li>
            <li><strong>多模态聊天</strong>   ✔</li>
            <li><strong>函数调用（工具使用）</strong>   ✔</li>
            <li><strong>扩展思考</strong>   ✔ (Claude 4.5+)</li>
        </ul>
    </li>
    <li><strong>XAI：</strong>
        <ul>
            <li><strong>聊天：</strong> <code>grok-4-fast-non-reasoning</code>, <code>grok-4-fast-reasoning</code>, <code>grok-4-1-fast-reasoning</code>, <code>grok-4-1-fast-non-reasoning</code>, <code>grok-4.1</code>, <code>grok-4</code>, <code>grok-4-eu</code>, <code>grok-code-fast-1</code>, <code>grok-3</code>, <code>grok-3-mini</code>, <code>grok-3-fast</code>, <code>grok-3-mini-fast</code>, <code>grok-2-vision-1212</code>, <code>grok-2-1212</code>.</li>
            <li><strong>推理模型：</strong> <code>grok-4-fast-reasoning</code>, <code>grok-4-1-fast-reasoning</code>, <code>grok-4.1</code>, <code>grok-4</code>, <code>grok-3-mini</code>, <code>grok-3-mini-fast</code>.</li>
            <li><strong>文本流式传输</strong>  ✔</li>
            <li><strong>多模态聊天</strong>   ✔</li>
        </ul>
    </li>
    <li><strong>Google Gemini：</strong>
        <ul>
            <li><strong>聊天：</strong> <code>Gemini 3.1 Pro Preview</code>, <code>Gemini 3.1 Flash Lite Preview</code>, <code>Gemini 3 Pro Preview</code>, <code>Gemini 3 Flash Preview</code>, <code>Gemini 2.5 Flash</code>, <code>Gemini 2.5 Flash Lite</code>, <code>Gemini 2.5 Pro</code>.</li>
            <li><strong>推理模型：</strong> <code>Gemini 2.5 Flash</code>, <code>Gemini 2.5 Pro</code>.</li>
            <li><strong>音频 TTS：</strong> <code>gemini-2.5-flash-preview-tts</code>, <code>gemini-2.5-pro-preview-tts</code>.</li>
            <li><strong>音频转写：</strong> <code>Gemini 3.1 Pro Preview</code>, <code>Gemini 3.1 Flash Lite Preview</code>, <code>Gemini 3 Pro Preview</code>, <code>Gemini 3 Flash Preview</code>, <code>Gemini 2.5 Flash</code>, <code>Gemini 2.5 Pro</code>.</li>
            <li><strong>文本流式传输</strong>  ✔</li>
            <li><strong>多模态聊天</strong>   ✔</li>
            <li><strong>实时：</strong> <code>gemini-2.5-flash-native-audio-preview-09-2025</code>, <code>gemini-2.5-flash-native-audio-preview-12-2025</code>, <code>gemini-live-2.5-flash-preview</code>, <code>gemini-2.0-flash-live-001</code>.</li>
            <li><strong>图像生成：</strong> <code>gemini-3.1-flash-image-preview (Nano Banana 2)</code>, <code>gemini-3-pro-image-preview (Nano Banana Pro)</code>, <code>gemini-2.5-flash-image (Nano Banana)</code>, <code>imagen-4.0-generate-001</code>, <code>imagen-4.0-ultra-generate-001</code>, <code>imagen-4.0-fast-generate-001</code>.</li>
        </ul>
    </li>
    <li><strong>DeepSeek：</strong>
        <ul>
            <li><strong>聊天：</strong> <code>DeepSeek-V3.1</code>, <code>deepseek-chat</code>.</li>
            <li><strong>推理：</strong> <code>deepseek-reasoner</code>.</li>
            <li><strong>文本流式传输</strong>  ✔</li>
        </ul>
    </li>
    <li><strong>ElevenLabs：</strong>
        <ul>
            <li><strong>文本转语音：</strong> <code>eleven_v3</code>, <code>eleven_turbo_v2_5</code>, <code>eleven_flash_v2_5</code>, <code>eleven_flash_v2</code>, <code>eleven_multilingual_v3 (Alpha)</code>, <code>eleven_multilingual_v2</code>.</li>
            <li><strong>转写：</strong> <code>scribe_v2</code>, <code>scribe_v2_realtime</code>, <code>scribe_v1</code>.</li>
            <li><strong>音效：</strong> <code>eleven_text_to_sound_v2</code>.</li>
            <li><strong>音频流式传输</strong>  ✔</li>
        </ul>
    </li>
    <li><strong>Inworld AI：</strong>
        <ul>
            <li><strong>文本转语音：</strong> <code>inworld-tts-1.5-max</code>, <code>inworld-tts-1.5-mini</code>, <code>inworld-tts-1</code>.</li>
            <li><strong>音频流式传输</strong>  ✔</li>
        </ul>
    </li>
    <li><strong>扩展 OpenAI 兼容支持：</strong>
        <ul>
            <li><strong>Alibaba Qwen：</strong>
                <ul>
                    <li><strong>聊天：</strong> <code>qvq-max</code>, <code>qvq-max-latest</code>, <code>qvq-max-2025-03-25</code>, <code>qwen-vl-max</code>, <code>qwen-vl-plus</code>, <code>qwen2.5-vl-72b-instruct</code>, <code>qwen2.5-vl-32b-instruct</code>, <code>qwen2.5-vl-7b-instruct</code>, <code>qwen2.5-vl-3b-instruct</code>.</li>
                    <li><strong>多模态聊天</strong>   ✔</li>
                </ul>
            </li>
            <li><strong>Mistral AI：</strong>
                <ul>
                    <li><strong>聊天：</strong> <code>mistral-large-2512</code>, <code>mistral-medium-2508</code>, <code>mistral-small-2506</code>, <code>ministral-14b-2512</code>, <code>ministral-8b-2512</code>, <code>ministral-3b-2512</code>, <code>magistral-medium-2509</code>, <code>magistral-small-2509</code>.</li>
                    <li><strong>文本流式传输</strong>  ✔</li>
                </ul>
            </li>
            <li><strong>Groq：</strong>
                <ul>
                    <li><strong>聊天：</strong> Various Groq-optimized models.</li>
                    <li><strong>文本流式传输</strong>  ✔</li>
                </ul>
            </li>
            <li><strong>OpenRouter：</strong>
                <ul>
                    <li><strong>聊天：</strong> Access to hundreds of models from multiple providers.</li>
                    <li><strong>文本流式传输</strong>  ✔</li>
                </ul>
            </li>
            <li><strong>Meta Llama：</strong>
                <ul>
                    <li><strong>聊天：</strong> Various Llama versions.</li>
                    <li><strong>文本流式传输</strong>  ✔</li>
                </ul>
            </li>
            <li><strong>BigModel GLM-4：</strong>
                <ul>
                    <li><strong>聊天：</strong> <code>glm-4</code> and variants.</li>
                    <li><strong>文本流式传输</strong>  ✔</li>
                </ul>
            </li>
            <li><strong>本地模型（Ollama）：</strong>
                <ul>
                    <li><strong>聊天：</strong> <code>gemma3:1b</code>, <code>nemotron-3-nano</code>, <code>gpt-oss</code>, <code>llama3.1</code>, <code>phi3</code>, <code>llama3.2</code>.</li>
                    <li><strong>文本流式传输</strong>  ✔</li>
                </ul>
            </li>
        </ul>
    </li>
</ul>
<p>支持的格式</p>
<ul>
    <li><strong>音频：</strong>
        <ul>
            <li><strong>输入：</strong> <code>mp3</code>, <code>wav</code>, <code>mp4</code>, <code>mpeg</code>, <code>mpga</code>, <code>m4a</code>, <code>webm</code>.</li>
            <li><strong>输出：</strong> <code>pcm</code>.</li>
        </ul>
    </li>
    <li><strong>语音：</strong>
        <ul>
            <li><strong>OpenAI：</strong> <code>alloy</code>, <code>ash</code>, <code>ballad</code>, <code>coral</code>, <code>echo</code>, <code>sage</code>, <code>shimmer</code>, <code>verse</code>, <code>marin</code>, <code>cedar</code>.</li>
            <li><strong>Google：</strong> <code>Zephyr</code>, <code>Puck</code>, <code>Charon</code>, <code>Kore</code>, <code>Fenrir</code>, <code>Leda</code>, <code>Orus</code>, <code>Aoede</code>, <code>Callirrhoe</code>, <code>Autonoe</code>, <code>Enceladus</code>, <code>Iapetus</code>, <code>Umbriel</code>, <code>Algieba</code>, <code>Despina</code>, <code>Erinome</code>, <code>Algenib</code>, <code>Rasalgethi</code>, <code>Laomedeia</code>, <code>Achernar</code>, <code>Alnilam</code>, <code>Schedar</code>, <code>Gacrux</code>, <code>Pulcherrima</code>, <code>Achird</code>, <code>Zubenelgenubi</code>, <code>Vindemiatrix</code>, <code>Sadachbia</code>, <code>Sadaltager</code>, <code>Sulafat</code>.</li>
            <li><strong>ElevenLabs：</strong> 50+ Voices.</li>
        </ul>
    </li>
    <li><strong>语言：</strong>
        <ul>
            <li><strong>Google：</strong> <code>Arabic</code>, <code>German</code>, <code>English</code>, <code>Spanish</code>, <code>French</code>, <code>Hindi</code>, <code>Indonesian</code>, <code>Italian</code>, <code>Japanese</code>, <code>Korean</code>, <code>Portuguese</code>, <code>Russian</code>, <code>Dutch</code>, <code>Polish</code>, <code>Thai</code>, <code>Turkish</code>, <code>Vietnamese</code>, <code>Romanian</code>, <code>Ukrainian</code>, <code>Bengali</code>, <code>Marathi</code>, <code>Tamil</code>, <code>Telugu</code>.</li>
            <li><strong>OpenAI：</strong> <code>Afrikaans</code>, <code>Arabic</code>, <code>Armenian</code>, <code>Azerbaijani</code>, <code>Belarusian</code>, <code>Bosnian</code>, <code>Bulgarian</code>, <code>Catalan</code>, <code>Chinese</code>, <code>Croatian</code>, <code>Czech</code>, <code>Danish</code>, <code>Dutch</code>, <code>English</code>, <code>Estonian</code>, <code>Finnish</code>, <code>French</code>, <code>Galician</code>, <code>German</code>, <code>Greek</code>, <code>Hebrew</code>, <code>Hindi</code>, <code>Hungarian</code>, <code>Icelandic</code>, <code>Indonesian</code>, <code>Italian</code>, <code>Japanese</code>, <code>Kannada</code>, <code>Kazakh</code>, <code>Korean</code>, <code>Latvian</code>, <code>Lithuanian</code>, <code>Macedonian</code>, <code>Malay</code>, <code>Marathi</code>, <code>Maori</code>, <code>Nepali</code>, <code>Norwegian</code>, <code>Persian</code>, <code>Polish</code>, <code>Portuguese</code>, <code>Romanian</code>, <code>Russian</code>, <code>Serbian</code>, <code>Slovak</code>, <code>Slovenian</code>, <code>Spanish</code>, <code>Swahili</code>, <code>Swedish</code>, <code>Tagalog</code>, <code>Tamil</code>, <code>Thai</code>, <code>Turkish</code>, <code>Ukrainian</code>, <code>Urdu</code>, <code>Vietnamese</code>, and <code>Welsh</code>.</li>
            <li><strong>ElevenLabs：</strong> <code>Afrikaans</code>, <code>Arabic</code>, <code>Armenian</code>, <code>Assamese</code>, <code>Azerbaijani</code>, <code>Belarusian</code>, <code>Bengali</code>, <code>Bosnian</code>, <code>Bulgarian</code>, <code>Catalan</code>, <code>Cebuano</code>, <code>Chichewa</code>, <code>Croatian</code>, <code>Czech</code>, <code>Danish</code>, <code>Dutch</code>, <code>English</code>, <code>Estonian</code>, <code>Filipino</code>, <code>Finnish</code>, <code>French</code>, <code>Galician</code>, <code>Georgian</code>, <code>German</code>, <code>Greek</code>, <code>Gujarati</code>, <code>Hausa</code>, <code>Hebrew</code>, <code>Hindi</code>, <code>Hungarian</code>, <code>Icelandic</code>, <code>Indonesian</code>, <code>Irish</code>, <code>Italian</code>, <code>Japanese</code>, <code>Javanese</code>, <code>Kannada</code>, <code>Kazakh</code>, <code>Kirghiz</code>, <code>Korean</code>, <code>Latvian</code>, <code>Lingala</code>, <code>Lithuanian</code>, <code>Luxembourgish</code>, <code>Macedonian</code>, <code>Malay</code>, <code>Malayalam</code>, <code>Mandarin Chinese</code>, <code>Marathi</code>, <code>Nepali</code>, <code>Norwegian</code>, <code>Pashto</code>, <code>Persian</code>, <code>Polish</code>, <code>Portuguese</code>, <code>Punjabi</code>, <code>Romanian</code>, <code>Russian</code>, <code>Serbian</code>, <code>Sindhi</code>, <code>Slovak</code>, <code>Slovenian</code>, <code>Somali</code>, <code>Spanish</code>, <code>Swahili</code>, <code>Swedish</code>, <code>Tamil</code>, <code>Telugu</code>, <code>Thai</code>, <code>Turkish</code>, <code>Ukrainian</code>, <code>Urdu</code>, <code>Vietnamese</code>, <code>Welsh</code>.</li>
        </ul>
    </li>
</ul>

<div class="button-row">
  <a href="/t/genai-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-plugin" class="cta-button primary track-click" data-event-name="btn_clk_gen_ai_fab"  data-event-location="mid_cta" target="_blank" rel="noopener noreferrer">在 Fab.com 上查看</a>
  <a href="/docs/genai-unreal" class="cta-button secondary track-click" data-event-name="btn_clk_gen_ai_documentation"  data-event-location="mid_cta">产品文档</a>
</div>

<h2>应用场景：</h2>

<ul>
    <li><strong>真正的动态 NPC：</strong>创建能够根据玩家行为和世界事件实时生成对话的角色。</li>
    <div class="image-wrapper">
    <figure>
        <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_50/v1751282014/BeFunky-collage232_logwgw.webp" alt="用例示例" style="width: 100%;">
        <figcaption class="image-caption">
        使用本插件构建的第三方项目"Become Human"
        </figcaption>
    </figure>
    </div>
    <li><strong>程序化内容生成：</strong>在运行时即时生成丰富、连贯的内容，从任务和物品描述到完整的传说典籍。</li>
    <li><strong>AI 驱动的游戏主持人：</strong>使用视觉和推理模型创建能够实时调整游戏世界的 AI 导演。</li>
    <li><strong>互动语音驱动的游戏玩法：</strong>结合 TTS 和转写功能，与游戏内角色进行真实的语音对话。</li>
    <li><strong>快速原型制作与世界构建：</strong>在编辑器中直接使用图像生成和结构化 JSON，快速创建概念艺术和大量世界数据。</li>
</ul>

<h2>为什么选择这款插件？</h2>
<ul>
    <li><strong>持续进化：</strong> 🧬 我们在前沿 AI 公司发布新模型和功能后第一时间提供快速更新支持。</li>
    <li><strong>生产就绪且经过测试：</strong> ⚔️ 所有功能均使用真实 API 密钥针对不同用例和规模进行定期测试。该插件已经过一年以上的测试，并根据用户反馈持续更新。</li>
    <li><strong>通用且适应性强的设计：</strong> 🌵 代码库采用简洁、通用的架构，能够快速适应未来的模型和 API 变更。</li>
    <li><strong>由开发者打造，为开发者服务：</strong> 💻 凭借多年专业游戏开发经验，我们保证提供稳定、文档完善且高性能的实现。</li>
    <li><strong>专属支持：</strong> 📧 如有任何问题或定制修改需求，请发送邮件至我们的支持团队，我们将竭诚为您服务。</li>
</ul>

<h2>资源与支持</h2>
<ul>
    <li><a href="/docs/genai-unreal/" class="track-click" data-event-name="lnk_clk_genai_docs" data-event-location="post_genai">文档</a></li>
    <li><a href="/t/discord" class="track-click" data-event-name="lnk_clk_discord" data-event-location="post_genai">Discord 社区</a></li>
    <li><strong>专业支持与定制开发：</strong>如需定制解决方案、功能请求或企业级支持，请直接联系我们的团队：<a href="mailto:mail@muddyterrain.com" class="track-click" data-event-name="lnk_clk_support_email" data-event-location="post_genai">mail@muddyterrain.com</a></li>
</ul>

<div class="button-row">
  <a href="/t/genai-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-plugin" class="cta-button primary track-click" data-event-name="btn_clk_gen_ai_fab"  data-event-location="btm_cta" target="_blank" rel="noopener noreferrer">在 Fab.com 上查看</a>
  <a href="/docs/genai-unreal" class="cta-button secondary track-click" data-event-name="btn_clk_gen_ai_documentation"  data-event-location="btm_cta">产品文档</a>
</div>

</body>
</html>
