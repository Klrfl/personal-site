---
title: Networking and containerization
day: 2
image:
  url: /assets/uploads/ojt.jpg
  alt: Me, Aira and Abim holding the ethernet cables to connect our three PCs
    together through a switch.
created_at: 2024-07-02T20:27:00.000Z
---
Today is Tuesday, which is day #2 of my OJT. Today is actually the first day I go to the office by angkot. In short, I arrived too fast, waaay to fast in fact. The janitor hasn't arrived yet, and the door wasn't even opened yet. I was too fast by probably 1 hour 30 minutes. It's ok..

We started the day with a bit of Docker and WSL. Sir Rudi, our instructor, told us that he wanted to use Docker to improve the infrastructure on the company's server. Man let me tell you it took hours to set up. When installing Docker Desktop, There was an issue with updating WSL. I already have the 4.30 installer in my flash drive, so that was the first version I installed, then I tried downloading version 4.31, that didn't work too. After reading a Github issue thread the only solution is to downgrade to 4.28... so that was fun.

Sir Rudi then resumed the day with an intoduction to some networking. After a small bit of theory, we got our hands on some ethernet cables and a switch, then set up a LAN so we can ping each other. There were three computers in the LAN, One an iMac and 2 Windows computers. When the Windows computers can't ping each other, Sir Rudi pointed out there was a firewall blocking communication in between, and after disabling the firewall, the packets started flowing. So that was also fun.

Then I ended the day by setting up my preferred local development environment on the work PC, which of course is WSL2 + Nvim + Tmux for blazing fast programming (probably not). When installing Nvim, treesitter kept complaining about a missing header file, which was apparently caused by a missing dependency (libc++6).

Right that's it for my second day at the office. Hope I can do better tomorrow.
