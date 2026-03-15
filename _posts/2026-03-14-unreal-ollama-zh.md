---
layout: wide
title: "Unreal Ollama - 虚幻引擎本地 AI 插件"
category: products
permalink: /zh/unreal-ollama
author: "Muddy Terrain"
tags: [tools, unreal, gamedev, ai, ollama, local-ai, open-source]
lang: zh
hreflang_group: unreal-ollama
image: https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1759079669/Screenshot_2025-09-28_133409_e7uag9.webp
---



<html lang="zh">

<body>

<div class="image-wrapper">
<figure>
    <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1759079669/Screenshot_2025-09-28_133409_e7uag9.webp" alt="Unreal Ollama - 虚幻引擎中的本地 AI 模型" style="width: 100%;">
</figure>
</div>

<p><strong>在虚幻引擎中本地运行强大的开源 AI 模型 — 无需云 API、无需 API 密钥、无需按请求付费。</strong> Unreal Ollama 是一款免费、开源的插件，将 <a href="https://ollama.com/" target="_blank" rel="noopener noreferrer">Ollama</a> 与虚幻引擎集成，为您提供聊天补全、实时流式传输以及多模态视觉支持，兼容 Ollama 库中的任何模型。</p>

<div class="button-row">
  <a href="https://github.com/MuddyTerrain/unreal-ollama" class="cta-button primary track-click" data-event-name="btn_clk_unreal_ollama_github" data-event-location="top_cta" target="_blank" rel="noopener noreferrer">在 GitHub 上查看</a>
  <a href="/docs/unreal-ollama" class="cta-button secondary track-click" data-event-name="btn_clk_unreal_ollama_docs" data-event-location="top_cta">产品文档</a>
</div>

<div style="background-color: #f9f9f9; border-left: 4px solid #4a4a4a; padding: 25px; margin: 30px 0; border-radius: 4px;">
  <h2 style="margin-top: 0;">免费且开源</h2>
  <p>Unreal Ollama 可完全免费用于个人和商业项目。源代码在 GitHub 上公开。无需商城购买 — 只需克隆、放入项目即可开始构建。</p>
  <p>如果您觉得有用，请考虑在 GitHub 上给我们一个 <strong>Star！</strong></p>
</div>

<h2>核心功能：</h2>
<ul>
    <li>
        <p><strong>100% 本地与离线：</strong> 🔒<br>
        所有 AI 处理都在您的机器上运行。数据不会离开设备，运行时无需互联网，无需管理 API 密钥。非常适合隐私敏感型应用和离线游戏。</p>
    </li>
    <li>
        <p><strong>零请求成本：</strong> 💰<br>
        模型下载后，可以无限次运行 AI 交互，无需担心 API 账单。以电费的成本生成数百万条 NPC 对话。</p>
    </li>
    <li>
        <p><strong>聊天补全：</strong> 🤖<br>
        发送提示并获取完整响应。简单的异步节点处理一切 — 无冻结，不阻塞游戏线程。</p>
    </li>
    <li>
        <p><strong>实时流式传输：</strong> ⚡️<br>
        逐字接收 AI 响应。创建打字机效果、实时对话和具有最低感知延迟的响应式 AI 伙伴。</p>
    </li>
    <li>
        <p><strong>多模态视觉支持：</strong> 📸<br>
        使用 <code>llava</code> 等模型随文本一起发送图像。直接从项目中传入 Texture2D 资产 — 插件自动处理 Base64 转换。</p>
    </li>
    <li>
        <p><strong>Blueprint 和 C++ 双重支持：</strong> 🔗<br>
        完整的 Blueprint 支持配合简单的延迟节点，加上完整的 C++ API，提供静态函数和委托以实现最佳性能和控制。</p>
    </li>
    <li>
        <p><strong>广泛的引擎支持：</strong> 🌐<br>
        兼容虚幻引擎 5.1 至 5.6。使用 UE 5.1 构建以实现最大兼容性，遵循虚幻的"低版本开发，高版本升级"方针。</p>
    </li>
</ul>

<h2>兼容模型</h2>
<div style="padding: 10px 15px; background-color: #fffbe6; border-left: 4px solid #ffc107; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold; color: #856404;">前提条件</p>
  <p style="margin: 5px 0 0 0; color: #856404;">本插件需要在目标机器上安装并运行 <a href="https://ollama.com/" target="_blank" rel="noopener noreferrer">Ollama</a>。在 <a href="https://ollama.com/library" target="_blank" rel="noopener noreferrer">ollama.com/library</a> 浏览完整模型库。</p>
</div>
<p>使用 Ollama 库中的任何模型。热门选择包括：</p>
<ul>
    <li><strong>通用聊天：</strong> <code>llama3</code>、<code>mistral</code>、<code>gemma</code>、<code>phi-3</code>、<code>nemotron-3-nano</code></li>
    <li><strong>多模态（视觉）：</strong> <code>llava</code>、<code>llava-llama3</code>、<code>moondream</code></li>
    <li><strong>编程：</strong> <code>codellama</code>、<code>starcoder2</code>、<code>deepseek-coder</code></li>
    <li><strong>小型高速：</strong> <code>gemma3:1b</code>、<code>phi-3:mini</code>、<code>tinyllama</code></li>
</ul>

<h2>应用场景：</h2>
<ul>
    <li><strong>离线 NPC 对话：</strong>生成无需互联网连接即可工作的角色对话 — 对于单人游戏和演示至关重要。</li>
    <li><strong>隐私优先的应用：</strong>将所有玩家与 AI 的对话保留在设备上。数据永远不会离开机器。</li>
    <li><strong>快速原型制作：</strong>无需设置账户、支付方式或 API 密钥即可立即测试 AI 功能。只需拉取模型即可开始。</li>
    <li><strong>零成本开发：</strong>在开发期间迭代 AI 功能而不累积云 API 费用。</li>
    <li><strong>混合架构：</strong>使用本地模型处理常规交互，使用云模型（通过我们的 <a href="/genai-unreal" class="track-click" data-event-name="lnk_clk_genai_unreal" data-event-location="post_unreal_ollama">GenAI for Unreal</a> 插件）处理需要顶级智能的时刻。</li>
</ul>

<h2>为什么选择这款插件？</h2>
<ul>
    <li><strong>永久免费：</strong> 🆓 开源且可商用。无隐藏费用，无订阅。</li>
    <li><strong>简单集成：</strong> 🧩 将插件放入项目、启用它，几分钟内即可开始与 AI 对话。</li>
    <li><strong>生产就绪：</strong> ⚔️ 基于 <code>UCancellableAsyncAction</code> 构建，具有适当的生命周期管理。可安全用于已发布的游戏。</li>
    <li><strong>由开发者打造，为开发者服务：</strong> 💻 由 <a href="/genai-unreal" class="track-click" data-event-name="lnk_clk_genai_unreal" data-event-location="post_unreal_ollama">GenAI for Unreal</a> 和 <a href="/genai-china" class="track-click" data-event-name="lnk_clk_genai_china" data-event-location="post_unreal_ollama">Gen AI China</a> 的同一团队打造。</li>
    <li><strong>专属支持：</strong> 📧 加入我们的 Discord 或发邮件获取帮助。</li>
</ul>

<h2>资源与支持</h2>
<ul>
    <li><a href="/docs/unreal-ollama/" class="track-click" data-event-name="lnk_clk_unreal_ollama_docs" data-event-location="post_unreal_ollama">文档</a></li>
    <li><a href="https://github.com/MuddyTerrain/unreal-ollama" class="track-click" data-event-name="lnk_clk_unreal_ollama_github" data-event-location="post_unreal_ollama" target="_blank" rel="noopener noreferrer">GitHub 仓库</a></li>
    <li><a href="/t/discord" class="track-click" data-event-name="lnk_clk_discord" data-event-location="post_unreal_ollama" target="_blank" rel="noopener noreferrer">Discord 社区</a></li>
    <li><strong>专业支持：</strong> <a href="mailto:mail@muddyterrain.com" class="track-click" data-event-name="lnk_clk_support_email" data-event-location="post_unreal_ollama">mail@muddyterrain.com</a></li>
</ul>

<div class="button-row">
  <a href="https://github.com/MuddyTerrain/unreal-ollama" class="cta-button primary track-click" data-event-name="btn_clk_unreal_ollama_github" data-event-location="btm_cta" target="_blank" rel="noopener noreferrer">在 GitHub 上查看</a>
  <a href="/docs/unreal-ollama" class="cta-button secondary track-click" data-event-name="btn_clk_unreal_ollama_docs" data-event-location="btm_cta">产品文档</a>
</div>

</body>
</html>
