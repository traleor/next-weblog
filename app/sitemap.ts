import { MetadataRoute } from "next";
import { CMSPageMeta, allBlogsMeta } from "@/lib";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://next-pro-weblog.vercel.app";

// Read https://www.sitemaps.org/protocol.html
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await allBlogsMeta();
  // console.log("BLOGS", JSON.stringify(blogs, null, 4));

  const blogSiteMaps: MetadataRoute.Sitemap = blogs.items.map((item) => {
    const meta = item.meta as CMSPageMeta;
    return {
      url: BASE_URL + "/blog/" + meta.slug,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    };
  });

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
    ...blogSiteMaps,
  ];
}
