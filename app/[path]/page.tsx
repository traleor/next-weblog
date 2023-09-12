import Link from "next/link";
import Image from "next/image";
import type { Metadata, ResolvingMetadata } from "next";
import styles from "./page.module.css";
import { Card, Grid } from "@/components";

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

export default async function Page({
  params: { lang, path },
  searchParams,
}: Props) {
  const id = searchParams?.id?.toString();
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
            <Card
              key={1}
              imgSource={"/images/cover.png"}
              title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
              category={"Technology"}
              text={
                "Music Festival in Douala. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc"
              }
              status="Active"
              path={`/tutorials/${1}`}
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
              path={`/tutorials/${1}`}
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
              path={`/tutorials/${1}`}
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
              path={`/tutorials/${1}`}
            />
          </Grid>
        </div>
      </div>
    </div>
  );
}