---
layout: documentation
title: Additional Notes
permalink: /docs/genai-unreal/additional-notes/
nav_order: 16
---

## Version Compatibility

- **Unreal Engine**: Compatible with UE 4.27+ and UE 5.0+
- **Platform Support**: Windows, Mac, Linux (development), with mobile and console support
- **Blueprint Support**: Full Blueprint integration with all features
- **C++ Support**: Complete C++ API access for advanced customization

## Troubleshooting Common Issues

### API Key Problems
- Ensure keys are entered correctly in Project Settings
- Verify keys have appropriate permissions and credits
- Check that `secureconfig.bin` is not corrupted

### Network Issues
- Verify internet connection and firewall settings
- Check proxy configurations if using custom endpoints
- Monitor for API rate limiting from providers

### Performance Considerations
- Use streaming for better user experience
- Implement proper caching for frequently used content
- Monitor token usage to manage costs
- Consider using lower-resolution models for real-time features

## Security Best Practices

1. **Never hardcode API keys** in your source code
2. **Use proxy servers** for production deployments
3. **Implement rate limiting** in your game logic
4. **Monitor API usage** to prevent unexpected charges
5. **Validate user inputs** before sending to AI services

## Development Workflow

### For Blueprint Developers
- Start with the example project for learning
- Use the provided async nodes for all operations
- Implement proper error handling in your graphs
- Test thoroughly with different API responses

### For C++ Developers
- Always use weak pointers in callbacks
- Implement proper request cancellation
- Handle edge cases like network timeouts
- Follow Unreal coding standards for integration

## Support and Community

### Getting Help
- Check this documentation for common solutions
- Review the example project for implementation patterns
- Test your setup with the built-in test suite
- Verify your API keys and network configuration

### Best Practices for Production
- Implement comprehensive error handling
- Use appropriate models for your performance requirements
- Monitor API costs and usage patterns
- Implement fallback systems for service outages
- Test on target platforms early and frequently

## Future Updates

The plugin is regularly updated to support:
- New AI models as they become available
- Additional AI service providers
- Enhanced performance optimizations
- Extended Blueprint functionality
- Platform-specific optimizations

Stay updated with the latest releases and documentation for new features and improvements.
