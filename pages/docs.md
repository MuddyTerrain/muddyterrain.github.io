---
layout: wide
title: Documentation
permalink: /docs/
---

<div class="product-section-header">
  <h2>Documentation Center</h2>
  <p>Welcome! Here you'll find comprehensive guides and references for all our products.</p>
</div>

<div class="doc-grid-container">
  {% for doc in site.documents %}
    {% if doc.layout == 'documentation' and doc.nav_order == 1 %}
      <a class="doc-card" href="{{ doc.url | relative_url }}" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('{{ doc.image }}');">
        <div class="doc-card-title">{{ doc.title | remove: ' - Home' }}</div>
      </a>
    {% endif %}
  {% endfor %}
</div>
