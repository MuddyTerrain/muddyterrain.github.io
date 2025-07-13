# muddyterrain.github.io

# Analytics and Event Tracking Setup

This project uses a custom event tracking system with Google Analytics 4 (GA4) to provide detailed insights into user behavior. This guide outlines how the system works and how to use it correctly.

### ❗ Important Security Notice

**This is a public repository.** Under no circumstances should you ever commit sensitive information, such as API keys or other secrets, directly into the code. The GA4 Measurement ID is considered safe to be public.

### On-Site Click Tracking

We track user clicks on specific links and buttons to understand engagement. This is handled by a custom script in `_includes/footer.html`.

#### How to Track a New Link

To track any `<a>` tag, add the following three attributes to it:

1.  `class="... track-click"`: This class tells the script to watch this element. You can add it alongside other classes.
2.  `data-event-name="..."`: This is the unique name for the click event.
3.  `data-event-location="..."`: (Optional) Describes where on the page the link is (e.g., `header`, `footer`, `body_cta`).

**Example:**
```html
<a href="/products" class="cta-button track-click" data-event-name="btn_clk_view_products" data-event-location="main_banner">View Products</a>
```

### Naming Convention

All `data-event-name` values must follow a consistent naming convention to keep reports clean. The preferred format is `object_action_context` in lowercase with underscores.

**Good:** `btn_clk_view_products`, `link_clk_documentation`

**Bad:** `View Products`, `productButtonClick`

### How It Works in GA4

When a tracked link is clicked, the script sends an event to Google Analytics with the following structure:

**Event Name:** `navigation_click`

**Event Parameters:**
- `link_text`: The value from `data-event-name`.
- `link_location`: The value from `data-event-location`.
- `link_url`: The href of the clicked link.

To view `link_text` and `link_location` in your GA4 reports, they must be registered as Custom Dimensions.

1. Go to Admin > Custom definitions > Custom dimensions.
2. Create a dimension for `link_text` (e.g., "Link Text").
3. Create another for `link_location` (e.g., "Link Location").

### Off-Site Link Tracking (Redirects)

To track clicks on links that lead to external websites (e.g., a product page on Fab.com), we use an internal redirect system.

#### How to Create a Tracked Redirect Link

1. Add a file to the `_redirects` folder. (Make sure this folder is registered as a collection in your `_config.yml`).

2. Use the following front matter:

```yaml
---
layout: redirect
title: GenAI Fab
permalink: /t/genai-fab
redirect_to: https://www.fab.com/listings/<your-product-id>
sitemap: false
---
```

3. Use the permalink (`https://muddyterrain.com/t/genai-fab`) on the external site (Fab.com, YouTube, etc.).

When a user clicks this link, it fires an `outbound_click` event to GA4 with the title as the `link_text` before redirecting them to the `redirect_to` URL. The `sitemap: false` and a noindex tag in the layout prevent these pages from appearing in search results.

### Campaign Tracking (UTM Parameters)

To differentiate where traffic is coming from for a single link (e.g., distinguishing clicks from Fab.com vs. YouTube), use UTM parameters. These are tags you add to the end of a URL that GA4 automatically understands.

#### How to Use UTMs

Append the parameters to your link. For example, for the redirect link `https://muddyterrain.com/t/genai-fab`:

**Link for a Fab.com page:**
```
https://muddyterrain.com/t/genai-fab?utm_source=fab.com&utm_medium=marketplace&utm_campaign=genai-plugin
```

**Link for a YouTube video:**
```
https://muddyterrain.com/t/genai-fab?utm_source=youtube&utm_medium=social&utm_campaign=genai-plugin
```

You can view the results of these campaigns in your Reports > Acquisition > Traffic acquisition report in Google Analytics. No further configuration is needed.
