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
<b>Most Recent Post:</b>
<b>{{ post.date | date: "%Y-%m-%d" }}:</b> <a href="{{ post.url }}">{{ post.title }}
{% endfor %}
{% endcapture%}

<div class="notice--success">{{ notice-1 | markdownify }}</div>

> ___Alacrity, noun.__ From the Latin alacritas meaning promptitude. Similar in meaning to its synonyms Velocity and Celerity, all three mean quickness in action or movement. Alacrity stresses promptness in response to a suggestion or command, cheerful and eager willingness, appropriate quickness, and in general the beginning of fast movement._

***Life with Alacrity*** is the personal blog of [Christopher Allen](/about/), covering topics of community, decentralized identity, collective choice, online privacy, and more. Popular articles include ["The Path to Self-Sovereign Identity"](https://www.lifewithalacrity.com/article/the-path-to-self-soverereign-identity/), ["The Dunbar Number as a Limit to Group Size"](https://www.lifewithalacrity.com/article/the-dunbar-number-as-a-limit-to-group-sizes/), ["Dunbar & World of Warcraft"](https://www.lifewithalacrity.com/article/dunbar-world-of-warcraft/), and the [Community by the Numbers series](https://www.lifewithalacrity.com/tags/#community-by-the-numbers).

_I am available for personal consulting on decentralized digital trust, online collaboration, identity management, digital assets, smart contracts, and human-rights privacy. Please contact me if you are interested._

## All Recent Posts

<ul>
{% for post in site.posts limit: 7 %}
<li><b>{{ post.date | date: "%Y-%m-%d" }}:</b> <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
