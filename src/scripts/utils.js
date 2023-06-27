export function sortPostsByDate(posts) {
  return posts.sort((a, b) => {
    return new Date(b.frontmatter.pubDate) - new Date(a.frontmatter.pubDate);
  });
}
