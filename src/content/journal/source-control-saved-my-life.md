---
title: Source control saved my life
day: 110
created_at: 2024-11-28T11:43:00.000Z
---
Some days ago I decided to refactor the query that checks the role id in a page to prevent SQL injection and improve code readability. The original query was good ol' string concatenation which you can easily inject with SQL. Yes, internal users are unlikely to do such an attack, but any vulnerability needs to be patched no matter how small they are.

Today I got a bug report, where a user couldn't get in a particular page. It was caused by an error "converting nvarchar to int" (we use SQL Server). I quickly diffed the query before and after the refactor, and sure enough, it was caused by an error in the refactor. I can't write down all the details, but I forgot to include a role that should've been in the list of roles permitted to access the page.

I couldn't imagine *not* having source control in 2024...
