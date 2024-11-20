---
title: Move on to MHG
day: 99
created_at: 2024-11-15T09:57:00.000Z
---
Now we move on to a new project. This time I worked on the frontend of the MHG website, specifically on the /hotels route. There is a whole page which I was instructed to replicate. It was pretty simple: at the top there's your classic navbar, and for the main content, there's a grid of hotel cards with a button that, when clicked, opens a dialog with details about the hotel. And, at the very top of the dialog, there's an auto-scrolling carousel that has four images in each slide. Should be pretty simple to implement right? right?

I started planning on how I would code this page. Everything I make:

* should minimize bloat and should be as lightweight as possible, so whatever it is that I build, I would first look into native browser APIs, and then resort to libraries if needed.
* should be lean and efficient. The less lines of code I can write the better. Shipping unnecessary code to the client negatively impacts performance.

## implementing a dialog

The dialog can be implemented natively without any libraries now that HTML has this brand new [dialog](<https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog >) element, which has HTML attributes to close the dialog without any JavaScript code. But, it also has methods so we can open and close it programatically. It also handles

* closing the dialog automatically via form method attributes (on the form or button)
* escape keys to close the dialog, and
* focus trap

all of which requires extra JavaScript if I didn't use this element. Very cool, let's get to work!

But there's one small thing I haven't mentioned...

Inside the image carousel, I had to implement a lightbox, where you click an image and it will appear fullscreen, above everything else. This will be important to the story later...

So I started to implement the dialog the best way, which is to use the `showModal()` method.

You know, this isn't my typical 'pristine' project where I take control over every single line of code. I don't set code standards, style guides, formatting... Everything like that goes out of the window. In fact most of the site was exported from Wordpress, so the markup was a disgusting (sorry) mix of handwritten, duplicated WET markup and Elementor div soups. And because of that, when I first styled the dialog, there were many many conflicts caused by layers upon layers of various CSS files. Fun fact, there were a grand total of three `font-family` declarations on the body alone. **Three**!

Styling issues aside, early on I ran to a fairly major problem. I used a library called [Photoswipe](https://photoswipe.com/getting-started/) for the lightbox on the photo carousel to speed up development time. It all works fine except for the fact that after you click the photo, the lightbox will appear below the dialog. The HTML dialog element is put on the [top layer](https://developer.mozilla.org/en-US/docs/Glossary/Top_layer) (which creates a new stacking context) automatically, therefore any document with whatever z-index value it has won't affect it, including the lightbox... Oh well. How do I fix this???

## Speed of implementation > correctness

In a haste I decided to drop the `showModal()` method in favor of `show()`. This method also can create a dialog, but there are differences:

* no `::backdrop` pseudo-element
* dialog is not put in the top layer
* no focus trap
* no escape key handling

At that moment I thought that the ability to just show the lightbox properly outweights all of the aforementioned downsides. So I pushed through...

From the minor inconveniences to major styling issues, I started styling the dialog. Previously with `showModal()` I just needed to adjust the width and height and the dialog, and voila we're already halfway to a basic dialog. With `show()`, I need to set the position to absolute, position it properly by setting proper inset and margin, and recreate the `::backdrop`. The dialog backdrop was the hardest part I think: I had to create a ::before pseudo element on the body to mask everything behind it when the dialog was open, so I turned to the `has()` selector. It didn't work initially because surprise-surprise, one of the elementor stylesheets had this declaration:

```css
body::before, body::after {
  content: none !important;
}
```

Yep it used `!important`. Which I promptly overrided with another `!important`. Sorry 😭

That's just the styling, on the interactivity side I also needed to recreate focus trap and handle escape keys, which was a nightmare.

It took two days but all the issues (except one) were successfully ironed out and the dialog was, at last, usable.

## Course correction

On the next day after successfully implemented the dialog, I tested and played around with it until eventually I noticed that I didn't implement focus trap properly, and the user can easily tab their way out of the dialog. At that point, I regretted my decision of not using \`showModal\` and decided to refactor everything. But the results were clear: the style sheet was smaller than what I started with, and I had less JavaScript too, since I didn't have to attach an event listener for things like the escape key and the close dialog.

Now we're back to square one with the lightbox problem. How did I manage to fix it? At first I tried to automatically go full screen when the lightbox appears, but after some testing, it's apparently very unstable. When the user closes the lightbox, the user will get out of full screen and see the lightbox go under the dialog. Very frustating!

With some hacking I found that Photoswipe has an option that allows you to append the lightbox to an element of your choice, so I tried to append it to the dialog. After some promises and also trial and error, it worked!

The way I wrote it I made it seem very straightforward, when in reality it's a lot of googling and trial & error... It took me way longer to fix it than you reading this post! After almost a whole day and a plethora of styling issues, I successfully reimplemented the dialog, this time, correctly.
