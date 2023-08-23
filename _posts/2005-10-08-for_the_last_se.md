---
layout: posts
title:  "SynchroEdit: Simultaneous Editing for the Web"
slug:  "SynchroEdit: Simultaneous Editing for the Web"
redirect_from:
  - /2005/10/for_the_last_se/
date:   2005-10-28 16:16:17 -0700
image:  synchroeditmac.png
# tags:   Home
---

For the last several months I've been working on a new open source project that I've been calling [SynchroEdit](http://www.synchroedit.com). SynchroEdit is a browser-based simultaneous multiuser editor, useful for ["same-time" collaboration](http://www.it.bton.ac.uk/staff/rng/teaching/notes/CSCWgroupware.html).

<a href="#"><img width="250px" style=" margin-right:15px" align="right"  src="../assets/images/synchroeditmac.png" alt="synchroeditmac"/></a>
The basic concept is that it allows multiple users to WYSIWYG edit a single web-based document, all at exactly the same time. SynchroEdit continuously synchronizes all changes so that users always see the same version. They can also see each others' changes as they type, see where each user is currently editing, and see each others' changes by color.

SynchroEdit is a tool for "same-time" collaboration, either "same-time, different-place", as in teleconference calls, or "same-time, same-place", during a meeting or a conference. If you've ever used [SubEthaEdit](http://www.codingmonkeys.de/subethaedit/) on Mac OS X, or [MoonEdit](http://www.moonedit.com) for Windows or Linux, or the cross-platform [Gobby](http://gobby.0x539.de/), this is a similar experience. The difference is that unlike those tools you are not limited to just plain text -- character styles (bold, italic, etc.) and paragraph styles (rulers, headers, blockquotes, etc) are synchronized as well. And of course, it all works inside your browser.

SynchroEdit is inspired by my frustration with the lack of an easily accessible cross-platform simultaneous editor. Many times when I've been on the phone with a colleague discussing a draft blog entry, or demonstrating some code, or on a teleconference call with others to discuss a proposal or a standard, or at a conference taking notes with others, I've wanted to have this tool. The rare occasions that we all have been on the same platform and have been able to use an existing tool have demonstrated to me the value of having a good simultaneous editor. Having SynchroEdit available will make it easier for people to have these positive collaborative experiences. 

I have a long history with "same-time" collaboration tools -- back in 1988 I was briefly executive producer at Broderbund for a same-time groupware product called [For Comment](http://www.google.com/search?q=cache:1cDDTqwlqGoJ:www.the-scientist.com/yr1988/jul/software_p22_880725.html+%2Bbroderbund+%2B%22for+comment%22+groupware). Unfortunately, the success of the Nintendo game console forced Broderbund to drop all of their non-consumer product efforts. In the early 90's I worked on several different "same-time same-place" groupware tools for live meetings. Most recently, my game company [Skotos Tech](http://www.skotos.net), created several browser-based "enhanced chat" clients for playing in MUSH-like storytelling games, which are also "same-time".

I personally believe that that this capability should be a fundamental feature of the web, sort of the obvious extension of [Tim Berners-Lee's](http://en.wikipedia.org/wiki/Tim_Berners-Lee) [vision](http://news.bbc.co.uk/1/hi/technology/4132752.stm) of the editable web. Thus my desire to offer this tool as open source, allowing anyone to add this capability to their own software (unlike proprietary editor services such as [JotLive](http://www.jotlive.com) or [Writely](http://www.writely.com/)).

The challenge with offering SynchroEdit as open source is finding a business model -- unlike an application like [SubEthaEdit](http://www.codingmonkeys.de/subethaedit/) or a service like [JotLive](http://www.jotlive.com), it is difficult to get revenues from individual users. Instead, we ask for contributions from companies that might find the tool useful, we offer consulting to customize it for specific purposes, and we give these companies public credit for their contributions to the common good.

The first company to step up to the plate is [SocialText](http://www.socialtext.com), an enterprise wiki company. Clearly, being able to offer this capability to their customers will give them added value, and they already have a history of using open source with their support of [Kwiki](http://www.kwiki.org/) and [Wikiwyg](http://www.wikiwyg.net/).

The second supporter is venture capitalist and blogger [Joichi Ito](http://joi.ito.com/). He is is particularly well known for his own experiments with "same-time" collaboration. He runs a continuous #joiito IRC chat room, active 24 hours a day with hundreds of his friends. He also has done many live "same-time" experiments with chat backchannel during his talks at various conferences.

In addition to to financial support of SocialText and Joichi Ito, I have some offers of help from the [Bainbridge Graduate Institute](http://www.bgiedu.org), who plan to use it in its socially responsible and environmentally sustainable MBA program, and we've also taken advantage of some code developed by [Skotos](http://www.skotos.net/).

The development of SynchroEdit is being led by Kalle Alm, a young Swedish coder I met when he was creating an online game at Skotos. Skotos has long had the vision of having games created by its members, and Kalle Alm was the first member to create a game completely from scratch using Skotos' tools.

We are seeking more financial contributions so that we can accelerate development. Currently SynchroEdit only works in Mozilla/Firefox, and I anticipate that making it work with Internet Explorer may be quite difficult, so we'll need more partners to help.

<img width="230px" style=" margin-right:15px" align="left"  src="../assets/images/christopher_allen_web2point1_brainjam.png" alt="christopher_allen_web2point1_brainjam"/>I did a demo of last year's open source project, [EditThisPage](http://www.EditThisPage.net), and of the SynchroEdit alpha at [Web 2.1 BrainJam](http://www.web2point1.org/) last week; there are two videos available from Enric Teller's vBlog: [Presentation](http://www.cirne.com/vlog/2005/10/10/web-21-a-brainjam-christopher-allen-presentation/) and [Q&A](http://www.cirne.com/vlog/2005/10/10/web-21-a-brainjam-christopher-allen-qa/). 

If you are interested in learning more, visit the [SynchroEdit website](http://www.synchroedit.com). We have additional information on the program, a [developers wiki](http://wiki.synchroedit.com), as well as a sandbox that you can play in to demonstrate SynchroEdit in use.

### Comments

URL: I'm curious about what ways you think this could be useful as a teaching aid? Have you looked into particular implementations or studied existing case studies? (I have studied this a fair amount and I don't think there are existing case studies, especially in the classroom, which is why I ask.. I'm looking at ways in which chatrooms could be incorporated into classroom environments as a backchannel)

[yardi](#) 2005-11-16T11:00:54-07:00

original layout

[Social Software](/tags/social-software/) [User Interface](/tags/user-interface/) [Web/Tech](/tags/web/tech/) [Weblogs](/tags/weblogs/) [Wiki](/tags/wiki/) [synchroedit](/tags/synchroedit/) [simultaneous editor](/tags/simultaneous-editor/) [web editor](/tags/web-editor/) [collaboration](/tags/collaboration/) [same-time](/tags/same-time/) [open source](/tags/open-source/) [alpha](/tags/alpha/) [demo](/tags/demo/) [mozilla](/tags/mozilla/) [firefox](/tags/firefox/) [subethaedit](/tags/subethaedit/) [moonedit](/tags/moonedit/) [gobby](/tags/gobby/) [web2point1](/tags/web2point1/) [for comment](/tags/for-comment/) [jotlive](/tags/jotlive/) [socialtext](/tags/socialtext/) [joichi ito](/tags/joichi-ito/) [kalle alm](/tags/kalle-alm/)

Life With Alacrity

© Christopher Allen