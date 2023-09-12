import { AppConfig } from "@/config";
import { WeblogContents, WeblogPage } from "@/types";
import {
  CMSClient,
  CMSContents,
  CMSPageMeta,
  CMSContent,
  CMSMediaMeta,
  CMSQueries,
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

// NOTE: Structure your pages and urls in the CMS to match the structure of your app
// This will make it easier to fetch pages and build links/urls
// Example:
//   - CMS page: /blog
//   - CMS page: /blog/{slug}
//   - CMS page: /tutorials
//   - CMS page: /tutorials/{slug}

type PageType = "cms.HomePage" | "weblog.WeblogIndex" | "weblog.WeblogPage";

/*
 * allBlogsMeta gets all blogs with metadata from the CMS
 * returns a promise of CMSContents
 */
export const allPageMeta = async (type: PageType): Promise<WeblogContents> => {
  return (await cmsClient.fetchPages({
    locale: "en",
    order: "random",
    type: type,
  })) as WeblogContents;
};

/*
 * allBlogs gets all blogs from the CMS with basic info for display
 * returns a promise of CMSContents
 */
export const allBlogs = async (
  limit?: number,
  cache?: RequestCache,
  child_of?: number
): Promise<WeblogContents> => {
  const options = {
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
  } as CMSQueries;

  if (child_of !== undefined) {
    options.child_of = child_of;
  }

  if (limit !== undefined) {
    options.limit = limit;
  }

  return (await cmsClient.fetchPages(
    options,
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
