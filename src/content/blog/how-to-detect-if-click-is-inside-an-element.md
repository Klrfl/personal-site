---
title: How to detect if click is inside an element
pubDate: 2024-11-06T14:33:00.000Z
description: Detect if your user is clicking inside or outside an element with
  some client-side JavaScript
author: Efraim
tags:
  - tips
---
Hi there. Today I wanted to share with you how to detect if a click was made inside or outside an element. Apologies for lack of pictures, I will add them later as I was writing this as soon as I can after discovering the trick..

I assume you already have a basic understanding of JavaScript and DOM manipulation, so I will not explain too much things that are beyond the scope of this post.

In my case, I want to detect if my users is clicking outside a dialog or not. So the first thing to do is get the element and register a click event listener:

```javascript
const dialog = document.getElementById('#dialog')

dialog.addEventListener('click', (e) => {
  // do something..
})
```

Now we want to calculate if the click is made inside the dialog or not:

```javascript
dialog.addEventListener('click', () => {
  const { layerX, layerY } = e
  const dialogHeight = hotelDialog.clientTop + hotelDialog.clientHeight;
  const dialogWidth = hotelDialog.clientLeft + hotelDialog.clientWidth;
  const isClickedInsideDialog =
            layerX >= 0 &&
            layerY >= 0 &&
            dialogHeight >= layerY &&
            dialogWidth >= layerX
  if (isClickedInsideDialog) {
    console.log('user clicked inside dialog')
  } else {
    console.log('user clicked outside dialog')
  }
})
```

With this method, I want you to keep in mind that every calculation below is done relative to the element's top left pixel. Okay, now let's unpack this code:

* `const { layerX, layerY } = 0`: The event object that JavaScript provides in the event listener callback contains two properties called `layerX` and `layerY`, which tells us how far the click was made **relative to our element's top left pixel**. For example, if the the element's top left pixel `Y` coordinate is 3, and the user clicked on top of the element, then `layerY` will be less than 0 (for example `-3`), and the inverse is true (click is below top left pixel, `layerY` > 0). Now let's say the element's top left pixel `X` coordinate is `3`, if the user clicked on the left, then will be negative (for example `-10`), the inverse is also true (click is right of top left pixel, `layerX` > 0).
* \`const dialogWidth... const dialogHeight\`: we made two variables to store the element's bottom right pixel, which is just the sum of \`clientWidth\` and the X coordinate of the top left pixel, and the sum of \`clientTop\` and the Y coordinate of the top left pixel respectively.
* `layerX >= 0 && layerY >= 0 && dialogHeight >= layerY && dialogWidth >= layerX`: Okay this is a lot. The first `&&` condition checks if both the \`layerX\` and \`layerY\` is bigger than 0. If you're not sure why, we have to make sure that the click is made either on the top left pixel or below and right of it. The second condition (`dialogHeight >= e.layerY && dialogWidth >= e.layerX`) makes sure that the click was made inside the element itself. Think about it: an outside click will have a coordinate that is either lower than the bottom right pixel or is closer to the right than the bottom right pixel does.

Now we have the condition to check if the click, was made inside the element, we can do anything with it.

Thank you for reading :)
