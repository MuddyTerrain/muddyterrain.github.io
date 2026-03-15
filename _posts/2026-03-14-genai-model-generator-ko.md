---
layout: wide
title: "GenAI Model Generator - AI 3D 모델 생성 언리얼 엔진 플러그인"
category: products
permalink: /ko/genai-model-generator
author: "Muddy Terrain"
tags: [tools, unreal, gamedev, ai, 3d-models, textures, meshy, tripo, rodin]
lang: ko
hreflang_group: genai-model-generator
image: https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1756686888/china-dragon.webp
---



<html lang="ko">

<body>

<div class="image-wrapper">
<figure>
    <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1756686888/china-dragon.webp" alt="GenAI Model Generator - 언리얼 엔진에서 AI 3D 모델 생성" style="width: 100%;">
</figure>
</div>

<p><strong>AI를 사용하여 언리얼 엔진 내에서 직접 3D 모델과 PBR 텍스처를 생성하세요.</strong> GenAI Model Generator는 언리얼 프로젝트를 가장 강력한 AI 3D 생성 서비스 — Meshy, Hyper3D Rodin, Tripo AI, fal.ai, Google — 에 단일 통합 인터페이스로 연결하는 프로덕션 레디 플러그인입니다. 텍스트-to-3D, 이미지-to-3D, 리텍스처링, AI 텍스처 생성을 블루프린트 또는 C++로 모두 이용할 수 있습니다.</p>

<div class="button-row">
  <a href="/docs/genai-modelgenerator" class="cta-button primary track-click" data-event-name="btn_clk_modelgen_docs" data-event-location="top_cta">문서</a>
  <a href="/t/discord" class="cta-button secondary track-click" data-event-name="btn_clk_join_discord" data-event-location="top_cta" target="_blank" rel="noopener noreferrer">Discord 참여</a>
</div>

<div style="background-color: #f9f9f9; border-left: 4px solid #4a4a4a; padding: 25px; margin: 30px 0; border-radius: 4px;">
  <h2 style="margin-top: 0;">5개 프로바이더, 하나의 플러그인</h2>
  <p>단일 API로 최고의 AI 3D 생성 서비스에 접근합니다. 워크플로우를 변경하지 않고 Meshy, Hyper3D Rodin, Tripo AI, fal.ai, Google 사이를 전환할 수 있습니다. 각 프로바이더는 고유한 강점을 가지고 있어 각 작업에 최적의 도구를 사용할 수 있습니다.</p>
  <p>이 플러그인은 새로운 프로바이더와 모델이 출시되는 대로 <strong>무료 업데이트</strong>를 제공합니다. 유용하셨다면 Fab에서 <strong>별점 5점</strong>을 부탁드립니다!</p>
</div>

<h2>주요 기능:</h2>
<ul>
    <li>
        <p><strong>텍스트-to-3D 생성:</strong> 🎨<br>
        일반 텍스트로 3D 모델을 설명하고 완전히 형성된 에셋을 받으세요. Meshy와 Tripo AI가 지원하며, 다양한 품질과 속도 트레이드오프에 맞는 여러 모델 버전을 제공합니다.</p>
    </li>
    <li>
        <p><strong>이미지-to-3D 생성:</strong> 📸<br>
        2D 이미지나 컨셉 아트를 3D 모델로 변환합니다. 모든 프로바이더 — Meshy, Hyper3D Rodin, Tripo AI, fal.ai(Hunyuan3D, TripoSR, Rodin, Trellis 2 백엔드)에서 지원됩니다.</p>
    </li>
    <li>
        <p><strong>AI 리텍스처링:</strong> 🖌️<br>
        텍스트 설명에 기반하여 기존 3D 모델에 AI 생성 텍스처를 적용합니다. Meshy를 통해 단일 프롬프트로 플레이스홀더 에셋을 프로덕션 레디 아트로 변환합니다.</p>
    </li>
    <li>
        <p><strong>PBR 텍스처 생성:</strong> 🧱<br>
        Google AI를 사용하여 개별 또는 완전한 PBR 텍스처 세트 — 베이스 컬러, 노멀, 러프니스, 메탈릭 맵을 생성합니다. 심리스/타일 가능 텍스처와 레퍼런스 이미지 스타일 전이를 지원합니다.</p>
    </li>
    <li>
        <p><strong>다양한 출력 포맷:</strong> 📦<br>
        생성된 모델을 GLB, FBX, OBJ, USDZ, STL 포맷으로 내보냅니다. 메시 토폴로지(삼각형 또는 쿼드)와 폴리곤 수(100~300,000 삼각형)를 제어합니다.</p>
    </li>
    <li>
        <p><strong>진행률 추적:</strong> 📊<br>
        모든 생성 작업에 실시간 진행률 콜백(0-100%)이 포함되어 사용자에게 로딩 바나 상태 업데이트를 표시할 수 있습니다.</p>
    </li>
    <li>
        <p><strong>보안 키 관리:</strong> 🔐<br>
        모든 API 키는 소스 컨트롤과 분리된 비이동식 암호화 파일에 저장됩니다. 단일 설정 패널에서 5개 프로바이더 모두의 키를 관리합니다.</p>
    </li>
    <li>
        <p><strong>블루프린트 & C++ 지원:</strong> 🔗<br>
        모든 기능이 비동기 블루프린트 노드와 델리게이트가 포함된 C++ 정적 함수로 모두 제공됩니다. 적절한 라이프타임 관리를 위해 <code>UCancellableAsyncAction</code> 기반으로 구축되었습니다.</p>
    </li>
    <li>
        <p><strong>내장 에디터 도구:</strong> 🛠️<br>
        코드를 작성하지 않고도 Slate 기반 에디터 위젯에서 직접 3D 모델을 생성합니다. 결과를 미리보고 생성된 에셋을 콘텐츠 브라우저로 가져옵니다.</p>
    </li>
</ul>

<h2>지원 프로바이더 & 기능</h2>
<div style="padding: 10px 15px; background-color: #fffbe6; border-left: 4px solid #ffc107; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold; color: #856404;">면책 조항</p>
  <p style="margin: 5px 0 0 0; color: #856404;">이 플러그인은 지원되는 프로바이더 중 최소 하나의 유효한 API 키가 필요합니다. <a href="/docs/genai-modelgenerator/getting-api-keys/" class="track-click" data-event-name="lnk_clk_modelgen_api_keys_docs" data-event-location="post_modelgen">API 키 획득 방법</a>에 대한 자세한 내용은 문서를 참조하세요.</p>
</div>

<ul>
    <li><strong>Meshy AI:</strong>
        <ul>
            <li><strong>텍스트-to-3D:</strong> 모델 v4, v5, v6, 사용자 정의 가능한 아트 스타일</li>
            <li><strong>이미지-to-3D:</strong> 레퍼런스 이미지를 3D 모델로 변환</li>
            <li><strong>리텍스처링:</strong> 기존 메시에 AI 텍스처 적용</li>
            <li>대칭 모드(자동/켜기/끄기), 구성 가능한 토폴로지</li>
        </ul>
    </li>
    <li><strong>Hyper3D Rodin:</strong>
        <ul>
            <li><strong>이미지-to-3D & 텍스트-to-3D:</strong> 4개 품질 티어(Regular, Sketch, Detail, Smooth)</li>
            <li>4개 메시 품질 레벨(500~300K 삼각형)</li>
            <li>PBR 및 Shaded 머티리얼 옵션</li>
        </ul>
    </li>
    <li><strong>Tripo AI:</strong>
        <ul>
            <li><strong>텍스트-to-3D & 이미지-to-3D:</strong> 모델 버전 v2.0 및 v2.5</li>
            <li>깔끔한 토폴로지로 빠른 생성</li>
        </ul>
    </li>
    <li><strong>fal.ai:</strong>
        <ul>
            <li><strong>이미지-to-3D:</strong> 다양한 추론 백엔드를 통해</li>
            <li>Hunyuan3D v2.1, TripoSR, Rodin, Trellis 2</li>
            <li>구성 가능한 추론 스텝 및 가이던스 스케일</li>
        </ul>
    </li>
    <li><strong>Google:</strong>
        <ul>
            <li><strong>텍스처 생성:</strong> NanoBanana 2 / Gemini 기반 PBR 텍스처 생성</li>
            <li>베이스 컬러, 노멀, 러프니스, 메탈릭, 완전한 PBR 세트</li>
            <li>심리스/타일 가능 텍스처 지원</li>
        </ul>
    </li>
</ul>

<h2>사용 사례:</h2>
<ul>
    <li><strong>빠른 프로토타이핑:</strong> 개발 중에 텍스트 설명으로 플레이스홀더 및 프로덕션 품질의 3D 에셋을 생성하여 이터레이션 시간을 획기적으로 단축합니다.</li>
    <li><strong>런타임 콘텐츠 생성:</strong> 플레이어 입력이나 프로시저럴 생성 시스템을 기반으로 런타임에 고유한 3D 에셋을 동적으로 생성합니다.</li>
    <li><strong>컨셉 아트에서 3D 파이프라인:</strong> 2D 컨셉 아트를 3D 모델로 직접 변환하여 아트 디렉션과 3D 프로덕션 간의 격차를 해소합니다.</li>
    <li><strong>텍스처 저작:</strong> 엔진을 벗어나지 않고 환경, 프롭, 머티리얼을 위한 PBR 텍스처 세트를 생성합니다.</li>
    <li><strong>에셋 새로고침:</strong> AI 생성 머티리얼로 기존 모델을 리텍스처하여 다양한 비주얼 방향을 빠르게 탐색합니다.</li>
</ul>

<h2>이 플러그인을 선택하는 이유</h2>
<ul>
    <li><strong>멀티 프로바이더 유연성:</strong> 🌐 하나의 플러그인으로 5개의 다른 AI 프로바이더에 접근. 결과를 비교하고 각 에셋에 가장 적합한 것을 선택.</li>
    <li><strong>프로덕션 레디:</strong> ⚔️ 전체에 걸친 비동기 처리, 진행률 추적, 작업 취소, 적절한 에러 핸들링.</li>
    <li><strong>끊임없는 진화:</strong> 🧬 AI 3D 생성 분야가 발전함에 따라 새로운 프로바이더와 모델 버전을 정기적으로 추가.</li>
    <li><strong>개발자가 만든, 개발자를 위한:</strong> 💻 <a href="/genai-unreal" class="track-click" data-event-name="lnk_clk_genai_unreal" data-event-location="post_modelgen">GenAI for Unreal</a>과 <a href="/genai-china" class="track-click" data-event-name="lnk_clk_genai_china" data-event-location="post_modelgen">Gen AI China</a>를 만든 같은 팀이 제작.</li>
    <li><strong>전담 지원:</strong> 📧 질문이나 커스텀 수정 요청은 지원팀에 이메일로 문의하세요.</li>
</ul>

<h2>리소스 & 지원</h2>
<ul>
    <li><a href="/docs/genai-modelgenerator/" class="track-click" data-event-name="lnk_clk_modelgen_docs" data-event-location="post_modelgen">문서</a></li>
    <li><a href="/t/discord" class="track-click" data-event-name="lnk_clk_discord" data-event-location="post_modelgen" target="_blank" rel="noopener noreferrer">Discord 커뮤니티</a></li>
    <li><strong>전문 지원 & 커스텀 개발:</strong> <a href="mailto:mail@muddyterrain.com" class="track-click" data-event-name="lnk_clk_support_email" data-event-location="post_modelgen">mail@muddyterrain.com</a></li>
</ul>

<div class="button-row">
  <a href="/docs/genai-modelgenerator" class="cta-button primary track-click" data-event-name="btn_clk_modelgen_docs" data-event-location="btm_cta">문서</a>
  <a href="/t/discord" class="cta-button secondary track-click" data-event-name="btn_clk_join_discord" data-event-location="btm_cta" target="_blank" rel="noopener noreferrer">Discord 참여</a>
</div>

</body>
</html>
