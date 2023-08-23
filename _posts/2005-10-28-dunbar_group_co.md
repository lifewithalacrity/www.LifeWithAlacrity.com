---
layout: posts
title:  "Dunbar Number & Group Cohesion"
slug:  "Dunbar Number & Group Cohesion"
redirect_from:
  - /2005/10/dunbar_group_co/
date:   2005-10-28 16:16:17 -0700
# image:  02.jpg
# tags:   Home
---

There is some more excellent research this week by [Nick Yee](http://www.nickyee.com/) and [Nicolas Ducheneaut](http://www.parc.com/nicolas) in the [PlayOn](http://blogs.parc.com/playon/) blog. Again, their research provides good insight into social group dynamics as they appear in online games.

I last mentioned their research on guild sizes in my blog post [Dunbar & World of Warcraft](/2005/08/dunbar_world_of.html) where I compare the distribution of guild sizes in [Ultima Online](http://www.uo.com/) vs PlayOn's results from [World of Warcraft](http://www.worldofwarcraft.com/). However, both distribution tables suffer from a variety of biases due to the nature of the different game designs, many of which are discussed in the [commments in the post](/2005/08/dunbar_world_of.html#comments). For instance both guild graphs include "alts", which are alternative characters of individual players. Thus one player might be represented multiple times in a guild.

In Nic & Nick's more recent research, they are looking deeper and are [mapping social networks](http://blogs.parc.com/playon/archives/2005/10/mapping_social.html) _(now 404, use [Internet Archive](https://web.archive.org/web/20090425222428/http://blogs.parc.com/playon/archives/2005/10/mapping_social.html))_ on World of Warcraft. Using tools available to them, over the course of the month of August they looked at 241,378 characters and 5569 guilds. From that data they were able to able to discover how often guild members were co-present (online at the same time) or co-located (online and in the same zone in the game)

<a href="https://www.lifewithalacrity.com/previous/.a/6a00d8341d8bc053ef01b8d1b3c611970c-pi"><img width="100%" style=" margin-right:15px"  src="../assets/images/dunbar.jpg" alt="dunbar"/></a>

For example, in this map you can see:

> _...we have a guild where we see more distinct cliques. There's a somewhat hard-core 4 character cluster on the left- hand side, a mid-level triad on the bottom left, a mid 20's clique that's held together by the druid in the middle, and finally a more casual low-level clique on the top right._

Using this same data, they then looked at the [max subgraph size of guilds](http://blogs.parc.com/playon/archives/2005/10/guilds_max_subg.html) _(now 404, use [Internet Archive](http://blogs.parc.com/playon/archives/2005/10/guilds_max_subg.html))_. A "subgraph" in a social network can be thought of as a "clique" of people that interact with each other.

<a href="https://www.lifewithalacrity.com/previous/.a/6a00d8341d8bc053ef01b7c82940ec970b-pi"><img width="100%" style=" margin-right:15px"  src="../assets/images/dunbar_1.jpg" alt="dunbar_1"/></a>

For instance, in the social network of this guild there are 5 subgraphs, 4 of which are just 2 people and 1 subgraph that is of 6. The 4 subgraphs that are only of 2 people are members of the guild who did not participate much in the guild. But the number of people in the subgraph of 6 is much more interesting, as it shows that these members are "cohesive".

When the max subgraph size of a guild is plotted against the guild size, you get some interesting results -- the maximum guild cohesiveness occurs around the guild size of 50. Larger then that, guilds have a much more difficult time remaining cohesive.

<a href="https://www.lifewithalacrity.com/previous/.a/6a00d8341d8bc053ef01b8d1b3c66b970c-pi"><img width="100%" style=" margin-right:15px"   src="../assets/images/dunbar_2.jpg" alt="dunbar_2"/></a>

These results strong support my hypothesis in my original [Dunbar Number](/2004/03/the_dunbar_numb.html) post, where I...

> _hypothesize that the optimal size for active group members for creative and technical groups -- as opposed to exclusively survival-oriented groups, such as villages -- hovers somewhere between 25-80, but is best around 45-50. Anything more than this and the group has to spend too much time "grooming" to keep group cohesion, rather then focusing on why the people want to spend the effort on that group in the first place -- say to deliver a software product, learn a technology, promote a meme, or have fun playing a game. Anything less than this and you risk losing critical mass because you don't have requisite variety._

Some possible other support for this hypothesis comes from another post by Nic & Nick where they analyze the [time guilds spend together](http://blogs.parc.com/playon/archives/2005/10/guild_members_t.html) (now 404, use [Internet Archive](https://web.archive.org/web/20081119142033/http://blogs.parc.com/playon/archives/2005/10/guild_members_t.html)).

<a href="https://www.lifewithalacrity.com/previous/.a/6a00d8341d8bc053ef01b8d1b3c680970c-pi"><img width="100%" style=" margin-right:15px"   src="../assets/images/dunbar_3.jpg" alt="dunbar_3"/></a>

Note that the mean amount of time that guilds spend together in the band 31 - 60 is only 95 minutes and that the standard deviation is the lowest, as compared to groups that are larger then 120 where the mean time is 141 minutes at the standard deviation is higher. This says to me that keeping a large group cohesive requires significantly more time in social "grooming".

In my original [Dunbar Number](/2004/03/the_dunbar_numb.html) post I had a secondary hypothesis where I talk about peak in satisfaction in smaller groups:

> _In my opinion it is at 5 that the feeling of "team" really starts. At 5 to 8 people, you can have a meeting where everyone can speak out about what the entire group is doing, and everyone feels highly empowered. However, at 9 to 12 people this begins to break down -- not enough "attention" is given to everyone and meetings risk becoming either too noisy, too boring, too long, or some combination thereof._

There is strong support for this in another plot found in the [max subgraph size of guilds](http://blogs.parc.com/playon/archives/2005/10/guilds_max_subg.html) _(now 404, use [Internet Archive](https://web.archive.org/web/20081231143011/http://blogs.parc.com/playon/archives/2005/10/guilds_max_subg.html))_ post where they compare the subgraph ration to guild sizes:

<a href="https://www.lifewithalacrity.com/previous/.a/6a00d8341d8bc053ef01bb08cde1c9970d-pi"><img width="100%" style=" margin-right:15px"   src="../assets/images/dunbar_4.jpg" alt="dunbar_4"/></a>

Here you can see a strong peak at 10 people, that rapidly falls with guild size. This shows that guild cohesion is relatively easy to maintain up to size 10, but becomes much more difficult to maintain as guilds grow larger.

I've been saying for some time that studying online games is a valuable place to understanding social software. I'm quite pleased that this research is proving this to be true.

* * *

> _**Some other posts about the Dunbar Number and group size issues:**_
> 
> * [2004-03: The Dunbar Number as a Limit to Group Sizes](/2004/03/the_dunbar_numb.html) (also some really good [comments](/2004/03/the_dunbar_numb.html#comments))
> * [2005-02: Dunbar Triage: Too Many Connections](/2005/02/dunbar_triage_t.html)
> * [2005-03: Dunbar, Altruistic Punishment, and Meta-Moderation](/2005/03/dunbar_altruist.html)
> * [2005-07: Cheers: Belongingness and Para-Social Relationships](/2005/07/cheers_belongin.html)
> * [2005-08: Dunbar & World of Warcraft](/2005/08/dunbar_world_of.html)

### Comments

12

[Ross Mayfield](http://ross.typepad.com) 2005-10-29T00:08:59-07:00

Chris, intersting data. I am not sure that with standard deviations so high on the "Time spent together by guild size" that you can draw super strong conclusions about differences been group cohesiveness by group. One or two extra-connected group is going to throw off your numbers quite a bit. If you have the data and can scatterplot them instead of showing averages I suspect you'll be able to make a case more clear.

[Edward Vielmetti](http://vielmetti.typepad.com) 2005-11-02T21:18:55-07:00

URL: I would also like to see a scatterplot. It would really help to make time spent together by guilds alot more clearer.

[York Ash](#) 2005-11-05T21:12:01-07:00

The military, and educational institutions, have discovered similar thresholds for collectivities. I think the number of friends any of us can sustain, in any manner (on, offline) is around 200. And that's pushing it. Magic numbers in small business are 12 and approx 30-35, I believe. Intersting that it might hold for online as well as offline.

[adrian Chan](http://www.gravity7.com/blog/media/) 2005-11-17T13:42:52-07:00

Great series on Dunbar limit. One minor nitpick - I think your first PlayOn image link might be wrong. I thing the text you've quoted refers to their bottom-left image which is g-3 rather than g-4 (the 4-character cluster is \*really\* obvious in g-3).

[Ian MacColl](http://www.itee.uq.edu.au/~ianm) 2006-04-14T05:15:04-07:00

Thanks, the image is corrected to be g-3.

[Christopher Allen](http://www.LifeWithAlacrity.com) 2006-04-14T05:23:55-07:00

[original layout](/previous/2005/10/dunbar_group_co.html)

[Community by the Numbers](/tags/community-by-the-numbers/) [Social Software](/tags/social-software/) [Web/Tech](/tags/web/tech/) [dunbar number](/tags/dunbar-number/) [nick yee](/tags/nick-yee/) [nicolas ducheneau](/tags/nicolas-ducheneau/) [playon](/tags/playon/) [social software](/tags/social-software/) [group dynamics](/tags/group-dynamics/) [online games](/tags/online-games/) [guilds](/tags/guilds/) [WoW](/tags/wow/) [world of warcraft](/tags/world-of-warcraft/) [group cohesion](/tags/group-cohesion/) [cohesiveness](/tags/cohesiveness/) [co-presence](/tags/co-presence/) [co-location](/tags/co-location/) [subgraph size](/tags/subgraph-size/)

Life With Alacrity

© Christopher Allen