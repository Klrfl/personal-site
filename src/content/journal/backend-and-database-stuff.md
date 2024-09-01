---
title: Backend AND database stuff
day: 43
created_at: 2024-08-29T21:21:00.000Z
---
Like yesterday, there's not a lot to do today. When I do get a task, it's a bit
of a small one. I was told to change the deletion of a resource to be a soft
delete. One interesting thing is they used a column named `IS_DELETE`.. I did
suggest to use `deleted_at` instead so we can track when the items are deleted,
but alas they refused. So I implemented and tested it in an afternoon... done.

I said it's a small task, but it's small because it's a part of a bigger task.
The second task was to patch insertion, which currently isn't working. I don't
really know what causes the bug though, I think I'll work on it tomorrow.
