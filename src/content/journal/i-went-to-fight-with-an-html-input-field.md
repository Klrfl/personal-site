---
title: I fought with an HTML input field today
day: 29
created_at: 2024-08-12T20:40:00.000Z
---
Today is another Monday, and I decided to write a dedicated entry today (which I should)
because unlike other Mondays in the past few weeks, today I actually did something interesting , and I feel today really deserves its own post.

Still from last week, I was working on the main site's CMS, which is built with
CodeIgniter 3 (😭). I continued building the CRUD functionality on the media,
which involved file input fields.

The UI is not that great but it's enough to be usable. You can click on a button
to add an input field, you can do it infinitely (yeah definitely will work
on that tomorrow) and if you submit without uploading an image.. you can't
because it's required. It's great for an MVP. That's just the C of the CRUD
process, and the U and D (soft delete) part also works great.

I'm pretty proud of it. But let me tell you, implementing D was really hard.
Initially I had a list of preview images on top of the inputs roughly like so:

```html
<div>
  <img src="urltoimage.jpg" />
  <img src="urltoanotherimage.jpg" />
</div>

<div>
  <input type="file" required />
</div>

<button>Add image</button>
```

Yeah I used divs I know, I'll refactor it later I guess, I just don't have the
time to do it right. Anyways I decided to add checkboxes to mark which images
should be soft deleted:

```html
<div>
  <img src="urltoimage.jpg" />
  <label>Delete image</label>
  <input type="checkbox" name="images[idofimage1][is_deleted]" value="0" />
  <input type="hidden" name="images[idofimage1][id]" value="idofimage1" />

  <img src="urltoanotherimage.jpg" />
  <label>Delete image</label>
  <input type="checkbox" value="0" />
  <input type="checkbox" name="images[idofimage2][is_deleted]" value="0" />
  <input type="hidden" name="images[idofimage2][id]" value="idofimage2" />
</div>

<div>
  <input type="file" required />
</div>

<button>Add image</button>
```

So we have two new input fields, one a chekbox with a label so we can still
toggle it when we hide the checkbox later, and a hidden input to store the id of
the target image.

I was really proud of it because I came up with it myself. Not really, I read
about the array part from [this blog
post](https://mattstauffer.com/blog/a-little-trick-for-grouping-fields-in-an-html-form/)
Big thanks, Matt Staufer. If you don't understand how the input transforms into
an array in the backend, which is crucial for understanding what I mean below,
I recommend reading the post first.

On the backend, we can just loop through the `images` array and check whether
the `is_deleted` field is true or not (more like 0 or 1 but yeah it's basicall
ythe same). Happily I marched on to the relevant PHP file, and wrote basically
this:

```php
foreach ($images as $image) {
  if ($image->is_deleted) {
    // soft delete image from the db
   $this->db->update('is_delete', 1);
  }
}
```

But then an error came out. The `is_deleted` was not there. I swear, I tried to
`var_dump ` the `$key` from `$images` and all it showed was the image `id` key.
Why would the hidden field show up, but the checkbox which is not hidden or
disabled, not? I went semi crazy over this.

After like an hour or two with fruitless debugging, I tried checking one of the
images. And oh my God it showed up.

Turns out that if a checkbox isn't checked, it will not show up on the
backend. Only when it is toggled on, then it shows up.

I hope this post saves another beginner like me from wasting countless hours from
debugging... haha
