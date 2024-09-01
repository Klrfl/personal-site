---
title: Small part of a big problem
day: 44
created_at: 2024-08-30T21:22:00.000Z
---
Today I was told that I have another task which is to test all modules of an
internal app, but only when yesterday's task is done. So I decided to continue
the work from yesterday. Like I said It's a very big and complex task.. I didn't
do a lot, because I was just sitting around reading the code. It involved a
really big stored procedure with several lines of joins with i think 20 or so
tables... yeah it's a horror show. I feel really bad today because I didn't make
a lot of progress, and at the end of the day I understood very little of what
the SP does with all its table dependencies. I'm sorry but the SP is just that
_big_.

I copied and tried to run one part of the query which is a 50-line `SELECT` with
multiple joins. It worked on the SP, but when run as a separate query it
doesn't... This stumped me until the evening. Ugh I think I can't do this
