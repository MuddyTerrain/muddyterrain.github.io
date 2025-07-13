---
layout: documentation
title: Quick Links and API Reference
permalink: /docs/genai-unreal/quick-links-and-api-reference/
nav_order: 15
---

## Essential Links

### Plugin Resources
- **Marketplace**: Download the GenAI for Unreal plugin from Fab.com
- **Example Project**: Complete example project with Blueprint samples (available via plugin documentation)
- **Documentation**: This comprehensive guide

### AI Provider Documentation
- **[OpenAI API Documentation](https://platform.openai.com/docs)** - Official OpenAI API reference
- **[Anthropic Claude Documentation](https://docs.anthropic.com/)** - Claude API documentation
- **[Google Gemini Documentation](https://ai.google.dev/)** - Gemini API reference
- **[DeepSeek Documentation](https://platform.deepseek.com/)** - DeepSeek API guide
- **[XAI Documentation](https://x.ai/)** - XAI/Grok API reference

## Community Resources

- **GitHub Issues**: Report bugs and request features
- **Discord Community**: Get help from other developers
- **Video Tutorials**: Step-by-step implementation guides
- **Blog Posts**: Advanced techniques and best practices

## API Key Management

- **OpenAI Platform**: [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)
- **Anthropic Console**: [https://console.anthropic.com/](https://console.anthropic.com/)
- **Google AI Studio**: [https://aistudio.google.com/](https://aistudio.google.com/)
- **DeepSeek Platform**: [https://platform.deepseek.com/](https://platform.deepseek.com/)

## Development Tools

- **JSON Schema Validator**: For structured output validation
- **Audio Testing Tools**: For TTS and transcription debugging
- **Network Monitoring**: For API request debugging

## Core Classes Reference

### Chat Completion
- **`UGenOAIChat`** - OpenAI chat completion functionality
- **`UGenAnthropicChat`** - Anthropic Claude chat functionality
- **`FGenOAIChatSettings`** - Configuration for OpenAI chat requests
- **`FGenChatMessage`** - Individual message structure

### Image Generation
- **`UGenOAIImageGeneration`** - OpenAI DALL-E image generation
- **`FGenOAIImageSettings`** - Image generation configuration
- **`UGenAIImageUtils`** - Utility functions for image processing

### Audio Processing
- **`UGenOAITextToSpeech`** - Text-to-speech functionality
- **`UGenOAITranscription`** - Speech-to-text transcription
- **`UGenAIAudioUtils`** - Audio conversion utilities

### Async Actions (Blueprint Nodes)
- **`UCancellableAsyncAction`** - Base class for all async Blueprint nodes
- **`URequestOpenAIChatCompletion`** - Blueprint chat completion node
- **`URequestOpenAIImageGeneration`** - Blueprint image generation node

## Common Enums

### Models
- **`EOpenAIChatModel`** - Available OpenAI chat models (GPT-4o, GPT-4, etc.)
- **`EAnthropicChatModel`** - Available Anthropic models (Claude 3.5, etc.)
- **`EOpenAIImageModel`** - Image generation models (DALL-E 2, DALL-E 3)

### Settings
- **`EGenChatRole`** - Message roles (System, User, Assistant)
- **`EOpenAIImageSize`** - Image dimensions (256x256, 512x512, 1024x1024, etc.)
- **`EOpenAITTSVoice`** - Available TTS voices (Alloy, Echo, Fable, etc.)

## Performance Considerations

### Best Practices
- Always use weak pointers in C++ callbacks
- Cancel requests in `EndPlay` to prevent resource waste
- Implement proper error handling for all async operations
- Use streaming for better user experience in chat interfaces
- Cache frequently used generated content to reduce API calls
