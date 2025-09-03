---
layout: wide
title: "Local CI/CD for Unreal Engine"
category: products
permalink: /local-ci-cd-for-unreal
author: "Muddy Terrain"
tags: [tools, open-source, unreal, gamedev, ci-cd, automation]
image: https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1754263099/ba9ce772-033b-4e99-970a-8362b32ef3cb.webp
---

<html lang="en">
<body>

<img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1754263099/ba9ce772-033b-4e99-970a-8362b32ef3cb.webp" alt="Local CI/CD for Unreal Tool Banner">

<p><strong>Spending hours packaging your Unreal plugin for every single engine version? Say no more.</strong> Local CI/CD for Unreal is a free, open-source, and lightweight tool designed to completely automate the tedious process of packaging and archiving your projects. Focus on building great plugins, not on fighting with build scripts.</p>

<p>This tool is <strong>100% free</strong> and licensed under MIT. No strings attached. 🎉</p>

<div class="button-row">
  <a href="https://github.com/muddyterrain/unreal-ci-cd-for-fab" class="cta-button primary track-click" data-event-name="btn_clk_cicd_github" data-event-location="top_cta" target="_blank" rel="noopener noreferrer">View on GitHub</a>
  <a href="/docs/ci-cd-unreal/" class="cta-button secondary track-click" data-event-name="btn_clk_cicd_documentation" data-event-location="top_cta">Read The Docs</a>
</div>

<h2>How to Use</h2>
<div style="padding: 10px 15px; background-color: #e9f7ef; border-left: 4px solid #28a745; margin: 20px 0;">
<p style="margin: 0; font-weight: bold; color: #155724;">Get running in three simple steps.</p>
</div>
<ol>
    <li><strong>Download the Tool:</strong> <a href="https://github.com/muddyterrain/unreal-ci-cd-for-fab" target="_blank" rel="noopener noreferrer">Clone or download the repository</a> from GitHub.</li>
    <li><strong>Create your <code>config.json</code>:</strong> Duplicate <code>config.example.json</code>, rename it to <code>config.json</code>, and edit it to point to your project and engine installations.</li>
    <li><strong>Run the Pipeline:</strong> Open a PowerShell window and run <code>./run_pipeline.ps1</code>. The tool will validate your setup and handle the rest.</li>
</ol>

<h2>Configuration</h2>
<p>All settings are managed in the <code>config.json</code> file. This allows you to define everything from your project path to the specific engine versions you want to build for.</p>
<img class="full-bleed" src="https://raw.githubusercontent.com/muddyterrain/unreal-ci-cd-for-fab/main/Docs/EngineVersions.png" alt="CI/CD Tool Engine Version Configuration">
<p>For a full breakdown of all settings, please see the <a href="/docs/ci-cd-unreal/configuration/">detailed configuration guide</a>.</p>

<div class="button-row">
  <a href="https://github.com/muddyterrain/unreal-ci-cd-for-fab" class="cta-button primary track-click" data-event-name="btn_clk_cicd_github" data-event-location="mid_cta" target="_blank" rel="noopener noreferrer">Download on GitHub</a>
  <a href="/docs/ci-cd-unreal/configuration/" class="cta-button secondary track-click" data-event-name="btn_clk_cicd_config" data-event-location="mid_cta">See Configuration Guide</a>
</div>

<h2>Key Features</h2>
<ul>
    <li>
        <p><strong>Automated Example Project Generation:</strong> 📦<br>
        Automatically generates clean, version-specific C++ and Blueprint-only example projects for each engine version from a single master project.</p>
    </li>
    <li>
        <p><strong>Multi-Version Plugin Packaging:</strong> ⚙️<br>
        Run one script to package your plugin for all specified Unreal Engine versions. No more manual UAT commands.</p>
    </li>
    <li>
        <p><strong>Optional Cloud Uploads:</strong> ☁️<br>
        Automatically upload all your packaged builds to Google Drive, Dropbox, or any other cloud provider using the powerful <code>rclone</code> tool.</p>
    </li>
    <li>
        <p><strong>Time-Saving Cache:</strong> ⚡️<br>
        Use the <code>-UseCache</code> flag to skip any builds that already exist in your output folder. Perfect for iterating on a single engine version without rebuilding everything.</p>
    </li>
     <li>
        <p><strong>MIT Licensed & Open Source:</strong> ❤️‍🔥<br>
        Completely free to use, modify, and distribute. We believe in empowering the community with powerful, accessible tools.</p>
    </li>
    <li>
        <p><strong>Simple JSON Configuration:</strong> 🔗<br>
        Set up all your project paths, engine locations, and output directories in a single, easy-to-read <code>config.json</code> file. Get set up in minutes.</p>
    </li>
</ul>

<h2>Why Use This Tool?</h2>
<ul>
    <li><strong>Save Massive Amounts of Time:</strong> ⏳ What used to be a tedious, manual process that took hours can now be done in the background with a single command.</li>
    <li><strong>Eliminate Human Error:</strong> 🎯 Automated scripts don't forget steps or make typos in command-line arguments. Get consistent, reliable builds every time.</li>
    <li><strong>No Complex Setup:</strong> 🛠️ You don't need to learn Jenkins, TeamCity, or any other complex CI/CD platform. If you have Windows and PowerShell, you're ready to go.</li>
    <li><strong>Built for Unreal Developers:</strong> 💻 This isn't a generic build tool; it's made specifically for the Unreal Engine workflow and understands its packaging process.</li>
</ul>

<h2>Resources & Support</h2>
<ul>
    <li><a href="/docs/ci-cd-unreal/">Full Documentation</a></li>
    <li><a href="https://github.com/muddyterrain/unreal-ci-cd-for-fab/issues" target="_blank" rel="noopener noreferrer">Report an Issue on GitHub</a></li>
    <li><a href="/t/discord">Join the Discord Community</a></li>
    <li><strong>Contributions Welcome:</strong> Have an idea to make the tool better? Fork the repo and submit a pull request!</li>
</ul>

<div class="button-row">
  <a href="https://github.com/muddyterrain/unreal-ci-cd-for-fab" class="cta-button primary track-click" data-event-name="btn_clk_cicd_github" data-event-location="btm_cta" target="_blank" rel="noopener noreferrer">Get The Tool</a>
  <a href="/docs/ci-cd-unreal/" class="cta-button secondary track-click" data-event-name="btn_clk_cicd_documentation" data-event-location="btm_cta">Read The Docs</a>
</div>

</body>
</html>
