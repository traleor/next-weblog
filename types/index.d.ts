export * from "./cms";
import { WeblogContent } from ".";
import { CMSContent, CMSPageMeta, CMSMediaMeta } from "@/lib";

export interface CMSImage {
  title: string;
  file: string;
  width: number;
  height: number;
  file_size: number;
}

export interface WeblogCategory {
  id?: number;
  name: string;
  slug: string;
  description: string;
}

export interface WeblogImage {
  id: number;
  title: string;
  meta: CMSMediaMeta;
}

export interface WeblogAuthor {
  first_name: string;
  last_name: string;
  image: CMSImage;
  job_title: string;
  biography: string;
  thumbnail: string;
  // TODO: Add this
  social_links: WeblogSocialLink[];
}

export interface Page {
  id: number;
  title: string;
  meta: CMSPageMeta;
  body: any;
}

export interface WeblogPage {
  id: number;
  title: string;
  headline: string;
  meta: CMSPageMeta;
  category: WeblogCategory;
  image: WeblogImage;
  authors: WeblogAuthor[];
  body: WeblogContent[];
  tags: string[];
  date_published: string;
}

export interface PageContents {
  meta: {
    total_count: number;
  };
  items: Page[];
}

export interface WeblogContents {
  meta: {
    total_count: number;
  };
  items: WeblogPage[];
}
