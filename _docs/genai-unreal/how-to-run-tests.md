---
layout: documentation
title: How to Run Tests
permalink: /docs/genai-unreal/how-to-run-tests/
nav_order: 14
---

The GenAI for Unreal plugin includes comprehensive automated tests to ensure functionality and catch regressions. These tests cover all major API endpoints and features.

## Running Tests in Unreal Editor

1. **Open the Session Frontend**: Go to `Window > Developer Tools > Session Frontend`
2. **Navigate to Automation Tab**: Click on the "Automation" tab
3. **Find GenAI Tests**: Look for tests under `GenAI` in the test hierarchy
4. **Select Tests**: Check the boxes for the tests you want to run:
   - `GenAI.OpenAI.Chat` - Tests chat completion functionality
   - `GenAI.OpenAI.ImageGeneration` - Tests image generation
   - `GenAI.OpenAI.TTS` - Tests text-to-speech
   - `GenAI.OpenAI.Transcription` - Tests speech-to-text
   - `GenAI.Anthropic.Chat` - Tests Claude chat functionality
5. **Configure API Keys**: Ensure your API keys are set in Project Settings before running tests
6. **Run Tests**: Click "Start Tests" to execute the selected tests

## Test Requirements

- **API Keys**: Valid API keys must be configured for the services you want to test
- **Internet Connection**: Tests make real API calls to verify functionality
- **Test Environment**: Recommended to run tests in a development environment

## Interpreting Test Results

- **Green/Passed**: Test completed successfully with expected results
- **Red/Failed**: Test failed - check logs for specific error messages
- **Yellow/Warning**: Test completed but with warnings or unexpected behavior

## Command Line Testing

You can also run tests from the command line:

```bash
# Run all GenAI tests
UE5Editor.exe YourProject -ExecCmds="Automation RunTests GenAI" -unattended -nopause -testexit="Automation Test Queue Empty"

# Run specific test
UE5Editor.exe YourProject -ExecCmds="Automation RunTests GenAI.OpenAI.Chat" -unattended -nopause -testexit="Automation Test Queue Empty"
```

## Troubleshooting Test Failures

1. **API Key Issues**: Verify keys are correctly set in Project Settings
2. **Network Issues**: Check internet connection and firewall settings
3. **Rate Limiting**: Some tests may fail if API rate limits are exceeded
4. **Service Outages**: Check if the AI service provider is experiencing downtime

## Custom Test Configuration

You can modify test parameters by editing the test configuration files in the plugin's source code, or by creating custom test cases for your specific use scenarios.
