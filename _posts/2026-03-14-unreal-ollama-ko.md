---
layout: wide
title: "Unreal Ollama - 언리얼 엔진 로컬 AI 플러그인"
category: products
permalink: /ko/unreal-ollama
author: "Muddy Terrain"
tags: [tools, unreal, gamedev, ai, ollama, local-ai, open-source]
lang: ko
hreflang_group: unreal-ollama
image: https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1759079669/Screenshot_2025-09-28_133409_e7uag9.webp
---



<html lang="ko">

<body>

<div class="image-wrapper">
<figure>
    <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1759079669/Screenshot_2025-09-28_133409_e7uag9.webp" alt="Unreal Ollama - 언리얼 엔진에서 로컬 AI 모델 실행" style="width: 100%;">
</figure>
</div>

<p><strong>강력한 오픈소스 AI 모델을 언리얼 엔진 내에서 로컬로 실행 — 클라우드 API 불필요, API 키 불필요, 요청당 비용 없음.</strong> Unreal Ollama는 <a href="https://ollama.com/" target="_blank" rel="noopener noreferrer">Ollama</a>를 언리얼 엔진과 통합하는 무료 오픈소스 플러그인입니다. Ollama 라이브러리의 모든 모델에서 채팅 완성, 실시간 스트리밍, 멀티모달 비전을 지원합니다.</p>

<div class="button-row">
  <a href="https://github.com/MuddyTerrain/unreal-ollama" class="cta-button primary track-click" data-event-name="btn_clk_unreal_ollama_github" data-event-location="top_cta" target="_blank" rel="noopener noreferrer">GitHub에서 보기</a>
  <a href="/docs/unreal-ollama" class="cta-button secondary track-click" data-event-name="btn_clk_unreal_ollama_docs" data-event-location="top_cta">문서</a>
</div>

<div style="background-color: #f9f9f9; border-left: 4px solid #4a4a4a; padding: 25px; margin: 30px 0; border-radius: 4px;">
  <h2 style="margin-top: 0;">무료 & 오픈 소스</h2>
  <p>Unreal Ollama는 개인 및 상업 프로젝트에서 완전히 무료로 사용할 수 있습니다. 소스 코드는 GitHub에 공개되어 있습니다. 마켓플레이스 구매 불필요 — 클론하고, 프로젝트에 넣고, 바로 개발을 시작하세요.</p>
  <p>유용하셨다면 GitHub에서 <strong>Star</strong>를 눌러주세요!</p>
</div>

<h2>주요 기능:</h2>
<ul>
    <li>
        <p><strong>100% 로컬 & 오프라인:</strong> 🔒<br>
        모든 AI 처리가 사용자의 머신에서 실행됩니다. 데이터가 기기를 떠나지 않으며, 런타임에 인터넷이 필요 없고, API 키를 관리할 필요가 없습니다. 프라이버시가 중요한 애플리케이션과 오프라인 게임플레이에 완벽합니다.</p>
    </li>
    <li>
        <p><strong>요청당 비용 제로:</strong> 💰<br>
        모델을 다운로드한 후에는 API 요금 걱정 없이 무제한 AI 상호작용을 실행할 수 있습니다. 전기 비용만으로 수백만 개의 NPC 대화를 생성하세요.</p>
    </li>
    <li>
        <p><strong>채팅 완성:</strong> 🤖<br>
        프롬프트를 보내고 완전한 응답을 받습니다. 간단한 비동기 노드가 모든 것을 처리 — 프리징 없음, 게임 스레드 차단 없음.</p>
    </li>
    <li>
        <p><strong>실시간 스트리밍:</strong> ⚡️<br>
        AI 응답이 생성되는 대로 단어별로 수신합니다. 타이프라이터 효과, 라이브 대화, 최소한의 체감 지연으로 반응하는 AI 동반자를 만들 수 있습니다.</p>
    </li>
    <li>
        <p><strong>멀티모달 비전 지원:</strong> 📸<br>
        <code>llava</code> 같은 모델을 사용하여 텍스트와 함께 이미지를 전송합니다. 프로젝트에서 Texture2D 에셋을 직접 전달하세요 — 플러그인이 자동으로 Base64 변환을 처리합니다.</p>
    </li>
    <li>
        <p><strong>블루프린트 & C++ 지원:</strong> 🔗<br>
        간단한 레이턴트 노드를 통한 완전한 블루프린트 지원과, 최대 성능 및 제어를 위한 정적 함수와 델리게이트가 포함된 완전한 C++ API.</p>
    </li>
    <li>
        <p><strong>폭넓은 엔진 지원:</strong> 🌐<br>
        언리얼 엔진 5.1부터 5.6까지 호환. 최대 호환성을 위해 UE 5.1로 빌드되었으며, 언리얼의 "낮은 버전에서 개발, 높은 버전으로 업그레이드" 접근 방식을 따릅니다.</p>
    </li>
</ul>

<h2>호환 모델</h2>
<div style="padding: 10px 15px; background-color: #fffbe6; border-left: 4px solid #ffc107; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold; color: #856404;">사전 요구 사항</p>
  <p style="margin: 5px 0 0 0; color: #856404;">이 플러그인은 대상 머신에 <a href="https://ollama.com/" target="_blank" rel="noopener noreferrer">Ollama</a>가 설치되어 실행 중이어야 합니다. <a href="https://ollama.com/library" target="_blank" rel="noopener noreferrer">ollama.com/library</a>에서 전체 모델 라이브러리를 둘러보세요.</p>
</div>
<p>Ollama 라이브러리의 모든 모델을 사용할 수 있습니다. 인기 있는 선택지:</p>
<ul>
    <li><strong>일반 채팅:</strong> <code>llama3</code>, <code>mistral</code>, <code>gemma</code>, <code>phi-3</code>, <code>nemotron-3-nano</code></li>
    <li><strong>멀티모달 (비전):</strong> <code>llava</code>, <code>llava-llama3</code>, <code>moondream</code></li>
    <li><strong>코딩:</strong> <code>codellama</code>, <code>starcoder2</code>, <code>deepseek-coder</code></li>
    <li><strong>소형 & 고속:</strong> <code>gemma3:1b</code>, <code>phi-3:mini</code>, <code>tinyllama</code></li>
</ul>

<h2>사용 사례:</h2>
<ul>
    <li><strong>오프라인 NPC 대화:</strong> 인터넷 연결 없이 작동하는 캐릭터 대화 생성 — 싱글 플레이어 게임과 데모에 필수적입니다.</li>
    <li><strong>프라이버시 우선 애플리케이션:</strong> 모든 플레이어-AI 대화를 기기에 보관합니다. 데이터가 머신을 떠나는 일이 없습니다.</li>
    <li><strong>빠른 프로토타이핑:</strong> 계정, 결제 수단, API 키 설정 없이 AI 기능을 즉시 테스트합니다. 모델을 풀하면 바로 시작할 수 있습니다.</li>
    <li><strong>무비용 개발:</strong> 클라우드 API 비용을 누적하지 않고 개발 중에 AI 기능을 반복할 수 있습니다.</li>
    <li><strong>하이브리드 아키텍처:</strong> 일상적인 상호작용에는 로컬 모델을, 최고의 지능이 필요한 순간에는 클라우드 모델(<a href="/genai-unreal" class="track-click" data-event-name="lnk_clk_genai_unreal" data-event-location="post_unreal_ollama">GenAI for Unreal</a> 플러그인 경유)을 사용합니다.</li>
</ul>

<h2>이 플러그인을 선택하는 이유</h2>
<ul>
    <li><strong>영원히 무료:</strong> 🆓 오픈소스이며 상업적 사용 가능. 숨겨진 비용이나 구독이 없습니다.</li>
    <li><strong>간단한 통합:</strong> 🧩 플러그인을 프로젝트에 넣고 활성화하면 몇 분 안에 AI와 대화를 시작할 수 있습니다.</li>
    <li><strong>프로덕션 레디:</strong> ⚔️ 적절한 라이프타임 관리를 갖춘 <code>UCancellableAsyncAction</code> 기반으로 구축. 출시 게임에서 안전하게 사용 가능.</li>
    <li><strong>개발자가 만든, 개발자를 위한:</strong> 💻 <a href="/genai-unreal" class="track-click" data-event-name="lnk_clk_genai_unreal" data-event-location="post_unreal_ollama">GenAI for Unreal</a>과 <a href="/genai-china" class="track-click" data-event-name="lnk_clk_genai_china" data-event-location="post_unreal_ollama">Gen AI China</a>를 만든 같은 팀이 제작.</li>
    <li><strong>전담 지원:</strong> 📧 Discord에 참여하거나 이메일로 도움을 받으세요.</li>
</ul>

<h2>리소스 & 지원</h2>
<ul>
    <li><a href="/docs/unreal-ollama/" class="track-click" data-event-name="lnk_clk_unreal_ollama_docs" data-event-location="post_unreal_ollama">문서</a></li>
    <li><a href="https://github.com/MuddyTerrain/unreal-ollama" class="track-click" data-event-name="lnk_clk_unreal_ollama_github" data-event-location="post_unreal_ollama" target="_blank" rel="noopener noreferrer">GitHub 저장소</a></li>
    <li><a href="/t/discord" class="track-click" data-event-name="lnk_clk_discord" data-event-location="post_unreal_ollama" target="_blank" rel="noopener noreferrer">Discord 커뮤니티</a></li>
    <li><strong>전문 지원:</strong> <a href="mailto:mail@muddyterrain.com" class="track-click" data-event-name="lnk_clk_support_email" data-event-location="post_unreal_ollama">mail@muddyterrain.com</a></li>
</ul>

<div class="button-row">
  <a href="https://github.com/MuddyTerrain/unreal-ollama" class="cta-button primary track-click" data-event-name="btn_clk_unreal_ollama_github" data-event-location="btm_cta" target="_blank" rel="noopener noreferrer">GitHub에서 보기</a>
  <a href="/docs/unreal-ollama" class="cta-button secondary track-click" data-event-name="btn_clk_unreal_ollama_docs" data-event-location="btm_cta">문서</a>
</div>

</body>
</html>
