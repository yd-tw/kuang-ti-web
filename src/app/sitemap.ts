import { getAllPosts } from "next-posts";

export const baseUrl = "https://www.kuang-ti.com";

const basePages = [
  { link: "/", priority: 1.0, changefreq: "weekly" },
  { link: "/about", priority: 0.8, changefreq: "weekly" },
  { link: "/blogs", priority: 0.8, changefreq: "weekly" },
  { link: "/contest", priority: 0.8, changefreq: "weekly" },
  { link: "/link", priority: 0.7, changefreq: "weekly" },
  { link: "/projects", priority: 0.7, changefreq: "weekly" },
];

interface PostMeta {
  title: string;
  description: string;
  image?: string;
  publishedAt: string;
  tags?: string[];
}

export default async function sitemap() {
  // 靜態頁面
  const links = basePages.map(({ link, priority, changefreq }) => ({
    url: `${baseUrl}${link}`,
    lastModified: new Date(),
    changefreq,
    priority,
  }));

  // 部落格索引
  const posts = getAllPosts<PostMeta>();
  posts.forEach((post) => {
    links.push({
      url: `${baseUrl}/blogs/${post.slug}`,
      lastModified: new Date(post.metadata.publishedAt),
      changefreq: "weekly",
      priority: 0.5,
    });
  });

  return links;
}
