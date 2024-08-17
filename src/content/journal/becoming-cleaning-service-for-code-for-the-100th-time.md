---
title: Becoming cleaning service for code for the 100th time
day: 30
created_at: 2024-08-18T06:39:00.000Z
---
I continued to work on tasks from yesterday, which is cleaning up the main company website's CMS. I don't know how many times I wrote this already but man do I hate legacy code. That [2024 Stack Overflow Survey result](https://survey.stackoverflow.co/2024/professional-developers/#2-most-common-frustrations) will resonate with me forever now.

Anyways, I fixed up the carousel and removed placeholders from a form... No biggies right? Well this site has i18n, and that means it has content for Indonesian and English. You get whan I'm implying here? *sigh* yes, the site really duplicates all of its pages for i18n. So basically you have two websites you need to maintain, and that includes all the pages and components in it. I have to update twice as many pages. Fortunately I could make a bandaid fix by extracting the component and importing it in the pages that need it. It's still WET, but at least I can update in one place now.
