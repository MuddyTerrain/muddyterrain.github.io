---
layout: documentation
title: Models and Voices
permalink: /docs/genai-unreal/models-and-voices/
nav_order: 17
---

This section covers how to dynamically fetch available models and voices from the AI providers.

---

## 1. Dynamically Fetching All Models

To ensure your project always has access to the latest models, the plugin provides a simple way to request a list of all available models directly from a provider's API. This is especially useful for building UI elements like dropdown menus that allow users to select a model at runtime.

#### In Blueprints

You can use the **"Request [Provider] Models List"** node. For example, `Request OpenAI Models List` will return an array of structs, each containing information about an available model.

<div class="image-wrapper">
   <figure>
       <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1759015718/9113eeba-cce7-4818-a629-309998af07c8.webp" alt="Blueprint Node for getting all models" style="width: 100%;">
          <figcaption class="image-caption">
            Blueprint node to get all models example
          </figcaption>
     </figure>
</div>

#### In C++

In C++, you can use the static `SendListModelsRequest` function from the appropriate model's class. For example:

- `UGenOAIModels::SendModelsListRequest(...)`
- `UGenGoogleModels::SendModelsListRequest(...)`

---

## 2. Dynamically Fetching All Eleven Labs Voices

Similarly, you can fetch a list of all available voices from Eleven Labs. This allows you to create voice selection menus or dynamically switch voices in your application.

#### In Blueprints

The **"Request ElevenLabs Get Voices"** node returns an array of structs, each containing the voice ID, name, category, and a preview URL for the voice.

<div class="image-wrapper">
   <figure>
       <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1759015961/d1ff1acc-2b87-4172-9ecd-c34d1614a390.webp" alt="Blueprint Node for getting all voices" style="width: 100%;">
          <figcaption class="image-caption">
            Blueprint node to get all Eleven Labs voices.
          </figcaption>
     </figure>
</div>

#### In C++

The C++ function `UGenElevenLabsVoices::SendGetVoicesRequest(...)` can be used to fetch the list of voices.
