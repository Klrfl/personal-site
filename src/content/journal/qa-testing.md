---
title: "Wearing a new hat: QA Testing"
day: 33
created_at: 2024-08-16T20:31:00.000Z
---
Ladies and gentlemen, I announce with pleasure that it is Thursday: today I moved on to a new internal application for managing company licenses and stuff. I was given a new task to test for bugs and unexpected behavior. I was to write down the bugs and its details to a spreadsheet to fix them later. That's what I did all day, nothing more.

Half of the bugs are trivial form validation stuff, things like being able to submit empty forms or omitting required fields. The other half was obvious oversight for edge cases (which actually relates to the form validation stuff) where, for example, if you search for something, the backend will throw an error because it couldn't search for an undefined value, which it got from the form, which is empty.
