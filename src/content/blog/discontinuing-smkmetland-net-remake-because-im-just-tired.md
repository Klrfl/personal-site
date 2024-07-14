---
title: Discontinuing smkmetland.net remake because I'm just.. tired
pubDate: 2023-09-18T05:22:07.575Z
description: Update on my smkmetland.net remake project, and a rant
author: Efraim
image:
  url: https://ucarecdn.com/9048f9f0-b9d3-40b1-a21d-17d745b18700/-/resize/800x600/mfw.jpg
  alt: My face when
tags:
  - blog
---
Welcome back to my blog! Now if you're reading my blog you might be wondering about my smkmetland.net remake project. Well, I guess an update is overdue. (By the way, I'm writing this blog post while in an exam session so if there's anything amiss, i'll edit it later)

## An update on smkmetland.net remake project

As you might have probably known, [smkmetland.net](smkmetland.net) has gone live again. But, I will not continue this project for several reasons:

* Lack of access to the raw content via REST API: The content I was able to fetch from the default REST API was already compiled, which means I get this weird soup of unecessary markup from the various WordPress plugins installed. For example, when you view [this post](https://smkmetland.net/ppdb/index.php/2022/12/15/sharing-praktik-baik/) you can see that it has a working, fully functional carousel, but when you fetch the post via the API, you would only get the slides markup without the styles and even the JavaScript.
* I'm just stuck: the only thing stopping me completing this project besides the raw markup is the fact that I have to choose a headless CMS. Well I suppose this step could be skipped altogether, I already have the markdown files, right?

Now with the updates out of the way, I want to rant a bit.

## Useless projects

I was faced with a dilemma: I was bored. I mean like, really bored. I don't have anything to do at home or school. But yet,  I don't want to do the group projects at school because I think they are utterly useless. No one is working anyway.

Okay, okay, I might need to provide more context here.

So, there's this long term project assigned to us where we have to make an application for our school library. You could use it to lend books, and the library administrator could manage the books in the library more easily. So, the teachers split us into backend and frontend teams. So far so good right?

Here comes the first problem: my classmates... uh.. how should I put this... have less than desirable skills.  Well it's not their fault, the teacher has been slacking off for like the whole year and we actually get **0 knowledge** at school. Everything I have learned, WE have learned, is from YouTube, Google and StackOverflow.

The second problem is actually related to the first one, which is about tech stack choice. On the frontend I already know Vue so that's what I ended up using. But guess what, my classmates don't know any framework so there's a significant learning curve if they want to learn Vue. On the backend, I chose to use Supabase because it's relatively easy and everything is already included out of the box, including a database, authentication, an API to fetch from the database, and more.

My classmates and I learned MySQL at school, so I thought learning to use Supabase would be easy because it uses a relational database that is very similar to MySQL (PostgresQL). But I just realized that all we have done is create a bunch of tables, querying data, mutate data and delete them, all the really basic stuff. Yes, I didn't mention joining tables because the majority don't know how. We don't even know what normalization is and why it's important. Designing a database? By ourselves? Borderline impossible. It's that bad.

So, what now? Well the current state of the project is the frontend is half-baked, while the backend is practically nonexistent (one member of the backend team is actually working on it right now. Yeah, one member).

Should I continue working on the frontend? Well I have already worked on authentication and the navbar, so I think my work is already done here. But I have waited for several days, and the frontend team... yeah, you get the gist.

Should I start work on the backend? I would like to learn about Supabase (and my previous knowledge of Firebase would certainly help), but I think that I already have too much on my plate, and if I were to take over the backend, the backend team wouldn't have anything to do. They also would stop learning and, you know, not improve. It's a bad situation.

Yeah it's bad, and I haven't found any real solution here. Oh yeah I forgot to mention that the presentation is 3 days from now (from when this article is written) and we don't even .

I don't know man. Rant over.

Thank you for reading this post, I guess.
