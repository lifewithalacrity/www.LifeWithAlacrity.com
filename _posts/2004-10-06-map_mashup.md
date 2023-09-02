---
layout: single
title: "Map Mashup"
slug: "Map Mashup"
redirect_from:
  - /2004/10/map_mashup.html
  - /2004/10/map_mashup/
date:   2004-10-07 00:39:29 -0700
image:  mapmashup_1.gif
tags: 
  - User Interface
  - Web/Tech
  - Map

categories:
  - article
class:
  - wide

excerpt_seperator: <!--more-->
permalink: /article/map_mashup/
---

<a href="https://web.archive.org/web/20050117010708/http://lifewithalacrity.blogs.com/photos/uncategorized/mapmashup_1.gif"><img width="230px" style=" margin-right:15px" align="right"  src="../assets/images/mapmashup_1.gif" alt="Mapmashup_1"/></a>I'm a sucker for great user-interface design ideas, especially if they succeed with what typically has poor UI design -- web pages.

MultiMap is a company that sells maps and aerial photos, primarily for Great Britain. They offer an online map tool that is very similar to that used by MapQuest or Yahoo Maps.

However, for certain regions, they have this fabulous capability to show you the aerial photo of the place, then display hovering around the cursor a slightly transparent map. For instance, take a look at this map of [the Tower of London and the Tower Bridge](http://www.multimap.com/map/photo.cgi?client=public&X=533258&Y=180057&width=500&height=310&gride=529090&gridn=179645&srec=0&coordsys=gb&db=pc&pc=&zm=0&scale=10000&up.x=186&up.y=3).

This trick is done completely in Javascript, located in [global.js](http://www.multimap.com/static/global.js), and uses the overlay.style.* properties that I've really only seen used in Javascript-based menus before. I'm a bit confused on how this works in IE, as it does not support alpha tranparency as this posting [semi-transparent image overlays](http://persistent.info/archives/2004/04/27/overlays) discusses, but I suspect they accomplished it through careful use of transparency in the .gif overlay image. I'll have to investigate more.

There are probably many more other innovative uses of this type of transparency overlay tracking to the cursor that can be helpful in other web tools.

\[original link via [Futurismic](http://www.futurismic.com/2004/10/magical-maps.html)\]

\[[Jeffery To](http://www.thingsthemselves.com/) adds some more detail about this Javascript technique in this post's [comments](/2004/10/map_mashup.html#comments).\]

### Comments

The Javascript in http://www.multimap.com/static/global.js only sets the clipping for the overlay layer, since it changes everytime the user moves the mouse. The layer transparency (for overDiv) is set in http://www.multimap.com/static/ps_new.css . No need for transparent GIFs. IE does support alpha transparency for layers, using their filter:alpha(opacity=x) declaration. As the posting on semi-transparent image overlays points out, IE doesn't support alpha transparency for PNG images.

[Jeffery To](http://www.thingsthemselves.com/) 2004-10-10T11:31:41-07:00

[original layout]

<!-- [User Interface](/tags/user-interface/) [Web/Tech](/tags/web/tech/) [user interface](/tags/user-interface/) [web](/tags/web/) [map](/tags/map/) [graphic](/tags/graphic/) [overlay](/tags/overlay/) [transparency](/tags/transparency/) [cursor](/tags/cursor/) -->

Life With Alacrity

© Christopher Allen