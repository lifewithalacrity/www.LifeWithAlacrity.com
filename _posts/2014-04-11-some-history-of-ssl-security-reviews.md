---
layout: post
title:  Some History of SSL Security Reviews
date:   2014-04-11 12:01:00 +0300
# image:  02.jpg
# tags:   Home
---

Regarding the Heartbleed bug, SSL and TLS vendors used to require code security reviews before CAs would accept certificate requests from that implementation.

My firm Consensus Development was the only one offering these reviews, largely because other security firms were scared of liability issues. Over 50% of the products failed in less then 8 hours of review, typically for very stupid mistakes. The CAs stopped asking us for reviews because it was slowing down sales of certificates.

I believe that we would have found last month's Apple bug if we reviewed it. Maybe not Heartbleed, but we were doing these security reviews TWENTY years ago. If we had kept at it we would have created better tools by now.

It may be time for CAs to require vendors to pay for implementation security reviews again, or only offer a lower level certificate. They also need to indemnify security reviewers so that they can do this kind of work without fear of being sued for not finding a bug (hard to prove a negative). And there should be a pool of funding to do independent security reviews of open source.

The amazing Tim Dierks , author of SSLRef, the reference implementation of SSL 3.0, co-author IETF TLS 1.0 standard and subsequent updates, and later creator of Google Wallet, did all of these reviews for us back then. Any memories, comments, or suggestion to add?

original layout