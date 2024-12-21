---
layout: single
title:  "Getting Ready for the iPhone"
slug:  "Getting Ready for the iPhone"
redirect_from:
  - /2007/06/getting_ready_f.html
  - /2007/06/getting_ready_f/
date:   2007-06-15 20:06:45 -0700
image:  watereddown.jpg
tags: 
  - iPhone

categories:
  - news
class:
  - wide

excerpt_seperator: <!--more-->
permalink: /news/getting-ready-fpr-the iPhone/
---

<a href="#"><img width="230px" style=" margin-left:15px" align="right"  src="{{ site.url }}{{ site.baseurl }}/assets/images/watereddown.jpg" alt="watereddown"/></a>

  I've been excited about the web capabilities of the upcoming [iPhone](http://www.apple.com/iphone/) for some time. As a reluctant laptop user ("oh, my aching shoulders"), there is real appeal to me in a better portable web browser. I have tried most of the PDA and cellphone browsers to date, and none offer more then a poor cousin to the web that we experience on the desktop.

Instead, the iPhone offers a desktop-class browser. There is no transcoding, nor any subset of HTML such as [WML](http://en.wikipedia.org/wiki/Wireless_Markup_Language). Full web pages are rendered in the small display, and when you "double-tap" with your finger the section you touch is expanded to a more readable size. The [video](http://www.apple.com/iphone/ads/ad4/) available at the Apple website shows this capability in use.

Because of the iPhone's upcoming July 29th release, I decided to participate in this week's [Apple WWDC](http://developer.apple.com/wwdc/) conference for Macintosh developers. There a number of announcements about the iPhone were released, and a number of technical sessions on the iPhone and iPhone-related technologies were held. Together the iPhone demonstrations at the public keynote and other demonstrations throughout the WWDC offered some real promise for when the phone is released on June 29th.

<img width="230px" style=" margin-right:15px" align="left"  src="{{ site.url }}{{ site.baseurl }}/assets/images/iphonesteve.jpg" alt="iphonesteve"/>

The biggest announcement at the public [keynote](http://events.apple.com.edgesuite.net/d7625zs/event/) was that there will not be an SDK for building native iPhone apps; instead, the only way for third parties to get involved is to create web applications optimized for the iPhone. This came as a big disappointment to the majority of developers participating at WWDC. However, as someone who has been involved lately in creating AJAX/Web 2.0 apps, I was less unhappy.

The other significant announcement at the keynote was that a [Safari 3.0 beta](http://www.apple.com/safari/download/) for both Mac and Windows was being released and that a third Safari platform would be released on July 29th—inside the iPhone. This means that web 2.0 applications created to work with Safari on the Mac will likely also work on the iPhone.

<img width="100%"   src="{{ site.url }}{{ site.baseurl }}/assets/images/SynchroEdit-Diagram-1536x807.png" alt="SynchroEdit-Diagram-1536x807"/>

Since [SynchroEdit](http://www.synchroedit.com), an open-source simultaneous web editor (in the style of [SubEthaEdit](http://www.codingmonkeys.de/subethaedit/)) for Firefox that I produced last year, is one of the most sophisticated AJAX/Web 2.0 applications, I dug deeper at various WWDC sessions to see if it might be possible to make SynchroEdit work on the iPhone.

One of the biggest things that SynchroEdit needs in order to function is [DOM Mutation Events](http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-eventgroupings-mutationevents). At a party for [WebKit](http://www.webkit.org) (the open source code underpinnings of Safari's web renderer) and in questions after a session at WWDC it was confirmed that these are available to Safari 3.0 and presumably the iPhone.

The other key ability that SynchroEdit requires is WYSIWYG editing. This was terribly broken in Safari 2.0, but I saw many demonstrations of it working in Safari 3.0, so I don't anticipate any problems with this.

SynchroEdit also requires AJAX and in particular the [XMLHttpRequest](http://www.w3.org/TR/XMLHttpRequest/) function, and the keynote clearly said that this was available.

The final thing that SynchroEdit needs is the ability to keep the browser at _readystate==3_, i.e. not "finish" sending the page, so that we can continue to interactively pass updates to users as they arrive, without creating a new connection for every message. It is not clear if this will be supported on the iPhone, but there are ways to work around it.

So, in principle, it appears that we should be able to make SynchoEdit work on the iPhone. I am not sure that many iPhone users need SynchroEdit, but as an example of a very sophisticated web technology that should work on that platform, it shows the potential for what might be possible.

Because of this technological capability I've decided to begin investigating what type of social software apps could be highly useful on the iPhone and that aren't being served by the existing web 2.0 community. I am also going to continue investigating the technical issues of developing web apps for the iPhone

If you are interested as well, I invite you to participate in the new [iPhoneWebDev](http://www.iPhoneWebDev.com/) community. It should be a great resource for everyone interested in getting in on the ground floor with this new web technology. I have also begun tagging relevant web pages in [del.icio.us](http://del.icio.us/ChristopherA) with the tag [iphonewebdev](http://del.icio.us/tag/iphonewebdev)—I hope that others will begin to use this tag as well.

I have quite a bit more I'd like to write about specific iPhone technology, but unfortunately I have to wait until the [WWDC confidentiality](http://developer.apple.com/wwdc/attendee/) expires on June 29th with the release of the iPhone, so keep an eye out here for more details.

<!-- [iPhone](/tags/iphone/) [Social Software](/tags/social-software/) [User Interface](/tags/user-interface/) [Web/Tech](/tags/web/tech/) [iphone](/tags/iphone/) [wwdc](/tags/wwdc/) [web2.0](/tags/web2.0/) [ajax](/tags/ajax/) [synchroedit](/tags/synchroedit/) [safari](/tags/safari/) [webkit](/tags/webkit/) [subethaedit](/tags/subethaedit/) [firefox](/tags/firefox/) [readystate](/tags/readystate/) [xmlhttprequest](/tags/xmlhttprequest/) [iPhoneWebDev](/tags/iphonewebdev/) -->

Life With Alacrity

© Christopher Allen
