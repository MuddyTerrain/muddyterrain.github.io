---
layout: wide
title: "GenAI Model Generator - AI 3D 模型生成虚幻引擎插件"
category: products
permalink: /zh/genai-model-generator
author: "Muddy Terrain"
tags: [tools, unreal, gamedev, ai, 3d-models, textures, meshy, tripo, rodin]
lang: zh
hreflang_group: genai-model-generator
image: https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1756686888/china-dragon.webp
---



<html lang="zh">

<body>

<div class="image-wrapper">
<figure>
    <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1756686888/china-dragon.webp" alt="GenAI Model Generator - 虚幻引擎中的 AI 3D 模型生成" style="width: 100%;">
</figure>
</div>

<p><strong>使用 AI 直接在虚幻引擎中生成 3D 模型和 PBR 贴图。</strong> GenAI Model Generator 是一款生产就绪的插件，通过单一统一接口将您的虚幻项目连接到最强大的 AI 3D 生成服务 — Meshy、Hyper3D Rodin、Tripo AI、fal.ai 和 Google。文本转 3D、图像转 3D、重新贴图和 AI 贴图生成，全部支持 Blueprint 和 C++。</p>

<div class="button-row">
  <a href="/docs/genai-modelgenerator" class="cta-button primary track-click" data-event-name="btn_clk_modelgen_docs" data-event-location="top_cta">产品文档</a>
  <a href="/t/discord" class="cta-button secondary track-click" data-event-name="btn_clk_join_discord" data-event-location="top_cta" target="_blank" rel="noopener noreferrer">加入 Discord</a>
</div>

<div style="background-color: #f9f9f9; border-left: 4px solid #4a4a4a; padding: 25px; margin: 30px 0; border-radius: 4px;">
  <h2 style="margin-top: 0;">5 个提供商，一个插件</h2>
  <p>通过单一 API 访问最佳 AI 3D 生成服务。在 Meshy、Hyper3D Rodin、Tripo AI、fal.ai 和 Google 之间切换而无需更改工作流程。每个提供商都有独特优势 — 为每项任务使用最佳工具。</p>
  <p>本插件将持续提供<strong>免费更新</strong>，包含新提供商和模型。如果您觉得好用，请考虑在 Fab 上给我们一个<strong>五星好评</strong>以表支持！</p>
</div>

<h2>核心功能：</h2>
<ul>
    <li>
        <p><strong>文本转 3D 生成：</strong> 🎨<br>
        用纯文本描述一个 3D 模型并获得完整的资产。由 Meshy 和 Tripo AI 支持，提供多个模型版本以满足不同的质量和速度需求。</p>
    </li>
    <li>
        <p><strong>图像转 3D 生成：</strong> 📸<br>
        将 2D 图像或概念艺术转换为 3D 模型。所有提供商均支持 — Meshy、Hyper3D Rodin、Tripo AI 和 fal.ai（支持 Hunyuan3D、TripoSR、Rodin 和 Trellis 2 后端）。</p>
    </li>
    <li>
        <p><strong>AI 重新贴图：</strong> 🖌️<br>
        基于文本描述为现有 3D 模型应用 AI 生成的贴图。通过 Meshy 用单个提示将占位资产转变为生产就绪的艺术品。</p>
    </li>
    <li>
        <p><strong>PBR 贴图生成：</strong> 🧱<br>
        使用 Google AI 生成单独或完整的 PBR 贴图集 — 基础颜色、法线、粗糙度和金属度贴图。支持无缝/可平铺贴图和参考图像风格迁移。</p>
    </li>
    <li>
        <p><strong>多种输出格式：</strong> 📦<br>
        以 GLB、FBX、OBJ、USDZ 或 STL 格式导出生成的模型。控制网格拓扑（三角形或四边形）和多边形数量（100 到 300,000 个三角形）。</p>
    </li>
    <li>
        <p><strong>进度跟踪：</strong> 📊<br>
        所有生成任务都包含实时进度回调（0-100%），让您可以向用户显示加载条或状态更新。</p>
    </li>
    <li>
        <p><strong>安全密钥管理：</strong> 🔐<br>
        所有 API 密钥存储在与源代码控制分离的不可移植加密文件中。通过单一设置面板管理所有五个提供商的密钥。</p>
    </li>
    <li>
        <p><strong>Blueprint 和 C++ 双重支持：</strong> 🔗<br>
        每个功能都可作为异步 Blueprint 节点和带有委托的 C++ 静态函数使用。基于 <code>UCancellableAsyncAction</code> 构建，具有适当的生命周期管理。</p>
    </li>
    <li>
        <p><strong>内置编辑器工具：</strong> 🛠️<br>
        无需编写任何代码，直接从基于 Slate 的编辑器小部件生成 3D 模型。预览结果并将生成的资产导入内容浏览器。</p>
    </li>
</ul>

<h2>支持的提供商与功能</h2>
<div style="padding: 10px 15px; background-color: #fffbe6; border-left: 4px solid #ffc107; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold; color: #856404;">免责声明</p>
  <p style="margin: 5px 0 0 0; color: #856404;">本插件需要至少一个受支持提供商的有效 API 密钥才能运行。请参阅我们的文档了解<a href="/docs/genai-modelgenerator/getting-api-keys/" class="track-click" data-event-name="lnk_clk_modelgen_api_keys_docs" data-event-location="post_modelgen">如何获取 API 密钥</a>的详细信息。</p>
</div>

<ul>
    <li><strong>Meshy AI：</strong>
        <ul>
            <li><strong>文本转 3D：</strong>模型 v4、v5、v6，支持可定制的艺术风格</li>
            <li><strong>图像转 3D：</strong>将参考图像转换为 3D 模型</li>
            <li><strong>重新贴图：</strong>为现有网格应用 AI 贴图</li>
            <li>对称模式（自动/开/关），可配置拓扑</li>
        </ul>
    </li>
    <li><strong>Hyper3D Rodin：</strong>
        <ul>
            <li><strong>图像转 3D 和文本转 3D：</strong>4 个质量等级（常规、草图、细节、平滑）</li>
            <li>4 个网格质量级别（500 到 300K 三角形）</li>
            <li>PBR 和 Shaded 材质选项</li>
        </ul>
    </li>
    <li><strong>Tripo AI：</strong>
        <ul>
            <li><strong>文本转 3D 和图像转 3D：</strong>模型版本 v2.0 和 v2.5</li>
            <li>快速生成，拓扑整洁</li>
        </ul>
    </li>
    <li><strong>fal.ai：</strong>
        <ul>
            <li><strong>图像转 3D：</strong>通过多个推理后端</li>
            <li>Hunyuan3D v2.1、TripoSR、Rodin、Trellis 2</li>
            <li>可配置的推理步数和引导尺度</li>
        </ul>
    </li>
    <li><strong>Google：</strong>
        <ul>
            <li><strong>贴图生成：</strong>NanoBanana 2 / Gemini 驱动的 PBR 贴图创建</li>
            <li>基础颜色、法线、粗糙度、金属度和完整 PBR 集</li>
            <li>无缝/可平铺贴图支持</li>
        </ul>
    </li>
</ul>

<h2>应用场景：</h2>
<ul>
    <li><strong>快速原型制作：</strong>在开发期间通过文本描述生成占位和生产质量的 3D 资产，显著缩短迭代时间。</li>
    <li><strong>运行时内容生成：</strong>基于玩家输入或程序化生成系统在运行时动态创建独特的 3D 资产。</li>
    <li><strong>概念艺术到 3D 的管线：</strong>将 2D 概念艺术直接转换为 3D 模型，弥合艺术方向与 3D 制作之间的差距。</li>
    <li><strong>贴图创作：</strong>无需离开引擎即可为环境、道具和材质生成 PBR 贴图集。</li>
    <li><strong>资产刷新：</strong>使用 AI 生成的材质为现有模型重新贴图，快速探索不同的视觉方向。</li>
</ul>

<h2>为什么选择这款插件？</h2>
<ul>
    <li><strong>多提供商灵活性：</strong> 🌐 通过一个插件访问 5 个不同的 AI 提供商。比较结果并为每个资产选择最佳方案。</li>
    <li><strong>生产就绪：</strong> ⚔️ 全面的异步处理、进度跟踪、任务取消和适当的错误处理。</li>
    <li><strong>持续进化：</strong> 🧬 随着 AI 3D 生成领域的发展，定期添加新的提供商和模型版本。</li>
    <li><strong>由开发者打造，为开发者服务：</strong> 💻 由 <a href="/genai-unreal" class="track-click" data-event-name="lnk_clk_genai_unreal" data-event-location="post_modelgen">GenAI for Unreal</a> 和 <a href="/genai-china" class="track-click" data-event-name="lnk_clk_genai_china" data-event-location="post_modelgen">Gen AI China</a> 的同一团队打造。</li>
    <li><strong>专属支持：</strong> 📧 如有任何问题或定制修改需求，请发邮件至我们的支持团队。</li>
</ul>

<h2>资源与支持</h2>
<ul>
    <li><a href="/docs/genai-modelgenerator/" class="track-click" data-event-name="lnk_clk_modelgen_docs" data-event-location="post_modelgen">文档</a></li>
    <li><a href="/t/discord" class="track-click" data-event-name="lnk_clk_discord" data-event-location="post_modelgen" target="_blank" rel="noopener noreferrer">Discord 社区</a></li>
    <li><strong>专业支持与定制开发：</strong> <a href="mailto:mail@muddyterrain.com" class="track-click" data-event-name="lnk_clk_support_email" data-event-location="post_modelgen">mail@muddyterrain.com</a></li>
</ul>

<div class="button-row">
  <a href="/docs/genai-modelgenerator" class="cta-button primary track-click" data-event-name="btn_clk_modelgen_docs" data-event-location="btm_cta">产品文档</a>
  <a href="/t/discord" class="cta-button secondary track-click" data-event-name="btn_clk_join_discord" data-event-location="btm_cta" target="_blank" rel="noopener noreferrer">加入 Discord</a>
</div>

</body>
</html>
