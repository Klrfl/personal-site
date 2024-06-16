---
title: How it feels after getting your first paycheck
pubDate: 2024-04-30T09:56:48.692Z
description: Just for the record, I'm not employed yet, it's a paid gig
author: Efraim
tags:
  - self challenge
---
About a month a go, a good friend of mine gave me an invite link to a Whatsapp group about web dev. He always had a lot of friends, and so he had a lot of connections too. I quickly joined, and little did I know there would be my first source of income ever.

## Didn't see the gig coming

The group itself was pretty boring on most days. Somebody would ask a basic web dev question, then according to the mood of people there, sometimes it gets an answer, sometimes it doesn't. The group also does not strictly talk about web dev. Last night for example, when Indonesia went up against Uzbekistan in a U-23 Asian Cup match, everybody talked about it. So yeah, I think you get the vibe, it's just a regular group that just happens to have web dev people in it.

Then, a few weeks later, the fateful day suddenly came.

Friday morning comes, I checked my phone, and I read the messages: someone was asking to do something called 'joki tugas', which just means that he will pay somebody to do a task for him. He asked to build a very simple static brochure site with 4 pages, with no interactivity at all, literally just good old HTML and CSS. Because the sender asked in the middle of the night, nobody but one guy was answering.

I initially though, "ah damn, I think I couldn't get this gig. It would be good if I could though." So I just sent a message, basically saying "I'm interested".

Then a while later, the potential client sent me a screenshot of a message of his conversation with (who I assume is) the guy who answered first. The client said he only has Rp. 200k, and the guy wants a down payment of 50%, so 100k. The client then asked for my suggestions, "is it safe to proceed or not with this guy?" I answered, "ask him to identify himself, somehow, Then you can report him if he does anything sketchy."

Then he asked me, "How much do you charge?" I initially wanted to ask him to do 300k to 400k, but after looking at the earlier screenshot, I realized he was probably broke. The money didn't matter too much anyways, all I wanted is to build a reputation and have connections. "We can do 200k", I answered. He then gave me details about the site he wants to build. It was 4 pages, all static like he said. No JavaScript.

"You can do these four, right?" "I said yeah, of course, that would be pretty quick."

And there we go, It was a deal.

## Deal achieved. Now get to work!

![screenshot of the landing page's hero section, day 1.](/assets/uploads/niagahoster.png "screenshot of the landing page's hero section, day 1.")

At first he said the deadline was for Wednesday next week (remember I got the message at Friday), but then he messaged me again at Sunday that it would be moved earlier to Tuesday. "No problem", I said, confidently. Maybe.

The site was pretty dang simple, just some basic constrained-width sections. I was about to implement the first page with flex and putting a `max-width` on the main sections' content, but I thought of a better idea.

What if I used [Subgrid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid) instead? It was a sweet spot between fast delivery and learning for me. The subgrid system allows us to make a child element (even the children of the child element if you wanted to) follow the grid of the parent, so in short it is pretty powerful.

So I got to work.

Initially I split the grid into 12 main sections, and 2 outer ones that serve as padding, but I quickly changed it to 14 to make a bleed section. The landing page is slightly wider then the content below, that's why I made 14 columns.

Some sections were repeated across pages, so it was pretty easy to some utility classes and apply it across pages linked to a global stylesheet. Some were tailored to the page, and so each page has a custom stylesheet attached, in addition to the global one.

It was pretty fast, other than annoying repeating sections that only changes the image order or background color or other things, nothing major got in my way and I was able to finish it in Monday night.

At first the client was hesitant: he wanted me to send half the files to him first, then he will pay 50%. If it's legit, then he'll pay the remaining 50%, and after that I deliver the whole site.

I delivered the zip file (yes a zip file, because the client, who is apparently a student, doesn't have a GitHub account) the next morning over Whatsapp in my class. It took some minutes because I was being dumb and tried to send a whole folder directly. Apparently Whatsapp can't do that, so i zipped the folder, and through it goes.

Oh my God, and oh my God it was glorious. Seeing the 2 '100k successfully transfered to your account' notifications really got me going. I can't honestly believe my eyes. I just got paid for doing a static page?? haha.

Anyways, that was my experience getting my first paycheck. Hope you can learn something from this post! Thanks for reading.