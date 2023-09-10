import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import type { Metadata, ResolvingMetadata } from "next";
import { Card, Grid, TraleorComments } from "@/components";

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
        <Link href={"/blogs"}>Blogs</Link>{" "}
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
