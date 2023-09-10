import { CMSClient, CMSContents } from "wagtail-js";

const CMS_API_KEY = process.env.CMS_API_KEY || "";
const CMS_API_URL = process.env.CMS_API_URL || "";

export const cmsClient = new CMSClient({
  baseURL: CMS_API_URL,
  apiPath: "/api/cms/v2",
  headers: {
    "Traleor-Api-Key": CMS_API_KEY,
  },
});

export type { CMSContents };
