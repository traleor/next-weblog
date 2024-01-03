import "server-only";
import { AppConfig } from "@/config";
import { Page, PageContents, WeblogContents, WeblogPage } from "@/types";
import {
  CMSClient,
  CMSContents,
  CMSPageMeta,
  CMSContent,
  CMSMediaMeta,
  CMSQueries,
} from "wagtail-js";

// TODO: ADD TRY CATCH TO ALL FUNCTIONS

const CMS_API_KEY = AppConfig.CMS_API_KEY;
const CMS_API_URL = AppConfig.CMS_API_URL;

type Languages = "en" | "fr";
type PageType = "cms.HomePage" | "weblog.WeblogIndex" | "weblog.WeblogPage";

export const cmsClient = new CMSClient({
  baseURL: CMS_API_URL,
  apiPath: "/api/cms/v2",
  mediaBaseURL: "https://cdn.traleor.com",
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

/*
 * allBlogsMeta gets all blogs with metadata from the CMS
 * returns a promise of CMSContents
 */
export const allPageMeta = async (
  type?: PageType,
  lang?: Languages
): Promise<PageContents> => {
  const options = {
    locale: lang || "en",
    order: "random",
    ...(type ? { type: type } : {}),
  } as CMSQueries;

  return (await cmsClient.fetchPages(options)) as PageContents;
};

/*
 * getPageMeta
 */
export const getPageMeta = async (
  slug: string,
  type?: PageType,
  lang?: Languages,
  cache?: RequestCache
): Promise<Page> => {
  const options = {
    locale: lang || "en",
    fields: ["seo_title", "search_description"],
    ...(type ? { type: type } : {}),
  } as CMSQueries;

  return (await cmsClient.fetchPage(slug, options, undefined, cache)) as Page;
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
