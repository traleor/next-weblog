import Link from "next/link";
import Image from "next/image";
import type { Metadata, ResolvingMetadata } from "next";
import styles from "./page.module.css";
import { Card, Grid } from "@/components";
import { allBlogs, cmsClient, getBlog, getPageMeta } from "@/lib";

// no-cache as RequestCache is sufficient, an alternative is to use revalidate
// export const revalidate = 0;

type Props = {
  params: { lang: string; path: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params: { path } }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // https://nextjs.org/docs/app/building-your-application/optimizing/metadata
  const parentMetadata = await parent;
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = parentMetadata?.openGraph?.images || [];

  return {
    title: `Page ${path}`,
    openGraph: {
      images: [...previousImages],
    },
  };
}

async function getContent(slug: string) {
  const page = await getPageMeta(slug);
  // No cache to always get the updated content
  const weblog = await allBlogs(10, undefined, page.id);
  return {
    page: page || null,
    weblogs: weblog.items || null,
  };
}

export default async function Page({
  params: { lang, path },
  searchParams,
}: Props) {
  const id = searchParams?.id?.toString();
  const pageData = getContent(path);
  const [{ page, weblogs }] = await Promise.all([pageData]);
  console.group("Page");
  console.log("Params", lang, path);
  console.log("searchParams", searchParams, id);
  console.groupEnd();

  // If page is WebBlogIndex, then render below
  // else render content
  if (page.meta.type === "weblog.WeblogIndex") {
    return (
      <div className={styles.page_container}>
        <div className={styles.sort}>
          <div>
            <h2>Discover the Best Tutorials on Earth</h2>
            <h3>
              Build modern, high-performance web apps and stay ahead in the tech
              world.
            </h3>
          </div>
          <div>
            <select name="filter" id="filter">
              <option value="">Sort By</option>
              <option value="date">Date</option>
              <option value="tag">Category</option>
              <option value="tag">Tags</option>
            </select>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.options}>
            <div className={styles.head}>
              <h2>Filter By</h2>
            </div>
            <hr />

            <div className={styles.head}>
              <h3>Category</h3>
              <div>
                <input type="checkbox" />
                <label htmlFor="Art">Art</label>
              </div>
              <div>
                <input type="checkbox" />
                <label htmlFor="Sport">Sport</label>
              </div>
              <div>
                <input type="checkbox" />
                <label htmlFor="Photography">Music</label>
              </div>
            </div>
            <hr />

            <div className={styles.head}>
              <h3>Date</h3>
              <div>
                <input type="checkbox" />
                <label htmlFor="This Week">This Week</label>
              </div>
              <div>
                <input type="checkbox" />
                <label htmlFor="This Week">Last Month</label>
              </div>
            </div>
            <hr />
          </div>

          <div className={styles.list}>
            <Grid num={3} style={{ gap: "2rem" }}>
              <>
                {weblogs?.map((blog) => (
                  <Card
                    key={blog.id}
                    imgSource={
                      cmsClient.getMediaSrc(blog.image.meta) ||
                      "/images/cover.png"
                    }
                    title={blog.headline}
                    category={blog.category.name}
                    text={blog.meta.search_description || ""}
                    status={blog.date_published}
                    path={new URL(blog.meta.html_url).pathname}
                  />
                ))}
              </>
            </Grid>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.page_container}>
        <h1>{page.title}</h1>
        <h2>{page.meta.search_description}</h2>
      </div>
    );
  }
}
