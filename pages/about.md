---
permalink: /
title: "Qi Ding"
author_profile: true
---

I am a Ph.D. candidate in Management Science and Engineering at the Institute of
Energy, Environment, and Economy, Tsinghua University. I build and solve large-scale
optimization models of power and energy systems, combining mathematical programming
with data-driven methods.

My work centers on system-level optimization problems:

- **Large-scale optimization**: linear and mixed-integer programming for energy
  system planning, capacity expansion, and operational scheduling
- **Power systems**: hourly operations, investment, flexibility, and regional
  coordination, modeled at provincial and national scale
- **Spatial infrastructure**: mixed-integer models of production, conversion, and
  transport networks for energy carriers
- **Model development**: formulation, decomposition, and efficient solution of
  large instances, with reproducible workflows in Python, GAMS, and PyPSA-China

I care about the mathematics, the computational tractability, and the credibility
of the solution — not just the story around it.

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
