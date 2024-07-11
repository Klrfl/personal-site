---
title: "Man OJT is apparently not that easy "
day: 9
created_at: 2024-07-11T20:45:00.000Z
---
I'm running out of ideas to open this journal man. Anyways, today was largely the same as yesterday, where I worked on the new feature of one of Metland's internal site. Man let me tell you, the onboarding process is really hard. It was really tough reading legacy Laravel 5 code. Just to be clear, the app is already upgraded to Laravel 10 but there are still many artefacts of Laravel 5 scattered here and there.

I am not that surprised but best practices are taken as mere suggestions around here it seems: the controller is very fat, holds all the business logic and also very wet (which is the opposite of DRY if you don't get it).  Several controllers even check if the requests are made by a logged in user, which should have been done by a middleware. Oh yeah did I mention there is no version control? It's *also* not a surprise to me, but in this day and age I cannot comprehend any programmers working at any scale without Git, let alone Github. I will make it my goal to help introduce version control to this company..

Bottom line, it all really was convoluted, the views, the controllers... all of it. I cannot understate just how bad the code is. I hope I can handle it for the next several months.

Rant over
