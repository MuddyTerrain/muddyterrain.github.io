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
    <li><a href="#2-initial-project-setup">2. Initial Project Setup</a>
        <ul>
            <li><a href="#adding-the-plugin">Adding the Plugin</a></li>
            <li><a href="#c-project-configuration-optional">C++ Project Configuration (Optional)</a></li>
        </ul>
    </li>
    <li><a href="#3-getting-api-keys">3. Getting API Keys</a></li>
    <li><a href="#4-authentication-security">4. Authentication & Security</a>
        <ul>
            <li><a href="#setting-api-keys">Setting API Keys</a></li>
            <li><a href="#using-a-proxy-server-optional-for-production">Using a Proxy Server (Optional, For Production)</a>
                <ul>
                    <li><a href="#why-use-a-proxy">Why use a proxy?</a></li>
                    <li><a href="#retargetting-the-plugin-to-proxy">Retargetting the plugin to proxy</a></li>
                </ul>
            </li>
        </ul>
    </li>
    <li><a href="#5-core-concepts">5. Core Concepts</a>
        <ul>
            <li><a href="#asynchronous-by-design">Asynchronous by Design</a></li>
            <li><a href="#lifetime-management-for-asynchronous-operations">Lifetime Management for Asynchronous Operations</a>
                <ul>
                    <li><a href="#blueprint-solution-automatic-safety">Blueprint Solution: Automatic Safety</a></li>
                    <li><a href="#c-solution-developer-managed">C++ Solution: Developer-Managed</a></li>
                </ul>
            </li>
            <li><a href="#using-custom-models-not-in-enums">Using Custom Models (Not in Enums)</a>
                <ul>
                    <li><a href="#blueprint-example">Blueprint Example</a></li>
                    <li><a href="#c-example">C++ Example</a></li>
                </ul>
            </li>
            <li><a href="#additional-points-to-note">Additional Points to Note</a></li>
        </ul>
    </li>
    <li><a href="#6-usage-guides-examples">6. Usage Guides & Examples</a>
        <ul>
            <li><a href="#finding-the-example-assets">Finding the Example Assets</a></li>
            <li><a href="#blueprint-usage-walkthrough">Blueprint Usage Walkthrough</a></li>
            <li><a href="#c-usage-walkthrough-openai-chat">C++ Usage Walkthrough (OpenAI Chat)</a></li>
        </ul>
    </li>
    <li><a href="#7-building-long-conversations-chat-context">7. Building Long Conversations & Chat Context</a>
        <ul>
            <li><a href="#how-conversation-context-works">How Conversation Context Works</a></li>
            <li><a href="#conversation-structure-example">Conversation Structure Example</a></li>
            <li><a href="#conversation-c-implementation">C++ Implementation</a></li>
            <li><a href="#advanced-context-management">Advanced Context Management</a>
                <ul>
                    <li><a href="#context-length-management">Context Length Management</a></li>
                    <li><a href="#multi-character-conversations">Multi-Character Conversations</a></li>
                </ul>
            </li>
            <li><a href="#best-practices-for-conversation-context">Best Practices for Conversation Context</a></li>
        </ul>
    </li>
    <li><a href="#8-streaming">8. Streaming</a>
        <ul>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#streaming-blueprint-implementation">Blueprint Implementation</a></li>
            <li><a href="#streaming-c-implementation">C++ Implementation</a></li>
            <li><a href="#best-practices">Best Practices</a></li>
        </ul>
    </li>
    <li><a href="#9-structured-output">9. Structured Output</a></li>
    <li><a href="#10-text-to-speech-and-transcription">10. Text-to-Speech and Transcription</a>
        <ul>
            <li><a href="#text-to-speech-tts">Text-to-Speech (TTS)</a>
                <ul>
                    <li><a href="#tts-use-cases">Use Cases</a></li>
                    <li><a href="#tts-blueprint-implementation">TTS Blueprint Implementation</a></li>
                    <li><a href="#tts-c-implementation">TTS C++ Implementation</a></li>
                </ul>
            </li>
            <li><a href="#speech-to-text-transcription">Speech-to-Text (Transcription)</a>
                <ul>
                    <li><a href="#transcription-blueprint-implementation">Transcription Blueprint Implementation</a></li>
                    <li><a href="#transcription-c-implementation">Transcription C++ Implementation</a></li>
                </ul>
            </li>
        </ul>
    </li>
    <li><a href="#11-image-generation">11. Image Generation</a>
        <ul>
            <li><a href="#image-gen-use-cases">Use Cases</a></li>
            <li><a href="#models-and-capabilities">Models and Capabilities</a></li>
            <li><a href="#image-gen-blueprint-implementation">Blueprint Implementation</a></li>
            <li><a href="#image-gen-c-implementation">C++ Implementation</a></li>
        </ul>
    </li>
    <li><a href="#12-how-to-run-tests">12. How to Run Tests</a></li>
    <li><a href="#13-quick-links-api-reference">13. Quick Links & API Reference</a></li>
    <li><a href="#14-additional-notes">14. Additional Notes</a></li>
</ul>

<hr style="margin: 30px 0;">

<h2>1. Quick Start: Your First AI Chat in 5 Minutes</h2>
<p>Follow these minimal steps to get a basic chat completion working instantly.</p>
<ol>
    <li><strong>Install Plugin:</strong> Add "GenAI for Unreal" from the Fab.com marketplace and enable it in <code>Edit > Plugins</code>.</li>
    <li><strong>Add API Key:</strong> Go to <code>Project Settings > Plugins > GenAI Plugin</code> and enter your OpenAI API key.</li>
    <li><strong>Create Blueprint:</strong> Make a new Actor Blueprint. In the Event Graph, add the following nodes:
        <div> 
            <figure>
                <img class="full-bleed"  src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1751480831/1e64d118-033f-40cf-957f-e15d8ae5a290.webp" alt="Quick Start Blueprint Example" style="width: 100%;">
                <figcaption class="image-caption">
                A simple setup to test chat completion.
                </figcaption>
            </figure>
        </div>
    </li>
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
<h4 id="adding-the-plugin">Adding the Plugin</h4>
<ol>
    <li>Acquire the GenAI for Unreal plugin from <strong>Fab.com</strong>. Once downloaded click on <code>Install to engine</code> from the epic's launcher. </li>
    <li>Open your project and enable the "GenAI For Unreal" plugin from the <code>Edit > Plugins</code> menu. Restart the editor if prompted.</li>
</ol>

<h4 id="c-project-configuration-optional">C++ Project Configuration (Optional) </h4>
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

<h3 id="setting-api-keys">Setting API Keys:</h3>
<p>Never hard-code API keys. The plugin provides a secure, centralized settings panel.</p>

<ol>
    <li>In the Unreal Editor, navigate to <strong>Edit &gt; Project Settings</strong>.</li>
    <li>Scroll down to the <strong>Plugins</strong> section on the left and click on <strong>GenAI Plugin</strong>.
        <div class="image-wrapper">
            <figure>
                <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1751294875/d6a467e8-b94a-498b-b062-432eaef4e81b.webp" alt="Settings panel for API keys" style="width: 100%;">
                <figcaption class="image-caption">
                Settings panel for API keys
                </figcaption>
            </figure>
        </div>
    </li>
    <li>Enter your API keys from each provider (OpenAI, Anthropic, etc.) into the corresponding fields.</li>
    <li>These keys are automatically saved to an encrypted binary file at <code>YourProject/Saved/Config/GenAI/secureconfig.bin</code>.</li>
    <li>This file must not be committed to source control. Generally "Saved" folder is already part of <code>.gitignore</code>, if it is not add the following line to it to prevent leaking your keys:
        <pre><code>/Saved/Config/GenAI/secureconfig.bin</code></pre>
    </li>
</ol>
<h3 id="using-a-proxy-server-optional-for-production">Using a Proxy Server (Optional, For Production):</h3>
<h5 id="why-use-a-proxy">Why use a proxy?</h5>
<ul>
    <li>Security: Your API keys never leave your server. The client application makes requests to your server, and your server securely attaches the API key before forwarding the request to the AI provider.</li>
    <li>Centralized Control: Manage keys, monitor usage, and control access for all users from a single backend.</li>
    <li>Custom Logic: Add logging, caching, or pre/post-processing logic on your server before returning data to the game client.</li>
</ul>

<h5 id="retargetting-the-plugin-to-proxy">Retargetting the plugin to proxy:</h5>

<p>Once your own backend server is running:</p>
<ol>
    <li>Go to the <strong>GenAI Plugin</strong> settings in the Unreal Editor.
        <div class="image-wrapper">
            <figure>
                <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1751295938/73bfcb9b-809c-4bbb-9ba5-9c0e4c937e76.webp" alt="Settings panel for API keys" style="width: 100%;">
                <figcaption class="image-caption">
                Retargetting the API requests to proxy server
                </figcaption>
            </figure>
        </div>
    </li>
    <li>Under the <strong>API Endpoint Management</strong> section for each provider, check the "Override" box.</li>
    <li>Enter the URL of your proxy endpoint. For example, for OpenAI, you might enter <code>https://api.yourgame.com/openai</code>.</li>
</ol>
<p>Now, all API calls from the plugin to that provider will be routed through your server instead of directly to the AI provider's endpoint.</p>

<hr style="margin: 30px 0;">

<h2>5. Core Concepts</h2>

<h3 id="asynchronous-by-design">Asynchronous by Design</h3>
<p>All API calls in this plugin are <strong>asynchronous</strong> (non-blocking). This is essential to prevent your game from freezing while waiting for a response from the AI server. The workflow is always:</p>
<ol>
    <li>You call a function to send a request (e.g., <code>UGenOAIChat::SendChatRequest</code>).</li>
    <li>You provide a <strong>callback delegate</strong> (in C++) or connect to an <strong>event pin</strong> (in Blueprints).</li>
    <li>Your game continues running without interruption.</li>
    <li>When the response arrives, your callback function or event is executed with the result.</li>
</ol>

<h3 id="lifetime-management-for-asynchronous-operations">Lifetime Management for Asynchronous Operations</h3>
<p>When working with asynchronous API calls, a critical challenge in Unreal Engine is <strong>Object Lifetime</strong>. The core problem occurs when an Actor is destroyed while an API request is in-flight—the callback can attempt to access a "dangling pointer," causing crashes.</p>

<p>Imagine you start an image generation request from an Actor in your level. The request is sent, and the server begins processing it. Before the server can respond, you stop Play-In-Editor (PIE). The engine's Garbage Collector destroys all objects from that session, including your Actor. When the server response arrives, the plugin tries to deliver the result to your Actor, which no longer exists, causing a crash.</p>

<h5 id="blueprint-solution-automatic-safety">Blueprint Solution: Automatic Safety</h5>
<p>Blueprint nodes are built on <code>UCancellableAsyncAction</code> and handle lifetime automatically using <code>TWeakObjectPtr</code>. The nodes check if the calling object is still valid before executing callbacks, preventing crashes. Key features:</p>
<ul>
    <li><strong>Automatic Cleanup:</strong> When objects are destroyed, weak pointers become invalid and callbacks are safely skipped.</li>
    <li><strong>Explicit Cancellation:</strong> Use the Cancel node to terminate requests early and clean up resources.
        <div class="image-wrapper-half">
            <figure>
                <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1751930469/7ba052f5-e44d-402a-b113-0fc1d07cce09.webp" alt="Settings panel for API keys" style="width: 100%;">
                <figcaption class="image-caption">
                Blueprint nodes automatically handle lifetime safety
                </figcaption>
            </figure>
        </div> 
    </li>
    <li><strong>No Extra Work Required:</strong> Blueprint developers can trust the async nodes to handle all safety automatically.</li>
</ul>

<h5 id="c-solution-developer-managed">C++ Solution: Developer-Managed</h5>
<p>When using static C++ functions, you must handle lifetime yourself. The static functions provide maximum flexibility but require proper safety patterns:</p>

<ol>
    <li><strong>Callback Safety:</strong> Always capture a <code>TWeakObjectPtr</code> to your calling object and check <code>WeakThis.IsValid()</code> at the start of every callback.</li>
    <li><strong>Request Cancellation:</strong> Store the returned <code>TSharedPtr&lt;IHttpRequest&gt;</code> and call <code>CancelRequest()</code> in your object's <code>EndPlay</code> method to prevent wasting resources.</li>
    <li><strong>check() Macro:</strong> All static functions include <code>check(OnComplete.IsBound())</code> to catch unbound delegates in development builds.</li>
</ol>

```cpp
// Essential C++ safety pattern
void AMyActor::RequestImageGeneration()
{
    FGenOAIImageSettings ImageSettings;
    ImageSettings.Prompt = TEXT("A beautiful sunset over mountains");
    
    // Create weak pointer for safe callback capture
    TWeakObjectPtr&lt;AMyActor&gt; WeakThis(this);
    
    // Store request handle for potential cancellation
    ActiveRequest = UGenOAIImageGeneration::SendImageGenerationRequest(ImageSettings,
        FOnImageGenerationCompletionResponse::CreateLambda([WeakThis](const TArray&lt;uint8&gt;& ImageBytes, const FString& Error, bool bSuccess)
        {
            // CRITICAL: Always check validity first
            if (!WeakThis.IsValid()) return;
            
            AMyActor* StrongThis = WeakThis.Get();
            StrongThis->OnImageReceived(ImageBytes, Error, bSuccess);
        })
    );
}

void AMyActor::EndPlay(const EEndPlayReason::Type EndPlayReason)
{
    // Cancel any in-flight requests to prevent waste
    if (ActiveRequest.IsValid() && ActiveRequest->GetStatus() == EHttpRequestStatus::Processing)
    {
        ActiveRequest->CancelRequest();
    }
    ActiveRequest.Reset();
    Super::EndPlay(EndPlayReason);
}
```

<h3 id="using-custom-models-not-in-enums">Using Custom Models (Not in Enums)</h3>
<p>AI providers release new models frequently. You don't have to wait for a plugin update to use them. All settings objects (e.g., <code>FGenOAIChatSettings</code>) allow you to specify a model name as a simple string, which will always override the enum selection.</p>

<h5 id="blueprint-example">Blueprint Example:</h5>
<p>In the "Make Gen OpenAI Chat Settings" node, simply type the new model's name (e.g., "gpt-5-exclusive-preview") into the <code>Model (String)</code> input field. This will be used instead of the enum dropdown.</p>
<div class="image-wrapper">
    <figure>
        <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1751930092/9f333958-9150-4d63-ad82-2e24443ca5c9.webp" alt="Settings panel for API keys" style="width: 100%;">
        <figcaption class="image-caption">
        Using a custom model in Blueprint
        </figcaption>
    </figure>
</div> 
<h5 id="c-example">C++ Example:</h5>
<pre><code>#include "Models/OpenAI/GenOAIChat.h"

void AMyActor::SendCustomModelRequest()
{
FGenOAIChatSettings ChatSettings;
ChatSettings.Model = EOpenAIChatModel::Custom;
ChatSettings.CustomModelName = TEXT("gpt-5-exclusive-preview");

    // ... complete the rest of the request

}</code></pre>

<h3 id="additional-points-to-note">Additional Points to Note</h3>
<ol>
    <li><strong>HTTP Timeouts:</strong> When streaming is not used, complex reasoning models (like DeepSeek Reasoner) can take longer to generate a response. If you experience frequent timeout errors, consider increasing the default HTTP timeout in your project's DefaultEngine.ini file:
    <pre><code>    [/Script/Engine.NetworkSettings]
    NetConnectionTimeout=180.0 
    [HTTP]
    HttpConnectionTimeout=180.0 
    HttpReceiveTimeout=180.0  </code></pre></li>
    <li><strong>Audio Formats (TTS):</strong> The Text-to-Speech feature currently outputs audio in the PCM format. The plugin includes Blueprint utilities to convert this raw data into a playable USoundWave asset at runtime.
        <div class="image-wrapper-small" style="max-width: 35%;">
            <figure>
                <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1751930771/6a1a4394-efe4-4490-bd00-ff917c35c4b0.webp" alt="Blueprint Example" style="width: 100%;">
            </figure>
        </div>
    </li>
    <li><strong>API Key Security:</strong> The <code>secureconfig.bin</code> file is encrypted and non-portable by design. Do not attempt to copy it between projects or machines. Always add API keys through the Project Settings panel. Never commit this file to source control.</li>
    <li><strong>Platform Compatibility:</strong> The plugin uses standard engine modules (HTTP, Json) for maximum cross-platform compatibility. However, always test features on your specific target hardware, especially file-system-dependent operations like loading images for vision requests.</li>
    <li><strong>Plugin Dependencies:</strong> This plugin relies only on core Unreal Engine modules. It does not introduce any external third-party libraries, ensuring a clean and stable integration.</li>
</ol>

<hr style="margin: 30px 0;">

<h2>6. Usage Guides & Examples</h2>

<h3 id="finding-the-example-assets">Finding the Example Assets</h3>
<ul>
    <li><strong>Blueprint Examples:</strong> Example blueprints can be found either inside the plugin's content folder at <code>Engine/Plugins/GenAIForUnrealContent/ExampleBlueprints/</code>, or by downloading the example project <a href="https://drive.google.com/file/d/1m58UpTRafxiEc836-tG1-GsYZ8NIuoYH/view?usp=sharing" target="_blank" rel="noopener noreferrer">here</a>
        <div class="image-wrapper" style="max-width: 80%;">
            <figure>
            <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1751299058/d2243d10-ecd0-401c-93c8-524916a096aa.webp" alt="Blueprint Example" style="width: 100%;">
            <figcaption class="image-caption">Blueprint Examples</figcaption>
            </figure>
        </div>
    </li>
    <li><strong>C++ Examples:</strong> The plugin has a seperate module for C++ examples called <code>GenAIExamples</code>.</li>
</ul>

<h3 id="blueprint-usage-walkthrough">Blueprint Usage Walkthrough</h3>
<p>All Blueprint nodes are asynchronous (latent) and have a similar structure. Here is a walkthrough for a OpenAI multimodal chat request.</p>

<img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1751299301/86187345-e044-4862-9acd-0c078ade41ab.webp" alt="Blueprint Node Example">

<ol>
    <li><strong>Request OpenAI Chat Completion:</strong> This is the main node that initiates the API call.</li>
    <li><strong>Settings:</strong> Use a "Make" node (e.g., <code>Make Gen OpenAI Chat Settings</code>) to configure the request. Here you set the model, temperature, max tokens, and importantly, the messages.</li>
    <li><strong>OnComplete (Event):</strong> This event pin fires as soon as a response is received from the server. It provides the final Response string, an Error Message if something went wrong, and a `Success` boolean.</li>
</ol>

<h3 id="c-usage-walkthrough-openai-chat">C++ Usage Walkthrough (OpenAI Chat)</h3>
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

<h2>7. Building Long Conversations & Chat Context</h2>

<p>When building conversational AI systems, you often need to maintain context across multiple exchanges. Instead of sending isolated messages, you build up a conversation history that includes system prompts, user messages, and AI responses. This allows the AI to remember previous parts of the conversation and respond appropriately.</p>

<h3 id="how-conversation-context-works">How Conversation Context Works</h3>
<p>AI models are stateless - they don't remember previous conversations. To simulate memory, you must send the entire conversation history with each new request. The typical flow is:</p>

<ol>
    <li><strong>Initial Setup:</strong> Start with a system message that defines the AI's role and behavior</li>
    <li><strong>User Input:</strong> Add the user's message to the conversation</li>
    <li><strong>AI Response:</strong> Send the full context to get a response, then add that response to the history</li>
    <li><strong>Continue:</strong> Repeat steps 2-3, always including the full conversation history</li>
</ol>

<h3 id="conversation-structure-example">Conversation Structure Example</h3>
<p>A typical conversation context grows like this:</p>

<pre><code>Turn 1: [System], [User] → AI responds → [System], [User], [Assistant]
Turn 2: [System], [User], [Assistant], [User] → AI responds → [System], [User], [Assistant], [User], [Assistant]
Turn 3: [System], [User], [Assistant], [User], [Assistant], [User] → AI responds → ...and so on</code></pre>

<h3 id="conversation-c-implementation">C++ Implementation</h3>
<p>Here's how to implement conversation context in C++, similar to the pattern shown in your example:</p>

```cpp
#include "Data/OpenAI/GenOAIChatStructs.h"
#include "Models/OpenAI/GenOAIChat.h"

class YOURGAME_API AConversationalNPC : public AActor
{
    GENERATED_BODY()

private:
    // Store the ongoing conversation context
    TArray<FGenChatMessage> ConversationContext;
    
public:
    void InitializeConversation();
    void HandlePlayerMessage(const FString& PlayerInput);
    void SendChatRequest();
};

void AConversationalNPC::InitializeConversation()
{
    // Start with a system message that defines the AI's role
    FGenChatMessage SystemMessage;
    SystemMessage.Role = TEXT("system");
    SystemMessage.Content = TEXT("You are a helpful NPC in a medieval village. You know about local events and can provide information to travelers. Respond in character.");
    
    ConversationContext.Add(SystemMessage);
}

void AConversationalNPC::HandlePlayerMessage(const FString& PlayerInput)
{
    // Add the player's message to our conversation history
    FGenChatMessage UserMessage;
    UserMessage.Role = TEXT("user");
    UserMessage.Content = PlayerInput;
    ConversationContext.Add(UserMessage);
    
    // Send the request with full conversation context
    SendChatRequest();
}

void AConversationalNPC::SendChatRequest()
{
    FGenOAIChatSettings ChatSettings;
    ChatSettings.Model = EOpenAIChatModel::GPT_4_1_mini;
    ChatSettings.Messages = ConversationContext; // Send the entire conversation history
    ChatSettings.MaxTokens = 150;
    
    TWeakObjectPtr<AConversationalNPC> WeakThis(this);
    
    UGenOAIChat::SendChatRequest(
        ChatSettings,
        FOnChatCompletionResponse::CreateLambda([WeakThis](const FString& Response, const FString& Error, bool bSuccess)
        {
            if (!WeakThis.IsValid()) return;
            
            AConversationalNPC* StrongThis = WeakThis.Get();
            
            if (bSuccess)
            {
                // Add the AI's response to our conversation context
                FGenChatMessage AssistantMessage;
                AssistantMessage.Role = TEXT("assistant");
                AssistantMessage.Content = Response;
                StrongThis->ConversationContext.Add(AssistantMessage);
                
                // Display or process the response
                UE_LOG(LogTemp, Log, TEXT("NPC Response: %s"), *Response);
            }
            else
            {
                UE_LOG(LogTemp, Error, TEXT("Chat Error: %s"), *Error);
            }
        })
    );
}
```

<h3 id="advanced-context-management">Advanced Context Management</h3>

<h4 id="context-length-management">Context Length Management</h4>
<p>As conversations grow longer, they can exceed the model's context window (token limit). Consider these strategies:</p>

<ul>
    <li><strong>Sliding Window:</strong> Keep only the most recent N messages while preserving the system message</li>
    <li><strong>Summarization:</strong> Periodically summarize older parts of the conversation and replace them with a summary</li>
    <li><strong>Important Message Retention:</strong> Keep key messages that contain important context while removing less important ones</li>
</ul>

```cpp
void AConversationalNPC::TrimConversationContext(int32 MaxMessages)
{
    if (ConversationContext.Num() <= MaxMessages) return;
    
    // Always keep the system message (assumed to be first)
    FGenChatMessage SystemMessage = ConversationContext[0];
    
    // Keep only the most recent messages
    TArray<FGenChatMessage> TrimmedContext;
    TrimmedContext.Add(SystemMessage);
    
    int32 StartIndex = FMath::Max(1, ConversationContext.Num() - MaxMessages + 1);
    for (int32 i = StartIndex; i < ConversationContext.Num(); i++)
    {
        TrimmedContext.Add(ConversationContext[i]);
    }
    
    ConversationContext = TrimmedContext;
}
```

<h4 id="multi-character-conversations">Multi-Character Conversations</h4>
<p>For group conversations or multi-NPC scenarios, you can use custom roles or include character names in the content:</p>

```cpp
// Option 1: Use content formatting
FGenChatMessage NPCMessage;
NPCMessage.Role = TEXT("assistant");
NPCMessage.Content = FString::Printf(TEXT("[%s]: %s"), *NPCName, *Response);

// Option 2: Use custom role names (some models support this)
FGenChatMessage CustomMessage;
CustomMessage.Role = NPCName; // "Shopkeeper", "Guard", etc.
CustomMessage.Content = Response;
```

<h3 id="best-practices-for-conversation-context">Best Practices for Conversation Context</h3>

<ul>
    <li><strong>Clear System Messages:</strong> Define the AI's role, personality, and knowledge clearly in the system message</li>
    <li><strong>Consistent Formatting:</strong> Maintain consistent message formatting throughout the conversation</li>
    <li><strong>Context Awareness:</strong> Include relevant world state or character information in system messages</li>
    <li><strong>Error Handling:</strong> Always check for API errors and have fallback responses ready</li>
    <li><strong>Performance:</strong> Monitor token usage and implement context trimming for long conversations</li>
    <li><strong>Memory Management:</strong> Consider persistent storage for conversations that should survive game sessions</li>
</ul>


<hr style="margin: 30px 0;">

<h2>8. Streaming</h2>
<p>The plugin provides robust support for real-time streaming of AI responses, a crucial feature for creating dynamic and interactive experiences. Streaming allows you to receive the AI's response in small chunks (deltas) as they are generated, rather than waiting for the entire message to be completed. This is ideal for applications like live-narrated dialogue, real-time-generated character responses, or any feature where immediate feedback is essential.</p>

<h3 id="how-it-works">How It Works</h3>
<p>Streaming is implemented using Server-Sent Events (SSE), a standard protocol for pushing real-time updates from a server to a client. When a streaming request is made, the connection remains open, and the server sends a series of data packets. Each packet contains a small part of the ongoing response, such as a few words or a single sentence.</p>

<p>The plugin provides dedicated classes for handling streaming from different AI providers, such as <code>UGenOAIChatStream</code>, <code>UGenDSeekChatStream</code>, and <code>UGenXAIChatStream</code>. These classes manage the HTTP connection and parse the incoming SSE events, broadcasting them through delegates that your application can subscribe to.</p>

<h3 id="streaming-blueprint-implementation">Blueprint Implementation</h3>
<p>In Blueprints, you can use the dedicated "Request...Stream" nodes for each provider. For example, <code>Request OpenAI Chat Stream</code> initiates a streaming request and provides an <code>OnEvent</code> delegate that fires for each received chunk.
Here's an example of how to handle streaming events for OpenAI in Blueprints:</p>
<div>
    <figure>
        <img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1751931357/39887254-a015-456b-a566-d964e2560f4b.webp" alt="Blueprint streaming example" style="width: 100%;">
        <figcaption class="image-caption">
        Blueprint streaming implementation example
        </figcaption>
    </figure>
</div>

<h3 id="streaming-c-implementation">C++ Implementation</h3>
<p>The C++ implementation offers more fine-grained control and follows a similar pattern. You use the static <code>SendStreamChatRequest</code> function from the relevant stream class and provide a callback delegate to handle the events.</p>

<p>Here's an example of how to implement OpenAI streaming in C++:</p>

```cpp
#include "Models/OpenAI/GenOAIChatStream.h"

void AMyActor::TestStreamingChat()
{
    FGenOAIChatSettings ChatSettings;
    ChatSettings.Model = EOpenAIChatModel::GPT_4_1_nano;
    ChatSettings.Messages.Add(FGenChatMessage(TEXT("user"), TEXT("Tell me a story about a brave knight.")));
    ChatSettings.bStream = true; // Ensure streaming is enabled

    // Send the request with a lambda to handle the stream events
    ActiveRequestStreamingChat = UGenOAIChatStream::SendStreamChatRequest(
        ChatSettings,
        FOnOpenAIChatStreamResponse::CreateUObject(this, &AMyActor::OnStreamingChatEvent)
    );
}

void AMyActor::OnStreamingChatEvent(const FGenOpenAIStreamEvent& StreamEvent)
{
    if (StreamEvent.bSuccess)
    {
        if (StreamEvent.EventType == EOpenAIStreamEventType::ResponseOutputTextDelta)
        {
            // Log each piece of the story as it arrives
            UE_LOG(LogGenAI, Log, TEXT("Story chunk: %s"), *StreamEvent.DeltaContent);
        }
        else if (StreamEvent.EventType == EOpenAIStreamEventType::ResponseCompleted)
        {
            UE_LOG(LogGenAI, Log, TEXT("Story finished!"));
            ActiveRequestStreamingChat.Reset(); // Clean up the request handle
        }
    }
    else
    {
        UE_LOG(LogGenAI, Error, TEXT("Streaming Error: %s"), *StreamEvent.ErrorMessage);
        ActiveRequestStreamingChat.Reset(); // Clean up on error
    }
}
```

<h3 id="best-practices">Best Practices</h3>
<ul>
    <li><strong>UI Updates:</strong> When updating UI elements like text boxes with streamed content, be mindful of performance. Appending text frequently can be expensive, so consider batching updates or using optimized text components.</li>
    <li><strong>Cancellation:</strong> Always store the <code>TSharedPtr&lt;IHttpRequest&gt;</code> returned by <code>SendStreamChatRequest</code> and call <code>CancelRequest()</code> in your object's <code>EndPlay</code> or <code>Destroy</code> method. This prevents orphaned requests and resource leaks if the actor is destroyed while a stream is active.</li>
    <li><strong>Error Handling:</strong> Implement logic to handle potential errors during the stream, such as network issues or API errors. The <code>OnEvent</code> delegate will provide detailed error messages.</li>
    <li><strong>Provider Differences:</strong> While the plugin standardizes the streaming interface, be aware of minor differences between AI providers. For example, DeepSeek offers a <code>ReasoningUpdate</code> event that provides "chain-of-thought" insights, which is unique to its models.</li>
</ul>

<hr style="margin: 30px 0;">

<h2>9. Structured Output</h2>
<p>Structured Outputs is a feature that ensures the model will always generate responses that adhere to your supplied JSON Schema, so you don't need to worry about the model omitting a required key, or hallucinating an invalid enum value.</p>

<div class="image-wrapper">
    <figure> 
        <img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1751932093/22c1fdf7-72b8-4727-930e-b52e9434c94f.webp" alt="Blueprint Structured Output Example" style="width: 100%;">
        <figcaption class="image-caption">Example of JSON response from ChatGPT API for NPCs</figcaption>
    </figure>
</div>
<p>Some benefits of Structured Outputs include:</p>
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

<h2 id="10-text-to-speech-and-transcription">10. Text-to-Speech and Transcription</h2>
<p>Convert text to natural-sounding speech and speech back to text using OpenAI's advanced models. The plugin supports TTS with various voices and transcription with the Whisper model.</p>

<h3 id="text-to-speech-tts">Text-to-Speech (TTS)</h3>
<p>Easily bring your game to life by converting text into natural-sounding speech with OpenAI's advanced TTS models. The plugin supports a variety of voices and delivers high-quality 24kHz audio output ready for immediate use in Unreal Engine.</p>

<h4 id="tts-use-cases">Use Cases</h4>
<ul>
    <li><strong>Dynamic Dialogue:</strong> Convert NPC dialogue text into natural speech in real-time</li>
    <li><strong>Narration:</strong> Create voiceovers for tutorials, story elements, or gameplay instructions</li>
    <li><strong>Accessibility:</strong> Provide audio versions of in-game text for visually impaired players</li>
    <li><strong>Localization:</strong> Generate voices for different languages without recording multiple voice actors</li>
    <li><strong>Procedural Content:</strong> Add voice to dynamically generated content like quest descriptions or item details</li>
</ul>

<h4 id="tts-blueprint-implementation">Blueprint Implementation</h4>
<p>Using TTS in Blueprints is straightforward. You can configure the voice, model, and input text, then convert the resulting audio data into a playable <code>USoundWave</code>.</p>

<div>
    <figure>
        <img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1752095699/Screenshot_2025-07-07_140458_pvujqs.webp" alt="Blueprint TTS and Transcription Example" style="width: 100%;">
        <figcaption class="image-caption">
        A simple Blueprint graph showing how to convert text to a playable sound.
        </figcaption>
    </figure>
</div>

<p>The key nodes are:</p>
<ol>
    <li><strong>Request OpenAI Text To Speech:</strong> Kicks off the TTS request. Use the <code>Make Gen OpenAI Text To Speech Settings</code> node to configure it.</li>
    <li><strong>Convert PCM Audio To Sound Wave:</strong> A helper node that takes the raw audio data from the API and turns it into a <code>USoundWave</code>.</li>
    <li><strong>Create Sound 2D:</strong> A standard Unreal node to play the generated sound in the world. Set it to "Auto Destroy" to avoid memory leaks.</li>
</ol>

<hr style="margin: 15px 0;">

<h4 id="tts-c-implementation">C++ Implementation</h4>
<p>Here's a concise C++ example for converting text to speech and playing the audio.</p>

<pre><code class="language-cpp">
#include "Models/OpenAI/GenOAITextToSpeech.h"
#include "Data/OpenAI/GenOAIAudioStructs.h"
#include "Utilities/GenAIAudioUtils.h"
#include "Components/AudioComponent.h"
#include "Kismet/GameplayStatics.h"

void AMyActor::SpeakText(const FString& Text)
{
    UE_LOG(LogTemp, Log, TEXT("Requesting speech for: '%s'"), *Text);

    // 1. Configure the TTS request
    FGenOAITextToSpeechSettings TTSSettings;
    TTSSettings.InputText = Text;
    TTSSettings.Model = EOpenAITTSModel::TTS_1;
    TTSSettings.Voice = EGenAIVoice::Nova;

    // 2. Send the request with a Lambda callback
    UGenOAITextToSpeech::SendTextToSpeechRequest(TTSSettings,
        FOnTTSCompletionResponse::CreateLambda([this](const TArray&lt;uint8&gt;& AudioData, const FString& ErrorMessage, bool bSuccess)
        {
            if (bSuccess && AudioData.Num() > 0)
            {
                UE_LOG(LogTemp, Log, TEXT("TTS successful! Received %d bytes of audio."), AudioData.Num());

                // 3. Convert data to a playable sound wave
                if (USoundWave* PlayableSound = UGenAIAudioUtils::ConvertPCMAudioToSoundWave(AudioData))
                {
                    // 4. Play the sound using an auto-destroying audio component
                    UAudioComponent* AudioComponent = UGameplayStatics::CreateSound2D(this, PlayableSound);
                    if(AudioComponent)
                    {
                        AudioComponent-&gt;bAutoDestroy = true;
                        AudioComponent-&gt;Play();
                    }
                }
            }
            else
            {
                UE_LOG(LogTemp, Error, TEXT("TTS request failed: %s"), *ErrorMessage);
            }
        })
    );
}
</code></pre>

<hr style="margin: 30px 0;">

<h3 id="speech-to-text-transcription">Speech-to-Text (Transcription)</h3>
<p>Convert any audio source into text using OpenAI's powerful Whisper model. This feature is perfect for implementing voice commands, transcribing dialogue, or enabling any voice-driven interaction in your game. The plugin can process audio directly from a file or from raw audio data in memory.</p>

<h4 id="transcription-blueprint-implementation">Blueprint Implementation</h4>
<p>The Blueprint node for transcription is just as simple as the TTS node. You provide the audio data and it returns the transcribed text.</p>

<div>
    <figure>
        <img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1752096578/Screenshot_2025-07-07_140639_poqu9i.webp" alt="Blueprint TTS and Transcription Example" style="width: 100%;">
        <figcaption class="image-caption">
        A simple Blueprint graph showing how to convert text to a playable sound.
        </figcaption>
    </figure>
</div>

<p>The key node is <strong>Request OpenAI Transcription From Data</strong>. As seen in the image in the TTS section, you can feed the audio data directly from the TTS output into the transcription node to perform a full round-trip conversion.</p>



<hr style="margin: 15px 0;">

<h4 id="transcription-c-implementation">C++ Implementation</h4>
<p>Here's how you can transcribe audio data from memory. This example assumes you already have the audio data in a <code>TArray&lt;uint8&gt;</code>.</p>

<pre><code class="language-cpp">
#include "Models/OpenAI/GenOAITranscription.h"
#include "Data/OpenAI/GenOAIAudioStructs.h"

void AMyActor::TranscribeAudio(const TArray&lt;uint8&gt;& AudioData)
{
    if (AudioData.Num() == 0)
    {
        UE_LOG(LogTemp, Warning, TEXT("TranscribeAudio: Input audio data is empty."));
        return;
    }

    UE_LOG(LogTemp, Log, TEXT("Starting transcription for %d bytes of audio..."), AudioData.Num());

    // 1. Configure the transcription request
    FGenOAITranscriptionSettings TranscriptionSettings;
    TranscriptionSettings.Model = EOpenAITranscriptionModel::Whisper_1;
    TranscriptionSettings.Language = TEXT("en"); // Optional: Specify language for better accuracy

    // 2. Send the request with a Lambda callback
    UGenOAITranscription::SendTranscriptionRequestFromData(AudioData, TranscriptionSettings,
        FOnTranscriptionCompletionResponse::CreateLambda([](const FString& Transcript, const FString& ErrorMessage, bool bSuccess)
        {
            if (bSuccess)
            {
                UE_LOG(LogTemp, Log, TEXT("Transcription successful! Transcript: '%s'"), *Transcript);
            }
            else
            {
                UE_LOG(LogTemp, Error, TEXT("Transcription failed: %s"), *ErrorMessage);
            }
        })
    );
}
</code></pre>

<hr style="margin: 30px 0;">

<h2 id="11-image-generation">11. Image Generation</h2>
<p>The GenAI for Unreal plugin integrates OpenAI's powerful image generation models, allowing you to create stunning, high-quality images from simple text prompts. This opens up incredible possibilities for procedural art, dynamic content, and rapid prototyping directly inside Unreal Engine.</p>

<h3 id="image-gen-use-cases">Use Cases</h3>
<ul>
    <li><strong>Concept Art:</strong> Rapidly generate visual concepts for characters, environments, and props</li>
    <li><strong>Placeholder Assets:</strong> Create temporary artwork while waiting for final art assets</li>
    <li><strong>Procedural Content:</strong> Generate unique textures, landscapes, or decorative elements</li>
    <li><strong>Marketing Materials:</strong> Create promotional images and screenshots for your game</li>
    <li><strong>Prototyping:</strong> Quickly visualize game ideas and mechanics</li>
    <li><strong>User-Generated Content:</strong> Allow players to create custom imagery within your game</li>
</ul>

<h3 id="models-and-capabilities">Models and Capabilities</h3>
<p>The plugin provides access to OpenAI's state-of-the-art image models:</p>
<ul>
    <li>✨ <strong>gpt-image-1:</strong> The latest and most advanced model, responsible for the popular "Ghibli trend." It excels at creating artistic, coherent, and high-fidelity images with remarkable prompt adherence.</li>
    <li>🎨 <strong>DALL-E 3:</strong> A powerful model offering excellent image quality and detail. A great all-rounder for a variety of styles.</li>
    <li>⚙️ <strong>DALL-E 2:</strong> A legacy model that is more cost-effective and supports generating multiple images in a single request, making it suitable for bulk generation or rapid iteration.</li>
</ul>

<h3 id="image-gen-blueprint-implementation">Blueprint Implementation</h3>
<p>Blueprints make image generation incredibly accessible. You can easily configure a prompt, select your model, and save the resulting image to disk.</p>

<div>
    <figure>
        <img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1752096704/ed6e165c-12f7-4cce-9cc8-46a11745921d.webp" alt="Blueprint Image Generation Example" style="width: 100%;">
        <figcaption class="image-caption">
        A simple Blueprint graph for generating an image and saving it as a file.
        </figcaption>
    </figure>
</div>

<p>The workflow is simple:</p>
<ol>
    <li><strong>Request OpenAI Image Generation:</strong> This is the main node that sends your request to the API. Use <code>Make Gen OpenAI Image Generation Settings</code> to configure it.</li>
    <li><strong>Save Array to File:</strong> A utility node to save the raw image data (returned as a byte array) to a <code>.png</code> file.</li>
    <li><strong>Load Texture 2D from File:</strong> (Optional) After saving, you can immediately load the image back into the engine as a <code>UTexture2D</code> to display it on a material.</li>
</ol>

<hr style="margin: 15px 0;">

<h3 id="image-gen-c-implementation">C++ Implementation</h3>
<p>For more control, you can call the image generation functions directly from C++. Here is a clean, focused example.</p>

<pre><code class="language-cpp">
#include "Models/OpenAI/GenOAIImageGeneration.h"
#include "Data/OpenAI/GenOAIImageStructs.h"
#include "Misc/FileHelper.h"
#include "Misc/Paths.h"

void AMyActor::GenerateImage(const FString& Prompt)
{
    UE_LOG(LogTemp, Log, TEXT("Requesting image for prompt: '%s'"), *Prompt);

    // 1. Configure the image generation settings
    FGenOAIImageSettings ImageSettings;
    ImageSettings.Prompt = Prompt;
    ImageSettings.Model = EGenOAIImageModel::GPT_Image_1; // Use the latest model
    ImageSettings.Size = EGenAIImageSize::Size1024x1024;  // Standard high-res square
    ImageSettings.Quality = EGenAIImageQuality::HD;

    // 2. Send the request and handle the response in a Lambda
    UGenOAIImageGeneration::SendImageGenerationRequest(ImageSettings,
        FOnImageGenerationCompletionResponse::CreateLambda([this](const TArray&lt;uint8&gt;& ImageBytes, const FString& ErrorMessage, bool bSuccess)
        {
            if (bSuccess && ImageBytes.Num() > 0)
            {
                UE_LOG(LogTemp, Log, TEXT("Image generated successfully! Saving to disk..."));

                // 3. Save the image data to a file
                const FString FilePath = FPaths::ProjectSavedDir() / TEXT("AI_Generated_Image.png");
                if (FFileHelper::SaveArrayToFile(ImageBytes, *FilePath))
                {
                    UE_LOG(LogTemp, Log, TEXT("Image saved successfully to %s"), *FilePath);
                }
                else
                {
                    UE_LOG(LogTemp, Error, TEXT("Failed to save image to disk."));
                }
            }
            else
            {
                UE_LOG(LogTemp, Error, TEXT("Image generation failed: %s"), *ErrorMessage);
            }
        })
    );
}

// Don't forget to cancel any active requests when the actor is destroyed!
void AMyActor::EndPlay(const EEndPlayReason::Type EndPlayReason)
{
    if (ActiveRequest.IsValid() && ActiveRequest-&gt;GetStatus() == EHttpRequestStatus::Processing)
    {
        ActiveRequest-&gt;CancelRequest();
    }
    ActiveRequest.Reset();

    Super::EndPlay(EndPlayReason);
}
</code></pre>
<hr style="margin: 30px 0;">

<h2 id="12-how-to-run-tests">12. How to Run Tests</h2>
<div style="padding: 10px 15px; background-color: #fffbe6; border-left: 4px solid #ffc107; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold; color: #856404;">Disclaimer</p>
  <p style="margin: 5px 0 0 0; color: #856404;">Running this test will incur costs, as it makes API requests to all available model combinations across different organisations.</p>
</div>
<p>The plugin includes a suite of automation tests to verify that all API integrations are working correctly. To run them:</p>
<div class="image-wrapper">
    <figure>
        <img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/v1751931514/Screenshot_2025-07-07_004608_f3kiy7.webp" alt="Blueprint Structured Output Example" style="width: 100%;">
    </figure>
</div>
<ol>
    <li>Ensure you have set valid API keys in the plugin settings for the providers you wish to test.</li>
    <li>In the Unreal Editor, go to <strong>Window &gt; Session Frontend</strong>.</li>
    <li>In the "Automation" tab, you will see a list of available tests.</li>
    <li>Find the tests prefixed with <code>GenAI.</code> (e.g., <code>GenAI.OpenAI.Chat</code>).</li>
    <li>Check the boxes for the tests you want to run, and press the "Start Tests" button.</li>
</ol>
<p>The tests will run and report their status. This is a great way to confirm your setup is correct or to debug integration issues.</p>

<hr style="margin: 30px 0;">

<h2 id="13-quick-links-api-reference">13. Quick Links & API Reference</h2>
<ul>
    <li><a href="https://platform.openai.com/docs/api-reference" target="_blank" rel="noopener noreferrer">OpenAI API Documentation</a></li>
    <li><a href="https://docs.anthropic.com/en/docs/models" target="_blank" rel="noopener noreferrer">Anthropic API Documentation</a></li>
    <li><a href="https://docs.x.ai/api" target="_blank" rel="noopener noreferrer">XAI API Documentation</a></li>
    <li><a href="https://ai.google.dev/gemini-api/docs" target="_blank" rel="noopener noreferrer">Google Gemini API Documentation</a></li>
    <li><a href="https://platform.deepseek.com/api-docs" target="_blank" rel="noopener noreferrer">DeepSeek API Documentation</a></li>
</ul>

<hr style="margin: 30px 0;">

<h2 id="14-additional-notes">14. Additional Notes</h2>
<ul>
    <li><strong>Unity Build Compatible:</strong> The codebase is fully compatible with Unreal's Unity Build and non-unity build workflows, ensuring it can be integrated into any project's compilation pipeline.</li>
</ul>

<hr style="margin: 30px 0;">
<p><em>This documentation is based on the GenAI for Unreal plugin. Specific function names, struct members, and Blueprint node names may vary slightly based on the final plugin version. Always refer to the plugin's source code or example content for the most accurate implementation details.</em></p>
