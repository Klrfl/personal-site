import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z
      .object({
        url: z.string(),
        alt: z.string().default(""),
      })
      .optional(),
    tags: z.array(z.string()),
  }),
});

const journalCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    day: z.number(),
    created_at: z.date(),
    image: z
      .object({
        url: z.string(),
        alt: z.string(),
      })
      .optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  journal: journalCollection,
};
