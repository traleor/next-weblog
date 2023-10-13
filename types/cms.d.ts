export type WeblogContent =
  | SimpleRichTextContent
  | FullRichTextContent
  | CtaBlockContent
  | HeadingBlockContent
  | ImageBlockContent
  | BannerBlockContent
  | CodeBlockContent;

export interface SimpleRichTextContent {
  id: string;
  type: "simple_richtext";
  value: string;
}

export interface FullRichTextContent {
  id: string;
  type: "full_richtext";
  value: string;
}

export interface CtaBlockContent {
  id: string;
  type: "cta_block";
  value: CtaBlockValue;
}

export interface CtaBlockValue {
  text: string;
  link_page: string | null;
  link_url: string;
  open_in_new_tab: boolean;
}

export interface HeadingBlockContent {
  id: string;
  type: "heading_block";
  value: HeadingBlockValue;
}

export interface HeadingBlockValue {
  heading_text: string;
  size: "h2" | "h3" | "h4" | "h5" | "h6";
  heading_slug: string;
}

export interface ImageBlockContent {
  id: string;
  type: "image_block";
  value: ImageBlockValue;
}

export interface ImageBlockValue {
  image: ImageInfo;
  caption: string;
  attribution: string;
}

export interface ImageInfo {
  title: string;
  file: string;
  width: number;
  height: number;
  file_size: number;
}

export interface BannerBlockContent {
  id: string;
  type: "banner_block";
  value: BannerBlockValue;
}

export interface BannerBlockValue {
  hero_text: string;
  paragraph: string;
  image: ImageInfo;
  hero_link: CtaBlockValue;
}

export interface CodeBlockContent {
  id: string;
  type: "code_block";
  value: CodeBlockValue;
}

export interface CodeBlockValue {
  code: string;
  language: string;
}
