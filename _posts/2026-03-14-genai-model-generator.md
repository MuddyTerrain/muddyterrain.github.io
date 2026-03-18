---
layout: wide
title: "GenAI Model Generator"
category: products
permalink: /genai-model-generator
author: "Muddy Terrain"
tags: [tools, unreal, gamedev, ai, 3d-models, textures, meshy, tripo, rodin]
lang: en
hreflang_group: genai-model-generator
image: https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1773874365/MainBanners_7_nxt9fw.webp
---



<html lang="en">

<body>

<div class="image-wrapper">
<figure>
    <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1773874365/MainBanners_7_nxt9fw.webp" alt="GenAI Model Generator - AI 3D Model Generation in Unreal Engine" style="width: 100%;">
</figure>
</div>

<p><strong>Generate 3D models and PBR textures directly inside Unreal Engine using AI.</strong> GenAI Model Generator is a production-ready plugin that connects your Unreal projects to the most powerful AI 3D generation services — Meshy, Hyper3D Rodin, Tripo AI, fal.ai, and Google — through a single, unified interface. Text-to-3D, image-to-3D, retexturing, and AI texture generation, all from Blueprints or C++.</p>

<div class="button-row">
  <a href="/docs/genai-modelgenerator" class="cta-button primary track-click" data-event-name="btn_clk_modelgen_docs" data-event-location="top_cta">Documentation</a>
  <a href="/t/discord" class="cta-button secondary track-click" data-event-name="btn_clk_join_discord" data-event-location="top_cta" target="_blank" rel="noopener noreferrer">Join Discord</a>
</div>

<div style="background-color: #f9f9f9; border-left: 4px solid #4a4a4a; padding: 25px; margin: 30px 0; border-radius: 4px;">
  <h2 style="margin-top: 0;">5 Providers, One Plugin</h2>
  <p>Access the best AI 3D generation services through a single API. Switch between Meshy, Hyper3D Rodin, Tripo AI, fal.ai, and Google without changing your workflow. Each provider brings unique strengths — use the best tool for each job.</p>
  <p>This plugin will receive <strong>free updates</strong> with new providers and models as they become available. If you find it useful, please consider supporting us with a <strong>five-star rating on Fab!</strong></p>
</div>

<h2>Key Features:</h2>
<ul>
    <li>
        <p><strong>Text-to-3D Generation:</strong> 🎨<br>
        Describe a 3D model in plain text and receive a fully formed asset. Supported by Meshy and Tripo AI with multiple model versions for different quality and speed tradeoffs.</p>
    </li>
    <li>
        <p><strong>Image-to-3D Generation:</strong> 📸<br>
        Convert a 2D image or concept art into a 3D model. Supported by all providers — Meshy, Hyper3D Rodin, Tripo AI, and fal.ai (with Hunyuan3D, TripoSR, Rodin, and Trellis 2 backends).</p>
    </li>
    <li>
        <p><strong>AI Retexturing:</strong> 🖌️<br>
        Apply AI-generated textures to existing 3D models based on a text description. Transform placeholder assets into production-ready art with a single prompt via Meshy.</p>
    </li>
    <li>
        <p><strong>PBR Texture Generation:</strong> 🧱<br>
        Generate individual or complete PBR texture sets — base color, normal, roughness, and metallic maps — using Google's AI. Supports seamless/tileable textures and reference image style transfer.</p>
    </li>
    <li>
        <p><strong>Multiple Output Formats:</strong> 📦<br>
        Export generated models in GLB, FBX, OBJ, USDZ, or STL formats. Control mesh topology (triangles or quads) and polygon count (100 to 300,000 triangles).</p>
    </li>
    <li>
        <p><strong>Progress Tracking:</strong> 📊<br>
        All generation tasks include real-time progress callbacks (0-100%) so you can show loading bars or status updates to your users.</p>
    </li>
    <li>
        <p><strong>Secure Key Management:</strong> 🔐<br>
        All API keys are stored in a non-portable, encrypted file separate from your source control. Manage keys for all five providers from a single settings panel.</p>
    </li>
    <li>
        <p><strong>Blueprint & C++ Ready:</strong> 🔗<br>
        Every feature is available as both an asynchronous Blueprint node and a C++ static function with delegates. Built on <code>UCancellableAsyncAction</code> for proper lifetime management.</p>
    </li>
    <li>
        <p><strong>Built-in Editor Tool:</strong> 🛠️<br>
        Generate 3D models directly from a Slate-based editor widget without writing any code. Preview results and import generated assets into your content browser.</p>
    </li>
</ul>

<h2>Supported Providers & Capabilities</h2>
<div style="padding: 10px 15px; background-color: #fffbe6; border-left: 4px solid #ffc107; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold; color: #856404;">Disclaimer</p>
  <p style="margin: 5px 0 0 0; color: #856404;">This plugin requires an active API key from at least one supported provider to function. See our documentation for details on <a href="/docs/genai-modelgenerator/getting-api-keys/" class="track-click" data-event-name="lnk_clk_modelgen_api_keys_docs" data-event-location="post_modelgen">how to obtain API keys</a>.</p>
</div>

<ul>
    <li><strong>Meshy AI:</strong>
        <ul>
            <li><strong>Text-to-3D:</strong> Models v4, v5, v6 with customizable art styles</li>
            <li><strong>Image-to-3D:</strong> Convert reference images to 3D models</li>
            <li><strong>Retexturing:</strong> Apply AI textures to existing meshes</li>
            <li>Symmetry modes (Auto/On/Off), configurable topology</li>
        </ul>
    </li>
    <li><strong>Hyper3D Rodin:</strong>
        <ul>
            <li><strong>Image-to-3D & Text-to-3D:</strong> 4 quality tiers (Regular, Sketch, Detail, Smooth)</li>
            <li>4 mesh quality levels (500 to 300K triangles)</li>
            <li>PBR and Shaded material options</li>
        </ul>
    </li>
    <li><strong>Tripo AI:</strong>
        <ul>
            <li><strong>Text-to-3D & Image-to-3D:</strong> Model versions v2.0 and v2.5</li>
            <li>Fast generation with clean topology</li>
        </ul>
    </li>
    <li><strong>fal.ai:</strong>
        <ul>
            <li><strong>Image-to-3D:</strong> Via multiple inference backends</li>
            <li>Hunyuan3D v2.1, TripoSR, Rodin, Trellis 2</li>
            <li>Configurable inference steps and guidance scale</li>
        </ul>
    </li>
    <li><strong>Google:</strong>
        <ul>
            <li><strong>Texture Generation:</strong> NanoBanana 2 / Gemini-powered PBR texture creation</li>
            <li>Base color, normal, roughness, metallic, and full PBR sets</li>
            <li>Seamless/tileable texture support</li>
        </ul>
    </li>
</ul>

<h2>Use Cases:</h2>
<ul>
    <li><strong>Rapid Prototyping:</strong> Generate placeholder and production-quality 3D assets from text descriptions during development, dramatically reducing iteration time.</li>
    <li><strong>Runtime Content Generation:</strong> Create unique 3D assets dynamically at runtime based on player input or procedural generation systems.</li>
    <li><strong>Concept Art to 3D Pipeline:</strong> Convert 2D concept art directly into 3D models, bridging the gap between art direction and 3D production.</li>
    <li><strong>Texture Authoring:</strong> Generate PBR texture sets for environments, props, and materials without leaving the engine.</li>
    <li><strong>Asset Refresh:</strong> Retexture existing models with AI-generated materials to quickly explore different visual directions.</li>
</ul>

<h2>Why Choose This Plugin?</h2>
<ul>
    <li><strong>Multi-Provider Flexibility:</strong> 🌐 Access 5 different AI providers through one plugin. Compare results and pick the best for each asset.</li>
    <li><strong>Production-Ready:</strong> ⚔️ Asynchronous processing, progress tracking, task cancellation, and proper error handling throughout.</li>
    <li><strong>Constantly Evolving:</strong> 🧬 New providers and model versions are added regularly as the AI 3D generation landscape evolves.</li>
    <li><strong>Built by Developers, for Developers:</strong> 💻 Created by the same team behind <a href="/genai-unreal" class="track-click" data-event-name="lnk_clk_genai_unreal" data-event-location="post_modelgen">GenAI for Unreal</a> and <a href="/genai-china" class="track-click" data-event-name="lnk_clk_genai_china" data-event-location="post_modelgen">Gen AI China</a>.</li>
    <li><strong>Dedicated Support:</strong> 📧 Email our support team for any questions or custom modification requests.</li>
</ul>

<h2>Resources & Support</h2>
<ul>
    <li><a href="/docs/genai-modelgenerator/" class="track-click" data-event-name="lnk_clk_modelgen_docs" data-event-location="post_modelgen">Documentation</a></li>
    <li><a href="/t/discord" class="track-click" data-event-name="lnk_clk_discord" data-event-location="post_modelgen" target="_blank" rel="noopener noreferrer">Discord Community</a></li>
    <li><strong>Professional Support & Custom Development:</strong> <a href="mailto:mail@muddyterrain.com" class="track-click" data-event-name="lnk_clk_support_email" data-event-location="post_modelgen">mail@muddyterrain.com</a></li>
</ul>

<div class="button-row">
  <a href="/docs/genai-modelgenerator" class="cta-button primary track-click" data-event-name="btn_clk_modelgen_docs" data-event-location="btm_cta">Documentation</a>
  <a href="/t/discord" class="cta-button secondary track-click" data-event-name="btn_clk_join_discord" data-event-location="btm_cta" target="_blank" rel="noopener noreferrer">Join Discord</a>
</div>

</body>
</html>
