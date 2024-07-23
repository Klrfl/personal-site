---
title: Remaking my school's official website
pubDate: 2023-06-25T11:59:24.452Z
description: Sooo, my school's official website is too ugly, and I decided to
  challenge myself to remake it. It could fail but whatever
author: Efraim
image:
  url: https://ucarecdn.com/b2a0ed5c-ba60-4df7-860f-c50cb2d7938c/-/resize/800x450/screenshot-46-.png
  alt: Screenshot of smkmetland.net landing page.
tags:
  - blabla
---

In this occasion, I want to document something potentially big: I am remaking my school's website.

## Why tho?

Why am I doing this you ask.. Well as you can read from the title of this blog post, the main reason is because currently the site has many problems, the most apparent one being its ugliness (Looking at this blog site, I guess I'm kind of a hypocrite by saying this, but what do you know I'm a solo dev compared to a whole IT team).

![Screenshot of smkmetland.net landing page.](https://ucarecdn.com/b2a0ed5c-ba60-4df7-860f-c50cb2d7938c/-/resize/800x450/screenshot-46-.png "Screenshot of smkmetland.net landing page.")

[Check it out by yourself](https://smkmetland.net/ppdb).. An ugly website like this is quite tolerable if the school doesn't have too many resources to invest into its website, but the problem is this school clearly has plenty. We pay a decent amount for tuition, and moreover there is an IT major here (that's why I opted to learn here - I want to be a web dev), they could've asked the students to make a good frontend or something. IMO, there is absolutely no excuse for a site like this.

This website's routing is also weird. There are basically 2 different sites under one domain name. If you go the the root (<https://smkmetland.net>)
it will automatically redirect to `/ppdb`. But if you change it to `/en`, there is a completely different looking website, also with different posts.

Also if you noticed the routes, its very inconsistent. One is indicating a language variant, one is.. I don't know.. I think the route is supposed to be used for accepting new student enrollments but for some reason became the landing page route instead.

The second reason is this: I just want to challenge and push myself forward. You know, before doing this, I just finished making this half-baked blog website (if you can call it finished), but I just fell in love with Astro and I want to learn making websites with it. I'm a big believer in learning by doing, so, I'm going to make more websites.

Now lets talk about the how.

## How tho?

My school's official website is built with Wordpress with the Elementor plugin. If you didn't know, Wordpress by default exposes a public REST API (basically just a way to access the database) through which you can access posts on a Wordpress site. It just so happens that the admins didn't opt to lock the REST API, and the rest is just a matter of fetching data and displaying it.

But from using this method, there is a catch. The content is prerendered, and so you would get these elementor classes on the content. I cannot get access to the raw content as that requires me to add a `?context=edit` to the end of the request (basically asking to edit the post) like this:

```javascript
const response = await fetch("blahblahblah?context=edit");
```

This sadly requires authentication, so it's out of the question.

## Conclusion

Yeah that's it really. I basically made a frontend "shell" to display the posts, that's what I really did.

I just realized, this post is a bit longer than usual eh? Thanks for reading this far!
