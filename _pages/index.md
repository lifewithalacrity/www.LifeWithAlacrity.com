---
cover: false
title: Life with Alacrity
hide_description: true
classes:
  - wide
permalink: /test/
---

<ul>
  {% for post in site.posts limit: 10 %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
