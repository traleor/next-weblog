import { MetadataRoute } from "next";
import { AppConfig } from "@/config";
import { allPageMeta } from "@/lib";

const BASE_URL = AppConfig.NEXT_PUBLIC_BASE_URL;

// Read https://www.sitemaps.org/protocol.html
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await allPageMeta();
  // console.log("BLOGS", JSON.stringify(blogs, null, 4));

  const pageSiteMaps: MetadataRoute.Sitemap = pages.items.map((item) => {
    const meta = item.meta;
    return {
      url: BASE_URL + new URL(meta.html_url).pathname,
      lastModified: new Date(),
      changeFrequency:
        item.meta.type === "weblog.WeblogIndex" ? "weekly" : "daily",
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
    ...pageSiteMaps,
  ];
}
