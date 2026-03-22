---
layout: wide
title: "Using Groq and OpenRouter in Unreal Engine - Fast LLM Inference for Games"
category: guides
permalink: /blog/using-groq-openrouter-in-unreal-engine
author: "Muddy Terrain"
tags: [unreal-engine, groq, openrouter, fast-inference, llm, ai, game-development, openai-compatible]
image: https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1772931701/MainBanners_4_d9nmqo.webp
---

<div class="image-wrapper">
<figure>
    <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1772931701/MainBanners_4_d9nmqo.webp" alt="Using Groq and OpenRouter in Unreal Engine" style="width: 100%;">
</figure>
</div>

<h2>Using Groq and OpenRouter in Unreal Engine</h2>

<p>Speed matters in games. When a player asks an NPC a question, they shouldn't wait 3 seconds for a response. Groq and OpenRouter solve this by offering blazing-fast LLM inference through OpenAI-compatible APIs — and both work in Unreal Engine today.</p>

<h2>Groq: Hardware-Accelerated Inference</h2>

<p>Groq builds custom LPU (Language Processing Unit) chips designed specifically for LLM inference. The result: models that generate tokens 10-20x faster than standard GPU inference. Llama 3 on Groq feels instantaneous.</p>

<ul>
    <li>Sub-100ms time to first token</li>
    <li>500+ tokens per second output</li>
    <li>Supports Llama 3, Mistral, Gemma, and Mixtral</li>
    <li>OpenAI-compatible API — works with existing integrations</li>
</ul>

<h2>OpenRouter: One API, Every Model</h2>

<p>OpenRouter aggregates dozens of LLM providers behind a single API. Access GPT-5, Claude, Gemini, Llama, Mistral, and more through one endpoint. Switch models by changing a string — no code changes, no new SDKs.</p>

<ul>
    <li>Access to 100+ models from every major provider</li>
    <li>Automatic fallback — if one provider is down, route to another</li>
    <li>Unified billing across all providers</li>
    <li>OpenAI-compatible API format</li>
</ul>

<h2>How to Use Them in Unreal Engine</h2>

<p><a href="/t/genai-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-plugin" class="track-click" data-event-name="lnk_clk_genai_fab" data-event-location="post_guide_groq" target="_blank" rel="noopener noreferrer">GenAI for Unreal</a> supports both Groq and OpenRouter through its OpenAI Compatible Mode. Set the base URL and API key, and you're streaming responses from any compatible provider.</p>

<p>This same mode also works with: Ollama (local), Together AI, Anyscale, Fireworks AI, Perplexity, and any other OpenAI-compatible endpoint.</p>

<div class="button-row">
  <a href="/t/genai-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-plugin" class="cta-button primary track-click" data-event-name="btn_clk_genai_fab" data-event-location="post_guide_groq_cta" target="_blank" rel="noopener noreferrer">View on Fab.com</a>
  <a href="/docs/genai-unreal" class="cta-button secondary track-click" data-event-name="btn_clk_genai_docs" data-event-location="post_guide_groq_cta">Documentation</a>
</div>
