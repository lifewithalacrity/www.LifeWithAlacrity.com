---
cover: false
title: Life with Alacrity
hide_description: true
classes:
  - wide
permalink: /test/
---

<ul>
{% for post in site.posts limit: 7 %}
<li><b>{{ post.date | date: "%Y-%m-%d" }}:</b> <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
