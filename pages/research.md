---
permalink: /research/
title: "Research"
author_profile: true
---

I study how low-carbon transitions move from end-use demand and technology
pathways, through spatial infrastructure and supply chains, to hourly power-system
operation and resilience.

## Research areas

{% for area in site.data.research.areas %}
### {{ area.title }}

{{ area.short }}

{{ area.detail }}
{% endfor %}

## Current work

{% for item in site.data.research.current %}
### {{ item.title }} — *{{ item.status }}*

**Question:** {{ item.question }}

**Methods:** {{ item.methods }}
{% endfor %}

## Toolkit

{% for item in site.data.research.toolkit %}
- **{{ item.name }}** — {{ item.tools }}. {{ item.purpose }}
{% endfor %}
