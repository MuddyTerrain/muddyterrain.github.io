---
layout: wide
title: "GenAI Llama - 虚幻引擎本地 AI 插件（原 Unreal Ollama）"
category: products
permalink: /zh/unreal-ollama
author: "Muddy Terrain"
tags: [tools, unreal, gamedev, ai, ollama, local-ai, llama, genai-llama, mistral, phi, gemma, llama-cpp, embedded-inference, lm-studio, vllm]
lang: zh
hreflang_group: unreal-ollama
image: https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1759079669/Screenshot_2025-09-28_133409_e7uag9.webp
---





<div class="image-wrapper">
<figure>
    <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1759079669/Screenshot_2025-09-28_133409_e7uag9.webp" alt="GenAI Llama - 虚幻引擎中的本地 AI 模型" style="width: 100%;">
</figure>
</div>

<p><strong>在虚幻引擎游戏和应用中运行本地 AI 模型 — 无需云 API、无需联网、无按次计费。</strong> GenAI Llama（原 Unreal Ollama）支持两种模式：通过 HTTP 连接到任意本地推理服务器（Ollama、LM Studio、llama.cpp server、vLLM、LocalAI、Jan），或通过内嵌的 llama.cpp 推理直接在游戏进程中运行 GGUF 模型。支持在本地运行 Llama 3、Mistral、Phi、Gemma、DeepSeek 以及数百种其他模型。</p>

<div class="button-row">
  <a href="/t/genai-llama-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-llama-plugin" class="cta-button primary track-click" data-event-name="btn_clk_genai_llama_fab" data-event-location="top_cta" target="_blank" rel="noopener noreferrer">在 Fab.com 上查看</a>
  <a href="/docs/genai-llama" class="cta-button secondary track-click" data-event-name="btn_clk_genai_llama_docs" data-event-location="top_cta">产品文档</a>
</div>

<div style="background-color: #f9f9f9; border-left: 4px solid #4a4a4a; padding: 25px; margin: 30px 0; border-radius: 4px;">
  <h2 style="margin-top: 0;">两种运行模式</h2>
  <p><strong>HTTP 服务提供商</strong> — 连接到任意本地推理服务器。开箱即用，兼容 Ollama、LM Studio、llama.cpp server、vLLM、LocalAI、Jan，或任何与 OpenAI 兼容的端点。</p>
  <p><strong>内嵌推理（llama.cpp）</strong> — 直接在游戏进程中运行 GGUF 模型。无需服务器，在 PC 和移动端完全离线运行。此为可选功能 — 需要为目标平台编译 llama.cpp 库。</p>
</div>

<h2>核心功能：</h2>
<ul>
    <li>
        <p><strong>7 个支持的服务提供商：</strong><br>
        Ollama、LM Studio、llama.cpp server、vLLM、LocalAI、Jan（HTTP），以及用于无服务器进程内推理的内嵌 llama.cpp。</p>
    </li>
    <li>
        <p><strong>内嵌推理：</strong><br>
        直接在游戏进程中运行 GGUF 模型 — 无需服务器、无需网络、无需联网。运行时动态加载和卸载模型。支持通过 CUDA、Vulkan 或 Metal 进行 GPU 加速。</p>
    </li>
    <li>
        <p><strong>100% 本地与离线：</strong><br>
        所有 AI 处理均在玩家机器上运行，数据不会离开设备。非常适合隐私敏感型应用和离线游戏。</p>
    </li>
    <li>
        <p><strong>零请求成本：</strong><br>
        模型下载后，可无限次运行 AI 交互。无 API 账单，无订阅费用。</p>
    </li>
    <li>
        <p><strong>聊天补全与流式传输：</strong><br>
        完整的聊天补全与实时逐令牌流式传输。创建打字机效果、实时对话以及响应式 AI 伙伴。</p>
    </li>
    <li>
        <p><strong>多模态视觉支持：</strong><br>
        使用 <code>llava</code> 或 <code>llama3.2-vision</code> 等模型随文本一起发送图像。直接传入 UTexture2D 资产 — 插件自动处理 Base64 转换。</p>
    </li>
    <li>
        <p><strong>生成选项：</strong><br>
        Temperature、Top P、最大令牌数、种子值、停止序列、JSON 格式输出以及系统提示支持。</p>
    </li>
    <li>
        <p><strong>服务器管理：</strong><br>
        健康检查、列出可用模型，以及运行时切换服务提供商。</p>
    </li>
    <li>
        <p><strong>Blueprint 和 C++ 双重支持：</strong><br>
        完整的 Blueprint 支持配合异步延迟节点，以及提供委托的完整 C++ API。基于 <code>UCancellableAsyncAction</code> 构建，具有适当的生命周期管理。</p>
    </li>
    <li>
        <p><strong>广泛的平台支持：</strong><br>
        HTTP 服务提供商：Windows、macOS、Linux、Android、iOS、PS4、Xbox One、Switch、HoloLens。内嵌推理：Windows、macOS、Linux、Android、iOS。引擎支持：UE 5.1 至 5.7。</p>
    </li>
</ul>

<h2>兼容模型</h2>
<p>使用 <a href="https://ollama.com/library" target="_blank" rel="noopener noreferrer">Ollama 模型库</a>中的任意模型（HTTP），或 <a href="https://huggingface.co/models?search=gguf" target="_blank" rel="noopener noreferrer">Hugging Face</a> 上的任意 GGUF 模型（内嵌推理）：</p>
<ul>
    <li><strong>通用聊天：</strong> <code>llama3</code>、<code>mistral</code>、<code>gemma</code>、<code>phi-3</code>、<code>nemotron-3-nano</code></li>
    <li><strong>多模态（视觉）：</strong> <code>llava</code>、<code>llama3.2-vision</code>、<code>moondream</code></li>
    <li><strong>编程：</strong> <code>codellama</code>、<code>starcoder2</code>、<code>deepseek-coder</code></li>
    <li><strong>小型高速：</strong> <code>gemma3:1b</code>、<code>phi-3:mini</code>、<code>tinyllama</code>、<code>qwen2.5-0.5b</code></li>
</ul>

<h2>应用场景：</h2>
<ul>
    <li><strong>离线 NPC 对话：</strong>生成无需互联网连接即可工作的角色对话 — 对于单人游戏、主机游戏和演示至关重要。</li>
    <li><strong>隐私优先的应用：</strong>将所有玩家与 AI 的对话保留在设备上，数据永远不会离开机器。</li>
    <li><strong>已发布游戏内置 AI：</strong>通过内嵌推理将 GGUF 模型随游戏一同打包发布，玩家无需额外安装任何内容。</li>
    <li><strong>主机与移动端 AI：</strong> HTTP 服务提供商支持 PS4、Xbox、Switch 和 HoloLens；内嵌推理支持 Android 和 iOS。</li>
    <li><strong>快速原型制作：</strong>使用 LM Studio 的图形界面或 Ollama 的命令行工具即时测试 AI 功能。</li>
    <li><strong>混合架构：</strong>使用本地模型处理常规交互，使用云模型（通过我们的 <a href="/genai-unreal" class="track-click" data-event-name="lnk_clk_genai_unreal" data-event-location="post_genai_llama">GenAI for Unreal</a> 插件）处理需要顶级智能的时刻。</li>
</ul>

<h2>为什么选择这款插件？</h2>
<ul>
    <li><strong>最灵活的本地 AI：</strong> 7 个服务提供商 + 内嵌推理，没有其他插件能覆盖如此广泛的范围。</li>
    <li><strong>生产就绪：</strong>基于 <code>UCancellableAsyncAction</code> 构建，具有适当的生命周期管理、取消支持和线程安全的内嵌推理。</li>
    <li><strong>主机平台支持：</strong> HTTP 服务提供商支持 PS4、Xbox One、Switch 和 HoloLens — 这是其他本地 AI 插件均不支持的平台。</li>
    <li><strong>由开发者打造，为开发者服务：</strong>由 <a href="/genai-unreal" class="track-click" data-event-name="lnk_clk_genai_unreal" data-event-location="post_genai_llama">GenAI for Unreal</a> 和 <a href="/genai-china" class="track-click" data-event-name="lnk_clk_genai_china" data-event-location="post_genai_llama">GenAI 中国模型</a>背后的同一团队打造。</li>
    <li><strong>专属支持：</strong>加入我们的 Discord 或发送邮件获取帮助。</li>
</ul>

<h2>资源与支持</h2>
<ul>
    <li><a href="/docs/genai-llama/" class="track-click" data-event-name="lnk_clk_genai_llama_docs" data-event-location="post_genai_llama">文档</a></li>
    <li><a href="/t/discord" class="track-click" data-event-name="lnk_clk_discord" data-event-location="post_genai_llama" target="_blank" rel="noopener noreferrer">Discord 社区</a></li>
    <li><strong>专业支持：</strong> <a href="mailto:mail@muddyterrain.com" class="track-click" data-event-name="lnk_clk_support_email" data-event-location="post_genai_llama">mail@muddyterrain.com</a></li>
</ul>

<div class="button-row">
  <a href="/t/genai-llama-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-llama-plugin" class="cta-button primary track-click" data-event-name="btn_clk_genai_llama_fab" data-event-location="btm_cta" target="_blank" rel="noopener noreferrer">在 Fab.com 上查看</a>
  <a href="/docs/genai-llama" class="cta-button secondary track-click" data-event-name="btn_clk_genai_llama_docs" data-event-location="btm_cta">产品文档</a>
</div>

