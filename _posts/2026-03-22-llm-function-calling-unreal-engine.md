---
layout: wide
title: "LLM Function Calling in Unreal Engine - Let AI Control Your Game"
category: guides
permalink: /blog/llm-function-calling-unreal-engine
author: "Muddy Terrain"
tags: [unreal-engine, function-calling, tool-use, ai-agents, chatgpt, claude, gemini, structured-output, game-development]
image: https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1772931701/MainBanners_4_d9nmqo.webp
---

<div class="image-wrapper">
<figure>
    <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1772931701/MainBanners_4_d9nmqo.webp" alt="LLM Function Calling in Unreal Engine" style="width: 100%;">
</figure>
</div>

<h2>LLM Function Calling in Unreal Engine</h2>

<p>Function calling is the bridge between AI conversation and game action. Instead of just generating text, the LLM can decide to open a door, spawn an enemy, change the weather, give the player an item, or trigger a cutscene — all through natural conversation.</p>

<h2>How Function Calling Works</h2>

<p>You define a set of functions your game exposes — each with a name, description, and parameter schema. When the player talks to an NPC, the LLM can choose to call one of these functions instead of (or alongside) generating text.</p>

<p>Example: a player says "It's getting dark, can you light the torches?" The NPC AI calls <code>setLighting("torches", true)</code> and responds "Of course, let me get those lit for you." The torches actually light up in the game world.</p>

<h2>What You Can Build</h2>

<ul>
    <li><strong>Interactive NPCs that affect the world.</strong> Shopkeepers that actually hand over items. Guards that open gates. Wizards that cast spells on the environment.</li>
    <li><strong>AI game masters.</strong> A dungeon master NPC that spawns encounters, adjusts difficulty, and narrates events — all through natural conversation with the player.</li>
    <li><strong>Voice-controlled gameplay.</strong> "Build a wall here" → AI calls <code>placeStructure("wall", playerLookAt)</code>. Natural language becomes a game input method.</li>
    <li><strong>Dynamic quest assignment.</strong> AI evaluates the player's state and calls <code>assignQuest(questData)</code> with a procedurally generated quest that fits the player's level and story progress.</li>
    <li><strong>Structured data generation.</strong> Use JSON schemas to guarantee valid output: inventory items, enemy configurations, dialogue trees, skill trees.</li>
</ul>

<h2>Supported Providers</h2>

<p>Function calling is supported by all major providers in <a href="/t/genai-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-plugin" class="track-click" data-event-name="lnk_clk_genai_fab" data-event-location="post_guide_function_calling" target="_blank" rel="noopener noreferrer">GenAI for Unreal</a>:</p>

<ul>
    <li><strong>OpenAI</strong> — GPT-5, GPT-4o, o3, o4-mini (function calling + structured output)</li>
    <li><strong>Anthropic</strong> — Claude Opus 4.6, Sonnet 4.6 (tool use)</li>
    <li><strong>Google</strong> — Gemini 3.1 (function declarations)</li>
    <li><strong>DeepSeek</strong> — V3.1 (function calling)</li>
    <li><strong>XAI</strong> — Grok 4.1 (function calling)</li>
</ul>

<p>All work through the same Blueprint and C++ API — define your functions once, switch providers freely.</p>

<div class="button-row">
  <a href="/t/genai-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-plugin" class="cta-button primary track-click" data-event-name="btn_clk_genai_fab" data-event-location="post_guide_function_calling_cta" target="_blank" rel="noopener noreferrer">View on Fab.com</a>
  <a href="/docs/genai-unreal" class="cta-button secondary track-click" data-event-name="btn_clk_genai_docs" data-event-location="post_guide_function_calling_cta">Documentation</a>
</div>
