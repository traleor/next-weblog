import { MetadataRoute } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://next-pro-weblog.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = [
    {
      url: BASE_URL + "/blog/abc",
    },
    {
      url: BASE_URL + "/blog/abc",
    },
  ];
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: BASE_URL + "/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: BASE_URL + "/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    // create a sitemap for each blog
    ...blogs.map((blog) => ({
      url: blog.url,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    })),
  ];
}
