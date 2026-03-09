---
layout: wide
title: "GenAI for Unreal 플러그인 - 언리얼 엔진 AI 통합"
category: products
permalink: /ko/genai-unreal
author: "Muddy Terrain"
tags: [documentation,sample]
lang: ko
hreflang_group: genai-unreal
image: https://res.cloudinary.com/dqq9t4hyy/image/upload//q_60/v1751299301/86187345-e044-4862-9acd-0c078ade41ab.webp
---

<html lang="ko">

<body>

<div class="image-wrapper">
<figure>
    <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1772931701/MainBanners_4_d9nmqo.webp" alt="Use cases example" style="width: 100%;">
</figure>
</div>



<p><strong>매일 쏟아지는 새로운 AI 모델, 더 이상 직접 추적할 필요 없습니다.</strong> GenAI for Unreal은 통합 레이어를 대신 처리해주는 완성도 높은 프로덕션 레디 플러그인입니다. 여러분은 게임플레이에만 집중하세요. 세계 최고의 AI 모델들을 위한 안정적이고 통합된 강력한 인터페이스는 저희가 제공합니다. OpenAI의 ChatGPT(최신 GPT-5.4, GPT-5.3 Codex, GPT-5.2 포함), Anthropic의 Claude Opus/Sonnet 4.6, Google의 Gemini 3.1 / Nano Banana 2, XAI의 Grok 4.1/4/3, DeepSeek의 R1, Inworld AI TTS 등 현재 최첨단 LLM API를 모두 지원합니다. 또한 OpenAI Compatible Mode를 통해 Alibaba Qwen, Mistral, Groq, OpenRouter, Meta Llama, BigModel GLM-4는 물론, Ollama를 통한 로컬 모델 실행까지 자유롭게 전환하여 최고의 유연성과 비용 효율성을 달성할 수 있습니다.</p>

<p>이제 <strong>GPT-5.4</strong>, <strong>Claude 4.6</strong>, <strong>Gemini 3.1</strong>, <strong>Inworld AI TTS</strong>, <strong>Function Calling</strong>, OpenAI <strong>Responses API</strong> 지원!! 🎉</p>

<div class="button-row">
  <a href="/t/genai-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-plugin" class="cta-button primary track-click" data-event-name="btn_clk_gen_ai_fab"  data-event-location="top_cta" target="_blank" rel="noopener noreferrer">Fab.com에서 보기</a>
  <a href="/docs/genai-unreal" class="cta-button secondary track-click" data-event-name="btn_clk_gen_ai_documentation"  data-event-location="top_cta">제품 문서</a>
</div>

<div style="padding: 15px 20px; background-color: #f0f8ff; border-left: 4px solid #007acc; margin: 25px 0; border-radius: 6px;">
  <h2 style="margin-top: 0; font-size: 1.2em;">v2.0.1 새로운 기능!</h2>
  <p style="margin-bottom: 15px; font-size: 1em;">이번 릴리스에는 다양한 주요 신기능, 통합 기능, 그리고 중요한 수정 사항이 포함되어 있습니다:</p>
  <ul style="margin: 0; padding-left: 20px;">
        <li>🌐 <strong>Inworld AI 통합:</strong> 표준 및 실시간 스트리밍 엔드포인트를 포함한 Inworld Text-to-Speech 완벽 지원.</li>
        <li>🔗 <strong>OpenAI Responses API (Beta):</strong> OpenAI의 구조화된 Responses API를 지원하는 새로운 GenOAIResponses 클래스 통합.</li>
        <li>🛠️ <strong>Function Calling (Tool Use):</strong> Anthropic Claude 및 OpenAI Chat 모델에 대한 도구/함수 호출 지원 추가.</li>
        <li>🧠 <strong>신규 모델:</strong> Anthropic Claude 4.6 Opus & Sonnet, OpenAI GPT-5.4/5.3 Codex/Image-1.5, Google Gemini 3.1 Pro/Flash Lite/Flash Image Preview, ElevenLabs Scribe V2 & V2 Realtime, Inworld TTS 1.5 Max/Mini/1.</li>
  </ul>
</div>

<h2>주요 기능:</h2>
<ul>
    <li>
        <p><strong>실시간 텍스트 스트리밍:</strong> ⚡️<br>
        역동적인 실시간 응답으로 캐릭터에 생명을 불어넣으세요. 스트리밍 지원을 통해 텍스트가 생성되는 즉시 청크 단위로 전달되어, 실시간 내레이션 대사, 반응형 AI 동료, 대기 시간 없는 인터랙티브 스토리텔링을 구현하기에 완벽합니다.</p>
    </li>
    <li>
        <p><strong>고급 채팅 완성:</strong> 🤖<br>
        OpenAI, Anthropic, Google, XAI, DeepSeek의 모델을 활용하여 동적 NPC 대화, 절차적 퀘스트 생성, 실시간 내러티브 적응으로 게임을 강화하세요.</p>
    </li>
    <li>
        <p><strong>추론 모델:</strong> 🧠<br>
        DeepSeek의 R1과 XAI의 Grok 같은 모델이 가진 고유한 '생각한 후 말하기' 기능을 활용하여 핵심 내러티브 요소와 복잡한 논리적 출력을 생성하세요.</p>
    </li>
    <li>
        <p><strong>멀티모달 비전/텍스트 입력:</strong> 📸<br>
        모델이 게임을 '볼' 수 있게 하세요. 스크린샷이나 기타 이미지를 텍스트와 함께 직접 입력으로 제공할 수 있으며, 이제 Google Gemini도 지원합니다! AI 기반 관전 해설, 동적 플레이어 가이드, 환경 인식 NPC 상호작용을 구현하기에 완벽합니다.</p>
    </li>
    <li>
        <p><strong>이미지 편집:</strong> 🎨<br>
        단순 생성을 넘어서세요. 강력한 AI 기반 도구로 기존 이미지를 편집하여 엔진 내에서 바로 비주얼 컨셉을 반복 작업할 수 있습니다.</p>
    </li>
    <li>
        <p><strong>구조화된 JSON 출력:</strong> ❤️‍🔥<br>
        지원되는 모든 모델에서 복잡한 JSON 응답을 안정적으로 받을 수 있습니다. 예를 들어, 각각 고유한 스토리, 종족, 성별, 이름을 가진 100명의 AI 생성 NPC용 JSON을 생성할 수 있습니다.</p>
    </li>
    <li>
        <p><strong>고품질 이미지 생성:</strong> 🖼️<br>
        OpenAI의 DALL-E 2, DALL-E 3, GPT-Image-1 모델을 지원하여 최첨단 이미지 생성을 워크플로우에 직접 통합하세요.</p>
    </li>
    <li>
        <p><strong>텍스트 음성 변환 (TTS):</strong> 🔊<br>
        OpenAI와 ElevenLabs의 TTS 모델을 사용하여 인게임 대화, 내레이션, AI 캐릭터와의 실시간 대화를 위한 역동적이고 고품질의 음성을 생성하세요.</p>
    </li>
    <li>
        <p><strong>Function Calling (Tool Use):</strong> 🔧<br>
        AI 모델이 게임 함수를 직접 호출할 수 있습니다. Anthropic Claude 및 OpenAI Chat 모델을 지원하여 AI 기반 게임플레이 액션, 데이터 조회, 동적 월드 상호작용을 구현할 수 있습니다.</p>
    </li>
    <li>
        <p><strong>OpenAI Responses API:</strong> 📋<br>
        OpenAI의 새로운 구조화된 Responses API에 접근하여 더 강력하고 제어된 모델 출력을 얻을 수 있으며, Blueprint와 C++를 완벽 지원합니다.</p>
    </li>
    <li>
        <p><strong>사운드 이펙트 생성:</strong> 🎶<br>
        ElevenLabs의 최첨단 오디오 모델을 사용하여 텍스트 프롬프트에서 맞춤형 사운드 이펙트를 생성하세요.</p>
    </li>
    <li>
        <p><strong>오디오 전사:</strong> 📝<br>
        OpenAI의 Whisper, GPT-4o, ElevenLabs의 전사 모델을 활용하여 플레이어 음성을 텍스트로 변환하고, 인게임 음성 명령이나 인터랙티브 대화를 구현하세요.</p>
    </li>
    <li>
        <p><strong>손쉬운 서버 프록시:</strong> ☁️<br>
        보안이나 커스텀 로직을 위해 요청을 자체 백엔드로 라우팅해야 하나요? 서버 프록시 기능을 사용하면 단일 설정만으로 모든 프로바이더의 API 엔드포인트를 오버라이드하여 데이터 흐름을 완벽하게 제어할 수 있습니다.</p>
    </li>
    <li>
        <p><strong>OpenAI Compatible Mode:</strong> 🔄<br>
        Alibaba Qwen, Mistral, Groq, OpenRouter, Meta Llama, BigModel GLM-4, Ollama를 통한 로컬 모델을 지원하여 놀라운 유연성을 제공합니다. 코드 변경 없이 프로바이더를 자유롭게 전환하여 비용 절감, 개인정보 보호, 오프라인 기능을 실현하세요.</p>
    </li>
    <li>
        <p><strong>안전하고 중앙화된 인증:</strong> 🔐<br>
        하나의 안전한 중앙 설정 패널에서 모든 API 키를 관리하세요. 이동 불가능한 암호화 파일을 사용하여 API 키를 소스 컨트롤과 분리하여 안전하게 보관합니다.</p>
    </li>
    <li>
        <p><strong>Blueprint & C++ 지원:</strong> 🔗<br>
        빠른 반복 작업을 위한 간단하고 강력한 Blueprint 노드를 활용하고, C++에서도 동일한 견고한 자기 관리형 함수에 접근하여 최대 성능과 제어를 달성하세요.</p>
    </li>
    <li>
        <p><strong>크로스 플랫폼 설계:</strong> 🌐<br>
        플러그인은 네트워킹과 파일 관리를 위해 표준적인 고수준 언리얼 엔진 모듈만을 사용하므로, 엔진이 지원하는 모든 플랫폼에서 동작합니다.</p>
    </li>
</ul>

<img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1756926286/Tests_4_rgysms.webp" alt="GenAI for Unreal Plugin Tests">


<h2>지원 통합 및 모델</h2>
<div style="padding: 10px 15px; background-color: #fffbe6; border-left: 4px solid #ffc107; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold; color: #856404;">면책 조항</p>
  <p style="margin: 5px 0 0 0; color: #856404;">이 플러그인은 지원되는 AI 프로바이더 중 하나 이상의 유효한 API 키가 있어야 동작합니다. <a href="/docs/genai-unreal/getting-api-keys/" class="track-click" data-event-name="lnk_clk_genai_api_keys_docs" data-event-location="post_genai" target="_blank" rel="noopener noreferrer">API 키 발급 방법</a>은 문서를 참조하세요.</p>
</div>
<p>오늘날 최고의 모델들을 위한 깔끔하고 통합된 API.</p>
<ul>
    <li><strong>OpenAI:</strong>
        <ul>
            <li><strong>채팅:</strong> <code>gpt-5.2</code>, <code>gpt-5.1</code>, <code>gpt-5</code>, <code>gpt-5-mini</code>, <code>gpt-5-nano</code>, <code>gpt-4.1</code>, <code>gpt-4o</code>, <code>gpt-4.1-mini</code>, <code>gpt-4.1-nano</code>, <code>gpt-4o-mini</code>.</li>
            <li><strong>Responses API:</strong> <code>gpt-5.4</code>, <code>gpt-5.4-pro</code>, <code>gpt-5.2</code>, <code>gpt-5.2-pro</code>, <code>gpt-5.3-codex</code>, <code>gpt-5.2-codex</code>, <code>gpt-5.1-codex-max</code>, <code>gpt-5-codex-mini</code>.</li>
            <li><strong>추론 모델:</strong> <code>o4-mini</code>, <code>o3</code>, <code>o3-pro</code>, <code>o3-mini</code>, <code>o1</code>, <code>o1-pro</code>.</li>
            <li><strong>이미지 생성:</strong> <code>gpt-image-1.5</code>, <code>gpt-image-1</code>, <code>gpt-image-1-mini</code>, <code>dall-e-3</code>, <code>dall-e-2</code>.</li>
            <li><strong>오디오 TTS:</strong> <code>gpt-4o-mini-tts</code>, <code>tts-1</code>, <code>tts-1-hd</code>.</li>
            <li><strong>오디오 전사:</strong> <code>gpt-4o-transcribe</code>, <code>gpt-4o-mini-transcribe</code>, <code>whisper-1</code>.</li>
            <li><strong>구조화된 출력 (JSON Mode)</strong>  ✔</li>
            <li><strong>Function Calling (Tool Use)</strong>   ✔</li>
            <li><strong>텍스트 및 오디오 스트리밍</strong>   ✔</li>
            <li><strong>멀티모달 채팅</strong>   ✔</li>
            <li><strong>Realtime API:</strong> <code>gpt-realtime</code>, <code>gpt-realtime-mini</code>.</li>
        </ul>
    </li>
    <li><strong>Anthropic:</strong>
        <ul>
            <li><strong>채팅:</strong> <code>claude-opus-4-6</code>, <code>claude-sonnet-4-6</code>, <code>claude-opus-4.5</code>, <code>claude-sonnet-4.5</code>, <code>claude-haiku-4.5</code>, <code>claude-opus-4.1</code>, <code>claude-opus-4</code>, <code>claude-sonnet-4</code>, <code>claude-3-7-sonnet</code>, <code>claude-3-5-sonnet</code>, <code>claude-3-5-haiku</code>, <code>claude-3-haiku</code>, <code>claude-3-opus</code>.</li>
            <li><strong>멀티모달 채팅</strong>   ✔</li>
            <li><strong>Function Calling (Tool Use)</strong>   ✔</li>
            <li><strong>확장 사고</strong>   ✔ (Claude 4.5+)</li>
        </ul>
    </li>
    <li><strong>XAI:</strong>
        <ul>
            <li><strong>채팅:</strong> <code>grok-4-fast-non-reasoning</code>, <code>grok-4-fast-reasoning</code>, <code>grok-4-1-fast-reasoning</code>, <code>grok-4-1-fast-non-reasoning</code>, <code>grok-4.1</code>, <code>grok-4</code>, <code>grok-4-eu</code>, <code>grok-code-fast-1</code>, <code>grok-3</code>, <code>grok-3-mini</code>, <code>grok-3-fast</code>, <code>grok-3-mini-fast</code>, <code>grok-2-vision-1212</code>, <code>grok-2-1212</code>.</li>
            <li><strong>추론 모델:</strong> <code>grok-4-fast-reasoning</code>, <code>grok-4-1-fast-reasoning</code>, <code>grok-4.1</code>, <code>grok-4</code>, <code>grok-3-mini</code>, <code>grok-3-mini-fast</code>.</li>
            <li><strong>텍스트 스트리밍</strong>  ✔</li>
            <li><strong>멀티모달 채팅</strong>   ✔</li>
        </ul>
    </li>
    <li><strong>Google Gemini:</strong>
        <ul>
            <li><strong>채팅:</strong> <code>Gemini 3.1 Pro Preview</code>, <code>Gemini 3.1 Flash Lite Preview</code>, <code>Gemini 3 Pro Preview</code>, <code>Gemini 3 Flash Preview</code>, <code>Gemini 2.5 Flash</code>, <code>Gemini 2.5 Flash Lite</code>, <code>Gemini 2.5 Pro</code>.</li>
            <li><strong>추론 모델:</strong> <code>Gemini 2.5 Flash</code>, <code>Gemini 2.5 Pro</code>.</li>
            <li><strong>오디오 TTS:</strong> <code>gemini-2.5-flash-preview-tts</code>, <code>gemini-2.5-pro-preview-tts</code>.</li>
            <li><strong>오디오 전사:</strong> <code>Gemini 3.1 Pro Preview</code>, <code>Gemini 3.1 Flash Lite Preview</code>, <code>Gemini 3 Pro Preview</code>, <code>Gemini 3 Flash Preview</code>, <code>Gemini 2.5 Flash</code>, <code>Gemini 2.5 Pro</code>.</li>
            <li><strong>텍스트 스트리밍</strong>  ✔</li>
            <li><strong>멀티모달 채팅</strong>   ✔</li>
            <li><strong>Realtime:</strong> <code>gemini-2.5-flash-native-audio-preview-09-2025</code>, <code>gemini-2.5-flash-native-audio-preview-12-2025</code>, <code>gemini-live-2.5-flash-preview</code>, <code>gemini-2.0-flash-live-001</code>.</li>
            <li><strong>이미지 생성:</strong> <code>gemini-3.1-flash-image-preview (Nano Banana 2)</code>, <code>gemini-3-pro-image-preview (Nano Banana Pro)</code>, <code>gemini-2.5-flash-image (Nano Banana)</code>, <code>imagen-4.0-generate-001</code>, <code>imagen-4.0-ultra-generate-001</code>, <code>imagen-4.0-fast-generate-001</code>.</li>
        </ul>
    </li>
    <li><strong>DeepSeek:</strong>
        <ul>
            <li><strong>채팅:</strong> <code>DeepSeek-V3.1</code>, <code>deepseek-chat</code>.</li>
            <li><strong>추론:</strong> <code>deepseek-reasoner</code>.</li>
            <li><strong>텍스트 스트리밍</strong>  ✔</li>
        </ul>
    </li>
    <li><strong>ElevenLabs:</strong>
        <ul>
            <li><strong>텍스트 음성 변환:</strong> <code>eleven_v3</code>, <code>eleven_turbo_v2_5</code>, <code>eleven_flash_v2_5</code>, <code>eleven_flash_v2</code>, <code>eleven_multilingual_v3 (Alpha)</code>, <code>eleven_multilingual_v2</code>.</li>
            <li><strong>전사:</strong> <code>scribe_v2</code>, <code>scribe_v2_realtime</code>, <code>scribe_v1</code>.</li>
            <li><strong>사운드 이펙트:</strong> <code>eleven_text_to_sound_v2</code>.</li>
            <li><strong>오디오 스트리밍</strong>  ✔</li>
        </ul>
    </li>
    <li><strong>Inworld AI:</strong>
        <ul>
            <li><strong>텍스트 음성 변환:</strong> <code>inworld-tts-1.5-max</code>, <code>inworld-tts-1.5-mini</code>, <code>inworld-tts-1</code>.</li>
            <li><strong>오디오 스트리밍</strong>  ✔</li>
        </ul>
    </li>
    <li><strong>확장 OpenAI Compatible 지원:</strong>
        <ul>
            <li><strong>Alibaba Qwen:</strong>
                <ul>
                    <li><strong>채팅:</strong> <code>qvq-max</code>, <code>qvq-max-latest</code>, <code>qvq-max-2025-03-25</code>, <code>qwen-vl-max</code>, <code>qwen-vl-plus</code>, <code>qwen2.5-vl-72b-instruct</code>, <code>qwen2.5-vl-32b-instruct</code>, <code>qwen2.5-vl-7b-instruct</code>, <code>qwen2.5-vl-3b-instruct</code>.</li>
                    <li><strong>멀티모달 채팅</strong>   ✔</li>
                </ul>
            </li>
            <li><strong>Mistral AI:</strong>
                <ul>
                    <li><strong>채팅:</strong> <code>mistral-large-2512</code>, <code>mistral-medium-2508</code>, <code>mistral-small-2506</code>, <code>ministral-14b-2512</code>, <code>ministral-8b-2512</code>, <code>ministral-3b-2512</code>, <code>magistral-medium-2509</code>, <code>magistral-small-2509</code>.</li>
                    <li><strong>텍스트 스트리밍</strong>  ✔</li>
                </ul>
            </li>
            <li><strong>Groq:</strong>
                <ul>
                    <li><strong>채팅:</strong> 다양한 Groq 최적화 모델.</li>
                    <li><strong>텍스트 스트리밍</strong>  ✔</li>
                </ul>
            </li>
            <li><strong>OpenRouter:</strong>
                <ul>
                    <li><strong>채팅:</strong> 다양한 프로바이더의 수백 가지 모델에 접근 가능.</li>
                    <li><strong>텍스트 스트리밍</strong>  ✔</li>
                </ul>
            </li>
            <li><strong>Meta Llama:</strong>
                <ul>
                    <li><strong>채팅:</strong> 다양한 Llama 버전.</li>
                    <li><strong>텍스트 스트리밍</strong>  ✔</li>
                </ul>
            </li>
            <li><strong>BigModel GLM-4:</strong>
                <ul>
                    <li><strong>채팅:</strong> <code>glm-4</code> 및 변형 모델.</li>
                    <li><strong>텍스트 스트리밍</strong>  ✔</li>
                </ul>
            </li>
            <li><strong>로컬 모델 (Ollama):</strong>
                <ul>
                    <li><strong>채팅:</strong> <code>gemma3:1b</code>, <code>nemotron-3-nano</code>, <code>gpt-oss</code>, <code>llama3.1</code>, <code>phi3</code>, <code>llama3.2</code>.</li>
                    <li><strong>텍스트 스트리밍</strong>  ✔</li>
                </ul>
            </li>
        </ul>
    </li>
</ul>
<p>지원 포맷</p>
<ul>
    <li><strong>오디오:</strong>
        <ul>
            <li><strong>입력:</strong> <code>mp3</code>, <code>wav</code>, <code>mp4</code>, <code>mpeg</code>, <code>mpga</code>, <code>m4a</code>, <code>webm</code>.</li>
            <li><strong>출력:</strong> <code>pcm</code>.</li>
        </ul>
    </li>
    <li><strong>음성:</strong>
        <ul>
            <li><strong>OpenAI:</strong> <code>alloy</code>, <code>ash</code>, <code>ballad</code>, <code>coral</code>, <code>echo</code>, <code>sage</code>, <code>shimmer</code>, <code>verse</code>, <code>marin</code>, <code>cedar</code>.</li>
            <li><strong>Google:</strong> <code>Zephyr</code>, <code>Puck</code>, <code>Charon</code>, <code>Kore</code>, <code>Fenrir</code>, <code>Leda</code>, <code>Orus</code>, <code>Aoede</code>, <code>Callirrhoe</code>, <code>Autonoe</code>, <code>Enceladus</code>, <code>Iapetus</code>, <code>Umbriel</code>, <code>Algieba</code>, <code>Despina</code>, <code>Erinome</code>, <code>Algenib</code>, <code>Rasalgethi</code>, <code>Laomedeia</code>, <code>Achernar</code>, <code>Alnilam</code>, <code>Schedar</code>, <code>Gacrux</code>, <code>Pulcherrima</code>, <code>Achird</code>, <code>Zubenelgenubi</code>, <code>Vindemiatrix</code>, <code>Sadachbia</code>, <code>Sadaltager</code>, <code>Sulafat</code>.</li>
            <li><strong>ElevenLabs:</strong> 50+ 음성.</li>
        </ul>
    </li>
    <li><strong>지원 언어:</strong>
        <ul>
            <li><strong>Google:</strong> <code>Arabic</code>, <code>German</code>, <code>English</code>, <code>Spanish</code>, <code>French</code>, <code>Hindi</code>, <code>Indonesian</code>, <code>Italian</code>, <code>Japanese</code>, <code>Korean</code>, <code>Portuguese</code>, <code>Russian</code>, <code>Dutch</code>, <code>Polish</code>, <code>Thai</code>, <code>Turkish</code>, <code>Vietnamese</code>, <code>Romanian</code>, <code>Ukrainian</code>, <code>Bengali</code>, <code>Marathi</code>, <code>Tamil</code>, <code>Telugu</code>.</li>
            <li><strong>OpenAI:</strong> <code>Afrikaans</code>, <code>Arabic</code>, <code>Armenian</code>, <code>Azerbaijani</code>, <code>Belarusian</code>, <code>Bosnian</code>, <code>Bulgarian</code>, <code>Catalan</code>, <code>Chinese</code>, <code>Croatian</code>, <code>Czech</code>, <code>Danish</code>, <code>Dutch</code>, <code>English</code>, <code>Estonian</code>, <code>Finnish</code>, <code>French</code>, <code>Galician</code>, <code>German</code>, <code>Greek</code>, <code>Hebrew</code>, <code>Hindi</code>, <code>Hungarian</code>, <code>Icelandic</code>, <code>Indonesian</code>, <code>Italian</code>, <code>Japanese</code>, <code>Kannada</code>, <code>Kazakh</code>, <code>Korean</code>, <code>Latvian</code>, <code>Lithuanian</code>, <code>Macedonian</code>, <code>Malay</code>, <code>Marathi</code>, <code>Maori</code>, <code>Nepali</code>, <code>Norwegian</code>, <code>Persian</code>, <code>Polish</code>, <code>Portuguese</code>, <code>Romanian</code>, <code>Russian</code>, <code>Serbian</code>, <code>Slovak</code>, <code>Slovenian</code>, <code>Spanish</code>, <code>Swahili</code>, <code>Swedish</code>, <code>Tagalog</code>, <code>Tamil</code>, <code>Thai</code>, <code>Turkish</code>, <code>Ukrainian</code>, <code>Urdu</code>, <code>Vietnamese</code>, and <code>Welsh</code>.</li>
            <li><strong>ElevenLabs:</strong> <code>Afrikaans</code>, <code>Arabic</code>, <code>Armenian</code>, <code>Assamese</code>, <code>Azerbaijani</code>, <code>Belarusian</code>, <code>Bengali</code>, <code>Bosnian</code>, <code>Bulgarian</code>, <code>Catalan</code>, <code>Cebuano</code>, <code>Chichewa</code>, <code>Croatian</code>, <code>Czech</code>, <code>Danish</code>, <code>Dutch</code>, <code>English</code>, <code>Estonian</code>, <code>Filipino</code>, <code>Finnish</code>, <code>French</code>, <code>Galician</code>, <code>Georgian</code>, <code>German</code>, <code>Greek</code>, <code>Gujarati</code>, <code>Hausa</code>, <code>Hebrew</code>, <code>Hindi</code>, <code>Hungarian</code>, <code>Icelandic</code>, <code>Indonesian</code>, <code>Irish</code>, <code>Italian</code>, <code>Japanese</code>, <code>Javanese</code>, <code>Kannada</code>, <code>Kazakh</code>, <code>Kirghiz</code>, <code>Korean</code>, <code>Latvian</code>, <code>Lingala</code>, <code>Lithuanian</code>, <code>Luxembourgish</code>, <code>Macedonian</code>, <code>Malay</code>, <code>Malayalam</code>, <code>Mandarin Chinese</code>, <code>Marathi</code>, <code>Nepali</code>, <code>Norwegian</code>, <code>Pashto</code>, <code>Persian</code>, <code>Polish</code>, <code>Portuguese</code>, <code>Punjabi</code>, <code>Romanian</code>, <code>Russian</code>, <code>Serbian</code>, <code>Sindhi</code>, <code>Slovak</code>, <code>Slovenian</code>, <code>Somali</code>, <code>Spanish</code>, <code>Swahili</code>, <code>Swedish</code>, <code>Tamil</code>, <code>Telugu</code>, <code>Thai</code>, <code>Turkish</code>, <code>Ukrainian</code>, <code>Urdu</code>, <code>Vietnamese</code>, <code>Welsh</code>.</li>
        </ul>
    </li>
</ul>

<div class="button-row">
  <a href="/t/genai-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-plugin" class="cta-button primary track-click" data-event-name="btn_clk_gen_ai_fab"  data-event-location="mid_cta" target="_blank" rel="noopener noreferrer">Fab.com에서 보기</a>
  <a href="/docs/genai-unreal" class="cta-button secondary track-click" data-event-name="btn_clk_gen_ai_documentation"  data-event-location="mid_cta">제품 문서</a>
</div>

<h2>활용 사례:</h2>

<ul>
    <li><strong>진정한 동적 NPC:</strong> 플레이어의 행동과 월드 이벤트를 기반으로 실시간으로 대화가 생성되는 캐릭터를 만드세요.</li>
    <div class="image-wrapper">
    <figure>
        <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_50/v1751282014/BeFunky-collage232_logwgw.webp" alt="Use cases example" style="width: 100%;">
        <figcaption class="image-caption">
        이 플러그인을 사용하여 만들어진 서드파티 프로젝트 'Become Human'
        </figcaption>
    </figure>
    </div>
    <li><strong>절차적 콘텐츠 생성:</strong> 퀘스트와 아이템 설명부터 방대한 설정집까지, 풍부하고 일관된 콘텐츠를 런타임에 즉시 생성하세요.</li>
    <li><strong>AI 기반 게임 마스터:</strong> 비전 및 추론 모델을 활용하여 게임 세계를 실시간으로 조정하는 AI 디렉터를 만드세요.</li>
    <li><strong>인터랙티브 음성 기반 게임플레이:</strong> TTS와 전사를 결합하여 인게임 캐릭터와 실제 음성 대화를 나누세요.</li>
    <li><strong>빠른 프로토타이핑 & 월드 빌딩:</strong> 에디터에서 직접 이미지 생성과 구조화된 JSON을 활용하여 컨셉 아트와 방대한 월드 데이터를 빠르게 생성하세요.</li>
</ul>

<h2>이 플러그인을 선택해야 하는 이유</h2>
<ul>
    <li><strong>끊임없는 진화:</strong> 🧬 최전선 AI 기업들의 새로운 모델과 기능이 출시되는 즉시 신속하게 업데이트를 제공합니다.</li>
    <li><strong>프로덕션 레디 & 검증 완료:</strong> ⚔️ 모든 기능은 실제 API 키를 사용하여 다양한 사용 사례와 규모에서 정기적으로 테스트됩니다. 1년 이상 사용자 피드백을 반영하며 업데이트해 왔습니다.</li>
    <li><strong>범용적이고 유연한 설계:</strong> 🌵 깔끔하고 범용적인 접근 방식으로 구축되어 미래의 모델 및 API 변경에 빠르게 적응할 수 있습니다.</li>
    <li><strong>개발자에 의한, 개발자를 위한 제품:</strong> 💻 수년간의 전문 게임 개발 경험을 바탕으로 안정적이고 잘 문서화된 고성능 구현을 보장합니다.</li>
    <li><strong>전담 지원:</strong> 📧 질문이나 커스텀 수정 요청은 지원팀에 이메일로 문의하세요. 기꺼이 도와드리겠습니다.</li>
</ul>

<h2>리소스 & 지원</h2>
<ul>
    <li><a href="/docs/genai-unreal/" class="track-click" data-event-name="lnk_clk_genai_docs" data-event-location="post_genai">문서</a></li>
    <li><a href="/t/discord" class="track-click" data-event-name="lnk_clk_discord" data-event-location="post_genai">Discord 커뮤니티</a></li>
    <li><strong>전문 지원 & 커스텀 개발:</strong> 맞춤형 솔루션, 기능 요청, 엔터프라이즈 지원이 필요하시면 아래로 직접 연락하세요: <a href="mailto:mail@muddyterrain.com" class="track-click" data-event-name="lnk_clk_support_email" data-event-location="post_genai">mail@muddyterrain.com</a></li>
</ul>

<div class="button-row">
  <a href="/t/genai-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-plugin" class="cta-button primary track-click" data-event-name="btn_clk_gen_ai_fab"  data-event-location="btm_cta" target="_blank" rel="noopener noreferrer">Fab.com에서 보기</a>
  <a href="/docs/genai-unreal" class="cta-button secondary track-click" data-event-name="btn_clk_gen_ai_documentation"  data-event-location="btm_cta">제품 문서</a>
</div>

</body>
</html>
