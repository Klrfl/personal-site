import { glob } from "astro/loaders";
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

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "src/content/projects",
  }),
  schema: z.object({
    source_link: z.string().optional(),
    demo_link: z.string().optional(),
    image: z.string().optional(),
    order: z.number().positive(),
    alt: z.string().optional(),
    heading: z.string(),
    text: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
  journal: journalCollection,
  projects,
};
