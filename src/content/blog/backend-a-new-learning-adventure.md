---
title: "Backend: A new learning adventure"
pubDate: 2024-02-18T08:12:32.266Z
description: Learning backend development as a frontend developer
author: Efraim
image:
  url: https://ucarecdn.com/418750ea-8ec7-4c1b-aab1-4dbd079af562/-/resize/800x450/abs-app.png
  alt: HTTPie testing my ABS API.
tags:
  - self challenge
---
Hello everyone, and welcome to the first blog post in 2024! It's been a while since I last posted here, so, I'm glad to be back here sharing stories on my blog again!

## Baby steps: CRUD API

During the past two or three months, I've been learning backend development and created 2 very simple APIs with Go and PostgreSQL as the database. The first one, which I affectionately named ['Fiber Student API'](https://github.com/klrfl/fiber-student-api), is very very simple. You can use it to do CRUD operations on students' data. Oh, and also I used basic auth to do it. I made with with Fiber, which is probably a bad idea, because by immediately using a framework, I don't understand the fundamentals. I should probably make another one with the `net/http` standard package in the future, haha.

I made the second one, also with Go and Postgrres, for learning authentication with JWT (short for JSON Web Token). It was easier than I expected thanks to the [jwt.io website](https://jwt.io), and I also came across [this very useful ebook](https://auth0.com/resources/ebooks/jwt-handbook), on that site, which helped me a lot in understanding JWT.

## Step up: auth, ORM

Now I titled the first section 'baby steps: CRUD API' but this next project I'm working on is also a bit of a CRUD API. Yeah, whatever I guess.

So currently I am working on a massively more complicated API for Artisan Beverage Studio (made with Fiber and GORM and Postgres) where you can order food and drinks, (it doesn't handle payments, it doesn't need to anyway). The authentication scheme still uses JWT but now has the ability to distinguish between an anonymous user, a logged in user, and an admin. For now the repository is private, and I am planning on open-sourcing it after reaching MVP.

Just to be honest, when making this API, my impostor syndrome kicked in. I chose Fiber *again* for this project, which I know is not the best choice. From what i've read, the Go community also does not like it, because it's built on top of FastHTTP, which is not extensible from Go's built in `net/http` package. Then, I added GORM, which apparently the Go community also doesn't like, citing "unecessary complexity". They prefer writing raw prepared SQL statements. Nevertheless, I will carry on, because delivering an imperfect working MVP is better than not delivering a nonexistent, perfect product, right?

![ABS API from HTTPie.](https://ucarecdn.com/418750ea-8ec7-4c1b-aab1-4dbd079af562/-/resize/800x450/abs-app.png "ABS API from HTTPie.")

Hopefully I can continue this journey and become a fullstack dev soon! Wish me luck.

## Update 07/04/2024

**update 07/04/2024:** Ialready open sourced [ABS App](https://github.com/klrfl/abs-app) a long time ago, But I only wrote about it now. Please criticize the code and open a PR if you can improve it, it's still evolving. THANKS A LOT!
