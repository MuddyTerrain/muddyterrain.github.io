---
layout: documentation
title: How to Run Tests
permalink: /docs/genai-unreal/how-to-run-tests/
nav_order: 14
---

The GenAI for Unreal plugin comes with a comprehensive suite of automation tests that verify the functionality of all major API integrations. Running these tests is the best way to confirm that your setup is correct and that the plugin can successfully communicate with the AI service providers.

<div style="padding: 10px 15px; background-color: #fffbe6; border-left: 4px solid #ffc107; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold; color: #856404;">⚠️ Cost and Data Disclaimer</p>
  <p style="margin: 5px 0 0 0; color: #856404;">Running these tests will make <strong>real API calls</strong> to the various AI services, which will incur costs on your account based on your provider's pricing. Ensure you have valid API keys and a payment method set up before proceeding.</p>
</div>

---

## Running Tests in the Editor

The easiest way to run the tests is through Unreal Engine's built-in Automation Testing window.

1.  In the Unreal Editor, navigate to **Window > Test Automation**.
2.  In the **Session Frontend** window that appears, click on the **Automation** tab.
3.  In the test hierarchy on the left, find the tests located under the `GenAI` group.
4.  Check the boxes for the tests you wish to run (e.g., `GenAI.OpenAI.Chat`, `GenAI.OpenAI.ImageGeneration`, etc.).
5.  Click the **"Start Tests"** button in the top right.

<div class="image-wrapper">
    <figure>
        <img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/v1751931514/Screenshot_2025-07-07_004608_f3kiy7.webp" alt="Automation Testing Window in Unreal Engine">
        <figcaption class="image-caption">The Automation tab in the Session Frontend, showing the GenAI tests.</figcaption>
    </figure>
</div>

The tests will execute, and the results will be displayed in the window.
-   <span style="color: green;">**Green:**</span> The test passed successfully.
-   <span style="color: red;">**Red:**</span> The test failed. Check the logs for specific error messages.

---
## Running Tests from the Command Line

For automated workflows or CI/CD pipelines, you can execute the tests from the command line.

```bash
# Windows example for running all tests in the GenAI group
UE5Editor.exe "C:\Path\To\Your\Project\YourProject.uproject" -ExecCmds="Automation RunTests GenAI" -unattended -nopause -testexit="Automation Test Queue Empty" -log

# Windows example for running a single, specific test
UE5Editor.exe "C:\Path\To\Your\Project\YourProject.uproject" -ExecCmds="Automation RunTests GenAI.OpenAI.Chat" -unattended -nopause -testexit="Automation Test Queue Empty" -log
```
This will launch the editor, run the specified tests, and then exit, making it ideal for automated verification.

---

## Troubleshooting Test Failures

If tests are failing, here are the most common causes:

1.  **Invalid API Key:** This is the most frequent issue. Double-check that your API keys are correctly pasted into the **Project Settings > Plugins > GenAI** panel and that the associated account is active and has a valid payment method.
2.  **Network Connectivity:** Ensure the editor has a stable internet connection and is not being blocked by a firewall.
3.  **API Rate Limits:** If you run many tests in a short period, you might exceed the rate limits imposed by the AI provider. Wait a few minutes and try running the tests again.
4.  **Service Outages:** Check the official status page for the AI provider (e.g., OpenAI, Google) to see if they are experiencing any downtime.
5.  **Incorrect Project Setup:** Ensure you have correctly followed the steps in the **[Initial Project Setup](/docs/genai-unreal/initial-project-setup/)** guide.