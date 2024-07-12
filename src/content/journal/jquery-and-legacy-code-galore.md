---
title: jQuery and legacy code galore
day: 10
image:
  url: https://ucarecdn.com/66000e0e-94ed-498f-832f-9a09fe1b0ff0/
created_at: 2024-07-12T20:46:00.000Z
---
Today I continued working on my task, still largely the same as before. Today I properly implemented the modals on the forms so you can actually select some values with it. Man let me tell you, traversing the blade view was so hard. Everything is duplicated. Say you have 3 tabs, and each tab has a form in it. Each form in turn has 2 modals containing the exact same data, so instead of writing one piece of jQuery code observing each form to trigger 2 modals, you instead write 2 x 3 modals AND the corresponding code. I can't even imagine the other 100 views in that app lol. That really hindered my productivity.

After this task is done I will tell my superiors to let me focus on refactoring to accomodate anyone who wants to implement a new feature in the far future. I can change some id and class names, and even breaking up the markup into components for better reusability. I hope I can leave a good legacy in the codebase.
