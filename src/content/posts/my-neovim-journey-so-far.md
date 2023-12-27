---
title: My Neovim journey.. so far
pubDate: 2023-12-27T10:03:30.667Z
description: I present to you my very own tedious but hugely rewarding Neovim journey
author: Efraim
image:
  url: /assets/uploads/nvim.png
  alt: My Neovim startup screen
tags:
  - '"neovim"'
  - '"successes"'
  - '"self challenge"'
---
Hello and welcome to my personal blog. In this occassion I want to document my journey using Neovim.
Honestly I have never thought that you could fall in love with a piece of software
(that's probably just a me thing), but here I am.

It was around the middle of the year 2022, and I was a happy and ignorant VS Code
user. I was really comfortable using VS Code, having made several projects already
with it. At this point, I have heard about Vim several times, but I kind of didn't
care. I actually first heard about Neovim not from ThePrimeAgen (although he helped
me so much during my Neovim journey later on), but from this [Fireship video comparing 10
different editors](https://youtu.be/8PhdfcX9tG0?feature=shared). At first I was
like 'huh, whatever', because I have never heard of Neovim before and, as I said,
I didn't care that much. But then I saw the screenshots of people using Neovim.
I saw ThePrimeAgen moving around, navigating, jumping between files so freaking
fast. I thought it was so cool that I said to myself, "I absolutely have to try
out this editor".

## Step One: Curiosity

At this point of time I was still using my old laptop (yes I switched to a new
Acer laptop, I will write about this later probably) which boots from a very slow
HDD, and it very often overheated when you use it even only for a modest amount
of time. I didn't remember the exact details but VS Code was one of the main culprits,
and so the prospect of a very fast and lightweight editor was really appealing for me.

At first I tried tinkering with Neovim on my school PC. I didn't really remember
as I didn't save my first ever config, but I used Vimscript at the time. I remember
using Vimplug and using it to install NERDTree. Then I installed COC and tried
editing an HTML file, but that was it. I didn't really take it anywhere serious
like using it on a real project.

So that was it.

## Step Two: Really steep learning curve

Eventually my curiosity got the better of me, and I decided to try again.
I was browsing Youtube and Github, and I saw that most tutorials and people are
using Lua to configure their Neovim. I didn't really remember what happened but I
think I nuked the whole config I made earlier and started from scratch. Following
this [Neovim config tutorial by typecraft](https://youtu.be/J9yqSdvAKXY), I was
confused as hell. There are so many parts to the config, and I didn't understand
so many of them. I was motivated and really overwhelmed at the same time.

After getting Packer, LSP, and completion stuff set up, I looked back and thought
it was pretty cool and already good enough for me.

I have already made a pretty stable config in Lua from scratch, and i decided
to try it out for real. I decided to ditch VS Code (although I still keep it on
my laptop in case something goes wrong) once for always and try Neovim
as my daily editor.

I had a mixed feeling: on one hand I was really proud because "I wrote this config
from scratch guys look at me I'm officially a Neovim user now!!", but at the same
time it was really really overwhelming too.

Anyways, I was relatively happy, I then uploaded my config to my Github account
so everyone can see it.

The first major issue I encounterd was configuring Prettier. Being a frontend developer,
prettier is a pretty important tool, and I want it to run every time I save a
file. The problem is, I was saving and the formatter wasn't working (the file is
formatting, but it was from the LSP not from prettier, so there are a few
inconsistencies). after an exhausting search across Github and Reddit, I eventually
found out the solution by filtering the formatter name.

I once thought "why am I going through all this nonsense? I could just use VS
Code and get things done quickly". In fact that was exactly what I did when I
tried to edit an Astro project with Neoeovim. Syntax highlighting and formatting was
non existent, and I was really frustrated.

I was really productive, right? writing code to configure my editor instead of writing
actual code and all that..

## Step three: eventual comfort

I was trying to edit my personal site which used Astro, and still previously mentioned
issues are still there. So decided to come back and watch every tutorial about
setting up Neovim for Astro, and read documentation very very carefully.

You know what I missed? turns out I needed only two small things:

- I need to install the tsx parser from treesitter
- and I need to install a prettier plugin for Astro for it to work properly.

Yeah, turns out I just didn't bother to read. Definitely a lesson learned the hard
way there.

As my config was getting stable, I decided that it was too boring and I need to
change my plugin manager to Lazy. Although the directory structure changed dramatically,
unlike my experience setting up Neovim from scratch, the transition was pretty smooth
and I felt good about it. I even installed a new plugin called alpha.nvim, which
I thought was the coolest thing ever and a big factor in driving my daily productivity
(probably).

## Step four: blazingly fast (!!) editing

I am still not that great with vim (especially navigation and movement stuff), but it is at
this point that I can proudly and comfortably say "I use Neovim, by the way 😊".
I remember during a school project, my friend passed by my laptop and he wanted
to delete my entire code (he can't because of git anyway lol) by pressing <C-a>
then backspace. But guess what, it didn't work because I was using Neovim™.

I also remember when I showed what Neovim is to my junior. I opened it up, pulled
up telescope and jumped around in a file, editing something (honestly I didn't
remember it that much). He was absolutely amazed lol.

I was getting more and more comfortable using Neovim, and at this point I could
entirely delete VS Code if I want to.

## Conclusion

So, if you're asking right now, "is it really worth it to try Neovim?" I would
answer "absolutely!" I think the whole experience of setting up Neovim tailored
to your own needs, despite its hardships and really steep learning curve, can really
make you a better problem solver, and hence, a better programmer and so is absolutely
worth the effort. It can even enhance your experience when writing code! You can
also better appreciate the work of tireless open source programmers who made Vim
and Neovim possible in the first place.

For those of you interesed in Neovim, If you don't know where to start, you can
check out these various Neovim distros, or if you want a more hands-on config,
kickstart.nvim is a good start.

Cheers, thanks for reading and good luck!
