import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const blogCollection = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "src/content/blog",
  }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    lang: z.enum(["id", "en"]),
    is_archived: z.boolean().optional().default(false),
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
  loader: glob({
    pattern: "**/*.md",
    base: "src/content/journal",
  }),
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
