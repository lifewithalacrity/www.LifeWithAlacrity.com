---
layout: single
title:  "Collective Choice: Competitive Ranking Systems"
slug:  "Collective Choice: Competitive Ranking Systems"
redirect_from:
  - /2006/01/ranking_systems.html
  - /2006/01/ranking_systems/
date:   2006-01-03 23:37:09 -0700
image:  bcs_1.png
tags: 
  - Collective Choice
  - Ranking

categories:
  - article
class:
  - wide

excerpt_seperator: <!--more-->
permalink: /article/collective-choice-competitive-ranking-systems/
---

	
By Christopher Allen & Shannon Appelcline

_\[This is the third in a series of articles on [collective choice](/2005/12/systems_for_col.html), co-written by my collegue [Shannon Appelcline](http://www.skotos.net/about/staff/shannon_appelcline). It will be [jointly posted](http://www.skotos.net/articles/TTnT_179.phtml) in Shannon's [Trials, Triumphs & Trivialities](http://www.skotos.net/articles/TTnT.shtml) online games column at [Skotos](http://www.skotos.net/).\]_

In our first article on [collective choice](/2005/12/systems_for_col.html) we outlined a number of different types of choice systems, among them voting, polling, rating, and ranking. Since then we've been spending some time expanding upon the systems, with the goal being to create both a lexicon of and a dialogue about systems for collective choice.

This time we're going to dig more into _comparison ranking systems_, by focusing on _competitive_ rankings and looking more in depth at ELO Chess Ranking System and the other systems that we briefly mentioned previously. Our goal is to explicate these systems, to better address their flaws, to begin detailing the purposes of ranking systems, and to show how those purposes are critical in the design of ranking systems.

### Subjective vs. Objective Rankings

In our original article we discussed [rating systems](/2005/12/collective_choi.html) as being largely subjective and ranking systems as being objective, but the situation isn't nearly as simple as that. In truth, there's a clear spectrum of ratings and rankings with varying amounts of subjectivity and objectivity in each collective choice system.

<a href="https://web.archive.org/web/20080219224023/http://www.bcsfootball.org/"><img width="150px" style=" margin-right:15px" align="left"  src="{{ site.url }}{{ site.baseurl }}/assets/images/bcs_1.png" alt="bcs_1"/></a> (BCS) for college football is a good example of a ranking system that explicitly allows a subjective component. It involves a complex mathematical formula that includes things like win/loss ratios, but also sportswriters' and coaches' ratings.
<a href="https://web.archive.org/web/20080219224023/http://www.officialworldgolfranking.com/"><img width="200px" style=" margin-right:15px" align="right"  src="{{ site.url }}{{ site.baseurl }}/assets/images/golfrankings_1.png" alt="golfrankings"/></a>

However, public opinion continues to show that people don't necessarily like seeing true ranking systems having subjective components, because they expect them to be "fair". The BCS formula has come under attack several times in the last few years precisely due to its subjective basis. Cal Berkeley was one of several teams denied a bowl position in 2004 when many felt that they were worthy.

The [APL tennis rankings](http://www.atptennis.com/en/players/raceleaderboard/rank_definitions.asp) and the [official world golf rankings](http://en.wikipedia.org/wiki/Golf_rankings) also have a subjective component, but it is much more subtle. Each tournament is worth a certain number of points, and the allocation of those points is relatively arbitrary, based upon the "prestige" of each tournament and the quality of players who have traditionally played in it. The subjectivism isn't quite as near to the surface as that of the college bowls, but it's still something that can have a notable, and perhaps unwarranted, effect upon the final results.  

### Algorithmic Rankings

<a href="https://web.archive.org/web/20080219224023/http://www.kosteniuk.com/"><img width="230px" style=" margin-right:15px" align="right"  src="{{ site.url }}{{ site.baseurl }}/assets/images/wcsrating_2.jpg" alt="wcsrating"/></a> This brings us back to the [ELO system](http://en.wikipedia.org/wiki/ELO_rating_system), a ranking system originally designed for chess which is fairly well-known and well-understood. As we said in our overview article, "\[ELO\] builds a simple distribution of player ratings around a norm (typically 1500 points), then awards or deducts points based upon wins and losses, with the total sum of all points in the system staying constant. Players are then ranked according to their comparative scores."

The big difference between this and the previously discussed systems is that it's almost entirely objective; in fact it uses a statistical basis to create an underlying mathematical model for rankings, rather than allowing human subjectivity to get in the way.  

The simplest formulation for an ELO rating looks like this:

> `R' = R + K * (S - E)`
> 
> `R'` is the new rating  
> `R` is the old rating  
> `K` is a maximum value for increase or decrease of rating (16 or 32 for ELO)  
> `S` is the score for a game  
> `E` is the expected score for a game

Much of the trick is in figuring out what the (`E`)xpected score of a game is. ELO uses the following formulas for players A and B:

> E(A) = 1 / \[ 1 + 10 ^ ( \[R(B) - R(A)\] / 400 ) \]  
> E(B) = 1 / \[ 1 + 10 ^ ( \[R(A) - R(B)\] / 400 ) \]

It's a good model because, using the two formulas, it means that a great player gains little from beating an average player, but an average player gains a lot from beating a great player. Take the following example:

> R(A) = 1900  
> R(B) = 1500  
> E(A) = 1 / \[ 1 + 10 ^ ( \[1500 - 1900\] / 400 ) \]  
>      = 1 / \[ 1 + 10 ^ ( -400 / 400) \]  
>      = 1 / \[ 1 + 10 ^ -4 / 4 \]  
>      = 1 / \[ 1 + 10 ^ -1 \]  
>      = 1 / 1 + .1  
>      = .91  
>      = 91%  
> 
> E(B) = 1 / \[ 1 + 10 ^ ( \[1900 - 1500\] / 400) \]  
>      = 1 / \[ 1 + 10 ^ ( 400 / 400 ) \]  
>      = 1 / \[ 1 + 10 ^ 1 \]  
>      = 1 / 11  
>      = .09  
>      = 9%

Player A is expected to score .91 in an average game, which is to say he should win 91% of the time, and will be punished accordingly if he loses to player B:

> R' = 1900 + 32 * (0 - .91)  
> R' = 1900 - 29.12  
> R' = 1871

Conversely a win nets him very little:

> R' = 1900 + 32 * (1 - .91)  
> R' = 1900 + 32 * .09  
> R' = 1900 + 2.88  
> R' = 1903

ELO is almost entirely mathematical. Players can gain or lose different amounts of points based upon playing different players, but this is all part of the formula. The only slightly subjective element is the definition of `K` \-\- how much a player can win or lose from a particular game. The most widely used ELO systems for Chess break `K` down into two values: 16 for masters and 32 for everyone else. So there is a subjective decision that masters should vary their score less frequently than other players.

That's a very minor element in an otherwise objective system, but as we'll see, more recent systems by Days of Wonder and Microsoft first reduce, then eliminate even this subjectivity.

### Variations of a Theme: Days of Wonder

<a href="https://web.archive.org/web/20080219224023/http://www.daysofwonder.com/"><img width="200px" style=" margin-right:15px" align="right"  src="{{ site.url }}{{ site.baseurl }}/assets/images/dowlogo_1.gif" alt="dowlogo_1"/></a> ELO is probably the most used ranking system in the world. You can find it in use for Go, _Tantrix_, and many other games. Days of Wonder, producers of _Gang of Four_, _Ticket to Ride_, and many other games use a variant of the system which they describe on [their website](http://www.gangoffour.com/index.php?t=content&sub=ranking).

They identify three core problems with ELO:

1.  New players can take a long time to ascend or descend to their correct levels.
2.  Highly ranked players can be hesitant to play with provisional players whose ranking might be much more uncertain.
3.  There are no allowances for games with more than two players.

Days of Wonder resolved the first problem by creating a new formula for provisional players, allowing them to rise and fall in the rankings much more quickly.

Conversely when playing against provisional players, regular players can only lose a maximum of `K*n/20` points, where n is the number of games that the provisional player has played--rather than the normal maximum loss of `K`. For example, playing someone who has just played one game, can only result in a loss of 1/20th of the regular `K` value, and so it really doesn't matter if the provisional player's ranking is wildly out of whack.

Both of these new formulas are set up to converge toward a normal ELO formula as a provisional player's number of games approaches 20 (making them a normal player at Days of Wonder).

(It should be pointed out that using the number "20" to define a provisional player, and making a player less provisional in clean 5% steps, inevitably offers yet another small, subjective element into this mathematical formula; as we'll see momentarily Microsoft has more recently incorporated the idea of provisional uncertainty into their core mathematical model, much as the whole ELO system originally turned subjective win and loss statistics into tighter mathematics.)

<a href="https://web.archive.org/web/20080219224023/http://www.skotos.net/games/wonder/TT/"><img width="230px" style=" margin-right:15px" align="left"  src="{{ site.url }}{{ site.baseurl }}/assets/images/ttrskotosrankings.png" alt="ttrskotosrankings"/></a>

 Finally, to resolve the situation of multiple players, Days of Wonder considers each game to be a set of duels, as described here:

> _There are 4 players in a_ _Gang of Four game. Let's name A the winning player, B the second one, C the third one and D the last one. We consider that there were 6 duels: A won against B, C and D. B won against C and D. C won against D. We compute independently the new scores for each duel, and then we average the values for each player_.

It's a fairly elegant answer that not only rewards or penalizes all players separately, but also encourages playing for second place, or even third, if first isn't possible.

There have been continued discussions of the Days of Wonder ELO variant in [their forums](http://www.daysofwonder.com/index.php?t=forums), and the questions raised there are common to many different ranking systems. Some players wanted unranked games, while others thought that having unranked games would discourage people from playing good competitors _except_ in unranked games.  There has also been a lot of discussion regarding _Ticket to Ride_, a strategy game that supports 2-5 people, and whether the ELO variant system discourages multiperson play.

The various lessons learned at Days of Wonder underline two basic ideas about rankings. First, even with a well-studied system like ELO, there's still a lot to understand, and, second, any ranking system needs to reflect the specifics of what it's ranking -- and what its purpose is.

### Variations on a Theme: XBox 360 Live

<a href="https://web.archive.org/web/20080219224023/http://www.research.microsoft.com/mlp/trueskill/default.aspx"><img width="230px" style=" margin-right:15px" align="right"  src="{{ site.url }}{{ site.baseurl }}/assets/images/trueskillxbox360.jpg" alt="trueskillxbox360"/></a> An even more recent large-scale ranking system is the [TrueSkill](http://research.microsoft.com/displayArticle.aspx?id=1361) system developed by Microsoft for use with the XBox 360. It appears to be an expanded variant of the [glicko](http://math.bu.edu/people/mg/glicko/glicko.doc/glicko.html) ranking system used by the [free internet chess server](http://www.freechess.org/).

Many of the problems identified by Microsoft were the same as those already noted by Days of Wonder and others, including: the uncertainty of provisional ratings and the need to rank players in multiplayer games. However, the TrueSkill system notably expands both issues. Ranking uncertainty is now defined as a mathematical concept and the rankings now support not just multiple players, but also multiple teams.

<a href="https://web.archive.org/web/20080219224023/http://lifewithalacrity.blogs.com/.shared/image.html?/photos/uncategorized/trueskill.gif"><img width="190px" style=" margin-right:15px" align="left"  src="{{ site.url }}{{ site.baseurl }}/assets/images/trueskill.gif" alt="True Skills"/></a>TrueSkill explicitly includes two values in any ranking: a skill level and an uncertainty level. The first, like the more common ELO ranking, tells how good a player is. The second states how sure that ranking is. The uncertainty rating is effectively a margin of error, similar to those we saw in _polling systems_. If a first-time player has a skill rating of 25 with an uncertainty rating of 8.3 that means that his skill is probably somewhere in the range of 16.7 to 33.3, a pretty wide range, but then this is a totally untested player. According to benchmarks that Microsoft produced, 99.99% of actual skill levels were within 3x of the uncertainty rating, and 100% were within 4x.

The rest of TrueSkill's innovations are built around this model of uncertainty. All players win or lose skill points, based upon how many players they beat or lose to, and they also decrease their uncertainty rating as they play more games. However, uncertainty is decreased more for players toward the middle of a pack within a game than those around the edges (because on the edges the players could actually be much better or much worse than it is possible to see from a specific game). In addition, TrueSkill is only a zero-sum ranking system for players at the exact same level of uncertainty. The more uncertainty that an opponent possesses, the smaller the weighting of any gain or loss (much like the simpler system that Days of Wonder uses, which bases weightings of games against provisional players as `n/20`).

Overall TrueSkill is a somewhat complex system that is described more fully at Microsoft's [web site](http://www.research.microsoft.com/mlp/trueskill/Details.aspx#How_to_Update_Skills). Some of their expansions had already been considered by others, but still their system is notably innovative in two ways:

* Expanding a competitive ranking system to include concepts of teams.
    
* Incorporating the uncertainty of ratings further into the core mathematical model, rather than using a somewhat more subjective model such as that described by Days of Wonder for provisional players.
    

<a href="https://web.archive.org/web/20080219224023/http://www.research.microsoft.com/mlp/trueskill/RankCalculator.aspx"><img width="300px" style=" margin-right:15px" align="right"  src="{{ site.url }}{{ site.baseurl }}/assets/images/trueskillcalculator_1.png" alt="True Skill Calculator"/></a> The TrueSkill calculations are a bit complex. In general, that's not a problem for a computer-based ranking model because you can have a computer doing all the computations, and players only need to understand the results. However the two-part ranking system used by TrueSkill, which notes both skill level and uncertainty, does offer a potential problem on this latter point. _Can players understand it?_ In general, the concept of uncertainty will not be understood by people other that statisticians, thus raising a real user-interface question with the TrueSkill system -- and the exact sort of thing that designers of new ranking systems will need to consider.

### Variations on a Theme: A Tale in the Desert

<a href="https://web.archive.org/web/20080219224023/http://www.atid.com/"><img width="230px" style=" margin-right:15px" align="right"  src="{{ site.url }}{{ site.baseurl }}/assets/images/a_tale_in_the_desert_logo_1.jpg" alt="a_tale_in_the_desert_logo_1"/></a> The online game, [A Tale in the Desert](http://www.atitd.com), identified a different problem with the ELO system: _cheating_. This is a uniquely Internet-based problem, because there users can create fake accounts, then defeat those accounts to win points. This can also be done more subtly, by having multiple additional accounts build up the rating of that fake account before the fake account is defeated. So a totally new ranking system, called the [eGenesis Ranking System](http://wiki.atitd.net/tale1/EGenesis_Ranking_System), was created.

Each player is ranked through a 256-bit vector, half of which is initially set to 0 and half of which is set to 1 (therefore creating an average ranking of 128). Whenever a match occurs between players a hash function based on the players' names mathematically selects 32 of those bits, 8 of which are then randomly selected. Among those bits, any 1s in the loser's vector which correspond to 0s in the winner's vector are "transferred".

This simple design corresponds in some ways to ELO's more complex formula. A good player will have more 1s and thus more to lose, and he will lose correspondingly more to a poor player who has more 0s in his vector.

However, the system also prevents the collusion earlier noted. Statistically, a single player will only ever gain 8 ranking points from another new player, since out of the 32 bit hash only eight of those will, on average, be in the correct 0-1 configuration. Expanding a group of players expands the number of points that can potentially be gained, but within real limits.

<a href="https://web.archive.org/web/20080219224023/http://www.lifewithalacrity.com/2005/10/dunbar_group_co.html"><img width="200px" style=" margin-right:15px" align="right"  src="{{ site.url }}{{ site.baseurl }}/assets/images/wowsocialmap_1.png" alt="wowsocialmap_1"/></a> In fact, the eGenesis system prevents cheating by measuring the size of social networks, then limiting the number of ranking points that can be earned within a social network. It's not necessarily the only way to measure social network size, but its methodology points toward social software as an interesting area for additional study of ranking systems.

As with XBox's TrueSkill, the eGenesis algorithms are overall fairly sophisticated and confusing, perhaps more so than TrueSkill itself. However, unlike TrueSkill the output is very simple: a skill number between 0 and 255. The intricacies are hidden by the system.

### Competitive Ranking Goals

Ultimately, as we mentioned when discussing Days of Wonder, any ranking system has to be measured by what it's trying to do and how well it does that. ELO and similar numerical, long-term ranking systems, are most likely trying to achieve one of three goals:

**Hierarchy:** Players are divided into hierarchies of success, giving players goals to constantly strive for and ways to measure their success (or failure).

**Matching:** Players can play with other players at their same skill level, rather than having to play beginners or experts who are much better than they are. This generally increases everyone's enjoyment. For computer games, the complexity of a matching system can be largely moderated by the computer, thus ensuring better competition.

**Handicapping:** If players do play against others of different skill levels, the better players can be handicapped in automatic, appropriate ways for the game in question, again increasing the fairness of games and everyone's enjoyment. For instance, someone ranked 3-kyu in [Go](http://en.wikipedia.org/wiki/Go_%28board_game%29) playing a less experienced 7-kyu player would give him a starting [4 stone advantage](http://en.wikipedia.org/wiki/Go_handicap) to make for better competition.

The ELO system may be a good matching system, which allows players to easily find other players of their same skill level and play against them. However it doesn't provide any way to handicap players, nor would the ELO method necessarily be a good one to analyze handicaps (and conversely a [golf handicap](http://en.wikipedia.org/wiki/Golf_handicap) might not do a good job of finding like players nor measuring players' ability in a hierarchy).

More recently the XBox system has stated that it's explicitly for matchmaking, with the goal being to always try and match up players at nearly the same skill level. It's also used for hierarchy (or "leaderboards" as it's described in the TrueSkill docs), but that's clearly a subsidiary purpose.

All of these systems would be ineffective for measuring a winner in a live event, which is a very different goal:

**Tourney:** A single player is listed as an absolute winner, the "King of the Hill". Often, second, third, and fourth place winners are measured too.

And, the systems we've discussed thus far may not be useful for measuring privileges, yet another goal:

**Threshold:** The best ranks of players can be given special privileges, including the ability to create games and form tournaments. Alternatively, they can be given privileges totally outside the game, again giving them something extra to strive for.

For each of these additional goals we may need to consider very different ranking systems, not just variations of ELO.

### Different Themes: Tourneys

<a href="https://web.archive.org/web/20080219224023/http://www2.kumc.edu/itc/staff/rknight/tourneys.htm"><img width="150px" style=" margin-right:15px" align="right"  src="{{ site.url }}{{ site.baseurl }}/assets/images/tournament_1.png" alt="tournament_1"/></a>There are a number of well-known tournament types which can be used to create a "King of the Hill" ranking.

The simplest is the [single-elimination tournament,](http://en.wikipedia.org/wiki/Single-elimination_tournament) where the winner of each competition moves on to compete with other winners, until there is only one. However, this style of tournament is quite cut-throat and is not suited very well to events where the competition may result in a draw, or where chance is a notable factor in the competition. It also has a very subjective factor in the initial [seeding](http://en.wikipedia.org/wiki/Single-elimination_tournament#Seeding) of the rounds. The single-elimination tournament also does not rank the losers. However, by having the losers compete with each other in a [Swiss-style tournament](http://en.wikipedia.org/wiki/Swiss_system_tournament), the relative strengths of the players can be ranked.

<a href="https://web.archive.org/web/20080219224023/http://jsoo.home.mindspring.com/articles/formats/"><img width="230px" style=" margin-right:15px" align="right"  src="{{ site.url }}{{ site.baseurl }}/assets/images/pseudodoubleelimination_1.png" alt="pseudodoubleelimination_1"/></a> An improvement is the [double-elimination tournament](http://en.wikipedia.org/wiki/Double-elimination) which is now one of the best known tournament systems in sports. Players compete in series of two-player matches, and a player has to lose twice before he's eliminated. This is done through a system of winner and loser brackets, wherein people drop from the winners' brackets to the losers' brackets when they lose once, and drop out altogether when they lose twice.

One problem with standard double-elimination is that there are unusual situations where a significantly inferior player can still make it to the final round, or the last player to remain undefeated can lose only once and still be eliminated. These can be addressed through variants such as face-off (requiring the last two remaining competitors to compete _again_ if the undefeated team is defeated for the first time in the finals) or by [reconfiguring the loser's brackets](http://jsoo.home.mindspring.com/articles/formats/).

<a href="https://web.archive.org/web/20080219224023/http://www.wscgames.com/"><img width="125px" style=" margin-right:15px" align="left"  src="{{ site.url }}{{ site.baseurl }}/assets/images/wsc_1.png" alt="wsc_1"/></a> [Round-robin tournaments](http://en.wikipedia.org/wiki/Round-robin_tournament), such as official [Scrabble Tournaments](http://www.wscgames.com/2005/build/standing/1/topten.html) involve every player playing a set number of games (24 in the 2005 World Scrabble Championship), facing opponents with similar win-lose records. They then ultimately rank players by their win-lose ratios.

The advantage of these sorts of tournament over an ELO-style ranking is that they're easily understandable and seem fair. In addition, they measure ranking in a much more topical manner: how well someone is playing during a singular instant, rather than over a longer career. As a result they work much better for a live tournament.

### Different Themes: Thresholds

As we discussed in our original article on Collective Choice, thresholds are ranking barriers above which members get a special ability--or alternatively levels below which members lose a special ability. They can also act as another goal for a ranking system.

<a href="https://web.archive.org/web/20080219224023/http://www.usgo.org/"><img width="120px" style=" margin-right:15px" align="right"  src="{{ site.url }}{{ site.baseurl }}/assets/images/gosmall.jpg" alt="gosmall"/></a> In the game of Go there are both [amateur](http://en.wikipedia.org/wiki/Go_ranks_and_ratings#Pro_and_amateur_ranks) and [professional](http://en.wikipedia.org/wiki/Go_ranks_and_ratings#Professional_strength) players. Although they aren't technically in the same [hierarchy of rankings](http://www.cns.nyu.edu/~mechner/go/kyu.html), the highest Go amateur ranking  (7 dan) is approximately equal to the lowest Go professional ranking (1 dan), forming a de facto threshold.

<a href="https://web.archive.org/web/20080219224023/http://www.uschess.org/"><img width="120px" style=" margin-right:15px" align="left"  src="{{ site.url }}{{ site.baseurl }}/assets/images/uscf_1.png" alt="uscf_1"/></a> Likewise the United States Chess Federation uses their ELO rankings to denote [Chess Masters](http://en.wikipedia.org/wiki/Chess_master). Anyone who achieves 2200 UCSF is given a National Master threshold ranking and anyone who maintains it for 300 games is given a Life Master threshold ranking.

<a href="#"><img width="120px" style=" margin-right:15px" align="right"  src="{{ site.url }}{{ site.baseurl }}/assets/images/acblopt2_1.gif" alt="acblopt2_1"/></a> The [American Contract Bridge Association](http://www.acbl.org/) uses a threshold system where you have to win a certain number of tournaments and thus earn [masterpoints](http://www.acbl.org/about/honorTitles.html) in order achieve official rankings such as "section master". Furthermore, players may earn different "colors" of masterpoints depending the difficulty of the tournament, and some ranks require that you earn at least some specific colored masterpoints in order to meet the requirements for the next threshold.

These thresholds are fairly explicitly based on other hierarchical ranking systems, but this doesn't need to be the case. Since determining the purpose of a ranking system is often the first step in designing it, as we delve further into the area of thresholds we may well find that systems specifically dedicated toward measuring thresholds are more likely to do so well.

In our next article we'll consider among other things the Avogadro reputation system, which manages thresholds in such a way as to prevent cheating.

### Conclusion

There's actually a lot of variety in ranking systems, and even though we'd like them to be totally objective, various subjective elements often creep into these systems. In addition, there's a lot of variety in what ranking systems can do. For competitive systems, hierarchy, privilege, matching, and handicapping are some of the top purposes of ranking. Determining what a ranking system is going to do is a necessary first step in designing the system, as different systems will accomplish various goals to a better or worse degree.

ELO, in several variants, is the best studied and most used competitive ranking system. It works particularly well as a matching system. However, even ELO has flaws in it, among them: issues with new player rankings; its core two-player basis; its lack of provisions for teams; a few minor subjective elements; and problems with cheaters. New systems continue to be rolled out on the Internet to resolve these issues, and overall, it's an area of interesting new study.

Tournament systems and threshold systems offer a few good examples of competitive ranking systems with very different purposes, underlying the need to understand what you're doing before you do it.

Ranking systems also lay very near yet another type of Collective Choice: reputation systems. We briefly addressed reputation systems when talking about threshold systems and will return to this in our next article.

* * *

_Related articles from this blog:_

> * _[2005-12: Systems for Collective Choice](/2005/12/systems_for_col.html)_
> * _[2005-12: Collective Choice: Rating Systems](/2005/12/collective_choi.html)_
> * _[2006-08: Using 5-Star Rating Systems](/2006/08/using_5star_rat.html)_
> * _[2007-01: Experimenting with Ratings](/2007/01/collective_choi.html)_

Related articles from Shannon Appelcline's [Trials, Triumphs & Trivialities:](http://www.skotos.net/articles/show-column.phtml?colname=TTnT_)

> * _[#192: Managing User Creativity, Part One](http://www.skotos.net/articles/TTnT_/TTnT_192.phtml)_
> * _[#193: Managing User Creativity, Part Two](http://www.skotos.net/articles/TTnT_/TTnT_193.phtml)_
> * _[#196: Collective Choice: Ratings, Who Do You Trust?](http://www.skotos.net/articles/TTnT_/TTnT_196.phtml)_
> * _[#198: Collective Choice: More Thoughts About Ratings](http://www.skotos.net/articles/TTnT_/TTnT_198.phtml)_

### Comments

A data point on ELO cheating for you: Yahoo! Games uses ELO rankings for several their two-player games. Before recent abuse mitigation changes, some people used robot to accumulate scores in excess of 6,000,000 points. The abuse-the-ranking game had become a totally seperate competition. For now, Yahoo! has capped the ELO scores at 3,000 (I think.) This removed most of the cheating incentive.

[F. Randall Farmer](http://www.fudco.com/habitat) 2006-01-05T13:46:18-07:00

In the slashdot discussion of this blog entry http://games.slashdot.org/comments.pl?sid=173988&threshold=0&mode=flat there was an interesting link to beatpaths.com, which is sort of a tourney system for when you can't complete a full set of round-robin or double-elimination competitions, as what happens in NFL during the fall season. What is also interesting to me is that it introduces a goal for ranking systems that I'd not thought of before -- prediction. The purpose of the beatpath systems is actually focused on predicting the outcome the next set of the weekend games.

[Christopher Allen](http://www.LifeWithAlacrity.com) 2006-01-14T14:31:30-07:00

No mention of Glicko and Glicko2?

[Stephen Waits](http://swaits.com/) 2006-01-15T08:57:38-07:00

There's a ranking scheme that Mark Newman from the U of Michigan did for college football, which Yahoo Search turned up a pointer to here: http://www.sciencenews.org/articles/20051112/mathtrek.asp quoting: Physicists Juyong Park and M.E.J. Newman aimed for a ranking system that's fast and easily understood by fans (in contrast to the cumbersome, opaque BCS formula). They based their ranking method on the notion that, if A beats B, and B beats C, then A also beats C, even if it may not actually play C. Hence, the method counts both direct wins by beating a team and indirect wins by beating a team that beat another team. (end quote) You end up with a directed graph of teams as nodes and games as edges, and compute a function of that graph that is related to a centrality metric.

[Edward Vielmetti](http://vielmetti.typepad.com) 2006-02-02T22:18:39-07:00

This article is a great survey of the subject! I'm working on the PvP ranking system for another game with some unique problems, because the teams in a PvP match can be of disparate size and widely differing power levels, which are then balanced so that wildly mismatched teams (ignoring relative rank at PvP for the moment) are actually reasonably matched. It starts here: http://ncanson.livejournal.com/3938.html

[Matthew Weigel](http://ncanson.livejournal.com/) 2008-01-31T09:55:58-07:00

<!-- [Social Software](/tags/social-software/) [User Interface](/tags/user-interface/) [Web/Tech](/tags/web/tech/) [ranking](/tags/ranking/) [competition](/tags/competition/) [collective choice](/tags/collective-choice/) [algorithmic ranking](/tags/algorithmic-ranking/) [elo](/tags/elo/) [days of wonder](/tags/days-of-wonder/) [ticket to ride](/tags/ticket-to-ride/) [xbox 360](/tags/xbox-360/) [xbox live](/tags/xbox-live/) [trueskill](/tags/trueskill/) [statistics](/tags/statistics/) [uncertainty](/tags/uncertainty/) [a tale in the desert](/tags/a-tale-in-the-desert/) [egenesis](/tags/egenesis/) [egenesis ranking system](/tags/egenesis-ranking-system/) [social network](/tags/social-network/) [ranking goals](/tags/ranking-goals/) [heirarchy](/tags/heirarchy/) [matching](/tags/matching/) [handicap](/tags/handicap/) [handicapping](/tags/handicapping/) [tourney](/tags/tourney/) [tournament](/tags/tournament/) [threshold](/tags/threshold/) [single-elimination](/tags/single-elimination/) [double-elimination](/tags/double-elimination/) [psuedo-double-elimination](/tags/psuedo-double-elimination/) [face-off](/tags/face-off/) [round-robin](/tags/round-robin/) [go](/tags/go/) [chess](/tags/chess/) [bridge](/tags/bridge/) [football](/tags/football/) [golf](/tags/golf/) [grand master](/tags/grand-master/) [grandmaster](/tags/grandmaster/) [life master](/tags/life-master/) -->

Life With Alacrity

© Christopher Allen