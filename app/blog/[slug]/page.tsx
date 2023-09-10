import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import type { Metadata, ResolvingMetadata } from "next";
import { Card, Grid } from "@/components";

type Props = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
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

export default async function Page({ params: { slug } }: Props) {
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
          src="/images/cover.png"
          alt="illustration"
        />
      </div>
      <div className={styles.breadcrumbs}>
        <Link href={"/"}>Blog</Link>{" "}
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
        <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
          nobis officiis molestias commodi atque nostrum ullam assumenda
          perferendis iste quos amet necessitatibus quibusdam, eius impedit qui
          autem laboriosam aspernatur fugit!
        </p>
      </section>
      <div className={styles.tags}>
        <span>business</span> <span>business</span> <span>business</span>{" "}
        <span>business</span>
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
