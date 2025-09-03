---
layout: documentation
title: Debugging and Running Tests
permalink: /docs/genai-unreal/debugging-and-running-tests/
nav_order: 14
---

This section covers tools and procedures for debugging your AI integrations and verifying the plugin's functionality through its built-in automation tests.

---

## 1. Debugging with Extended Logging Mode

To help with troubleshooting, the plugin includes an **Extended Logging Mode**. When enabled, every API request and response will be printed to the Unreal output log, providing a clear, real-time view of the data being sent to and received from the AI provider.

- **What it Logs:** The full request body (including headers and parameters) and the full response from the server.
- **Security:** To prevent log spam and protect data, any `base64` encoded strings (typically used for images) will be truncated in the log output.
- **How to Enable:**
    1. Go to **Project Settings > Plugins > GenAI Plugin**.
    2. Find the **"Enable Extended Logging Mode"** checkbox and enable it.

This is an invaluable tool for debugging issues with your API calls without needing external network monitoring tools.

<div class="image-wrapper">
    <figure>
        <img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1756928218/9c2f2140-79bd-438e-970c-486fee75c4e4.webp" alt="Automation Testing Window in Unreal Engine"  style="width: 70%;">
        <figcaption class="image-caption">Option to enable debug mode in project settings</figcaption>
    </figure>
</div>


<div class="image-wrapper">
    <figure>
        <img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1756929508/Screenshot_2025-08-31_221134_peowxx.webp" alt="Automation Testing Window in Unreal Engine" style="width: 70%;">
        <figcaption class="image-caption">All the API requests and responses done by the plugin, can be seen in output log</figcaption>
    </figure>
</div>

---

## 2. Running Automation Tests

The GenAI for Unreal plugin comes with a comprehensive suite of automation tests that verify the functionality of all major API integrations. Running these tests is the best way to confirm that your setup is correct and that the plugin can successfully communicate with the AI service providers.

<div style="padding: 10px 15px; background-color: #fffbe6; border-left: 4px solid #ffc107; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold; color: #856404;">⚠️ Cost and Data Disclaimer</p>
  <p style="margin: 5px 0 0 0; color: #856404;">Running these tests will make <strong>real API calls</strong> to the various AI services, which will incur costs on your account based on your provider's pricing. Ensure you have valid API keys and a payment method set up before proceeding.</p>
</div>

### Running Tests in the Editor

1.  In the Unreal Editor, navigate to **Window > Test Automation**.
2.  In the **Session Frontend** window that appears, click on the **Automation** tab.
3.  In the test hierarchy on the left, find the tests located under the `GenAI` group.
4.  Check the boxes for the tests you wish to run and click the **"Start Tests"** button.

<div class="image-wrapper">
    <figure>
        <img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/v1751931514/Screenshot_2025-07-07_004608_f3kiy7.webp" alt="Automation Testing Window in Unreal Engine">
        <figcaption class="image-caption">The Automation tab in the Session Frontend, showing the GenAI tests.</figcaption>
    </figure>
</div>


### Running Tests from the Command Line

For automated workflows or CI/CD pipelines, you can execute the tests from the command line.

```bash
# Windows example for running all tests in the GenAI group
UE5Editor.exe "C:\Path\To\Your\Project\YourProject.uproject" -ExecCmds="Automation RunTests GenAI" -unattended -nopause -testexit="Automation Test Queue Empty" -log
```

### Troubleshooting Test Failures

If tests are failing, common causes include an invalid API key, network connectivity issues, or API rate limits. The **Extended Logging Mode** described above is the best tool for diagnosing these failures.
