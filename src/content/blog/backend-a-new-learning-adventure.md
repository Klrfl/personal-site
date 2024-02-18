---
title: "Backend: A new learning adventure"
pubDate: 2024-02-18T08:12:32.266Z
description: Learning backend development as a frontend developer
author: Efraim
tags:
  - self challenge
---
Hello everyone! It's been a while since I last posted here, so, I'm glad to be back here sharing stories on my blog again! (By the way this is the first blog post this year)

During the past two or three months, I've been learning backend development and created 2 very simple APIs with Go. The first one, which I affectionately named ['Fiber Student API'](https://github.com/klrfl/fiber-student-api), was very very simple. You can use it to do CRUD operations on students' data. Oh, and also I used basic auth to do it. I made with with Fiber, which is probably a bad idea, because by immediately using a framework, I don't understand the fundamentals. I should probably make another one with the `net/http` standard package in the future.

I made the second one for learning authentication with JWT (short for JSON Web Token). It was easier than I expected thanks to the [jwt.io website](https://jwt.io), and I also came across [this very useful ebook](https://auth0.com/resources/ebooks/jwt-handbook), on that site, which helped me a lot in understanding JWT.

Now I am working on a massively more complicated API for Artisan Beverage Studio (made with Fiber and GORM) where you can order food and drinks, (it doesn't handle payments, we don't need it anyway). The authentication scheme still uses JWT but now has the ability to distinguish between an anonymous user, a logged in user, and an admin. For now the repository is private, and I am planning on open-sourcing it after reaching MVP.

Hopefully I can continue this journey and become a fullstack dev soon! Wish me luck.