---
title: QA Testing finished
day: 50
created_at: 2024-09-11T15:18:00.000Z
---
This day I finished the grueling task of manually testing an internal company webapp, and oh my it is so boring. I tested all 300 pages and documented all the errors and bugs in a single spreadsheet. Many of the bugs were related to form validation, where the users shouldn't be able to omit a require value. Most of these result in missing parameters and SQL syntax errors (apparently a few of the pages doesn't use prepared statements and instead concatenate raw SQL queries, SQL injection ftw).
