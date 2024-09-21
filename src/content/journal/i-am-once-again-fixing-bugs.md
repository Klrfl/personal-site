---
title: I am once again fixing bugs
day: 56
created_at: 2024-09-17T01:21:00.000Z
---
Like I said on (insert link here) day 53, much of the bugs in MPS are related to
form validation, so it's fairly easy to fix. I implemented validation in both
the frontend and the backend but only in some pages, because sometimes it is
just not possible to do both without breaking the apps in some other pages. Let
me explain with an example.

In a regular app, controllers for views and business logic are separate, for
example, let's say we are building a news website. To create the edit feature
for an individual news article, we would have a controller to serve the edit
view in the path `/edit` with the method `GET`, which we'll give it the name
`news.edit`. Then we'll have another controller in the same path but with the
method `POST` to handle the form submission, which we'll name `news.update`. in
the controller of the `news.update` route, we'll use a validator to validate all
user input. If the validator doesn't throw an error, the update will be
successful then the user will be redirected from `news.update` to `news.edit`.
If the update doesn't succeed however, the validator will redirect back to the
previous route (which is `news.edit`) which can display relevant errors.

But in MPS, most pages are handled like this:

* a route for the initial edit page, `resource.edit` and
* another route `resource.editview` that only accepts a `POST` method that
  directly serves the page, and it doesn't redirect to `resource.edit`.

There's one not very obvious problem with this approach: let's say the user
inputs a field with the wrong format that gets caught by the form request
validator. The default behavior of the validator is to redirect back to the
previous route with the `GET` method, which only accepts `POST`. This method
mismatch obviously triggers an error and breaks the app.

![the error message basically says 'this route doesnt support GET, it only supports POST.'](https://ucarecdn.com/2d95aaeb-b6ce-480c-b4e5-9894036e5ae8/-/resize/800x450/mps-error.png)

For now I just went with a bandaid solution, which is to handle validation on
the frontend to prevent users from making the request in the first place. I know
it's not optimal, so before doing anything serious I'll discuss it with sir Adit.
Hopefully he agrees to let me refactor the pages and use the established
pattern.
