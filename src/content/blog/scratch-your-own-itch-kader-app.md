---
title: "How I made an app to solve a problem at college"
pubDate: 2025-12-22T08:21:49.266Z
description: The story of how I made Kader App
is_archived: false
lang: en
tags:
  - blog
---

Getting into university from a vocational school, there's always this hunger of applying what I already know and making something, some type of program, some type of app, whatever project I can work on and demonstrate to the world that I am capable of working on real software.

As a new student of the Informatika major, I have to go through this program called "kaderisasi", where the goal is to basically make the whole Informatika class of 2025 band together and basically just know each other better.

As part of this program, we are formed into many groups and each group has to "bond" with each other, that is, to meet with other groups and take selfies with each and every other student. The pictures would then be printed, cut and put in a "buku biru". This book contains many things I will not bother mentioning, but the most interesting bit is this list that each student has to fill with basic biodata of every single member of the major. Every single list item corresponds to a student and has to have that selfie pic I mentioned earlier.

Like any good programmer, I thought about the whole process:

- after taking pictures with every member of a group, I have to put them together **in a grid** so I can easily cut them.
- The pictures have to be **in order** too so that, after cutting the picture out, I can easily associate each photo with the corresponding entry in the buku biru.

I initially tried to make a grid layout with word, but quickly stumbled into problems:

- it was cumbersome to resize each picture after putting it into the page. There are no frame sizes I can plop pictures into like in Canva, AFAIK
- it was too difficult to keep track of which students are already printed. Sometimes I want to print only up to a certain number of pictures while keeping the rest in the page for later.

After a kader event and being soaked from the rain at the time, I thought about it for a while and said, "there has to be better way". I already named my pictures with a certain convention, where the first part is the name of the group that the student belongs in, and their NIM (nomor induk mahasiswa) and then the student's name. And so I thought to myself: "what if I make my own application where I can store student data, track bonding status, and upload images so that the app can automatically arrange them in a grid, which then can be printed? It would be very convenient".

And so the journey begins.

I started with a very simple prototype on my phone - no framework, just a single .js file. [it looked like this](https://github.com/Klrfl/kader-app/commit/a25903def6799040157f26dff5c3148f3d40eb69):

```js
import fs from "node:fs";

const files = fs.readdirSync(".");

for (const file of files) {
  if (file.startsWith("simurgh")) {
    console.log(file);
  }
}
```

So this JavaScript code basically just lists all the pictures of students in the current directory that belong to the group Simurgh. My idea is to take this and feed it into an HTML page so I can display it in the browser and print it.

From there, the app only evolved and gained more sophistication over time. After trying to use node's `node:http` module to make a lightweight backend paired with ejs, I eventually ntegrated a framework because I planned to integrate more complicated stuff, like a database (I initially considered using sqlite with node's `node:sqlite`) and frontend tooling (I want to use Tailwind). it's certainly quicker to build a prototype when you already know the tool you're building with.

I chose Astro, paired with Kysely to query an SQLite database. It is a very reliable framework when it comes to making glorified HTML forms that do things. I like the philosophy and paradigm behind it too, it's plain and simple and it doesn't try to mix up the frontend and the backend like other JavaScript frameworks do (_cough cough_ Next.js).

## Testing

After completing the MVP, I tested the app and generated a pdf so I can print the photos. It worked on my machine!

I tested the app initially with a friend who also uses a Linux system (Debian). I thought everything will go smoothly given we're not on Windows, and I developed the app on the same operating system as the user. I very quickly learned that what works for me doesn't always work for everyone else. The setup was difficult:

- he had problems with his installation of node.js - which he got from apt - so we installed it via fnm
- the way the app handles picture upload requires you to explicitly say, via environment variables, where to upload files to. It is really inconvenient, adds unnecessary work and the file upload doesn't even work when I try to build in production mode (not that I'm going to host it anyway).

From this, I improved the documentation. It's still a single README.md file but it's much better now. I ensured every small step required to run the app is there in the docs.

Then to solve the file upload thing, I took a page from Laravel's book and made a dedicated `storage` directory for the app to upload images to. And then, I made a command to make a symlink to the pictures stored in `storage` so Astro can serve them, in dev mode and in prod.

There are other small things I added over time, such as asynchronous image upload to not lose form editing state and redirecting the user back to the previous page with search state preserved after editing a student's data. These small improves matter a lot because it improves UX and saves time. It's very easy to implement too I may add; I don't have to manage any state because it's already encoded in the URL. if you want to read more on this, I highly recommend this [blog post from Ahmad Alfy](https://alfy.blog/2025/10/31/your-url-is-your-state.html).

## What I learned

I learned two things, first thing is that JavaSacript kinda suck at handling dates specifically. I was handling the input form for the date of birth, and I kept wondering why the month kept going down by one if you submit the form with the date unchanged. Turns out, when you use the `Date.getMonth()` method, it returns the _index_ of the month, not the number of the month itself.

```js
const month = new Date("1970-01-01").getMonth();
console.log(month); // 0
```

So what happened is I set the initial value of the date input to the _index_ of the month instead of the month directly, and when you submit, the server expects the form to contain the month as a number. Say the user selects February in the form. When the form is submitted, it will send over `1` which I'd the index of the month February, The next time the form gets loaded, `1` will be set as the initial value in the form field, which is interpreted as January.

The fix is very trivial: just increment the month before displaying it in the form.

Another thing I learned is that a solution to the problem has to not only solve the problem, but also easier than doing things manually. One thing related to this fact is that I only published the source code, encouraging people to run the spo locally and not use a hosted version. This app can easily be hosted, but I did not do it due to budget and time constraints, and as a result I had to instruct and give support to anyone who dares (lmao) to use my app.

I learned a lot from this journey: software engineering is not only about how many lines of code you can churn out or how many frameworks you know, it's about understanding your users problem and solve them effectively using the tools in the box.
