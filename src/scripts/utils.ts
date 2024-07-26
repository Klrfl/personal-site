import type { CollectionEntry } from "astro:content";

export function sortPostsByDate(
  posts: CollectionEntry<"blog">[],
  limit: number = posts.length,
) {
  const sortedPosts = posts.sort((a, b) => {
    return (
      new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
    );
  });

  return sortedPosts.slice(0, limit);
}

export function formatDate(
  inputDate: Date,
  options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  },
) {
  const date = new Date(inputDate);
  return Intl.DateTimeFormat("en", options).format(date);
}
