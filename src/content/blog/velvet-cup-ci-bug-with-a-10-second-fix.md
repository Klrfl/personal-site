---
title: Velvet Cup CI bug with a 10-second fix
pubDate: 2025-07-19T13:46:00.000Z
description: In hindsight, the solution was pretty simple
author: Efraim
image:
  url: https://ucarecdn.com/718468d3-d67e-460c-be6c-5f7333f26f71/-/resize/800x450/Screenshot
    from 2025-07-19 11-20-20.png
  alt: four Github Actions runs. Only the most recent one is successful
tags:
  - tips
---
So after taking a break for a while (procrastinating), I decided to work on my Velvet Cup app again. The app's CI flow was working fine, but the last step was failing with the message `pm2: command not found`. So the whole time I had to restart the app by manually SSHing into my EC2 instance after a deployment.

After fixing it it became clear in hindsight that the problem was quite simple: a non-interactive terminal session and an interactive one is different. Let me explain.

The idea of the last CI step was to run `pm2 restart` after copying the app so that the new version of the app would be served, otherwise the old static assets are used and the frontend would not work at all. So I looked up on DuckDuckGo (yes I don't use google) how to ssh into a remote machine in a Github Actions runner. The ssh worked, but the command didn't, it always throws code 1 and a message: `pm2: command not found`. 

It was really weird, the command **definitely** exists. So my intuition was to check for the location of the command with `which`, interactively and through Actions, and see if they're any different. I checked for other commands as well like `pnpm` and `fnm` - they don't exist too.

So my suspicion rose and I checked the $PATH variable, which you would know is crucial to set after installing a program if you have worked with the terminal before. It was different, the non-interactive ssh session printed out a shorter $PATH. And the final stackoverflow question to end it all:[^1] I looked up why the $PATH is different in programmatic sessions (i used this term because I didn't know about 'interactive' or 'non-interactive' sessions). The answer was that there was five lines of shell script at the very top of the .bashrc file (which is used for configuring the shell) that checks whether the session is interactive or not. The path for `pnpm` and `fnm` was set at the very bottom, so the commands would only execute *if* the session was interactive.

The solution is very very simple: move up the $PATH definition for `fnm` and `pnpm` up above the check. Editing the .bashrc file took me like 10 seconds.

After triggering another CI run, the deploy was successful! It was time consuming, but the experience is certainly very rewarding.

Hope this post can help your own debugging journey!

[^1] [How do I set $PATH such that `ssh user@host command` works? - stackoverflow](https://stackoverflow.com/questions/940533/how-do-i-set-path-such-that-ssh-userhost-command-works)
