export function sortPostsByDate(posts) {
  return posts.sort((a, b) => {
    return new Date(b.frontmatter.pubDate) - new Date(a.frontmatter.pubDate);
  });
}

export function formatDate(
  inputDate,
  options = {
    weekDay: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
) {
  const date = new Date(inputDate);
  return Intl.DateTimeFormat(undefined, options).format(date);
}
