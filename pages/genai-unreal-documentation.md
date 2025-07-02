---
layout: wide
title: GenAI for Unreal - Full Documentation
category: documentation
permalink: /genai-unreal-documentation
---


<h1>Documentation: GenAI for Unreal</h1>
<p>Welcome to the complete guide for the GenAI for Unreal plugin. This document provides all the necessary information to integrate, use, and master the plugin in your Unreal Engine projects.</p>

<hr style="margin: 30px 0;">

<h2>Table of Contents</h2>
<ul>
<li><a href="#1-quick-start-your-first-ai-chat-in-5-minutes">1. Quick Start: Your First AI Chat in 5 Minutes</a></li>
<li><a href="#2-initial-project-setup">2. Initial Project Setup</a></li>
<li><a href="#3-getting-api-keys">3. Getting API Keys</a></li>
<li><a href="#4-authentication-security">4. Authentication & Security</a></li>
<li><a href="#5-core-concepts">5. Core Concepts</a></li>
<li><a href="#6-usage-guides-examples">6. Usage Guides & Examples</a></li>
<li><a href="#7-structured-output">7. Structured Output</a></li>
<li><a href="#8-how-to-run-tests">8. How to Run Tests</a></li>
<li><a href="#9-quick-links-api-reference">9. Quick Links & API Reference</a></li>
</ul>

<hr style="margin: 30px 0;">

<h2>1. Quick Start: Your First AI Chat in 5 Minutes</h2>
<p>Follow these minimal steps to get a basic chat completion working instantly.</p>
<ol>
<li><strong>Install Plugin:</strong> Add "GenAI for Unreal" from the Fab.com marketplace and enable it in <code>Edit > Plugins</code>.</li>
<li><strong>Add API Key:</strong> Go to <code>Project Settings > Plugins > GenAI Plugin</code> and enter your OpenAI API key.</li>
<li><strong>Create Blueprint:</strong> Make a new Actor Blueprint. In the Event Graph, add the following nodes:</li>
<div> <figure>
<img class="full-bleed"  src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1751480831/1e64d118-033f-40cf-957f-e15d8ae5a290.webp" alt="Quick Start Blueprint Example" style="width: 100%;">
<figcaption class="image-caption">
A simple setup to test chat completion.
</figcaption>
</figure>
</div>
<li><strong>Node Setup:</strong>
<ul>
<li>Connect <code>Event Begin Play</code> to a <code>Request OpenAI Chat Completion</code> node.</li>
<li>For the <code>Settings</code> pin, add a <code>Make Gen AI Chat Settings</code> node.</li>
<li>In the <code>Messages</code> array, add a <code>Make Gen Chat Message</code> with the role <code>user</code> and content "Tell me a joke."</li>
<li>Drag off the <code>OnComplete</code> event and add a <code>Print String</code> node, connecting the <code>Response</code> output to the string input.</li>
</ul>
</li>
<li><strong>Press Play:</strong> You will see an AI-generated joke printed to the screen.</li>
</ol>

<hr style="margin: 30px 0;">

<h2>2. Initial Project Setup</h2>
<p>Follow these steps to get the plugin running in your project.</p>
<h4>Adding the Plugin</h4>
<ol>
    <li>Acquire the GenAI for Unreal plugin from <strong>Fab.com</strong>. Once downloaded click on <code>Install to engine</code> from the epic's launcher. </li>
    <li>Open your project and enable the "GenAI For Unreal" plugin from the <code>Edit > Plugins</code> menu. Restart the editor if prompted.</li>
</ol>

<h4>C++ Project Configuration (Optional) </h4>
<p>To use the plugin's classes in your C++ code, you must add its modules to your project's build file.</p>
<ol>
    <li>Open <code>YourProject.Build.cs</code> located in your project's <code>Source/YourProject</code> directory.</li>
    <li>Add <code>"GenAI"</code> to your list of public dependencies. This gives you access to all the core functionalities.</li>
</ol>

```cpp
using UnrealBuildTool;

public class YourProject : ModuleRules
{
    public YourProject(ReadOnlyTargetRules Target) : base(Target)
    {
        PCHUsage = PCHUsageMode.UseExplicitOrSharedPCHs;
    
        PublicDependencyModuleNames.AddRange(new string[] { 
            "Core", 
            "CoreUObject", 
            "Engine", 
            "InputCore", 
            "GenAI"  // <-- ADD THIS MODULE
        });
    }
}
```


<hr style="margin: 30px 0;">

<h2>3. Getting API Keys</h2>
<p>To use this plugin, you need an API key from at least one of the following services. An API key is a unique code that authenticates your requests with the AI provider's servers. You will be billed by the respective provider based on your usage.</p>
<ul>
    <li><strong>OpenAI (for GPT models, DALL-E, Whisper, TTS):</strong>
        <ol>
            <li>Go to the <a href="https://platform.openai.com/signup" target="_blank" rel="noopener noreferrer">OpenAI Platform</a> and create an account.</li>
            <li>Navigate to the "API Keys" section in your user dashboard.</li>
            <li>Create a new secret key and copy it immediately. For security, OpenAI will not show you the key again.</li>
            <li>You may also need to set up a payment method to access certain models.</li>
        </ol>
    </li>
    <li><strong>Anthropic (for Claude models):</strong>
        <ol>
            <li>Visit the <a href="https://console.anthropic.com/" target="_blank" rel="noopener noreferrer">Anthropic Console</a> and sign up.</li>
            <li>Go to "Account Settings" and find the "API Keys" section.</li>
            <li>Generate and copy your new API key.</li>
        </ol>
    </li>
    <li><strong>DeepSeek / XAI / Google Gemini:</strong>
        <ol>
            <li>Follow the specific sign-up and API key generation process on each provider's respective developer platform.</li>
            <li><a href="https://platform.deepseek.com/" target="_blank" rel="noopener noreferrer">DeepSeek Platform</a></li>
            <li><a href="https://x.ai/" target="_blank" rel="noopener noreferrer">XAI (Grok)</a></li>
            <li><a href="https://ai.google.dev/" target="_blank" rel="noopener noreferrer">Google AI for Developers (Gemini)</a></li>
        </ol>
    </li>
</ul>
<p>Once you have your key(s), proceed to the <strong>Authentication & Security</strong> section below to learn how to add them to the plugin securely.</p>

<hr style="margin: 30px 0;">

<h2>4. Authentication & Security</h2>

<h3>Setting API Keys:</h3>
<p>Never hard-code API keys. The plugin provides a secure, centralized settings panel.</p>

<ol>
    <li>In the Unreal Editor, navigate to <strong>Edit &gt; Project Settings</strong>.</li>
    <li>Scroll down to the <strong>Plugins</strong> section on the left and click on <strong>GenAI Plugin</strong>.</li>
    <div class="image-wrapper">
        <figure>
            <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1751294875/d6a467e8-b94a-498b-b062-432eaef4e81b.webp" alt="Settings panel for API keys" style="width: 100%;">
            <figcaption class="image-caption">
            Settings panel for API keys
            </figcaption>
        </figure>
    </div>
    <li>Enter your API keys from each provider (OpenAI, Anthropic, etc.) into the corresponding fields.</li>
    <li>These keys are automatically saved to an encrypted binary file at <code>YourProject/Saved/Config/GenAI/secureconfig.bin</code>.</li>
    <li>This file must not be committed to source control. Generally "Saved" folder is already part of <code>.gitignore</code>, if it is not add the following line to it to prevent leaking your keys:
        <pre><code>/Saved/Config/GenAI/secureconfig.bin</code></pre>
    </li>
</ol>
<h3>Using a Proxy Server (Optional, For Production):</h3>
<h5>Why use a proxy?</h5>
<ul>
    <li>Security: Your API keys never leave your server. The client application makes requests to your server, and your server securely attaches the API key before forwarding the request to the AI provider.</li>
    <li>Centralized Control: Manage keys, monitor usage, and control access for all users from a single backend.</li>
    <li>Custom Logic: Add logging, caching, or pre/post-processing logic on your server before returning data to the game client.</li>
</ul>

<h5>Retargetting the plugin to proxy:</h5>

<p>Once your own backend server is running:</p>
<ol>
    <li>Go to the <strong>GenAI Plugin</strong> settings in the Unreal Editor.</li>
    <div class="image-wrapper">
    <figure>
        <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1751295938/73bfcb9b-809c-4bbb-9ba5-9c0e4c937e76.webp" alt="Settings panel for API keys" style="width: 100%;">
        <figcaption class="image-caption">
        Retargetting the API requests to proxy server
        </figcaption>
    </figure>
    </div>
    <li>Under the <strong>API Endpoint Management</strong> section for each provider, check the "Override" box.</li>
    <li>Enter the URL of your proxy endpoint. For example, for OpenAI, you might enter <code>https://api.yourgame.com/openai</code>.</li>
</ol>
<p>Now, all API calls from the plugin to that provider will be routed through your server instead of directly to the AI provider's endpoint.</p>

<hr style="margin: 30px 0;">

<h2>5. Core Concepts</h2>

<h3>Asynchronous by Design</h3>
<p>All API calls in this plugin are <strong>asynchronous</strong> (non-blocking). This is essential to prevent your game from freezing while waiting for a response from the AI server. The workflow is always:</p>
<ol>
    <li>You call a function to send a request (e.g., <code>UGenOAIChat::SendChatRequest</code>).</li>
    <li>You provide a <strong>callback delegate</strong> (in C++) or connect to an <strong>event pin</strong> (in Blueprints).</li>
    <li>Your game continues running without interruption.</li>
    <li>When the response arrives, your callback function or event is executed with the result.</li>
</ol>

<h3>Using Custom Models (Not in Enums)</h3>
<p>AI providers release new models frequently. You don't have to wait for a plugin update to use them. All settings objects (e.g., <code>FGenOAIChatSettings</code>) allow you to specify a model name as a simple string, which will always override the enum selection.</p>

<h5>Blueprint Example:</h5>
<p>In the "Make Gen OpenAI Chat Settings" node, simply type the new model's name (e.g., "gpt-5-exclusive-preview") into the <code>Model (String)</code> input field. This will be used instead of the enum dropdown.</p>

<h5>C++ Example:</h5>
<pre><code>#include "Models/OpenAI/GenOAIChat.h"

void AMyActor::SendCustomModelRequest()
{
    FGenOAIChatSettings ChatSettings;
    ChatSettings.Model = EOpenAIChatModel::Custom; 
    ChatSettings.CustomModelName = TEXT("gpt-5-exclusive-preview"); 
    
    // ... complete the rest of the request
}</code></pre>

<h3> Additional Points to Note</h3>
<ol>
    <li><strong>HTTP Timeouts:</strong> Complex reasoning models (like DeepSeek Reasoner) can take longer to generate a response. If you experience frequent timeout errors, consider increasing the default HTTP timeout in your project's DefaultEngine.ini file:
    <pre><code>    [/Script/Engine.NetworkSettings]
    NetConnectionTimeout=180.0 
    [HTTP]
    HttpConnectionTimeout=180.0 
    HttpReceiveTimeout=180.0  </code></pre></li>
    <li><strong>Audio Formats (TTS):</strong> The Text-to-Speech feature currently outputs audio in the PCM format. The plugin includes Blueprint utilities to convert this raw data into a playable USoundWave asset at runtime.</li>
    <li><strong>API Key Security:</strong> The <code>secureconfig.bin</code> file is encrypted and non-portable by design. Do not attempt to copy it between projects or machines. Always add API keys through the Project Settings panel. Never commit this file to source control.</li>
    <li><strong>Platform Compatibility:</strong> The plugin uses standard engine modules (HTTP, Json) for maximum cross-platform compatibility. However, always test features on your specific target hardware, especially file-system-dependent operations like loading images for vision requests.</li>
    <li><strong>Plugin Dependencies:</strong> This plugin relies only on core Unreal Engine modules. It does not introduce any external third-party libraries, ensuring a clean and stable integration.</li>
</ol>

<hr style="margin: 30px 0;">

<h2>6. Usage Guides & Examples</h2>

<h3>Finding the Example Assets</h3>
<ul>
    <li><strong>Blueprint Examples:</strong> Example blueprints can be found inside the plugin's content folder at <code>Engine/Plugins/GenAIForUnrealContent/ExampleBlueprints/</code>.</li>

<div class="image-wrapper" style="max-width: 80%;">
    <figure>
    <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1751299058/d2243d10-ecd0-401c-93c8-524916a096aa.webp" alt="Blueprint Example" style="width: 100%;">
    <figcaption class="image-caption">Blueprint Examples</figcaption>
    </figure>
</div>
    <li><strong>C++ Examples:</strong> The plugin has a seperate module for C++ examples called <code>GenAIExamples</code>.</li>
</ul>

<h3>Blueprint Usage Walkthrough</h3>
<p>All Blueprint nodes are asynchronous (latent) and have a similar structure. Here is a walkthrough for a OpenAI multimodal chat request.</p>

<img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1751299301/86187345-e044-4862-9acd-0c078ade41ab.webp" alt="Blueprint Node Example">

<ol>
    <li><strong>Request OpenAI Chat Completion:</strong> This is the main node that initiates the API call.</li>
    <li><strong>Settings:</strong> Use a "Make" node (e.g., <code>Make Gen OpenAI Chat Settings</code>) to configure the request. Here you set the model, temperature, max tokens, and importantly, the messages.</li>
    <li><strong>OnComplete (Event):</strong> This event pin fires as soon as a response is received from the server. It provides the final Response string, an Error Message if something went wrong, and a `Success` boolean.</li>
</ol>

<h3>C++ Usage Walkthrough (OpenAI Chat)</h3>
<p>The C++ workflow mirrors the Blueprint logic, using settings structs and response delegates.</p>


```cpp
#include "Data/OpenAI/GenOAIChatStructs.h"
#include "Models/OpenAI/GenOAIChat.h"

void ATOpenAIChatExample::TestTextChat()
{
	UE_LOG(LogGenAI, Log, TEXT("--- Testing OpenAI Text-Only Chat ---"));
	
	FGenOAIChatSettings ChatSettings;
	ChatSettings.Model = EOpenAIChatModel::GPT_4_1_nano; // Use the latest text model
	ChatSettings.Messages.Add(FGenChatMessage(TEXT("user"), TEXT("What is the distance between Earth and the Moon in kilometers?")));
	ChatSettings.MaxTokens = 100;

	UGenOAIChat::SendChatRequest(
	   ChatSettings,
	   FOnChatCompletionResponse::CreateLambda(
		  [this](const FString& Response, const FString& ErrorMessage, bool bSuccess)
		  {
			 if (!UTHelper::IsContextStillValid(this)) return;
			 
			 if (bSuccess)
			 {
				 UE_LOG(LogGenAI, Log, TEXT("OpenAI Text Chat Response: %s"), *Response);
			 }
			 else
			 {
				 UE_LOG(LogGenAI, Error, TEXT("OpenAI Text Chat Error: %s"), *ErrorMessage);
			 }
		  })
	);
}

```

<hr style="margin: 30px 0;">

<h2>7. Structured Output</h2>
Structured Outputs is a feature that ensures the model will always generate responses that adhere to your supplied JSON Schema, so you don't need to worry about the model omitting a required key, or hallucinating an invalid enum value.

Some benefits of Structured Outputs include:
<ul>
    <li>Reliable type-safety: No need to validate or retry incorrectly formatted responses</li>
    <li>Explicit refusals: Safety-based model refusals are now programmatically detectable</li>
    <li>Simpler prompting: No need for strongly worded prompts to achieve consistent formatting</li>
</ul>

<p> Schema JSON example</p>
<pre><code>{
"type": "object",
"properties": {
    "count": {
        "type": "integer",
        "description": "The total number of users."
    },
    "users": {
        "type": "array",
        "items": {
            "type": "object",
            "properties": {
                "name": { "type": "string", "description": "The user's name." },
                "heading_to": { "type": "string", "description": "The user's destination." }
            },
            "required": ["name", "role", "age", "heading_to"]
        }
    }
},
"required": ["count", "users"]
}</code></pre>

<p>Using structured output in the C++:</p>

```cpp
FString MySchemaJson = R"(<insert your schema JSON here>)";

UGenAISchemaService::RequestStructuredOutput(
    TEXT("Generate a list of users and their details"),
    MySchemaJson,
    [](const FString& Response, const FString& Error, bool Success) {
       if (Success)
       {
           UE_LOG(LogTemp, Log, TEXT("Structured Output: %s"), *Response);
       }
       else
       {
           UE_LOG(LogTemp, Error, TEXT("Error: %s"), *Error);
       }
    }
);
```

<p>In Blueprints:</p>
<div>
    <figure> 
        <img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1751482808/6e114b72-0424-4725-8491-31e816ba81e4.webp" alt="Blueprint Structured Output Example" style="width: 100%;">
        <figcaption class="image-caption">Blueprint Structured Output Example</figcaption>
    </figure>
</div>


<hr style="margin: 30px 0;">

<h2>8. How to Run Tests</h2>
<p>The plugin includes a suite of automation tests to verify that all API integrations are working correctly. To run them:</p>
<ol>
    <li>Ensure you have set valid API keys in the plugin settings for the providers you wish to test.</li>
    <li>In the Unreal Editor, go to <strong>Window &gt; Session Frontend</strong>.</li>
    <li>In the "Automation" tab, you will see a list of available tests.</li>
    <li>Find the tests prefixed with <code>GenAI.</code> (e.g., <code>GenAI.OpenAI.Chat</code>).</li>
    <li>Check the boxes for the tests you want to run, and press the "Start Tests" button.</li>
</ol>
<p>The tests will run and report their status. This is a great way to confirm your setup is correct or to debug integration issues.</p>

<hr style="margin: 30px 0;">

<h2>9. Quick Links & API Reference</h2>
<ul>
    <li><a href="https://platform.openai.com/docs/api-reference" target="_blank" rel="noopener noreferrer">OpenAI API Documentation</a></li>
    <li><a href="https://docs.anthropic.com/en/docs/models" target="_blank" rel="noopener noreferrer">Anthropic API Documentation</a></li>
    <li><a href="https://docs.x.ai/api" target="_blank" rel="noopener noreferrer">XAI API Documentation</a></li>
    <li><a href="https://ai.google.dev/gemini-api/docs" target="_blank" rel="noopener noreferrer">Google Gemini API Documentation</a></li>
    <li><a href="https://platform.deepseek.com/api-docs" target="_blank" rel="noopener noreferrer">DeepSeek API Documentation</a></li>
</ul>

<hr style="margin: 30px 0;">
<p><em>This documentation is based on the GenAI for Unreal plugin. Specific function names, struct members, and Blueprint node names may vary slightly based on the final plugin version. Always refer to the plugin's source code or example content for the most accurate implementation details.</em></p>
