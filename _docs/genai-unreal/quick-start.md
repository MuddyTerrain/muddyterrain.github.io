---
layout: documentation
title: Quick Start
permalink: /docs/genai-unreal/quick-start/
nav_order: 2
---

This guide walks you through the absolute minimum setup required to get a response from an AI model in your Unreal Engine project. In about five minutes, you'll have a working example that confirms your installation is successful and demonstrates the plugin's core functionality.

---

### Step 1: Install the Plugin

First, ensure you have installed **GenAI for Unreal** from the Unreal Engine Marketplace (or Fab.com). Once installed, open your project, enable the plugin from the `Edit > Plugins` menu, and restart the editor if prompted.

<div class="image-wrapper">
    <figure>
        <img  src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1752496418/899e9b07-3a9c-46f7-81d3-5748e1f5d31d.webp" alt="Plugin Installation" style="width: 55%;">
        <figcaption class="image-caption">
        Find the GenAI plugin in the Epic Games Launcher or Fab.com.
        </figcaption>
    </figure>
</div>
---

### Step 2: Add Your API Key

The plugin needs an API key to communicate with AI services. For this quick start, we'll use OpenAI.

Navigate to `Project Settings > Plugins > GenAI` and paste your OpenAI API key into the designated field. While this is the fastest way to get started, we strongly recommend exploring our **[Authentication & Security](/docs/genai-unreal/authentication-and-security/)** guide for best practices in production environments.

<div class="image-wrapper">
    <figure>
        <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1752496813/c70cd63a-fcc8-438e-af0e-98edae2bbc50.webp" alt="API Key Setup" style="width: 80%;">
        <figcaption class="image-caption">
        Enter your OpenAI API key in the Project Settings.
        </figcaption>
    </figure>
</div>

---

### Step 3: Set Up the Blueprint

Now, let's create a simple Actor to send our first request.

1.  Create a new **Actor Blueprint** in your Content Drawer.
2.  Open the Blueprint and navigate to the **Event Graph**.

We will use the `Event BeginPlay` node to trigger our AI request as soon as the game starts. The core of this logic is the `Request OpenAI Chat Completion` node, which handles the entire web request asynchronously.

Replicate the Blueprint graph shown in the image below. We recommend using the new **"Make..." node with the fire logo** as it provides a convenient dropdown to select your model.

<div>
    <figure>
        <img class="full-bleed" src="[PLACEHOLDER: Image of the quick start blueprint using the new fire-logo 'Make' node]" alt="Quick Start Blueprint Example" style="width: 100%;">
        <figcaption class="image-caption">
        A simple setup for testing chat completion.
        </figcaption>
    </figure>
</div>

---

### Step 4: Breaking Down the Nodes

Here is a step-by-step breakdown of the node connections:

-   **Trigger:** Connect the `Event BeginPlay` execution pin to the `Request OpenAI Chat Completion` node.
-   **Settings:** Use the `Make Gen OpenAI Chat Settings (Advanced)` node. The default model (`gpt-4o`) is fine for this test.
-   **Message:** The `Messages` pin contains the actual prompt.
   -   Add a `Make Gen Chat Message` node.
   -   Set the **Role** to `user`.
   -   Set the **Content** to `"Tell me a joke."`
-   **Response:** The `OnComplete` event fires when the AI responds.
   -   Drag off the `OnComplete` execution pin and add a `Print String` node.
   -   Connect the `Response > Content` output from the completion node to the **In String** input of the `Print String` node.

---

### Step 5: Press Play!

That's it! Drag your new Blueprint Actor into the level, save everything, and press **Play** in the editor. You should see a fresh, AI-generated joke printed in the top-left corner of your viewport.

Congratulations on sending your first request!