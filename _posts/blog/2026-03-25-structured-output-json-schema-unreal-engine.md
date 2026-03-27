---
layout: wide
title: "Structured Output and JSON Schema in Unreal Engine 5"
description: "Learn how to enforce structured JSON output from LLMs like ChatGPT in Unreal Engine 5 to generate reliable game data, quests, and stats."
category: guides
permalink: /blog/structured-output-json-schema-unreal-engine
author: "Muddy Terrain"
tags: [unreal-engine, structured-output, json, openai, chatgpt, procedural-generation, game-development, blueprints]
image: https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1772931701/MainBanners_4_d9nmqo.webp
---

<div class="image-wrapper">
<figure>
    <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1772931701/MainBanners_4_d9nmqo.webp" alt="Structured Output and JSON Schema in Unreal Engine 5" style="width: 100%;">
</figure>
</div>

<h2>Structured Output and JSON Schema in Unreal Engine 5</h2>

<p>One of the biggest hurdles to using Generative AI in actual gameplay systems (rather than just raw text dialogue) is parsing the response. If you ask an LLM to generate a weapon, it might return a bulleted list, a paragraph, or pseudo-code. Writing regex parsers to handle that unpredictability is a nightmare for game developers.</p>

<p><strong>Structured Output</strong> solves this entirely. By providing a JSON Schema to the API, you physically constrain the AI to output valid, perfectly formatted JSON that matches your exact data structures. No missing keys, no hallucinations outside the schema, no broken parsers.</p>

<h2>Why Structured Output is Critical for Games</h2>

<ul>
    <li><strong>Procedural Loot Generation:</strong> Generate weapons with guaranteed 'damage', <strong>durability</strong>, and <strong>elemental_type</strong> fields.</li>
    <li><strong>Quest Systems:</strong> Generate quests with an array of <strong>objectives</strong>, a <strong>quest_title</strong>, and a <strong>gold_reward</strong>.</li>
    <li><strong>Character Stats:</strong> Roll an NPC with specific <strong>strength</strong>, <strong>intelligence</strong>, and an array of <strong>inventory_items</strong>.</li>
    <li><strong>Safe Deserialization:</strong> You can deserialize the AI's response directly into a UE5 Blueprint Struct or C++ USTRUCT without writing complex string parsing logic.</li>
</ul>

<h2>Implementing Structured Output in Unreal Engine 5</h2>

<p>Using the <a href="/t/genai-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-plugin" class="track-click" data-event-name="lnk_clk_genai_fab" data-event-location="post_guide_structured" target="_blank" rel="noopener noreferrer">GenAI for Unreal</a> plugin, setting up Structured Output with OpenAI (like <strong>gpt-5.1</strong>) is straightforward.</p>

<h3>1. Defining the JSON Schema</h3>

<p>First, you define the "shape" of the data you want. Here is an example schema for an RPG character:</p>

<pre><code class="language-json">{
  "type": "object",
  "properties": {
    "name": {"type": "string", "description": "The character's name."},
    "level": {"type": "integer", "description": "The character's current level."},
    "health": {"type": "integer", "description": "The character's health points."},
    "skills": {
      "type": "array",
      "items": {"type": "string"},
      "description": "A list of unique skills."
    }
  },
  "required": ["name", "level", "health", "skills"]
}
</code></pre>

<h3>2. Blueprint Implementation</h3>

<p>Game designers can pass this schema directly into the Chat Settings node to enforce the output format.</p>

<pre><code class="language-unrealscript">// Blueprint Pseudocode
Make Gen OpenAI Chat Settings
  Model: gpt-5.1
  Response Format -> Json Object (Paste the Schema String here)

GenAI_ChatCompletion
  Prompt: "Generate a level 5 Goblin boss."
  
  OnCompleted(JSONString) -> 
    Use VaRest or built-in JsonBlueprintUtilities to parse JSONString into a UE5 Struct
</code></pre>

<h3>3. C++ Implementation</h3>

<p>In C++, you pass the schema string into the <strong>ResponseFormat</strong> property of the <strong>FGenOAIChatSettings</strong> struct. Once the response returns, you use Unreal's built-in <strong>FJsonSerializer</strong> to map it to your custom <strong>USTRUCT</strong>.</p>

<pre><code class="language-cpp">FGenOAIChatSettings ChatSettings;
ChatSettings.Model = EOpenAIChatModel::GPT_4o;
ChatSettings.ResponseFormat.JsonObject = JSONSchemaString; // Your schema from above

UGenOAIChat::SendChatRequest(ChatSettings, Messages,
    FOnChatCompletionResponse::CreateLambda([this](const FString& JSONResponse, const FString& Error, bool bSuccess)
    {
        if (bSuccess)
        {
            // Parse JSONResponse using TJsonReader and FJsonSerializer
            // Populate your custom FCharacterStats struct
        }
    })
);
</code></pre>

<h2>Best Practices</h2>

<p>When using Structured Output, keep the following in mind:</p>
<ul>
    <li><strong>Provide clear descriptions:</strong> The <strong>description</strong> field in your JSON schema acts as a prompt for the AI. Use it to explain exactly what kind of values you want (e.g., "A number between 1 and 100").</li>
    <li><strong>Use the right models:</strong> OpenAI's <strong>gpt-5.1</strong>, <strong>gpt-5</strong>, and newer models natively enforce strict schema adherence.</li>
    <li><strong>Keep it focused:</strong> Don't ask for a massive, heavily nested JSON object if you only need a few variables. Smaller schemas generate faster and cost fewer tokens.</li>
</ul>

<div class="button-row">
  <a href="/t/genai-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-plugin" class="cta-button primary track-click" data-event-name="btn_clk_genai_fab" data-event-location="post_guide_structured_cta" target="_blank" rel="noopener noreferrer">GenAI for Unreal on Fab</a>
  <a href="/docs/genai-unreal/structured-output/" class="cta-button secondary track-click" data-event-name="btn_clk_genai_docs" data-event-location="post_guide_structured_cta">Read the Documentation</a>
</div>





