---
permalink: /
title: "Qi Ding"
author_profile: true
---

I am a Ph.D. candidate in Management Science and Engineering at the Institute of
Energy, Environment, and Economy, Tsinghua University. My research focuses on
transport-energy system modeling, with particular interests in China's transport
decarbonization pathways, electric vehicle charging and power system interactions,
and hydrogen-based fuels for ports and airports.

I work on techno-economic analysis and integrated assessment using optimization
and data-driven methods to study how low-carbon transport transitions interact
with power systems, infrastructure planning, and climate policy.

My work connects long-term pathways with spatial planning and operational
resilience — from end-use demand and technology pathways, through spatial
infrastructure and supply chains, to hourly power-system operation.

## News

{% for item in site.data.news %}
- **{{ item.date }}** — {{ item.text }}{% if item.url %} [[link]({{ item.url }})]{% endif %}
{% endfor %}

## Selected publications

{% assign selected = site.publications | where: "selected", true %}
{% for post in selected %}
- **{{ post.title }}** — {{ post.venue }}, {{ post.date | date: "%Y" }}
{% endfor %}

See [all publications](/publications/), [research areas](/research/), and my
[CV](/cv/) for details.
