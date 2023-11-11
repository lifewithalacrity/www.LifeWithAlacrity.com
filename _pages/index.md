---
cover: true
title: Life with Alacrity
classes:
  - wide
permalink: /
author_profile: false
toc: false
toc_label: "Unique Title"
toc_icon: "heart"  # corresponding Font Awesome icon name (without fa prefix)
excerpt: "Design Patterns for Digital Collaboration & Trust"
header:
  overlay_image: /assets/images/lwa.png
  overlay_filter: rgba(0, 255, 0, 0.8) # same as adding an opacity of 0.5 to a black background      
---
<style>
@media screen and (min-width: 80em) {
  .sidebar {
    display: none;
}
.wrapper .page__title {
  text-decoration: none !important;
  text-shadow: 6px 6px 15px #000000;
}
  .page__hero--overlay .page__lead {
    max-width: 768px;
    text-shadow: 6px 6px 15px #000000;
}
#main {
    margin-left: -41px;
}
}
@media screen and (max-width: 42em) {
  .sidebar {
    display: none;
}
}
</style>

> ___Alacrity, noun.__ From the Latin alacritas meaning promptitude. Similar in meaning to its synonyms Velocity and Celerity, all three mean quickness in action or movement. Alacrity stresses promptness in response to a suggestion or command, cheerful and eager willingness, appropriate quickness, and in general the beginning of fast movement._

{% capture notice-1 %}
<b>Most Recent Post:</b>
<ul>
{% for post in site.posts limit: 1 %}
<li><b>{{ post.date | date: "%Y-%m-%d" }}:</b> <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
{% endcapture%}

<div class="notice--success">{{ notice-1 | markdownify }}</div>


{% capture notice-2 %}
***Life with Alacrity*** is the personal blog of [Christopher Allen](/about/), covering topics of community, decentralized identity, collective choice, online privacy, and more. Popular articles include ["The Path to Self-Sovereign Identity"](https://www.lifewithalacrity.com/article/the-path-to-self-soverereign-identity/), ["The Dunbar Number as a Limit to Group Size"](https://www.lifewithalacrity.com/article/the-dunbar-number-as-a-limit-to-group-sizes/), ["Dunbar & World of Warcraft"](https://www.lifewithalacrity.com/article/dunbar-world-of-warcraft/), and the [Community by the Numbers series](https://www.lifewithalacrity.com/tags/#community-by-the-numbers).

_Christopher is available for personal consulting engagements on decentralized digital trust, online collaboration, identity management, digital assets, smart contracts, and human-rights privacy. Please [email](mailto:ChristopherA@LifeWithAlacrity.com) if you are interested._
{% endcapture%}

<div class="notice--info introduction">{{ notice-2 | markdownify }}</div>

## All Recent Posts

<ul style="font-weight: bold">
{% for post in site.posts limit: 7 %}
<li><b>{{ post.date | date: "%Y-%m-%d" }}:</b> <a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

_See all [Posts](/posts/)._
<!-- <figure class="half">
    <a href="/assets/images/foo-bar-identity.jpg"><img src="/assets/images/foo-bar-identity.jpg"></a>
    <a href="/assets/images/foo-bar-identity-th.jpg"><img src="/assets/images/foo-bar-identity-th.jpg"></a>
    <figcaption>Caption describing these two images.</figcaption>
</figure> -->
<br>
<br>
<a class="twitter-timeline" data-lang="en" data-width="auto" data-height="500px" data-tweet-limit="3" data-theme="dark" href="https://twitter.com/ChristopherA?ref_src=twsrc%5Etfw">Tweets by ChristopherA</a>