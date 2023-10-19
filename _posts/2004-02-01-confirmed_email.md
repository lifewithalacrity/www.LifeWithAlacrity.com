---
layout: single
title: "Confirmed Email Privacy Hole at Orkut"
slug: "Confirmed Email Privacy Hole at Orkut"
redirect_from:
  - /2004/02/confirmed_email.html
  - /2004/02/confirmed_email/
date: 2004-02-01 17:12:22 -0700
# image: 02.jpg
tags: 
  - Security
  - Social Software
  - Privacy
  
categories:
  - ephemera
class:
  - wide

excerpt_seperator: <!--more-->
permalink: /ephemera/confirmed-email-privacy-hole-at-orkut/
---

Another Orkut user and I have confirmed a privacy hole in Orkut whenever you send a message to someone via Orkut.

For instance, whenever I send a message to anyone in the system that is forwarded by email, in the message headers it will read:

> From: "Christopher Allen" &lt;member@orkut.com&gt;
> Reply-To: "Christopher Allen" &lt;christophera@alacritymanagement.com&gt;;

When someone reads the message in their email software, the "From:" line will be my name but the fake email of &lt;member@orkut.com&gt; -- however, when you reply to it, it will use my real email address. This appears to happen whether or not I have my privacy settings to reveal my email address. For instance, I can set it so that no one (not friends, not friends of friends, only myself) can see my email address, but the address will still be revealed when I send an email

I had reported what I thought was a security flaw when you emailed to "friends of friends" a couple of days ago, but I was mistaken, as I reported in my blog [Insecurity at Orkut](/2004/01/insecurity_at_o.html). However, as I didn't want risk "crying wolf" this time, so my friend and I triple checked this and have confirmed this privacy flaw.

<s>They only way that I know of to avoid this is in your prefences to set that all of your messages should be sent to you via the web, not email.</s> \[Updated: I was wrong, there is no way currently to avoid this other then not using an email address you care about.\]

There are some that will say that this is a feature, i.e. when using email "what good is communicating with someone if there is no chance of a response" -- my answer to this is that an expectation has been set that email addresses can remain private, and if this is to be a feature, then users should be warned before sending an email "Your email address user@domain will be revealed when you send this." More ideally, like other social networking services, the "Reply-to:" should be to a special email address at Orkut that will do the lookup and forward appropriately.

One of the essential problems that Orkut needs to fix very soon is how to report problems like these, and if you are trying to help how to know that these problems exist. I want my criticism to be constructive, but it is very hard when you have no idea what is the best way to offer feedback. I've had many people reply to me in my blog and via email that they feel the same way.

For instance, right now there are 6 Orkut groups about Orkut:

* [What Should Orkut Do?](https://web.archive.org/web/20070503092153/http://www.orkut.com/GLogin.aspx?done=http%3A%2F%2Fwww.orkut.com%2FCommunity.aspx%3Fcmm%3D617)
* [Flaws in Orkut](https://web.archive.org/web/20141224171504/https://orkut.google.com/)
* [Orkut](https://web.archive.org/web/20071106015829/https://www.google.com/accounts/ServiceLogin?service=orkut&continue=http%3A%2F%2Fwww.orkut.com%2FRedirLogin.aspx%3Fmsg%3D0%26page%3Dhttp%253A%252F%252Fwww.orkut.com%252FCommunity.aspx%253Fcmm%253D3982&hl=en-US&rm=false&passive=true)
* [Orkut Design](https://web.archive.org/web/20070202233602/http://www.orkut.com/GLogin.aspx?done=http://www.orkut.com/Community.aspx?cmm=1289)
* [Orkut: Tips, Feedback, ?'s](https://web.archive.org/web/20070525001632/http://www.orkut.com/GLogin.aspx?done=http%3A%2F%2Fwww.orkut.com%2FCommunity.aspx%3Fcmm%3D781)
* [Orkut Members](https://web.archive.org/web/20070525001632/http://www.orkut.com/GLogin.aspx?done=http%3A%2F%2Fwww.orkut.com%2FCommunity.aspx%3Fcmm%3D781)

Which groups should I post this problem to? Which will will be read by the Orkut staff?

As I've said in another of my blog postings [Followup on Orkut](/2004/02/followup_on_ork.html):

> Part of the problem is that even though Orkut is in beta, there is no organized feedback system. For instance they could offer a forum read by the developers, or even better a bug/issues tracking system like TypePad has, or Bugzilla.
> 
> In addition, feedback is a two-way street -- they could do a lot by offering a developers daily blog, or some type of regular announcement of what feature they wanted beta testers to test that day, or even acknowledgement "we already know that is an issue". Also, they need to show respect for good feedback publicly, as that will encourage more good feedback.
> 
> None of this is happening at this time, which means that people get frustrated, which also makes it easy rumors and conspiracy to spread. I want to be a constructive critic, but Orkut makes it hard for me to be so.

For now, I recommend that these type of bug reports go into [Orkut Beta](https://web.archive.org/web/20070525001632/http://www.orkut.com/GLogin.aspx?done=http%3A%2F%2Fwww.orkut.com%2FCommunity.aspx%3Fcmm%3D781). Why not in "Flaws in Orkut" or in one of the other groups? Because I feel that focusing on 'Flaws' is too strongly negative, and none of the others quite fit. I've been a software developer -- everything is a compromise and good design is hard. By staying on the topics of current features, feature requests, bugs, suggestions, and by encouraging constructive critism and a balance of both positive and negative feedback, this group will be the best community for us to help Orkut until they offer us better alternatives.  

### Comments

In the above I said "They only way that I know of to avoid this is in your prefences to set that all of your messages should be sent to you via the web, not email." However, this is incorrect, it will still send your email address in the "Reply-To:" At this time there is no way I know of to avoid this flaw if you are concerned about your email address other then changing it to a temporary one.

[Christopher Allen](http://www.lifewithalacrity.com/) 2004-02-01T21:47:40-07:00

That's a pretty big "bug" (or unpublished feature) indeed (!) For example, personally I try to keep my work email address off the net as much as possible, and have set pretty strict privacy settings on orkut, assuming they'd keep it private... Coincidentally (!!??) the amount of spam I'm receiving at my work email address has gone up vastly since joining Orkut... A very odd coincidence...

[Anders](http://www.jacobsen.no/anders/blog/) 2004-02-03T04:14:32-07:00

I discovered why I got 'jailed' for a third time today. Two of us appear to have been jailed because of a bug when posting to groups. What happens is that if you write a long post, rather then the system tell you something is wrong, your posting form will just be refreshed. This will prompt you to submit a few more times, unsuccessfully. Then you realize it must be because your post is too long, so you'll remove text a few times, and submit. At some point in this process, typically before you successfully trim it down enough to successfully post, you will discover you are in Orkut jail. Of course, that makes us long-winded bloggers particularly vulnerable ;-)

[Christopher Allen](http://www.lifewithalacrity.com/) 2004-02-03T07:17:25-07:00

URL: my suggestion for forum: orkut design, because orkut the man himself is a member of that community.

[reader](#) 2004-02-04T17:18:21-07:00

beta testing for www.swakto.com social networking is open

[jemai](http://www.swato.com) 2004-07-14T12:40:16-07:00

URL: ive been banned on orkut. what is the maximum time you are banned or when they reply to you?

[sherrzz](#) 2004-07-18T19:06:48-07:00

URL: i don't know much more about orkut i just want to know what this side about of side.

[nawin](#) 2004-10-12T00:51:10-07:00

[original layout]


Life With Alacrity

© Christopher Allen

