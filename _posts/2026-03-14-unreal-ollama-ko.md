---
layout: wide
title: "GenAI Llama - 언리얼 엔진 로컬 AI (구 Unreal Ollama)"
category: products
permalink: /ko/unreal-ollama
author: "Muddy Terrain"
tags: [tools, unreal, gamedev, ai, ollama, local-ai, llama, genai-llama, mistral, phi, gemma, llama-cpp, embedded-inference, lm-studio, vllm]
lang: ko
hreflang_group: unreal-ollama
image: https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1759079669/Screenshot_2025-09-28_133409_e7uag9.webp
---





<div class="image-wrapper">
<figure>
    <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1759079669/Screenshot_2025-09-28_133409_e7uag9.webp" alt="GenAI Llama - 언리얼 엔진에서 로컬 AI 모델 실행" style="width: 100%;">
</figure>
</div>

<p><strong>클라우드 API 불필요, 인터넷 불필요, 요청당 비용 없이 언리얼 엔진 게임 및 애플리케이션 내에서 로컬 AI 모델을 실행하세요.</strong> GenAI Llama(구 Unreal Ollama)는 두 가지 모드를 지원합니다: Ollama, LM Studio, llama.cpp 서버, vLLM, LocalAI, Jan 등 HTTP를 통해 로컬 추론 서버에 연결하거나, 내장 llama.cpp 추론으로 GGUF 모델을 게임 프로세스 내부에서 직접 실행할 수 있습니다. Llama 3, Mistral, Phi, Gemma, DeepSeek 등 수백 개의 모델을 로컬에서 실행하세요.</p>

<div class="button-row">
  <a href="/t/genai-llama-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-llama-plugin" class="cta-button primary track-click" data-event-name="btn_clk_genai_llama_fab" data-event-location="top_cta" target="_blank" rel="noopener noreferrer">Fab.com에서 보기</a>
  <a href="/docs/genai-llama" class="cta-button secondary track-click" data-event-name="btn_clk_genai_llama_docs" data-event-location="top_cta">문서</a>
</div>

<div style="background-color: #f9f9f9; border-left: 4px solid #4a4a4a; padding: 25px; margin: 30px 0; border-radius: 4px;">
  <h2 style="margin-top: 0;">두 가지 동작 모드</h2>
  <p><strong>HTTP 프로바이더</strong> — 로컬 추론 서버에 연결합니다. Ollama, LM Studio, llama.cpp 서버, vLLM, LocalAI, Jan 또는 OpenAI 호환 엔드포인트와 즉시 연동됩니다.</p>
  <p><strong>내장 추론 (llama.cpp)</strong> — GGUF 모델을 게임 프로세스 내부에서 직접 실행합니다. 서버가 필요 없으며, PC와 모바일에서 완전 오프라인으로 작동합니다. 선택 사항으로, 대상 플랫폼에 맞는 llama.cpp 라이브러리 컴파일이 필요합니다.</p>
</div>

<h2>주요 기능:</h2>
<ul>
    <li>
        <p><strong>7가지 지원 프로바이더:</strong><br>
        Ollama, LM Studio, llama.cpp 서버, vLLM, LocalAI, Jan (HTTP), 그리고 서버리스 인프로세스 추론을 위한 내장 llama.cpp.</p>
    </li>
    <li>
        <p><strong>내장 추론:</strong><br>
        GGUF 모델을 게임 프로세스 내에서 직접 실행 — 서버, 네트워크, 인터넷이 필요 없습니다. 런타임에 모델을 로드 및 언로드할 수 있습니다. CUDA, Vulkan, Metal을 통한 GPU 가속을 지원합니다.</p>
    </li>
    <li>
        <p><strong>100% 로컬 & 오프라인:</strong><br>
        모든 AI 처리가 플레이어의 머신에서 실행됩니다. 데이터가 기기를 떠나지 않습니다. 프라이버시가 중요한 애플리케이션과 오프라인 게임플레이에 완벽합니다.</p>
    </li>
    <li>
        <p><strong>요청당 비용 제로:</strong><br>
        모델을 다운로드한 후에는 무제한 AI 상호작용을 실행할 수 있습니다. API 청구서도, 구독도 없습니다.</p>
    </li>
    <li>
        <p><strong>채팅 완성 & 스트리밍:</strong><br>
        완전한 채팅 완성과 실시간 토큰별 스트리밍을 지원합니다. 타이프라이터 효과, 라이브 대화, 반응하는 AI 동반자를 만들 수 있습니다.</p>
    </li>
    <li>
        <p><strong>멀티모달 비전:</strong><br>
        <code>llava</code> 또는 <code>llama3.2-vision</code> 같은 모델을 사용하여 텍스트와 함께 이미지를 전송합니다. UTexture2D 에셋을 직접 전달하면 플러그인이 자동으로 Base64 변환을 처리합니다.</p>
    </li>
    <li>
        <p><strong>생성 옵션:</strong><br>
        Temperature, Top P, Max Tokens, Seed, Stop 시퀀스, JSON 형식 출력, 시스템 프롬프트 지원.</p>
    </li>
    <li>
        <p><strong>서버 관리:</strong><br>
        상태 확인, 사용 가능한 모델 목록 조회, 런타임 프로바이더 전환.</p>
    </li>
    <li>
        <p><strong>블루프린트 & C++ 지원:</strong><br>
        비동기 레이턴트 노드를 통한 완전한 블루프린트 지원과, 델리게이트가 포함된 완전한 C++ API. 적절한 라이프타임 관리를 위해 <code>UCancellableAsyncAction</code> 기반으로 구축되었습니다.</p>
    </li>
    <li>
        <p><strong>폭넓은 플랫폼 지원:</strong><br>
        HTTP 프로바이더: Windows, macOS, Linux, Android, iOS, PS4, Xbox One, Switch, HoloLens. 내장 추론: Windows, macOS, Linux, Android, iOS. 엔진 지원: UE 5.1 ~ 5.7.</p>
    </li>
</ul>

<h2>호환 모델</h2>
<p><a href="https://ollama.com/library" target="_blank" rel="noopener noreferrer">Ollama 라이브러리</a>의 모든 모델(HTTP) 또는 <a href="https://huggingface.co/models?search=gguf" target="_blank" rel="noopener noreferrer">Hugging Face</a>의 모든 GGUF 모델(내장)을 사용할 수 있습니다:</p>
<ul>
    <li><strong>일반 채팅:</strong> <code>llama3</code>, <code>mistral</code>, <code>gemma</code>, <code>phi-3</code>, <code>nemotron-3-nano</code></li>
    <li><strong>멀티모달 (비전):</strong> <code>llava</code>, <code>llama3.2-vision</code>, <code>moondream</code></li>
    <li><strong>코딩:</strong> <code>codellama</code>, <code>starcoder2</code>, <code>deepseek-coder</code></li>
    <li><strong>소형 & 고속:</strong> <code>gemma3:1b</code>, <code>phi-3:mini</code>, <code>tinyllama</code>, <code>qwen2.5-0.5b</code></li>
</ul>

<h2>사용 사례:</h2>
<ul>
    <li><strong>오프라인 NPC 대화:</strong> 인터넷 연결 없이 작동하는 캐릭터 대화 생성 — 싱글 플레이어 게임, 콘솔 타이틀, 데모에 필수적입니다.</li>
    <li><strong>프라이버시 우선 애플리케이션:</strong> 모든 플레이어-AI 대화를 기기에 보관합니다. 데이터가 머신을 떠나는 일이 없습니다.</li>
    <li><strong>AI가 탑재된 출시 게임:</strong> 내장 추론을 통해 게임에 GGUF 모델을 번들로 포함하세요. 플레이어가 별도로 설치할 필요가 없습니다.</li>
    <li><strong>콘솔 & 모바일 AI:</strong> HTTP 프로바이더는 PS4, Xbox, Switch, HoloLens에서 작동합니다. 내장 추론은 Android와 iOS에서 작동합니다.</li>
    <li><strong>빠른 프로토타이핑:</strong> LM Studio의 GUI 또는 Ollama의 CLI로 AI 기능을 즉시 테스트하세요.</li>
    <li><strong>하이브리드 아키텍처:</strong> 일상적인 상호작용에는 로컬 모델을, 최고의 지능이 필요한 순간에는 클라우드 모델(<a href="/genai-unreal" class="track-click" data-event-name="lnk_clk_genai_unreal" data-event-location="post_genai_llama">GenAI for Unreal</a> 플러그인 경유)을 사용합니다.</li>
</ul>

<h2>이 플러그인을 선택하는 이유</h2>
<ul>
    <li><strong>가장 유연한 로컬 AI:</strong> 7개의 프로바이더 + 내장 추론. 이 범위를 커버하는 다른 플러그인은 없습니다.</li>
    <li><strong>프로덕션 레디:</strong> 적절한 라이프타임 관리, 취소 지원, 스레드 안전 내장 추론을 갖춘 <code>UCancellableAsyncAction</code> 기반으로 구축되었습니다.</li>
    <li><strong>콘솔 지원:</strong> HTTP 프로바이더는 PS4, Xbox One, Switch, HoloLens에서 작동 — 다른 로컬 AI 플러그인이 지원하지 않는 플랫폼입니다.</li>
    <li><strong>개발자가 만든, 개발자를 위한:</strong> <a href="/genai-unreal" class="track-click" data-event-name="lnk_clk_genai_unreal" data-event-location="post_genai_llama">GenAI for Unreal</a>과 <a href="/genai-china" class="track-click" data-event-name="lnk_clk_genai_china" data-event-location="post_genai_llama">GenAI Chinese Models</a>를 만든 같은 팀이 제작.</li>
    <li><strong>전담 지원:</strong> Discord에 참여하거나 이메일로 도움을 받으세요.</li>
</ul>

<h2>리소스 & 지원</h2>
<ul>
    <li><a href="/docs/genai-llama/" class="track-click" data-event-name="lnk_clk_genai_llama_docs" data-event-location="post_genai_llama">문서</a></li>
    <li><a href="/t/discord" class="track-click" data-event-name="lnk_clk_discord" data-event-location="post_genai_llama" target="_blank" rel="noopener noreferrer">Discord 커뮤니티</a></li>
    <li><strong>전문 지원:</strong> <a href="mailto:mail@muddyterrain.com" class="track-click" data-event-name="lnk_clk_support_email" data-event-location="post_genai_llama">mail@muddyterrain.com</a></li>
</ul>

<div class="button-row">
  <a href="/t/genai-llama-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-llama-plugin" class="cta-button primary track-click" data-event-name="btn_clk_genai_llama_fab" data-event-location="btm_cta" target="_blank" rel="noopener noreferrer">Fab.com에서 보기</a>
  <a href="/docs/genai-llama" class="cta-button secondary track-click" data-event-name="btn_clk_genai_llama_docs" data-event-location="btm_cta">문서</a>
</div>

