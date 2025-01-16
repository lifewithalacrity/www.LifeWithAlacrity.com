---
cover: true
title: Recent Posts
classes:
  - wide
permalink: /
author_profile: true
toc: false
toc_label: "Unique Title"
toc_icon: "heart"  # corresponding Font Awesome icon name (without fa prefix)
header:
  overlay_image: /assets/images/lwa.webp
  overlay_filter: rgba(0, 255, 0, 0.8) # same as adding an opacity of 0.5 to a black background  
  actions:
    - label: "About Author"
      url: "/about"   
---
<style>
{% include index_css.css %}
</style>

<hr class="line-intro">

  <!-- <img class="image-makeover-1" src="./assets/images/apple-touch-icon1.png" alt=""> -->

{% capture notice-1 %}
 ___Alacrity, noun.__ From the Latin alacritas meaning promptitude. Similar in meaning to its synonyms Velocity and Celerity, all three mean quickness in action or movement. Alacrity stresses promptness in response to a suggestion or command, cheerful and eager willingness, appropriate quickness, and in general the beginning of fast movement._
{% endcapture%}

<div class="definition">{{ notice-1 | markdownify }}</div>

{% capture notice-3 %}
***Life with Alacrity*** is the personal blog of [Christopher Allen](/about/), covering topics of community, decentralized identity, collective choice, online privacy, and more. Popular articles include ["The Path to Self-Sovereign Identity"](https://www.lifewithalacrity.com/article/the-path-to-self-soverereign-identity/), ["The Dunbar Number as a Limit to Group Size"](https://www.lifewithalacrity.com/article/the-dunbar-number-as-a-limit-to-group-sizes/), ["Dunbar & World of Warcraft"](https://www.lifewithalacrity.com/article/dunbar-world-of-warcraft/), and the [Community by the Numbers series](https://www.lifewithalacrity.com/tags/#community-by-the-numbers).

_Christopher is available for personal consulting engagements on decentralized digital trust, online collaboration, identity management, digital assets, smart contracts, and human-rights privacy. Please [email](mailto:ChristopherA@LifeWithAlacrity.com) if you are interested._
{% endcapture%}

<div class="notice--info about_website introduction">{{ notice-3 | markdownify}}</div>

## Most Recent Post

{% for post in site.posts limit: 1 %}
<h2>{{ post.date | date: "%Y-%m-%d" }}: <a href="{{ post.url }}">{{ post.title }}</a></h2>
<p>{{ post.content }}</p>
{% endfor %}

<br><br>
<hr class="line-intro">
<br>

<h3 class="recent-post__text">All Recent Posts</h3>



<ul class="post-catalog_order" style="font-weight: bold">
{% for post in site.posts limit: 7 %}
<li class="post-catalog_list"><b>{{ post.date | date: "%Y-%m-%d" }}:</b> <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>



<span class="see-all_text">See all [Posts](/posts/) <i style="color: #05A069;" class="far fa-eye"></i></span>
<br><br>
<hr class="line-intro">
<br>
<h3 class="recent-post__text recent-post__text-social-media">All Recent Social Media Posts</h3>

<ul class="post-catalog_order post-catalog_order__social-media" style="font-weight: bold">

  {% assign reversed_posts = site.tweets-md | reverse %}
  {% for post in reversed_posts limit: 7 %}
    <li class="post-catalog_list post-catalog_list__social-media">
      <b>{{ post.date | date: "%Y-%m-%d" }}:</b> <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

<span class="see-all_text see-all_text__social-media ">See all [Social Media Posts](/tweets/) <i style="color: #05A069;" class="far fa-eye"></i></span>


<!-- <h3 class="image-author">Christopher Allen's Twitter Archive</h3>
{% capture notice-5 %}
{% for image in page.images %}
    <img class="image-timeline" src="./twitterarchive/ChristopherA/tweets_media/{{ image }}" />
{% endfor %}

{% endcapture%}
<div class="twitter-timeline">{{ notice-5 | raw }}</div>
 -->


<!-- <br>
<br>
<a class="twitter-timeline" style="display: none;" data-lang="en" data-width="auto" data-height="500px" data-tweet-limit="3" data-theme="dark" href="https://twitter.com/ChristopherA?ref_src=twsrc%5Etfw">Tweets by ChristopherA </a> -->
