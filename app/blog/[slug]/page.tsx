import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import type { Metadata, ResolvingMetadata } from "next";
import { Card, Grid, TraleorComments } from "@/components";
import { allBlogs, cmsClient, getBlog } from "@/lib";
import WeblogBlockRenderer from "@/components/cms/blocks";

type Props = {
  params: { lang: string; path: string; slug: string };
};

export async function generateMetadata(
  { params: { slug } }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // https://nextjs.org/docs/app/building-your-application/optimizing/metadata
  const parentMetadata = await parent;
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = parentMetadata?.openGraph?.images || [];

  return {
    title: `Blog ${slug}`,
    openGraph: {
      images: [...previousImages],
    },
  };
}

async function getPageContent(slug: string) {
  try {
    // TODO: Add nocache to always get the updated content
    const weblog = await getBlog(slug);
    const blogs = await allBlogs({ limit: 3 });

    return {
      weblog: weblog,
      blogs: blogs.items,
    };
  } catch (error) {
    console.error("Slug Page: Error fetching page content", error);
    return {
      weblog: null,
      blogs: null,
    };
  }
}

export default async function Page({ params: { lang, path, slug } }: Props) {
  const pageData = getPageContent(slug);
  const [{ weblog, blogs }] = await Promise.all([pageData]);
  console.group("Page");
  console.log("Params", lang, path, slug);
  console.log("Weblog", weblog);
  console.groupEnd();

  if (!weblog) {
    return (
      <div className={styles.blog_container}>
        <h1>Oups, this page doesn&apos;t exist</h1>
        <p>
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.blog_container}>
      <h1>
        Unlock Your Full Potential with World-Class Software Engineering
        Tutorials {slug}
      </h1>

      <div className={styles.blog_cover}>
        <Image
          loading="lazy"
          width="1920"
          height="1080"
          src={
            weblog?.image
              ? cmsClient.getMediaSrc(weblog?.image?.meta) || ""
              : "/images/cover.png"
          }
          alt={weblog?.image?.title || "Blog Image"}
        />
      </div>
      <div className={styles.breadcrumbs}>
        <Link href={"/blog"}>Blogs</Link>{" "}
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.00638 14.875L10.2436 16.1123L16.1122 10.2436L10.2436 4.375L9.00638 5.61225L12.7628 9.36863H4.375V11.1186H12.7628L9.00638 14.875Z"
            fill="black"
          />
        </svg>
        <Link href={"/"}>Technology</Link>
      </div>
      <div className={styles.profile}>
        <Image
          width="60"
          height="60"
          src={"/images/profile-sqr.jpg"}
          alt={"Peng Boris"}
        />
        <p>Peng Boris</p>
      </div>
      <section>
        {weblog?.body?.map((block) => (
          <WeblogBlockRenderer key={block.id} content={block} />
        ))}
      </section>
      <div className={styles.tags}>
        <span>
          <Link href={"/"}>business</Link>
        </span>
        <span>
          <Link href={"/"}>business</Link>
        </span>
        <span>
          <Link href={"/"}>business</Link>
        </span>
        <span>
          <Link href={"/"}>business</Link>
        </span>
      </div>
      <div className={styles.comments}>
        <TraleorComments />
      </div>
      <div className={styles.related}>
        <h2>Related Tutorials</h2>
        <Grid num={3}>
          <Card
            key={1}
            imgSource={"/images/cover.png"}
            title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            category={"Technology"}
            text={
              "Music Festival in Douala. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc"
            }
            status="Active"
            path={`/blog/${1}`}
          />
          <Card
            key={1}
            imgSource={"/images/cover.png"}
            title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            category={"Technology"}
            text={
              "Music Festival in Douala. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc"
            }
            status="Active"
            path={`/blog/${1}`}
          />
          <Card
            key={1}
            imgSource={"/images/cover.png"}
            title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            category={"Technology"}
            text={
              "Music Festival in Douala. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc"
            }
            status="Active"
            path={`/blog/${1}`}
          />
        </Grid>
      </div>
    </div>
  );
}
