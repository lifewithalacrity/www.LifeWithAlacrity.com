---
layout: post
title:  Systems for Collective Choice
date:   2005-12-01 16:03:26 -0700
image:  peoplearoundthesun.gif
# tags:   Web/Tech
---

by Christopher Allen & Shannon Appelcline

[Shannon Appelcline is a friend and colleague of mine at Skotos, an online game company. Over the last few years we've had many discussions about how decisions are made, and how our society collectively makes choices. The origin of these discussions have varied from "what makes this board game work?", to "how can we give our players more control of our online games?", to "how do we make decisions in our company?", and of course "how did we collectively make such a mess of decision making in America?". This article, and some followup articles, summarize our thoughts on these topics, and will be jointly posted in Shannon's Trials, Triumphs & Trivialities online games column at Skotos.]

 Collective choice systems have been around for a long time. Since at least the birth of democracy in ancient Greece people have made joint decisions about important issues, and since at least the knightly tournaments of the late Middle Age people have competed to be ranked against their peers. Today Western culture especially values diversity of input when implementing any type of choice, believing that wide input from a variety of people provides the fairest result.

The Internet expands this long history of collective choice. However, as we bring collective choice systems onto the Internet, quantifying and programming them, we discover the need to be more analytical and more methodical in the techniques used. Thus we're beginning to learn that we don't know nearly as much about these collective choice systems as we should. There is a need to analyze and study them further, to understand their strengths and weaknesses, and to evaluate their social impact. Fortunately, the social software and online games on the Internet provides the perfect petri dish for doing so.

Before any analysis can occur, however, there is a need for a categorization of systems and a definition of terms. That is the purpose of this article: to lay out at least some of the ways in which collective choices can be made, to organize them, to define them, and to briefly consider them.

Broadly, there seem to be three methods of collective choice, divided by the intended result: selection, opinion, or comparison.

Selection Systems
Selection systems allow for the purposeful choice between multiple items. There are many types of selection systems, but two in particular, representative systems, deliberative systems, and consensus systems are worth noting.

19thamend Representative Systems: In a representative system, individuals cast a ballot for someone who will represent their interests. They're by definition voting systems and the heart of any Republican system of government. When you're voting for a president, prime minister, senator, congressman, director, or board member, that's representative voting

In most representative voting a winner is selected by plurality, meaning the winner had more votes than any other candidate. This works well in a simple two-member election, but begins to fall apart if there are multiple candidates, because similar candidates can steal votes from each other, and thus allow a candidate with less popular ideas to be elected.

The simplest solution is to require a majority victory, meaning that one winner must have at least 50% of the votes. Some places in the United States use this system for their representative elections, holding a first election, eliminating all but the two biggest vote-getters, then holding a new election between these two.

Another solution is a primary-based election system, wherein all like-minded candidates compete against each other before participating in the real election. This requires buy-in from all like-minded candidates, however, and recent U.S. elections with third-party candidates like Ralph Nader and Ross Perot show the flaws in a voluntary primary system.

Many other types of voting systems are possible, most of which allow voters to select multiple candidates at the same time. These systems then eliminate the lowest ranked candidates and give their votes to others based upon those voter selections.

 Instant Runoff Voting, or IRV, is a fairly commonly used multiple candidate system (though not necessarily the best one). It's technically a single transferable vote preferential voting system. Wikipedia describes the process like this:

Each voter ranks at least one candidate in order of preference.
...
First choices are tallied. If no candidate has the support of a majority of voters, the candidate with the least support is eliminated. A second round of counting takes place, with the votes of supporters of the eliminated candidate now counting for their second choice candidate. After a candidate is eliminated, he or she may not receive any more votes.

This process of counting and eliminating is repeated until one candidate has over half the votes.

It's simple to understand, but also flawed. That's because every voting system ultimately has some flaw in it, as is evidenced by the fact that given the same conditions the different systems will often declare different winners. Different systems may also allow voters to "game" the system in different ways. This is often called tactical voting or strategic voting. Similar to analyzing various "attacks" when studying a cryptosystem, looking at which tactical voting approaches each voting system is vulnerable to helps you evaluate the voting systems.

For instance, one type of tactical voting that can be used against an Instant Runoff Vote is the push-over strategy, which Wikipedia describes as this:

Push-over is a type of strategic voting in which a voter ranks a perceived weak alternative higher, but not in the hopes of getting it elected. This primarily occurs in runoff voting when a voter already believes that his favored candidate will make it to the next round - the voter then ranks an unpreferred, but easily beatable, candidate higher so that his preferred candidate can win later. A United States analogy would be voters of one party crossing over to vote in the other party's primary to nominate a candidate who will be easy for their favorite to beat.

For example, in an IRV election between Bush, Gore, and Nader, Democrats might rank Nader over Bush. The hope would be that this would give Nader enough votes to keep him from being eliminated, thus knocking Bush out instead in the first round. Afterward the Republican Bush votes transfer to the less progressive Gore, rather than the fringe Nader, allowing Gore to beat the "pushover" Nader when they couldn't have faced Bush in a straight-up fight.

There several different tactical voting "attacks" against various representative voting systems. One of the technically better multiple-candidate voting methods is the condorcet method for voting. It's immune to most tactical voting strategies and more people would consider its result "correct", but unfortunately it is much harder on the voters, who have to rank every single candidate. Maybe if we can create a better Internet user-interface to condorcet voting we can make this more sophisticated representative voting system more broadly available.

Deliberative Systems: In a deliberative system, individuals directly make a decision, rather than selecting a representative to do so. Deliberative systems do not have to include voting, and the subcategory of consensus systems described below technically don't, however most modern deliberative sytems do. A deliberative system is the heart of true democracy. Traditionally it's been relatively unfeasible because voters were not expected to be educated enough to make governmental decisions and because they didn't have the time or capability to regularly decide on issues. The spread of the Internet alleviates at least the latter problem, since millions of people can now simultaneously decide on any issue if they so desire.

In the United States the best known deliberative system is the initiative system found in some states, including California. It allows for issues to be put directly before the voters through the submission of sufficient signatures, and then allows the voters to pass or fail those issues, based on either plurality (most votes), majority (at least 50% of votes), or else super majority (some percentage of votes in excess of 51%). In California, for example, 66% approval is required for new tax initiatives.

Constitution_signingThe United States constitution defines a large and very complex deliberative system. It creates three bodies of government to support deliberation and voting, and uses a checks and balances systems in order to allow different branches to have different effects upon a vote. The main voting is done by the legislature, which requires two pluralities from two different groups of people to pass a vote. Then the executive branch has a singular opportunity to veto legislature, which then requires a super majority (here, 66%) to override that veto. Once a law is established, the judicial department may by plurality vote to declare that legislation unconstitutional, but that may be overcome by an even greater super majority (typically, 66% of each legislature + 75% of the state governments) who want to amend the constitution.

The constitution also shows how deliberation can span beyond simple voting because of the fact that it includes specific rules for how to debate, when debate can be closed, etc. In today's very fractured congress, however, it's unclear if individuals ever are actually swayed by deliberations in the floor of the legislature, or if they've already decided to follow their party lines or their specific interests, long before they entered the Capitol buildings.

A smaller example of a true deliberative system, based on guiding discussions as much as holding votes, is found in Robert's Rules of Order, a guide for conducting meetings. These rules detail explicit methods not just for voting, but also for the deliberation and discussion surrounding the voting. Various majority and minority votes can be taken to allow for certain actions.

Because deciding directly upon ideas rather than just voting for representatives can have a greater effect upon a community, the deliberative systems may need to be more complex to avoid abuse, as evidenced by the complexities of the U.S. Government and Robert's Rule of Order. However, these very complexities can make these systems more prone to purposeful gaming. The benefits and deficits of more complex deliberative systems have not yet been fully studied, nor have there been as much analysis of "attacks" against them.

Consensus_1Consensus Systems: In consensus systems people jointly come to a consensus as a group through group interactions. This sort of decision making theoretically avoids the "tyranny of the majority" and likewise can produce more informed decision making. It's a variant of the broader deliberative systems, but one with more group and less individual power.

One example of consensual selection is cabinet government as laid out under the Westminster System. Wikipedia describes it as follows:

Members of the Cabinet are collectively seen as responsible for government policy. All Cabinet decisions are made by consensus, a vote is never taken in a Cabinet meeting. All ministers, whether senior and in the Cabinet, or junior ministers, must support the policy of the government publicly regardless of any private reservations. If a minister does not agree with a decision he, or she, can resign from the government; as did several British ministers over the 2003 Invasion of Iraq. This means that in the Westminster system of government the cabinet always collectively decides all decisions and all ministers are responsible for arguing in favour of any decision made by the cabinet.

Quaker-based consensus offers a similar example. Herein a facilitator helps to identify disagreements and agreements to move a discussion forward until an end result is embraced by all individuals.

As a final note, it's important to differentiate consensus from coercion. The end result of unanimity isn't the sole definition of a consensus system, nor is it entirely required. What is required is a more open and thoughtful selection process.

Opinion Systems
Opinion systems are a clear subsidiary category to selection systems. An opinion system's main use is as a decision indicator, to show how people will decide or did decide in a representative system, a deliberative system, or both. Current opinion systems tend to be oriented toward actual votes, as opposed to more freeform selection systems (though the delphic polling system shows a more freeform version of the category itself). Opinion systems tend to be push-based (meaning people are asked for their opinions rather than actively offering them), but this isn't required.

All opinion systems tend to have the same general problem, which is figuring out how to use scientific means to determine the actual results of a decision. This means massaging respondent numbers to offset categories of people more or less likely to vote to try and generate the actual results. For example, one 1998 poll showed that 62% of Republicans were absolutely certain they were going to vote, while only 51% of Independents could say the same. This means that every Republican voter a poll contacted in that year might have been weighted about 1.2x over every Independent contacted. Of course the actual calculations are much more complex than that, since they tend to depend upon traditional voter turnout and lots of analysis, but the core idea is sound, which is that every polled individual should not be considered equal.

All opinion system results tend to be rated with margins of error. The margin of error is a percent spread which the poll is expected to be within, 90-99% of the time (depending on how conservative of a confidence rating is given). If a poll shows that a politician is expected to take 48% of the vote, for example, and the margin of error is 4%, that means he is expected to take 44-52% of the vote with 90-99% surety. Margins of error are typically given much greater importance in the modern media than they should, as they're calculated solely based upon the total number of respondents to a poll.

There are two general categories of opinion systems: pre-voting (subjective) polling systems and post-voting (objective) polling systems. A different type of opinion system, delphic polling, which could apply to either pre- or post-voting systems is also covered. Polling systems not directly related to selection systems are covered later, as subjective rating systems, since they tend to have issues very different from other polling systems, as their goal isn't to try and match the "true" number of an actual vote.

Pre-voting Polling Systems: These are polls made before a vote is cast. They're often called "opinion polls" and tend to be conducted via phone. They try and isolate "likely voters" and determine how they will vote. This question of voter likelihood is one of the first issues with a pre-voting system, because there's no guarantee that the polled people will actually later vote. Likewise, pre-voting systems have to accommodate "undecided voters" and the fact that no voter has ever truly made up their mind until they cast their final ballot. Unlike post-voting polling systems, pre-voting systems also have considerable more possibility for bias (which is not accounted for by margins of error), based upon how questions are asked, in what order, and with what additional text.

Exitpoll Post-voting Polling Systems: These are polls taken after a vote is cast. They're typically called "exit polls", as most are conducted as people are leaving a "polling" station (where they cast a vote). One would expect these to be much more reliable than pre-voting polls, but as the 2004 U.S. Presidential Election showed, exit polls can be wildly inaccurate.

One of the problems with post-voting polling systems, shared with pre-voting systems, is that the results must be manipulated to make sure that respondents to the poll match the percentages of those constituencies in the overall populations. For example, in the 2004 exit polls it appears that women were initially overrepresented in exit polls, and because of increased black turnout it appears that blacks were underrepresented in the exit polls. It can easily be seen how either of these misrepresentations could cause notable changes in an exit poll result.

When conducted & matched correctly, exit polls are supposed to be quite reliable.

Delphiamphitheatre Delphic Polling Systems: An interesting polling method applicable to all sorts of opinion systems is the "delphi poll". This is a specific method of polling which is iterative and anonymous and which supports confidence ratings and feedback. The general idea is that people are polled on a question using not just binary responses, but a full confidence rating (e.g., you would state that you are 60% sure that Bush would be elected, rather than stating that you think Bush would be elected). After polls are collected, the anonymous results--or at least a summary of those results--are shared with the participants, who then poll again. This iterative process continues until a consistent answer is settled upon. By incorporating feedback into the polling process there's the possibility for greatly increased reliability.

In some ways delphic polling systems can be seen as an analogy to consensus systems, since both involve more iterative processes that eventually result in a more commonly-held decision.

Comparison Systems
Comparison systems allow individual items to be measured up against each other. There are three general categories: comparison ranking systems, which are largely objective and which typically rank people; and comparison rating systems, which more often mix subjective and objective opinions, and which more frequently rate things; and reputation rating systems, which again tend to rank people, but also have a subject and objective mix.

Comparison Ranking Systems: In a ranking system, items in a hierarchy (most frequently people) rise or fall based upon specific, objective, and well-known rules. This is the heart of most multiplayer competitive systems.

Chess The ELO System is an example of a ranking system used for two-player games, and is used by the U.S. Chess Federation. Days of Wonder uses a multiplayer variant of the ELO system for their online games. Each system builds a simple distribution of player ratings around a norm (typically 1500 points), then awards or deducts points based upon wins and losses, with the total sum of all points in the system staying constant. Players are then ranked according to their comparative scores.

There are flaws in ranking systems like ELO. For example, two players could collude, with one purposefully throwing games so that his opponent could increase his ranking. Alternatively if a player gets a few lucky victories against good opponents, his rating might temporarily skyrocket above its normative value. However, these tend to be well-known and well-researched problems.

These are numerous other ranking systems which are used for competitions, from double-elimination seeded tournaments (e.g., a tennis tournament) to ranked comparisons based upon win-loss ratios (e.g., baseball standings). Objective rankings are also (less commonly) used to rank items, such as a ranking of cars based upon safety ratings.

Usmc_enlisted_rank_structure

Most ranking systems create a hierarchy of positive rankings (e.g., "best chess players ever"). However, a hierarchy of negative rankings may also most be used, most commonly based on a negative criteria (e.g., "biggest Player Killers (PKers)"). In addition, either direction of ranking can use threshold systems to mark positive or negative rankings that meet a certain criteria. A positive threshold might be a "Grand Master" ranking threshold for anyone with a Chess rating of 2700, while a negative threshold might be a "Player Killer" ranking threshold, for with sufficient "accidental" PKs.

Ranking systems are somewhat removed from the other collective choice systems listed here, since there's isn't a collaborative decision, only a collective result. However their problems & results remain closely related to the more collective rating and reputation systems, hence their inclusion.

 Rating Systems: In a rating system, the value of individual items (most frequently goods) rise or fall based upon the largely subjective judgment of individual users.

Amazon and Netflix are two examples of stores which provide subjective rating systems. Individual users rate items from 1 to 5 stars, then an average user rating is calculated. BoardGameGeek offers a slightly different example because it not only lets users rate individual items, but also ranks items against each other based upon those ratings.

Flaws in these systems are similar to those in ranking systems: low numbers of ratings producing bad rankings, and individual users purposefully biasing ratings. Some mathematical methods may be used to smooth out these issues, among them bayesian averages, which give ratings weight based upon total number of ratings for an item.

The Stock Market offers an example of a different sort of rating system, because there's theoretically some objective basis to it. In a perfect Stock Market system, stock prices are based upon a solid cost analysis, such as a multiplier on yearly revenues or profits. However, as the Internet bubble of the late 1990s conclusively showed, there's also a high irrational component to stock purchases: thus subjective and objective views are combined in the rating (cost) of a stock.

Reputation Systems: Finally, reputation systems are very similar to ranking systems: items in a hierarchy (most frequently people) rise or fall based upon specific and well-known rules. However, unlike true ranking systems, reputation systems instead base their rules for rise and fall upon other user feedback.

The goal of a reputation system is ultimately to create a trust metric that often allows different users access to different powers. We'll be covering reputation systems a bit more thoroughly in a couple of weeks.

Conclusion
There are a variety of ways to measure the collective choices of a large group of people. We've outline nine here: representative, deliberative, and consensus selection systems; ranking, rating, and reputation comparison systems; and three varieties of opinion systems. When developing social software it is important to understand the difference between these broad categories of systems and to use lessons already learned from the appropriate category in your own social software designs.

Related articles from this blog:

2005-12: Collective Choice: Rating Systems
2006-01: Collective Choice: Competitive Ranking Systems
2006-08: Using 5-Star Rating Systems
2007-01: Experimenting with Ratings
Related articles from Shannon Appelcline's Trials, Triumphs & Trivialities:

## 192: Managing User Creativity, Part One

## 193: Managing User Creativity, Part Two

## 196: Collective Choice: Ratings, Who Do You Trust?

## 198: Collective Choice: More Thoughts About Ratings

Comments
You seemed to leave out consensus methods such as the Quakers and facilitated decision making processes.

Jon Jenkins 2005-12-02T00:08:19-07:00
My intent was more to outline the broad categories of collective choice, then to give all the possible examples within each category. Both consensus methods and facilitated decision making processes fall under the "deliberation systems" category. It is my hope in future articles to dig deeper into each broad category and show more examples of types. Next week hopefully will be comparison rating systems.

Christopher Allen 2005-12-02T00:39:54-07:00
You should take a look at Jeff Vails' writings on rhizome networks as counter weights to [hierchical power structures](http://www.jeffvail.net/2005/08/rhizome-communication-and-our-one-time.html){:target="_blank"} There's a connection between your ideas and his that I can't quite articulate because my mind is focussed elsewhere at the moment. But I shall return.

peter 2005-12-07T17:17:04-07:00
I've made some changes to this blog entry, adding consensus systems under deliberation systems, added reputation systems as a type of opinion system, simplifying some of the category names, and added some links.

Christopher Allen 2005-12-08T13:13:09-07:00
This is an excellent summary, but I feel like I want a comparison table of some kind. Would "information futures market" or the like be a Delphic system? It sure seems more like a consensus measuring device to me. One of the most interesting things about all of these systems is the side effects they have on the decisions made. Binary Votes polorize options. Information Futures Markets encourage results manipulation (by design!)

F. Randall Farmer 2005-12-08T14:24:25-07:00
This is a wonderful overview. Thank you for putting it together! I'd like to suggest one small correction to the description of Condorcet voting, which says "it is much harder on the voters, who have to rank every single candidate". In a Condorcet system, the voters don't have to rank every candidate; they can rank as many or as few as they want (just like IRV), and they can even rank candidates equally (unlike IRV). The Wikipedia article entitled "Condorcet method" describes this. Regarding a comparison of these systems, i've tried to illustrate the behaviour of plurality, approval, IRV, and Condorcet elections at [zesty](http://zesty.ca/voting/){:target="_blank"} , and i hope you will find my method and results interesting.

Ping 2005-12-14T01:33:04-07:00
The problem of choice is outline very well in the book 'The Paradox of Choice' by Bary Schwartz. It provides a great description of some of the other challenges of multi-party elections. I found it very interesting when it got into the psychology of choice regret, and alternative choices.

Randal 2005-12-14T08:48:12-07:00
I agree this is a very interesting article! I notice an (intentional?) lack of coverage of most of the dominant and mature decision-making institutions in our society: markets in general (and specifically institutions such as exchanges -- mentioned briefly -- auctions, fixed-price retail stores vs. haggling bazaars, and so on), risk sharing institutions (e.g. insurance), hierarchical organizations based on the employer-employee and boss-subordinate relationships, the judiciary based on written law, opinion, and precedent, and so on. Of course, it would be very ambitious to tackle these, but it would at least be interesting to try to categorize them according to your taxonomy. Perhaps they are so complex they often fall into multiple categories. The systems you describe abstract a vast amount of diffuse and often tacit information pertinent to a decision into a numerical result. Most economists (particularly Austrian school) would argue that at least on a large scale prices generated by auctions and exchanges generally do this better than other collective decision making systems. On the other hand, many systems for collective choice don't work via an abstract numerical intermediary (e.g. the opinion and precedent system of the judiciary). I suggest that the most important factor in these institutions is the costs involved in eliciting diffuse knowledge and lossily compressing it into a decision which is hopefully nevertheless a reasonably accurate reflection of that diffuse information.

nick szabo 2005-12-15T11:49:05-07:00
At least part of the reason why I didn't strongly highlight markets is that the definition of "collective choice", at least as far as how many academics use it, is all the methods that groups make decisions EXCEPT markets. For instance, from [bsos](http://www.bsos.umd.edu/umccc/){:target="_blank"} "models of individual rational choice behavior to study non-market social phenomena". However, another definition is  ["social choice theory and noncooperative game theory"](http://www.artsci.wustl.edu/~polisci/calvert/PolSci505/){:target="_blank"}, and I might say that markets fall into a subset of noncooperative game theory. Personally I'm not sure why most academics exclude markets, thus I do briefly mention the Stock Market as a subcategory of comparison system. I hope to mention them more in other future articles, in particular, prediction markets as a subcategory of Polling Systems.

Christopher Allen 2005-12-15T12:20:55-07:00
Will you cover, in a future post the forced choice vote? I'd welcome learning about more ways that a group can discuss alternatives (online or in person) then either vote in a priority way (first choice, second choice, etc.) and/ or choose to vote in a first round for "x" number of options then limit the conversation to those options, then perhaps do a forced choice vote. In other words what are some hybrid methods that you (amazing) Christopher might craft that combine: A. Thoughtful conversation to hear all ideas/opinions - without the downsides of : • being prolonged to the point it pains participants and/or • being dominated by one or two "strong" or verbose personalities .....with B. Stages of voting closure that enable all participants to see 'we' are moving to the top choice(s) of the group - another fan of life with alacrity p.s. In addition to the aforementioned, brilliant, The Paradox of Choice, read Smart Choices by Howard Raiffa

Kare 2008-12-30T13:37:36-07:00
original layout
