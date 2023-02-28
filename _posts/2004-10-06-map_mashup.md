---
layout: post
title: Map Mashup
date:   2004-10-07 00:39:29 -0700
image:  mapmashup_1.gif
# tags:   UserInterface
---


I'm a sucker for great user-interface design ideas, especially if they succeed with what typically has poor UI design -- web pages.

MultiMap is a company that sells maps and aerial photos, primarily for Great Britain. They offer an online map tool that is very similar to that used by MapQuest or Yahoo Maps.

However, for certain regions, they have this fabulous capability to show you the aerial photo of the place, then display hovering around the cursor a slightly transparent map. For instance, take a look at this map of the Tower of London and the Tower Bridge.

This trick is done completely in Javascript, located in global.js, and uses the overlay.style.* properties that I've really only seen used in Javascript-based menus before. I'm a bit confused on how this works in IE, as it does not support alpha tranparency as this posting semi-transparent image overlays discusses, but I suspect they accomplished it through careful use of transparency in the .gif overlay image. I'll have to investigate more.

There are probably many more other innovative uses of this type of transparency overlay tracking to the cursor that can be helpful in other web tools.

[original link via Futurismic]

[Jeffery To adds some more detail about this Javascript technique in this post's comments.]

Comments
The Javascript in [multimap-js](http://www.multimap.com/static/global.js){:target="_blank"} only sets the clipping for the overlay layer, since it changes everytime the user moves the mouse. The layer transparency (for overDiv) is set in [multimap-css](http://www.multimap.com/static/ps_new.css){:target="_blank"} . No need for transparent GIFs. IE does support alpha transparency for layers, using their filter:alpha(opacity=x) declaration. As the posting on semi-transparent image overlays points out, IE doesn't support alpha transparency for PNG images.

Jeffery To 2004-10-10T11:31:41-07:00
original layout
