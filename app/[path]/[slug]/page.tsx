import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import {
  cmsClient,
  getPageMeta,
  getBlog,
  allBlogs,
  capitalizeFirstLetter,
  truncateText,
} from "@/lib";
import type { Metadata, ResolvingMetadata } from "next";
import { Card, Grid, TraleorComments } from "@/components";

type Props = {
  params: { lang: string; path: string; slug: string };
};

export async function generateMetadata(
  { params: { path, slug } }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // https://nextjs.org/docs/app/building-your-application/optimizing/metadata
  const parentMetadata = await parent;
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = parentMetadata?.openGraph?.images || [];

  const page = await getPageMeta(slug);

  return {
    title: page?.meta?.seo_title || page.title,
    description: page?.meta?.search_description || "",
    alternates: {
      canonical: `/${path}/${slug}`,
    },
    authors: [{ name: "Academy Omen" }],
    creator: "Academy Omen",
    publisher: "Academy Omen",
    openGraph: {
      type: "website",
      title: page?.meta?.seo_title || page.title,
      siteName: "Academy Omen",
      url: `/${path}/${slug}`,
      description: page?.meta?.search_description || "",
      images: [...previousImages],
    },
    twitter: {
      card: "summary_large_image",
      site: "@academyomen",
      creator: "@academyomen",
      title: page?.meta?.seo_title || page.title,
      description: page?.meta?.search_description || "",
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
  // console.log("Weblog", weblog);
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
      <h1>{weblog.headline}</h1>

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
        <Link href={`/${path}`}>{capitalizeFirstLetter(path)}</Link>
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
        <Link href={`/${path}/${slug}`}>{capitalizeFirstLetter(slug)}</Link>
      </div>
      <p>{weblog.date_published}</p>
      <div className={styles.profile}>
        <Image
          width="60"
          height="60"
          src={
            weblog.authors && weblog.authors.length > 0
              ? weblog?.authors[0]?.image.file
              : "/images/profile-sqr.jpg"
          }
          alt={
            weblog.authors && weblog.authors.length > 0
              ? weblog?.authors[0]?.first_name
              : "Author Image"
          }
        />
        <p>
          {weblog.authors && weblog.authors.length > 0
            ? weblog.authors[0].first_name + " " + weblog.authors[0].last_name
            : ""}
        </p>
      </div>
      <section>
        <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
          nobis officiis molestias commodi atque nostrum ullam assumenda
          perferendis iste quos amet necessitatibus quibusdam, eius impedit qui
          autem laboriosam aspernatur fugit!
        </p>
        <div className="block-code_block">
          <section className="default-padding full-width">
            <pre>
              <code className="language-javascript">
                {` function copyLink() {
        var dummy = document.createElement("input"),
        text = window.location.href;
        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
        alert("Link copied to clipboard");
}`}
              </code>
            </pre>
          </section>
        </div>

        <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
          nobis officiis molestias commodi atque nostrum ullam assumenda
          perferendis iste quos amet necessitatibus quibusdam, eius impedit qui
          autem laboriosam aspernatur fugit!
        </p>
        <div className="block-code_block">
          {" "}
          <section className="default-padding full-width">
            <pre className="language-python">
              <code className="language-python">
                {`# Preparing Dataset
# temporal storage for labels and images
data=[]
labels=[]

# Cat 0
# Get the animal directory
cats = os.listdir(os.getcwd() + "/CNN/data/cat")
for x in cats:
    """
    Loop through all the images in the directory
    1. Convert to arrays
    2. Resize the images
    3. Add image to dataset
    4. Add the label
    """
    imag=cv2.imread(os.getcwd() + "/CNN/data/cat/" + x)
    img_from_ar = Image.fromarray(imag, 'RGB')
    resized_image = img_from_ar.resize((50, 50))
    data.append(np.array(resized_image))
    labels.append(0)

# load in animals and labels
animals=np.array(data)
labels=np.array(labels)
# save
np.save("animals",animals)
np.save("labels",labels)

# Train Model
# train through 100 times
history = model.fit(x_train, y_train, epochs=100,
                    validation_data=(x_test, y_test))

# perform validation and get accuracy
test_loss, test_acc = model.evaluate(x_test,  y_test, verbose=2)

print(test_acc)

# save the model or brain
model.save("model.h5")`}
              </code>
            </pre>
          </section>
        </div>

        <h3>Conclusion</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
          nobis officiis molestias commodi atque nostrum ullam assumenda
          perferendis iste quos amet necessitatibus quibusdam, eius impedit qui
          autem laboriosam aspernatur fugit!
        </p>
      </section>
      <div className={styles.tags}>
        {weblog.tags?.map((tag) => (
          <span key={tag}>
            <Link href={"#"}>{tag}</Link>
          </span>
        ))}
      </div>
      <div className={styles.comments}>
        <TraleorComments />
      </div>
      <div className={styles.related}>
        <h2>Related Tutorials</h2>
        <Grid num={3}>
          <>
            {blogs?.map((blog) => (
              <Card
                key={blog.id}
                imgSource={
                  cmsClient.getMediaSrc(blog.image.meta) || "/images/cover.png"
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
  );
}
