import { WeblogContents, WeblogPage } from "@/types";
import {
  CMSClient,
  CMSContents,
  CMSPageMeta,
  CMSContent,
  CMSMediaMeta,
  CMSQueries,
} from "wagtail-js";

const CMS_API_KEY = process.env.CMS_API_KEY || "";
const CMS_API_URL = process.env.CMS_API_URL || "";

export const cmsClient = new CMSClient({
  baseURL: CMS_API_URL,
  apiPath: "/api/cms/v2",
  mediaBaseURL: "https://cdn.traleor.com",
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
export const allBlogs = async (
  queries?: CMSQueries,
  cache?: RequestCache
): Promise<WeblogContents> => {
  const options = {
    locale: "en",
    type: "weblog.WeblogPage",
    fields: [
      "headline",
      "search_description",
      "image",
      "category",
      "date_published",
    ],
    // order: "random",
    // only include random if not search
    ...(queries?.search ? {} : { order: "random" }),
    ...queries,
  } as CMSQueries;

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
    { type: "weblog.WeblogPage", fields: ["*"] },
    undefined,
    cache
  )) as WeblogPage;
};

export type { CMSContents, CMSPageMeta, CMSContent, CMSMediaMeta };
