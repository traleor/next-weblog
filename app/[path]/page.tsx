import type { Metadata, ResolvingMetadata } from "next";
import styles from "./page.module.css";
import { Card, Grid } from "@/components";
import {
  allBlogs,
  cmsClient,
  filterByDate,
  getPageMeta,
  truncateText,
  filterByCategories,
} from "@/lib";
import { Filtering, Ordering } from "./blocks";

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

  const page = await getPageMeta(path);
  // console.log("PAGE META", JSON.stringify(page, null, 4));

  return {
    title: page.meta.seo_title || page.title,
    description: page.meta.search_description || "",
    alternates: {
      canonical: `/${path}`,
    },
    authors: [{ name: "Academy Omen" }],
    creator: "Academy Omen",
    publisher: "Academy Omen",
    openGraph: {
      type: "website",
      title: page.meta.seo_title || page.title,
      siteName: "Academy Omen",
      url: `/${path}`,
      description: page.meta.search_description || "",
      images: [...previousImages],
    },
    twitter: {
      card: "summary_large_image",
      site: "@academyomen",
      creator: "@academyomen",
      title: page.meta.seo_title || page.title,
      description: page.meta.search_description || "",
      images: [...previousImages],
    },
  };
}

async function getPageContent(
  slug: string,
  filters?: {
    category?: string | string[];
    order?: string | string[];
    date?: string | string[];
  }
) {
  const page = await getPageMeta(slug);
  // TODO: Add nocache to always get the updated content
  const weblog = await allBlogs({
    limit: 10,
    child_of: page.id,
    order: String(filters?.order),
  });

  let filteredWeblogs = weblog.items;
  // Extract unique categories from the filtered items
  const uniqueCategorySet = new Set<{ name: string; value: string }>();
  filteredWeblogs.forEach((blog) => {
    uniqueCategorySet.add({
      name: blog.category.name,
      value: blog.category.slug,
    });
  });

  // Apply category filtering if a category is provided
  if (filters?.category) {
    const selectedCategories = Array.isArray(filters.category)
      ? filters.category
      : [filters.category];

    // Use the filterByCategories function to filter by categories
    filteredWeblogs = filterByCategories(filteredWeblogs, selectedCategories);
  }

  return {
    page: page || null,
    categories: Array.from(uniqueCategorySet) || [],
    weblogs: filters?.date
      ? filterByDate(filteredWeblogs, String(filters?.date))
      : filteredWeblogs,
  };
}

export default async function Page({
  params: { lang, path },
  searchParams,
}: Props) {
  // Destructure the parameters you need
  const { category, order, date } = searchParams || {};

  const pageData = getPageContent(path, { category, order, date });
  const [{ page, weblogs, categories }] = await Promise.all([pageData]);
  console.group("Page");
  console.log("Params", lang, path);
  console.log("searchParams", searchParams);
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
          <Ordering />
        </div>
        <div className={styles.container}>
          <div className={styles.options}>
            <div className={styles.head}>
              <h2>Filter By</h2>
            </div>
            <hr />
            <div className={styles.head}>
              <Filtering param="category" title="Category" items={categories} />
            </div>
            <hr />
            <div className={styles.head}>
              <Filtering
                param="date"
                title="Date"
                items={[
                  { name: "This Week", value: "this-week" },
                  { name: "This Month", value: "this-month" },
                ]}
              />
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
                    title={truncateText(blog.headline, 90)}
                    category={blog.category.name}
                    text={truncateText(blog.meta.search_description || "", 90)}
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
