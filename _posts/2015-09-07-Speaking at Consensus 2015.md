---
layout: post
title:  Speaking at Consensus 2015
date:   2015-09-06 23:54-07 +0300
image:  consensus.png
# tags:   Home
---




**Life With Alacrity**

A blog on social software, collaboration, trust, security, privacy, and internet tools by Christopher Allen.

**Speaking at Consensus 2015**

September 7 2015 - 1500 Words
by Christopher Allen

Christopher Allen Internet Security Pioneer Speaking at [Consensus 10 Sep NYC](https://consensus.coindesk.com/){:target="_blank"}

I'm heading out today to New York City to speak at Consensus 2015, where I am speaking on the panel *‘Bitcoin and its Antecedents: A Look at the History and Evolution of Digital Cash’:*

Bitcoin is far from the first attempt at creating a form of digital money with the potential to upend existing systems. Our panelists will look at bitcoin's predecessors and close cousins. Nathaniel Popper wrote the book Digital Gold, which delves into bitcoin's genesis; Christopher Allen is an internet security expert who has been involved in digital cash systems including Digicash for decades, while Garrick Hileman is CoinDesk's lead analyst and an economic historian at the LSE, specializing in alternative and private monies.

This invite probably came about from an extended interview that Tim Swanson, author of the blockchain book and blog [The Great Wall of Numbers](https://www.ofnumbers.com/){:target="_blank"}, shared with his readers. Tim wrote me saying *“There is some dispute, apparently, of the history and precursors of distributed computing / consensus before Bitcoin”, and and asked me if I would share my “own view of what a blockchain is defined as, what Nakamoto consensus is relative to other 'solutions' to Byzantine faults, triple entry accounting, etc.”* He published my answers in his post [A blockchain with emphasis on the ‘a’](https://www.ofnumbers.com/2015/07/09/a-blockchain-with-emphasis-on-the-a/){:target="_blank"}. For posterity, I thought I'd also share my part of the interview here:

I certainly was an early digital currency banner waiver — I did some consulting work with Xanadu, and later for the very early Digicash. At various points in the growth of SSL both First Virtual and PGP tried to acquire my company. When I saw Nick’s [“First Monday”](https://firstmonday.org/ojs/index.php/fm/article/view/548/469){:target="_blank"} article the day it came out, as it immediately clicked a number of different puzzle pieces that I’d not quite put together into one place. I immediately started using the term smart contracts and was telling my investors, and later Certicom, that this is what we really should be doing (maybe because I was getting tired of battles in SSL/TLS standards when that wasn’t what Consensus Development had been really founded to solve).

However, in the end, I don’t think any thing I did actually went anywhere, either technically or as a business, other than maybe getting some other technologists interested. So in the end I’m more of a witness to the birth of these technologies than a creator.

History in this area is distorted by software patents—there are a number of innovative approaches that would be scrapped because of awareness of litigious patent holders. I distinctly remember when I first heard about some innovative hash chain ideas that a number of us wanted to use hash trees with it, but we couldn’t figure out how to avoid the 1979 Merkle Hash Tree patent whose base patent wouldn’t expire until ’96, as well as some other subsidiary hash tree and time stamp patents that wouldn’t expire until early 2000s.

As I recall, at the time were we all trying to inspired solve the micropayment problem. Digicash had used cryptography for larger-sized cash transactions, whereas First Virtual, Cybercash and others were focused on securing the ledger side and needed larger transaction fees and thus larger amounts of money to function. To scale down we were all looking at hash chain ideas from Lamport’s S/KEY from the late 80’s and distributed transactional ledgers from X/Open’s DTP from the early 90s as inspirations. DEC introduced Millicent during this period, and I distinctly remember people saying “this will not work, it requires consumers to hold keys in a electronic wallet”. On the cryptographic hash side of this problem Adam Back did Hashcash, Rivest and his crew introduced PayWord and Micromint. On the transaction side CMU introduced NetBill.

Nick Szabo wrote using hashes for post-unforgeable transaction logs in his original smart contract paper in ’97, in which he referred to Surety’s work (and they held the Merkle hash tree and other time signature patents), but in that original paper he did not look at Proof-of-Work at all. It was another year before he, Wei Dai, and Hal Finney started talking about using proof-of-work as a possible foundational element for smart contracts. I remember some discussions over beer in Palo Alto circa ’99 with Nick after I became CTO of Certicom about creating dedicated proof-of-work secure hardware that would create tokens that could be used as an underlying basis for his smart contract ideas. This was interesting to Certicom as we had very good connections into cryptographic hardware industry, and I recommended that we should hire him. Nick eventually joined Certicom, but by that point they had cancelled my advanced cryptography group to raise profits in order to go public in the US (causing me to resign), and then later ceased all work in that area when the markets fell in 2001.

I truly believe that would could have had cryptographic smart contracts by ’04 if Certicom had not focused on short-profits (see Solution #3 at bottom of this post for my thoughts back in 2004 after a 3-year non-compete and NDA)…

What is required, I believe, is a major paradigm shift. We need to leave the whole business of fear behind and instead embrace a new model: using cryptography to enable business rather than to prevent harm. We need to add value by making it possible to do profitable business in ways that are impossible today. There are, fortunately, many cryptographic opportunities, if we only consider them. Cryptography can be used to make business processes faster and more efficient. With tools derived from cryptography, executives can delegate more efficiently and introduce better checks and balances. They can implement improved decision systems. Entrepreneurs can create improved auction systems.

Nick Szabo is one of the few developers who has really investigated this area, through his work on Smart Contracts. He has suggested ways to create digital bearer certificates, and has contemplated some interesting secure auctioning techniques and even digital liens. Expanding upon his possibilities we can view the ultimate Smart Contract as a sort of Smart Property. Why not form a corporation on the fly with digital stock certificates, allow it to engage in its creative work, then pay out its investors and workers and dissolve? With new security paradigms, this is all possible.

When I first heard about Bitcoin, I saw it as having clearly two different parts. First was a mix of old ideas about unforgeable transaction logs using hash trees combined into blocks connected by hash chains. This clearly is the “blockchain”. But in order for this blockchain to function, it needed timestamping, for which fortunately all the patents had expired. The second essential part of Bitcoin was through a proof-of-work system to timestamp the blocks, which clearly was based on Back’s HashCash rather than the way transactions were timestamped in Szabo’s BitGold implementation.

I have to admit, when I first saw it I didn’t really see much in Bitcoin that was innovative — but did appreciate how it combined a number of older ideas into one place. I did not predict its success, but thought it was an interesting experiment and that might lead to a more elegant solution. (BTW, IMHO Bitcoin became successful more because of how it leveraged cypherpunk memes and their incentives to participate in order to bootstrap the ecosystem rather than because of any particularly elegant or orginal cryptographic ideas).

In my head, Bitcoin consists of blocks of cryptographic transactional ledgers chained together, plus one particular approach to time-stamping this block chain that uses proof-of-work method of consensus. I’ve always thought of blockchain and mining as separate innovations.

To support this separation for your article, I have one more quote to offer you from Nick Szabo:

Instead of my automated market to account for the fact that the difficulty of puzzles can often radically change based on hardware improvements and cryptographic breakthroughs (i.e. discovering algorithms that can solve proofs-of-work faster), and the unpredictability of demand, Nakamoto designed a Byzantine-agreed algorithm adjusting the difficulty of puzzles. I can’t decide whether this aspect of Bitcoin is more feature or more bug, but it does make it simpler.

As to your question of when the community first started using the word consensus, I am not sure. The cryptographic company I founded in 1988 that eventually created the reference implementation of SSL 3.0 and offered the first TLS 1.0 toolkits was named “Consensus Development” so my memory is distorted. To me, the essential problem has always been how to solve consensus. I may have first read it about it in “The Ecology of Computation” published in 1988 which predicted many distributed computational approaches that are only becoming possible today, which mentions among other things such concepts as Distributed Scheduling Protocols, Byzantine Fault-Tolerance, Computational Auctions, etc. But I also heard it from various science fiction books of the period, so that is why I named my company after it.

**original layout**

[Business]() [Security]() [Web/Tech]()

Life With Alacrity

© Christopher Allen
