---
permalink: /cv/
title: "CV"
author_profile: true
---

A two-page English academic CV is maintained in LaTeX and available as PDF:
[Download CV (PDF)](/assets/cv/qi-ding-cv.pdf).

## Education

{% for item in site.data.experience.education %}
### {{ item.institution }}

{{ item.role }} — {{ item.period }}

{% if item.detail %}{{ item.detail }}{% endif %}
{% endfor %}

## Research experience

{% for item in site.data.experience.research %}
### {{ item.institution }}

{{ item.role }} — {{ item.period }}

{% if item.detail %}{{ item.detail }}{% endif %}
{% endfor %}

## Professional experience

{% for item in site.data.experience.professional %}
### {{ item.institution }}

{{ item.role }} — {{ item.period }}

{% if item.detail %}{{ item.detail }}{% endif %}
{% endfor %}

## Awards

{% for item in site.data.experience.awards %}
- {{ item.institution }} ({{ item.period }})
{% endfor %}
