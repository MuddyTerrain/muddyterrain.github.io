---
layout: documentation
title: Quick Start
permalink: /docs/genai-unreal/quick-start/
nav_order: 2
---

Follow these minimal steps to get a basic chat completion working instantly.

1. **Install Plugin:** Add "GenAI for Unreal" from the Fab.com marketplace and enable it in `Edit > Plugins`.
2. **Add API Key:** Go to `Project Settings > Plugins > GenAI Plugin` and enter your OpenAI API key.
3. **Create Blueprint:** Make a new Actor Blueprint. In the Even~~~~t Graph, add the following nodes:

   <div>
       <figure>
           <img class="full-bleed"  src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1751480831/1e64d118-033f-40cf-957f-e15d8ae5a290.webp" alt="Quick Start Blueprint Example" style="width: 100%;">
           <figcaption class="image-caption">
           A simple setup for testing chat completion.
           </figcaption>
       </figure>
   </div>

4. **Node Setup:**
   - Connect `Event Begin Play` to a `Request OpenAI Chat Completion` node.
   - For the `Settings` pin, add a `Make Gen AI Chat Settings` node.
   - In the `Messages` array, add a `Make Gen Chat Message` with the role `user` and content "Tell me a joke."
   - Drag off the `OnComplete` event and add a `Print String` node, connecting the `Response` output to the string input.

5. **Press Play:** You will see an AI-generated joke printed to the screen.


