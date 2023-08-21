---
layout: posts
title:  "Ratings:Who Do You Trust?"
slug:  "Ratings:Who Do You Trust?"
redirect_from:
  - /2006/09/ratings_who_do_/
date:   2006-09-14 16:28:58 -0700
image:  shannon_appelcline.jpg
# tags:   Software
---

My colleague, [Shannon Appelcline](http://www.skotos.net/about/staff/shannon_appelcline.php), has been working on a game rating system for [RPGnet](http://www.rpg.net). This has resulted in real-world application of the principles for designing rating systems which we've previously discussed in our [Collective Choice](/2005/12/collective_choi.html) articles. Shannon's newest article, [Ratings, Who Do You Trust?](http://www.skotos.net/articles/TTnT_/TTnT_196.phtml) offers a look at weighting ratings based on reliability.

<img width="250px"  src="../assets/images/shannon_appelcline.jpg" alt="shannon_appelcline"/>

>_On the [RPGnet Gaming Index](http://index.rpg.net/) we've put this all together to form a tree of weighted ratings that answer the question, _who do you trust_?_
> 
> _Here's how we measured each type of trust, and what we did about it:_
> 
> * _**Volume of Ratings for an Item.** Introduce a bayesian weight to offset the variability of items with low-volume ratings._
>     
> * _**Volume of Ratings by a User.** Give each user a weight based on his volume of contribution which is applied to his ratings._
>     
> * _**Depth of Content by a User.** Give each rating a weight based on the depth of thought implicit in the rating which is applied to that rating._
>     
> 
> _These all get put together to create our final ratings for the Gaming Index, with each user's individual rating for an item getting multiplied by its user weight and its content weight, and then all of that averaged with the other user ratings and the bayesian weight too. The result is in no way intuitive, but users don't really need to understand the back end of a rating system. Conversely we hope it's accurate, or at least more accurate than would otherwise be true given the relatively low volume of ratings we've collected thus far._

Here are some of Shannon's earlier discussions about the design behind the new "user content" based [RPGnet Gaming Index](http://index.rpg.net):

* [Encouraging User Creativity](http://www.skotos.net/articles/TTnT_/TTnT_191.phtml) \- A look at the "XP" system which has helped to incentivize the creation of the database at the heart of the ratings.
* [Managing User Creativity, Part Two](http://www.skotos.net/articles/TTnT_/TTnT_193.phtml) \- An examination of the nuts and bolts of RPGnet's Gaming Index database.

* * *

_Related articles from this blog:_

> * _[2005-12: Systems for Collective Choice](/2005/12/systems_for_col.html)_
> * _[2005-12: Collective Choice: Rating Systems](/2005/12/collective_choi.html)_
> * _[2006-01: Collective Choice: Competitive Ranking Systems](/2006/01/ranking_systems.html)_
> * _[2006-08: Using 5-Star Rating Systems](/2006/08/using_5star_rat.html)_
> * _[2007-01: Experimenting with Ratings](/2007/01/collective_choi.html)_

Related articles from Shannon Appelcline's [Trials, Triumphs & Trivialities:](http://www.skotos.net/articles/show-column.phtml?colname=TTnT_)

> * _[#196: Collective Choice: Ratings, Who Do You Trust?](http://www.skotos.net/articles/TTnT_/TTnT_196.phtml)_
> * _[#198: Collective Choice: More Thoughts About Ratings](http://www.skotos.net/articles/TTnT_/TTnT_198.phtml)_

### Comments

URL: Hmm, interesting on the weighting system. Can you explain with more detail how the rating by depth of content is generated? I'm looking through the other articles, so hopefully I find the info there. Frank

[magicback (Frank)](#) 2006-10-12T01:30:32-07:00

URL: My first pass system just used a different multiplier for weight based on the type of content: 1x for just a raw rating 2x for a rating with a non-blank comment 5x for a review (which goes through a different, approved content system) My second pass system also included "volume of ratings by user" and thus applied a variable multiplier depending on how many ratings the user has made: (0-2x) for a raw rating 2x(0-2x) for a rating with comment 5x for a review The 0-2x is calculated as (# of ratings by user)/50, to 2 max. I'm pretty sure that the core weighting system by depth is producing better results, though I haven't done any studies of that yet. The additional weighting for volume by users has definitely prevented bias by hit-and-run raters who just stop by to rate one game that they've been asked to.

[Shannon Appelcline](#) 2006-10-16T15:39:53-07:00

original layout

[Games](/tags/games/) [Social Software](/tags/social-software/) [User Interface](/tags/user-interface/) [Web/Tech](/tags/web/tech/) [Weblogs](/tags/weblogs/) [rating](/tags/rating/) [ratings](/tags/ratings/) [collective choice](/tags/collective-choice/) [reliability](/tags/reliability/) [weight](/tags/weight/) [weighing](/tags/weighing/) [trust](/tags/trust/) [volume](/tags/volume/) [depth](/tags/depth/) [user content](/tags/user-content/) [rpgnet](/tags/rpgnet/) [inedex](/tags/inedex/) [creativity](/tags/creativity/) [skotos](/tags/skotos/) [shannon appelcline](/tags/shannon-appelcline/)

Life With Alacrity

© Christopher Allen