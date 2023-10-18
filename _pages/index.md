---
cover: false
title: Life with Alacrity
hide_description: true
classes:
  - wide
permalink: /
---

{% capture notice-1 %}
{% for post in site.posts limit: 1 %}
<b>{{ post.date | date: "%Y-%m-%d" }}:</b> <a href="{{ post.url }}">{{ post.title }}
{% endfor %}
{% endcapture%}

<div class="notice--success">{{ notice-1 | markdownify }}</div>

## All Recent Posts

<ul>
{% for post in site.posts limit: 7 %}
<li><b>{{ post.date | date: "%Y-%m-%d" }}:</b> <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
