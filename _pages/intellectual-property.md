---
layout: archive
title: "Patents and Software"
permalink: /intellectual-property/
author_profile: true
---

{% include base_path %}

This page lists pending invention patent applications and software outputs related to sparse computing, tensor compilation, AI-assisted optimization, graph learning, heterogeneous systems, and large-model/HPC runtime support.

## Pending Invention Patent Applications

<div class="ip-list">
  {% for item in site.data.patents %}
    <article class="ip-item">
      <div class="pub-meta"><span>{{ item.status }}</span><span>{{ item.type }}</span></div>
      <h3>{{ item.title }}</h3>
      {% if item.original_title %}
        <p class="original-title">Original title: {{ item.original_title }}</p>
      {% endif %}
    </article>
  {% endfor %}
</div>

## Software Copyrights in Progress

<div class="ip-list compact">
  {% for item in site.data.software %}
    <article class="ip-item">
      <div class="pub-meta"><span>{{ item.status }}</span><span>{{ item.type }}</span></div>
      <h3>{{ item.title }}</h3>
    </article>
  {% endfor %}
</div>
