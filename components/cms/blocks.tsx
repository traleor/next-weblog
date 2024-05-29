import React from "react";
import {
  WeblogContent,
  SimpleRichTextContent,
  FullRichTextContent,
  CtaBlockContent,
  HeadingBlockContent,
  ImageBlockContent,
  BannerBlockContent,
  CodeBlockContent,
} from "@/types";
import Link from "next/link";
import { ImageAtom } from "./atoms";

const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "";

interface WeblogBlockRendererProps {
  content: WeblogContent;
}

const SimpleRichTextBlock: React.FC<SimpleRichTextContent> = ({ value }) => {
  return <div dangerouslySetInnerHTML={{ __html: value || "" }} />;
};

const FullRichTextBlock: React.FC<FullRichTextContent> = ({ value }) => {
  return <div dangerouslySetInnerHTML={{ __html: value || "" }} />;
};

const CtaBlock: React.FC<CtaBlockContent> = ({ value }) => {
  const pageUrl =
    value?.link_page?.url && NEXT_PUBLIC_BASE_URL + value?.link_page?.url;
  return (
    <Link
      href={pageUrl || String(value.link_url) || ""}
      target={value.open_in_new_tab ? "_blank" : "_self"}
    >
      {value.text || ""}
    </Link>
  );
};

const HeadingBlock: React.FC<HeadingBlockContent> = ({ value }) => {
  const HeadingTag = value?.size || "h2";
  return <HeadingTag id={value.heading_slug}>{value.heading_text}</HeadingTag>;
};

const ImageBlock: React.FC<ImageBlockContent> = ({ value }) => {
  return (
    <div>
      <figure>
        <ImageAtom image={value.image} />
        <figcaption>
          <Link href={value.attribution || ""} target="_blank">
            {value.caption || ""}
          </Link>
        </figcaption>
      </figure>
    </div>
  );
};

const BannerBlock: React.FC<BannerBlockContent> = ({ id, value }) => {
  const pageUrl =
    value?.hero_link.link_page?.url &&
    NEXT_PUBLIC_BASE_URL + value?.hero_link.link_page?.url;
  return (
    <section id={id}>
      <div>
        <h2>{value.hero_text || ""}</h2>
        <h3>
          <div dangerouslySetInnerHTML={{ __html: value.paragraph || "" }} />
        </h3>
        <ImageAtom image={value.image} />
        <Link
          href={(pageUrl || String(value.hero_link.link_url)) ?? ""}
          target={value.hero_link.open_in_new_tab ? "_blank" : "_self"}
        >
          {value.hero_link.text || ""}
        </Link>
      </div>
    </section>
  );
};

const CodeBlock: React.FC<CodeBlockContent> = ({ value }) => {
  return (
    <div className="block-code_block">
      <section className="default-padding full-width">
        <pre className={`language-${value.language}`}>
          <code className={`language-${value.language}`}>
            {value.code || ""}
          </code>
        </pre>
      </section>
    </div>
  );
};

const WeblogBlockRenderer: React.FC<WeblogBlockRendererProps> = ({
  content,
}) => {
  switch (content.type) {
    case "simple_richtext":
      return <SimpleRichTextBlock {...content} />;
    case "full_richtext":
      return <FullRichTextBlock {...content} />;
    case "cta_block":
      return <CtaBlock {...content} />;
    case "heading_block":
      return <HeadingBlock {...content} />;
    case "image_block":
      return <ImageBlock {...content} />;
    case "banner_block":
      return <BannerBlock {...content} />;
    case "code_block":
      return <CodeBlock {...content} />;
    default:
      // console.log("Unknown block type", content);
      return null;
  }
};

export default WeblogBlockRenderer;
