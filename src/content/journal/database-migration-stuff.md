---
title: Database migration stuff
day: 40
created_at: 2024-08-27T04:17:00.000Z
---
_this post is for today and yesterday, because if I wrote a dedicated post about
yesterday it would make be really short_

For this week's first task, we're going to do some database administration stuff.
Sir Adit told me a little backstory where they have this internal app for
managing the company hotel assets. Now requirements have changed and the app has
expanded to include the whole company, so there are lots of different kinds of
assets in the database.

So then, I was told to migrate some data to from their old database to a new one
which is being actively developed. They have many many tables but I was told to
take care of three. ALl three have different schemas, and I managed to migrate
two
them easily.

One table, `master_item`, has 40-some duplicate data. I was about to overwrite
the old data with the new one, but upon telling sir Adit he said to leave it to
the development team... so I jotted down the IDs of said duplicate data, and
that's that.
