---
layout: wide
title: "A Complete Guide to AI Function Calling (Tool Use) in Unreal Engine 5"
description: "Give AI agency in your game. Learn how to use Function Calling and Tool Use in Unreal Engine 5 with GPT-5.4 Pro and Claude 4.6."
category: guides
permalink: /blog/complete-guide-ai-function-calling-unreal-engine
author: "Muddy Terrain"
tags: [unreal-engine, function-calling, tool-use, ai-agents, game-development, blueprints, gpt-5, claude]
image: https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1772931701/MainBanners_4_d9nmqo.webp
---

<div class="image-wrapper">
<figure>
    <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1772931701/MainBanners_4_d9nmqo.webp" alt="AI Function Calling (Tool Use) in Unreal Engine 5" style="width: 100%;">
</figure>
</div>

<h2>A Complete Guide to AI Function Calling (Tool Use) in Unreal Engine 5</h2>

<p>For a long time, integrating AI into games meant building a glorified chatbot. An NPC could give you a beautifully written backstory, but if you asked them to unlock a door, they couldn't actually do it. They were trapped inside a text box.</p>

<p><strong>Function Calling</strong> (also known as <strong>Tool Use</strong> in the Anthropic ecosystem) shatters that barrier. It allows Large Language Models (LLMs) to request the execution of predefined functions within your Unreal Engine 5 game. This gives AI true agency to affect the game state.</p>

<h2>How the Conversation Loop Works</h2>

<p>Function Calling is not a single API request; it is a multi-step conversation loop handled by the developer:</p>

<ol>
    <li><strong>Define the Tools:</strong> You send a system prompt to the AI, along with a list of tools (functions) it is allowed to use. You provide a JSON schema describing the required parameters (e.g., <strong>give_item(item_id, quantity)</strong>).</li>
    <li><strong>The AI Decides:</strong> The player says, "I need a health potion." The AI analyzes the request and, instead of replying with standard text, returns a special JSON payload indicating it wants to invoke <strong>give_item("health_potion", 1)</strong>.</li>
    <li><strong>Local Execution:</strong> Your Unreal Engine code intercepts this response. You parse the requested function, validate the arguments, and execute your gameplay logic (spawning the potion in the player's inventory).</li>
    <li><strong>Return the Result:</strong> You append a new message to the conversation history containing the result of your function (e.g., <strong>{"status": "success", "inventory_full": false}</strong>) and send it back to the AI.</li>
    <li><strong>Final Synthesis:</strong> The AI reads the result and generates a natural language response for the player: "Here is your health potion, traveler!"</li>
</ol>

<h2>Implementing Tool Use in UE5</h2>

<p>The <a href="/t/genai-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-plugin" class="track-click" data-event-name="lnk_clk_genai_fab" data-event-location="post_guide_functions" target="_blank" rel="noopener noreferrer">GenAI for Unreal</a> plugin provides a unified set of Structs and Blueprint utility nodes that abstract away the manual JSON parsing for both OpenAI (GPT-5.4 Pro) and Anthropic (Claude 4.6).</p>

<h3>1. Defining the Tool (C++)</h3>

<p>You use the <strong>FGenAIToolDefinition</strong> struct to declare a capability to the AI.</p>

<pre><code class="language-cpp">FGenAIToolDefinition WeatherTool;
WeatherTool.Name = TEXT("set_weather");
WeatherTool.Description = TEXT("Changes the current weather in the game world.");
WeatherTool.ParametersJson = TEXT(R"({
    "type": "object",
    "properties": {
        "weather_type": {
            "type": "string",
            "enum": ["clear", "rain", "storm", "snow"],
            "description": "The type of weather to set."
        }
    },
    "required": ["weather_type"]
})");

// Add this tool to your Chat Settings
ChatSettings.Tools.Add(WeatherTool);
</code></pre>

<h3>2. Handling the Tool Call (Blueprint)</h3>

<p>When the async request finishes, game designers can use Blueprint utility nodes to check if the AI requested a tool, rather than returning text.</p>

<pre><code class="language-unrealscript">// Pseudocode for Blueprint Tool Parsing
If (Response Has Tool Calls)
{
    ToolCallsArray = Parse OpenAI Tool Calls(Response)
    
    ForEach(ToolCall in ToolCallsArray)
    {
        If (ToolCall.Name == "set_weather")
        {
            WeatherVal = Get Tool Call Argument(ToolCall, "weather_type")
            ExecuteGameWeatherChange(WeatherVal)
            
            // Append Result to History and Re-send Request!
        }
    }
}
</code></pre>

<h2>Crucial Best Practices for Game Security</h2>

<p>Giving an AI agency comes with severe risks if not managed correctly. Players *will* attempt to "jailbreak" your NPCs to spawn infinite gold or skip quest flags.</p>

<ul>
    <li><strong>Never trust the AI blindly:</strong> Just because the AI calls <strong>grant_gold(1000000)</strong> does not mean you should execute it. Your C++ or Blueprint function must validate that the NPC actually *has* the authority or inventory to grant that request.</li>
    <li><strong>Use Enums in Schemas:</strong> As shown in the weather example above, use JSON <strong>enum</strong> arrays to force the AI to pick from a predefined list of valid strings. Do not let it hallucinate a weather state called "acid_rain" if your game doesn't support it.</li>
    <li><strong>Strict Schema Adherence:</strong> When using OpenAI models, you can set <strong>bStrict = true</strong> on your Tool Definition. This forces the model to guarantee its output matches your JSON structure perfectly, preventing serialization crashes in Unreal.</li>
</ul>

<div class="button-row">
  <a href="/t/genai-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-plugin" class="cta-button primary track-click" data-event-name="btn_clk_genai_fab" data-event-location="post_guide_functions_cta" target="_blank" rel="noopener noreferrer">GenAI for Unreal on Fab</a>
  <a href="/docs/genai-unreal/function-calling/" class="cta-button secondary track-click" data-event-name="btn_clk_genai_docs" data-event-location="post_guide_functions_cta">Read the Function Calling Docs</a>
</div>


