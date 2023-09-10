import { CMSClient, CMSContents, CMSPageMeta, CMSContent, CMSMediaMeta } from "wagtail-js";

const CMS_API_KEY = process.env.CMS_API_KEY || "";
const CMS_API_URL = process.env.CMS_API_URL || "";

export const cmsClient = new CMSClient({
  baseURL: CMS_API_URL,
  apiPath: "/api/cms/v2",
  headers: {
    "Traleor-Api-Key": CMS_API_KEY,
  },
});

/*
 * allBlogsMeta gets all blogs with metadata from the CMS
 * returns a promise of CMSContents
 */
export const allBlogsMeta = async () => {
  return await cmsClient.fetchPages({
    locale: "en",
    order: "random",
    type: "weblog.WeblogPage",
  });
};

/*
 * allBlogs gets all blogs from the CMS with basic info for display
 * returns a promise of CMSContents
 */
export const allBlogs = async (limit: number) => {
  return await cmsClient.fetchPages({
    locale: "en",
    order: "random",
    type: "weblog.WeblogPage",
    fields: [
      "headline",
      "search_description",
      "image",
      "category",
      "date_published",
    ],
    limit: limit,
  });
};

export type { CMSContents, CMSPageMeta, CMSContent, CMSMediaMeta };
