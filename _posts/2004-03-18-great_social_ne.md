---
layout: post
title:  Great Social Networking Posts
date:   2004-03-18 08:05:31 -0700
# image:  02.jpg
# tags:   Home
---

While I've been out attending the SXSW Music, Movie and Interactive Conference there has been a flurry of high-quality postings about Social Networking.

Unlike many of my fellow bloggers, I find it difficult to post meaningful blogs while I'm on the road. It has been my policy in my own blog postings to also be "high-signal, low-noise", so normally I don't just post links without solid additional commentary, however, I'm making an exception this time because of the quality and depth of these entries.

How Do We Categorize Relationships
Clay Shirky writes in Many to Many RELATIONSHIP: A vocabulary for describing relationships between people which is a commentary on a new proposal for mapping relationships in FOAF (see also my previous blog on FOAF):

Here, just in case you were wondering, is how you should be characterizing your relationships with one another:

friendOf, acquaintanceOf, parentOf, siblingOf, childOf, grandchildOf, spouseOf, enemyOf, antagonistOf, ambivalentOf, lostContactWith, knowsOf, wouldLikeToKnow, knowsInPassing, knowsByReputation, closeFriendOf, hasMet, worksWith, colleagueOf, collaboratesWith, employerOf, employedBy, mentorOf, apprenticeTo, livesWith, neighborOf, grandparentOf, lifePartnerOf, engagedTo, ancestorOf, descendantOf, participantIn, participant

Describing relationships with a controlled vocabulary can sound credible right up to the moment you see the vocabulary, but this thing is a mess.
...
The RELATIONSHIP list should make it obvious that explicit linguistic clarity in human relations is a pipe dream. It probably won’t though — the madness of the age is to assume that people can spell out, in explicit detail, the messiest aspects of their lives, and that they will eagerly do so, in order to provide better inputs to cool new software.

Make sure you read the comment's in Clay Shirky's blog entry -- some good discussion.

Ian Davis writes a response to Clay's posting in Clay Shirky on Relationship:

There are a number of themes in Clay's post. The primary theme appears to be one of completeness: Clay's thesis is that the vocabulary is incomplete because it doesn't provide properties to model composite relationships: what if you are employed by a colleague you collaborate with?. Clay seems to be implying that he expects the terms to be exclusive. Of course they're not. It's perfectly meaningful to assert that Jane employedBy John and Jane collaboratesWith John. RDF supports this kind of assertion and you can also express it with the HTML method outlined in the vocabulary.
...
Obviously I'm pleased that Clay has taken the vocabulary seriously enough to critique in detail. Somehow the thought that everyone would ignore it caused me more concern than the fear that everyone would hate it.

Despite all the obvious thought Clay put into his piece, he still managed to overlook the raison d'etre for the relationship vocabulary. Indeed it's the raison d'etre for all vocabularies. Without these vocabularies, incomplete and imperfect as they are, we would be mute in the machine readable web, unable to express ourselves in any meaningful way. You only have to look at the etymology to realise that vocabularies give you a voice.

Like Clay I too am concerned with this relationship proposal, for a variety of reasons.

First, I'm not sure that I like the "negative" relationships. There is a good argument against using negative relationships in the XFN Background:

Negative relationship terms have been omitted from XFN by design. The authors think that such values would not serve a positive ends and thus made the deliberate decision to leave them out. Such terms (we won't even bother naming them here) while mildly entertaining in a dark humor sort of way, only serve to propagate negativity.

The authors do not deny that such negative relationships exist in the real world today. Of course they exist. However, we see no need nor benefit to standardizing such relationships and capturing them in a form which would spread on the Web. There is enough hatred in the world. We should work to eliminate hatred, not to spread it.

And we do realize that by creating XFN and the mechanisms it uses (XMDP), we have opened a Pandora's box, and have made it easier for those that would create and propagate negative relationships. We can only hope that our positive creation wins out over any such negative creations.

Secondly, I am uncomfortable with both the relationships in FOAF and parallel ideas in XFN because they in both proposals these are "exposed" publicly. I am comfortable with saying that I "knowOf" someone, but when forced to categorize publicly everyone even more precisely, I become uncomfortable. Am a I committing a faux-pas when I say that I am a "friendOf" someone when they think I'm a "closeFriendOf"?

Lastly, I'm concerned about complexity -- once you start down the slippery slope of defining relationships, things can get incredibly complex. Even if don't include concerns about ethnocentricity (as Michael Bauser writes), there just seems to be no end in sight to how specific you might be required to be. Becoming more specific typically results in more precision, but in this case, as these are very fluid human (or even primate) definitions, wrought with emotion, may result in them being less precise. Maybe the real answer should be much simpler four: knowsOf, professionalColleagueOf, personalFriendOf, and shareFamilyWith.

Are Social Networks Useful?
Judith Meskill asks in Musings On Autonomic Social & Knowledge Networks:

If you utilize one or more of the current entrants in this swell of online SNS offerings [such as LinkedIn, Friendster, Orkut, Ryze, and/or Tribe] - what value, if any, do you derive from them? And, harkening back to the citation with which I started this post, has one [or more] of these services assisted in helping you to successfully reduce the 'traffic congestion' at the 'intersections' in your life? And, in closing, any insights, comments, or ponderings on the recent and future blurring of lines between 'wetware,' 'software,' and 'hardware' in an infinitely connected wireless world?
Stuart Henshall answers in Unbound Spiral Social Networking is Broken:

This slightly facetious statement: "My social networks are broken... at least I think they are." reflects my conclusion that the social networks I've been playing in are for the most part associative networks. While they have a social element the socializing for the most part takes place by blogs, forums, IM / e-mail, phone and in face to face visits.

...

It's time to put a stop to categorizing these "things" as social networks. Call them "Associative Networking Tools" or "Structured Association Tools" or something similar. Then you can create a bucket for them. The reason there is no real business model is they are just part of / or component towards building our capabilities to enhance "presence" and connectivity.

What have we learned.

We don't socialize rather only associate through the Orkuts while we socialize using messaging, telephone and face to face visits.
The opportunity to connecting through friends is much greater than generally understood. Some successes have been achieved.
Virtual connections mean managing ones connections and presence has never been more important.
Structured services are creating problems where there were none before. From categories to access. And designating "artificial" forced levels of buddies or friendship.
Fragmenting association systems does not enable better connections.
Integration on to my desktop (address book / IM systems) at minimum and preferably into my cellphone is required for there are few you can synch with and while one can upload addresses you can seldom download.
The sites themselves are seldom responsible for the association, the connective knowledge is broader than the networking sites. eg blogs, blogrolls, online forums etc.
Denise Klarquist writes in SNAM - Too much of a good thing? (via Dinah Mehta):
Each time I'm invited to join or add someone (frequently unknown to me) to my Linkedin network, or asked to update my contact information via Plaxo (again, usually by someone I barely know) I wonder how far my online social network extends. And how useful it really is. I'm still intrigued and excited by the possibilities of online social networking. But I'm hoping to see more of the benefits before the noise dampens my enthusiasm.
Chris Corrigan offers a similar concern in a comment in Dinah Mehta's blog Social Networking - Too Much Noise?:

"Seems to me that social networks have a hard time existing in the absence of a reason to do so. I have played around on Ryze and Orkut and to be honest they hold no glamour for me. I have a number of real life social networks from whence my business comes, and my weblog provides me with another social network from which I derive a lot of learning.

But I could never find a reason for the Ryze's and Orkuts of the world. And without a reason to network, networking becomes just noise.

One application for these types of things that I am working with a little is using social networking software to support emerging Aboriginal leaders here in British Columbia Canada who are working on interesting things in remote and far flung communities and who will really benefit from have some contact with each other.

But I wouldn't dream of inviting them to Ryze. Interesting, eh?"

SXSW Social Networking Transcripts
Fast Company blogger Heath Row has been doing a fantastic job capturing transcripts from sessions here at the SXSW conference, including:

Friendster founder Jonathan Abrams SXSW keynote What the Heack is Social Networking.
Transcript of The Aesthetics of Social Networks.
Transcript of Ridiculously Easy Group Forming.
Transcript of Ethan Watters' talk on Urban Tribes and Social Dark Matter
.
Comments
Great Post, Chris. I linked to it and added a comment. <http://eureksterblog.blogspot.com/2004_03_18_eureksterblog_archive.html#107962521571269734>

Peter 2004-03-18T08:21:26-07:00
original layout
