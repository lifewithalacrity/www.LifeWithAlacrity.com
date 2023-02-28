---
layout: post
title:  Dunbar, Altruistic Punishment, and Meta-Moderation
date:   2005-03-17 11:38:19 -0700
# image:  02.jpg
# tags:   Home
---


In my post about the Dunbar Number I offered some evidence on the levels of satisfaction of various group sizes based on some empirical data from online games. There I was able to show that even though the Dunbar Number might predict a mean group size of 150 for humans, that in fact for non-survival oriented groups the mean was significantly less, probably between 60 to 90.

 I also offered a second hypothesis, that there is a dip in satisfaction level of groups at around the size of 15. Unfortunately, I could only offer anecdotal evidence that this threshold existed. My personal belief was that this dip was caused by not enough "attention" being given to everyone and that group gatherings of this size risk becoming too noisy, too boring, too long, or some combination thereof. Yet groups of this size are not large enough to allow for different perspectives (i.e. insufficient requisite variety) or for other group processes to come into play.

I was reading through the current (12 March) issue of New Scientist, and found an interesting table in the article Charity Begins at Homo Sapiens. It stood out to me as it showed a dip approaching zero average cooperation for group sizes of 16 -- almost precisely same place that my hypothesis predicted.

Digging further, I found the original source for this table was published in Nature back in October 2003, in The Nature of Human Altruism written by Ernst Fehr and Urs Fischbacher.

What the chart shows is actually not empirical data from human experiments, but instead data from a game theory simulation of the prisoner's dilemma. This is the classic zero-sum game where if you cooperate, the joint payoff of the players is higher. However, in zero-sum games there is also incentive for the players to cheat by defecting and thus taking less risk. Robert Axelrod showed in The Evolution of Cooperation back in 1985 that in spite of the statistical best individual strategy being that of defection, cooperation inevitably evolves.

Fehr and Fischbacher, in their Nature article, took this idea a bit further by creating 100 independent simulations with group sizes ranging from 2 to 512, and then executing each simulation 1,000 to 2,000 times. Each generation of the "players" was allowed to evolve different strategies of cooperation vs defection, the classic successful strategy being Tit for Tat. They would then evaluate the percentage of players who had cooperative strategies.

If punishment of defections was ruled out, they discovered that over the 1,000+ generations of the simulation that the rate of cooperation quickly crashes, such that at the group size of 8 a little over 50% cooperation evolved, and for groups that are larger than 16 none cooperate.

Next they added to the simulation "Altruistic Punishment". This is the ability for players to punish those who did not cooperate -- however, such punishment is at some cost to the punisher. Earlier game theory research on altruistic punishment has shown that cooperation flourishes if there is some price for punishing defectors -- if you allow punishment at no cost then cheating strategies emerge. This earlier research determined that allowing individuals to punish at some cost that yields them no material gain will paradoxically result in an average gain for everyone.

Adding altruistic punishment to the simulation increased the amount of cooperation that evolved, such that groups with the size of 32 would have 50% cooperation. But even this had limits; at the group size of 128 no cooperation would evolve.

Finally, if they added to the simulation the ability to punish those who did not participate in punishing (i.e. didn't pay the cost to punish defectors), then the percentage of cooperation that evolved was never less then 60%, and in fact got better as groups got larger.

This is a very interesting result. To explain it in different terms, if you have a system that depends on sharing some commons and there are no process or trust metrics, a group as small as 16 may find themselves not cooperating very effectively.

The idea of commons can be as simple as how much speaking time participants in a meeting share. The time that each participant uses during the meeting can be considered the shared "commons". If there are no enforced rules, with a group size of 16 there will inevitably be someone who will abuse the time and speak more than their share.

With some simple rules (some type of process to partition time more fairly), or through some trust metrics (punish those who abuse the commons), larger groups can gain value from cooperating, but even these groups have limits. As long as there is some effort required to punish those who abuse the process, eventually the price for that effort becomes too high, and no one is willing to punish any longer. You see this in moderated discussion groups, where the guardians of the common good have to spend too much time moderating, given the number of people that wish to participate. Moderated newsgroups and early versions of SlashDot moderation had this problem.

The most interesting observation from this simulation is that for larger groups, you needed to have a system to punish those who did not participate in punishing -- or to put it another way, get everyone involved with the process, not just a few. I think that this explains something that I've always wondered about SlashDot's meta-moderation system -- with this feature you grade those who have moderated, and if someone abuses it they will no longer be able to moderate. What I suspect, given these results, is that if you don't participate in the meta-moderation system, you have less a chance of being able to moderate; thus SlashDot has a system that punishes those who are not involved in participating.

I do have some questions based on this simulation -- I would like to see results with more granularity then powers of 2. I'd also like to know the percentage of players participating in punishment -- I suspect that you'll find a very small number of "moderators" are required in the middle graph, even when cooperation evolves successfully. I'm curious as to how many moderators are required to participate in punishing the non-punishers for cooperation to evolve in the third scenario. Also, in meta-moderation this simulation emphasizes punishing the non-punishers -- is that as successful as rewarding the punishers? I'm also interested in investigating some of the further works where Fehr and Fischbacher are among the co-authors, such as this study using MRI (Magnetic Resonance Imaging) that shows that our brain's pleasure systems are activated when we altruistically punish.

I'm sure that the findings of this simulation are not the only reason why there might be a dip in group satisfaction at group sizes around 15, such as I observed. However, it does offer some interesting insights into group size thresholds, both for the threshold at 15 and for threshold of non-survival groups which I've identified as being significantly less then the Dunbar mean of 150. It also shows that for large groups we need to offer not only moderation, but meta-moderation capabilities that involve all the participants in the process.

In summary this research offers me another widget for my social software toolbox: in any group process look for the commons, allow participants to participate in identifing defectors; determine what the costs are for such identification (which may be as simple as requiring some attention or charging for such punishment); and encourage participation in the common good by punishing those who do not participate in seeking out defectors.

Some other posts about the Dunbar Number and group size issues:

2004-03: The Dunbar Number as a Limit to Group Sizes (also some really good comments)
2005-02: Dunbar Triage: Too Many Connections
2005-07: Cheers: Belongingness and Para-Social Relationships
2005-08: Dunbar & World of Warcraft
2005-10: Dunbar Number & Group Cohesion
Comments
URL: For role based community blogging, check out [web assistant](http://go.webassistant.com/wa){:target="_blank"}

Garsett Larosse 2005-03-22T21:09:33-07:00
You may be onto something. The Dunbar number was referred to in the Tipping Point and in some places plays a role in tribal-forming. But for smaller activities the number 15 seems ideal, eg, for a classroom or workshop. If there's under 10 or 12, regardless of the room size people want to bail out because there doesn't seem to be "enough" people. Much over 15 and the group dynamic must change to lecture style as if there were 50 or 100 people.

Pearl 2005-03-23T12:16:59-07:00
URL: Association Football ("soccer") and cricket teams are 11 strong and are organised by a single player, the captain. Rugby Union sides are 15 strong, and the organising job is split: the forwards are led by a "pack leader" who is subject to the team captain. Any significance?

dearieme 2005-03-30T03:16:15-07:00
URL: A superb blog Chris, but just a few errata on the post. First the simulation in Fehr,et al is a multi-person prisoner's dilemma--a public goods game--which is identical to the game in the "research on altruistic punishment" link which I think is a great introduction to the literature. Second, the prisoner's dilemma is not a zero-sum game although often times mis-attributed as such. In zero-sum games, the total payoff in each possible outcome must be the same; thus, your gain must be my loss. The tragedy of the prisoner's dilemma is simply that cooperate is not a good strategy for either player. Third, I think the sentence with the "research on altruistic punishment" link should be "... cooperation flourishes EVEN if there is a cost to punishing defectors." The later part of the sentence is incorrect. However, the result is still paradoxical as under the notion of rationality one would not expect anyone to incur the cost of punishing another without any personal profit. Finally, although this research seems to be one capable of addressing organizational size, it is actually quite incapable of that feat. The number 16 on the graph is really a coincidence of circumstances see the graph in [pdf](http://www.sscnet.ucla.edu/anthro/faculty/boyd/SecondOrderFreeRidePublished.pdf){:target="_blank"} for the impact of parameter values on the model. Actually, coincidence is not quite correct; it was a deliberate selection by the researchers. This literature is designed to unshackle economics from the rational agent paradigm not to address optimal organizational size. I will try to see if there are more pertinent experimental research addressing the Dunbar number question and post them, but I'm somewhat doubtful as the experimental design is still too limited to study such a complex phenomenon. I had thought to try to run such an experiment myself a year ago, but abandoned the idea. I think an econometric analysis of the online games data is probably the most promising course. --an apologetic economist

chinteliu 2005-11-07T03:45:56-07:00
is the supposed cognitive limit to the number of individuals with whom any one person can maintain stable social relationships: the kind of relationships that go with knowing who each person is and how each person relates socially to every other person. Proponents assert that group sizes larger than this generally require more restricted rules, laws, and enforced policies and regulations to maintain a stable cohesion.

Busby seo challenge 2008-07-26T23:03:57-07:00
original layout
