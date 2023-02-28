---
layout: post
title:  Simple Yet Sophisticated Group Page Editing
date:   2004-05-13 14:58:39 -0700
# image:  02.jpg
# tags:   Web/Tech
---

I have been leading the design of a new Open Source collaboration tool called EditThisPagePHP, which started six months ago and now is in beta.

My goal with EditThisPagePHP attempt to come close to Dave Winer's visionary statement back in May of 1999:

When I'm writing for the web, and I'm browsing my own site, every bit of text that I create has a button that says Edit This Page when I view it. When I click the button, a new page opens with the text in an HTML textarea. I edit. Click on Submit. The original page displays with the change. Three easy steps. The essential element is that *every* bit of text has this button. There can be no exceptions.
At the fundamental level, EditThisPagePHP basically just let you remotely edit a single page. There are many situations where existing Wiki or Blog software is too complicated, or imposes too much structure. EditThisPagePHP lets you have total control over the HTML -- you can use sophisticated CSS layouts, or very simple HTML -- the software does not get in the way.

Yet in spite of this simplicity, EditThisPagePHP also uses ideas drawn from various Wiki, Blog, and CMS (content management system) technologies. Like Wikis, it supports an edit-this-page button, page history, page diffs, and can email users when pages change. Like Blogs, it supports optional user comments, trackbacks (both send and receive), and delivers two RSS feeds -- one for the current version of the page, and one with diffs. Like a CMS, it supports multiple roles, by default a reader, an editor, and a super-editor -- each with different privileges.

I personally plan to use it for standards documents, lists, game rules, and home pages for various groups I collaborate with. I expect that others will use it anytime a group of people want to maintain a publicly accessible page together.

Some screenshots:

Edit PageView HistoryPage DiffsTrackbacks and CommentsEdit Authorization Message

Technical Details: EditThisPagePHP is written solely in PHP, and it currently works with PHP 4 and 5, and does not require SQL. Every revision makes a backup of itself, so no data can be lost. PHP is not allowed in the HTML text itself, to minimize security risks. Only two files are required: the core PHP script (editthispage.php) and a data file for your page. The core file can support as many pages as desired. The current version is 0.5b2, is licensed under a BSD-style license, and there is a working sandbox demo available to play with.

Future goals are to support more technical features, without losing the elegance and simplicity of the implementation. This may include limited Wiki TextFormatting or a simple WYSIWYG editor, HTML-tidy, some user-interface enhancements, etc. A complete list is available on our wishlist page.

Comments
I'm amused at the talk of prior art and 1999 visions, the very first web client (1990) had EditThisPage built in - the browser was the editor. The same approach is still taken by browsers like Amaya. [w3](http://www.w3.org/People/Berners-Lee/WorldWideWeb.html){:target="_blank"}

Danny 2004-06-02T05:23:56-07:00
URL: I'm amused at the talk of prior art and 1999 visions, the very first web client (1990) had EditThisPage built in - the browser was the editor. The same approach is still taken by browsers like Amaya.

alex 2005-12-06T10:59:45-07:00
original layout
