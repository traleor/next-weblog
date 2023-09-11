import { AppConfig } from "@/config";
import { MetadataRoute } from "next";

const BASE_URL = AppConfig.NEXT_PUBLIC_BASE_URL;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: BASE_URL + "/sitemap.xml",
  };
}
