---
title: Move on to MHG
day: 100
created_at: 2024-11-15T09:57:00.000Z
---
Now we move on to a new project. This time I worked on the frontend of the MHG website, specifically on the /hotels route. There is a whole page which I was instructed to replicate. It was pretty simple: at the top there's your classic navbar, and for the main content, there's a grid of hotel cards with a button that, when clicked, opens a dialog with details about the hotel. And, at the very top of the dialog, there's an auto-scrolling carousel that has four images in each slide. Should be pretty simple to implement right? right?

I started planning on how I would code this page. Everything I make:
- should minimize bloat and should be as lightweight as possible, so whatever it is that I build, I would first look into native browser APIs, and then resort to libraries if needed.
- should be lean and efficient. The less lines of code I can write the better. Shipping unnecessary code to the client negatively impacts performance.

## implementing the dialog

The dialog can be implemented natively without any libraries now that HTML has this brand new [dialog](<https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog >) element, which has HTML attributes to close the dialog without any JavaScript code. But, it also has methods so we can open and close it programatically. It also handles 
- escape keys to close the dialog, and
- focus trap

all of which requires extra JavaScript if I didn't use this element. Very cool, let's get to work!

But there's one small thing I haven't mentioned...

Inside the image carousel, I had to implement a lightbox, where you click an image and it will appear fullscreen, above everything else. This will be important to the story later...

So I started to implement the dialog the best way, which is to use the `showModal()` method.
