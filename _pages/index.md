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
  actions:
    - label: "FIND OUT MORE"
      url: "/"   
images:
  - 385228851317440512-BVibmVqCcAAAyvc.jpg
  - 131216876364775424-AdItDciCQAAKJqk.jpg
  - 131799095508598784-AdQ-lD3CAAAfsdk.jpg
  - 227948859786158080-AynWR77CYAA2cfq.jpg
  - 474662062900391938-BpZWoW4CAAAbU41.jpg
  - 474640379149438976-BpZC6KhCMAAlywq.jpg
---
<style>
@media screen and (min-width: 80em) {
  .sidebar {
    display: none;
}

#main {
    margin-left: -50px;
}
}
@media screen and (max-width: 42em) {
  .sidebar {
    display: none;
}
}
.post-recent{
    margin-left: -40px;
}
.post-list {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Three columns with equal width */
    gap: 20px; /* Gap between grid items */
}

.post-box {
    border: 1px dashed #05A069;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 5px;
    background-color: #e9fff8;
    box-shadow: 2px 2px 8px #b6e7d6;
}
.post-box a{
    text-decoration: none;
    color: #05A069;
    font-weight: bolder;
}
.post-box summary{
    color: #05A069;
    font-size: 20px;
}
/* Media query for tablets */
@media (max-width: 768px) {
    .post-list {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Media query for mobile */
@media (max-width: 480px) {
    .post-list {
        grid-template-columns: 1fr;
    }
}

.image-timeline:nth-child(n){
    margin: 0px 0px 20px 0px;
    border-radius: 5px;
    box-shadow: 2px 2px 8px #dadada;
}
.recent-post__text, .image-author{
    font-family: sans-serif;
    background-color: #a8edd5;
    border: 1px dashed #05A069;
    padding: 10px 20px 10px 20px;
    margin-bottom: 30px;
    border-radius: 5px;
}
.definition{
    background-color: rgb(212, 255, 241);
    padding: 10px 20px 10px 20px;
    border: 1px solid #05A069;
    box-shadow: 10px 10px 20px #b6e7d6;
    border-radius: 5px;
}
.about_website{
    background: linear-gradient(to right, #d3e8f6, #aeffd6); /* You can adjust the color stops as needed */
    padding: 20px 40px 20px 40px;
    border-radius: 5px;
    box-sizing:10px 10px 20px #b6e7d6 ;
    margin-bottom: 40px;
    border: 1px dashed #05A069;
}
</style>
{% capture notice-1 %}
 ___Alacrity, noun.__ From the Latin alacritas meaning promptitude. Similar in meaning to its synonyms Velocity and Celerity, all three mean quickness in action or movement. Alacrity stresses promptness in response to a suggestion or command, cheerful and eager willingness, appropriate quickness, and in general the beginning of fast movement._
{% endcapture%}

<div class="definition">{{ notice-1 | markdownify }}</div>

{% capture notice-2 %}
<b>Most Recent Post:</b>
<ul>
{% for post in site.posts limit: 1 %}
<li><b>{{ post.date | date: "%Y-%m-%d" }}:</b> <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
{% endcapture%}

<div class="notice--success">{{ notice-2 | markdownify }}</div>


{% capture notice-3 %}
***Life with Alacrity*** is the personal blog of [Christopher Allen](/about/), covering topics of community, decentralized identity, collective choice, online privacy, and more. Popular articles include ["The Path to Self-Sovereign Identity"](https://www.lifewithalacrity.com/article/the-path-to-self-soverereign-identity/), ["The Dunbar Number as a Limit to Group Size"](https://www.lifewithalacrity.com/article/the-dunbar-number-as-a-limit-to-group-sizes/), ["Dunbar & World of Warcraft"](https://www.lifewithalacrity.com/article/dunbar-world-of-warcraft/), and the [Community by the Numbers series](https://www.lifewithalacrity.com/tags/#community-by-the-numbers).

_Christopher is available for personal consulting engagements on decentralized digital trust, online collaboration, identity management, digital assets, smart contracts, and human-rights privacy. Please [email](mailto:ChristopherA@LifeWithAlacrity.com) if you are interested._
{% endcapture%}

<div class="notice--info about_website introduction">{{ notice-3 | markdownify}}</div>


<h3 class="recent-post__text">All Recent Posts</h3>


<ul style="font-weight: bold">
{% for post in site.posts limit: 7 %}
<li><b>{{ post.date | date: "%Y-%m-%d" }}:</b> <a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>


See all [Posts](/posts/) <i style="color: #05A069;" class="far fa-eye"></i>

<h3 class="image-author">Christopher Allen's Twitter Archive</h3>
{% capture notice-5 %}
{% for image in page.images %}
    <img class="image-timeline" width="250px" height="200px"  src="/twitterarchive/ChristopherA/tweets_media/{{ image }}" />
{% endfor %}

{% endcapture%}
<div class="twitter-timeline">{{ notice-5 | raw }}</div>



<br>
<br>
<a class="twitter-timeline" data-lang="en" data-width="auto" data-height="500px" data-tweet-limit="3" data-theme="dark" href="https://twitter.com/ChristopherA?ref_src=twsrc%5Etfw">Tweets by Christopher </a>

