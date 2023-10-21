export function sortPostsByDate(posts, limit = null) {
  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.data.pubDate) - new Date(a.data.pubDate);
  });

  if (typeof limit === "number") {
    return sortedPosts.slice(0, limit);
  }
  return sortedPosts;
}

export function formatDate(
  inputDate,
  options = {
    weekDay: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  },
) {
  const date = new Date(inputDate);
  return Intl.DateTimeFormat(undefined, options).format(date);
}
