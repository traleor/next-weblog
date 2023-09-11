import { AppConfig } from "@/config";
import { WeblogContents, WeblogPage } from "@/types";
import {
  CMSClient,
  CMSContents,
  CMSPageMeta,
  CMSContent,
  CMSMediaMeta,
} from "wagtail-js";

const CMS_API_KEY = AppConfig.CMS_API_KEY;
const CMS_API_URL = AppConfig.CMS_API_URL;

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
export const allBlogsMeta = async (): Promise<WeblogContents> => {
  return (await cmsClient.fetchPages({
    locale: "en",
    order: "random",
    type: "weblog.WeblogPage",
  })) as WeblogContents;
};

/*
 * allBlogs gets all blogs from the CMS with basic info for display
 * returns a promise of CMSContents
 */
export const allBlogs = async (
  limit?: number,
  cache?: RequestCache
): Promise<WeblogContents> => {
  return (await cmsClient.fetchPages(
    {
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
    },
    undefined,
    cache
  )) as WeblogContents;
};

/*
 * getBlog gets a single blog from the CMS by slug
 * returns a promise of CMSContent
 */
export const getBlog = async (
  slug: string,
  cache?: RequestCache
): Promise<WeblogPage> => {
  return (await cmsClient.fetchPage(
    slug,
    { fields: ["*"] },
    undefined,
    cache
  )) as WeblogPage;
};

export type { CMSContents, CMSPageMeta, CMSContent, CMSMediaMeta };
