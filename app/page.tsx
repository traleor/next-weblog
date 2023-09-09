import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { Card, Grid } from "@/components";

export default function Page() {
  return (
    <div className={styles.home__page}>
      <div className={styles.landing}>
        <div className={styles.hero_content}>
          <h1>Create, Sell & Share Your blogs for Free</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            voluptatum quo molestiae possimus eum deserunt.
          </p>
          <div className={styles.btn__group}>
            <Link href="/" passHref>
              <button aria-label="Join Community" className="primary">
                Join Community
              </button>
            </Link>
            <Link href="/blogs" passHref>
              <button aria-label="Explore Now" className="secondary">
                Explore Now
              </button>
            </Link>
          </div>
        </div>
        <div className={styles.image}>
          <Image
            loading="lazy"
            width="400"
            height="400"
            src="/images/cover.png"
            alt="illustration"
          />
        </div>
      </div>

      {/** LOGOS SECTION *************************************************** */}

      <section>
        <div className={styles.headline}>
          <h2>Technologies Used</h2>
        </div>
        <div className={styles.logos}>
          <div>
            <Image src="/wagtail.svg" alt="logo" width={400} height={70} />
          </div>
          <div>
            <Image src="/next.svg" alt="logo" width={400} height={50} />
          </div>
          <div>
            <Image src="/vercel.svg" alt="logo" width={400} height={70} />
          </div>
        </div>
      </section>

      {/* Featured blogs *************************************************** */}

      <section className={styles.general}>
        <div className={styles.headline}>
          <h2>Featured blogs</h2>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            corporis.
          </h3>
        </div>
        <div className={styles.wrapper}>
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
          </Grid>
        </div>
        <div className={styles.headline}>
          <Link href="/blogs" passHref>
            <button
              aria-label="show more"
              className="secondary"
              style={{
                marginTop: "2rem",
              }}
            >
              View All blogs
            </button>
          </Link>
        </div>
      </section>

      {/** ABOUT US SECTION *************************************************** */}

      <section className={styles.general}>
        <div className={styles.headline}>
          <h2>About Us</h2>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            corporis.
          </h3>
        </div>
        <div className={styles.wrapper}>
          <Grid style={{ gap: "3rem" }}>
            <div className={styles.illustration}>
              <Image
                loading="lazy"
                width="200"
                height="100"
                src="/images/cover.png"
                alt="about us"
              />
            </div>
            <div className={styles.content}>
              <h2>Explore Popular blogs</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
                pariatur id, tempora minima delectus expedita repudiandae
                officia voluptatum fugiat? Rerum? Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Fuga, corporis. Lorem ipsum dolor
                sit amet consectetur, adipisicing elit. Pariatur, consequuntur.
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Cum pariatur id, tempora minima
                delectus expedita repudiandae officia voluptatum fugiat? Rerum?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
                corporis. Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Pariatur, consequuntur. Lorem ipsum dolor sit amet.
              </p>
              <Link href="/" passHref>
                <button aria-label="show more" className="primary">
                  Show More
                </button>
              </Link>
            </div>
          </Grid>
        </div>
      </section>

      {/** TOP ORGANIZERS SECTION *************************************************** */}

      <section className={styles.general}>
        <div className={styles.headline}>
          <h2>Top Organizers</h2>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            corporis.
          </h3>
        </div>
        <div className={styles.wrapper}>
          <Grid num={3}>
            <Card
              text="+ Follow"
              imgSource="/images/cover.png"
              status="Lorem ipsum delor sit amet. Testing hard coded text"
              title="John Wick"
              path="/profile/123"
              profilePic="/images/profile.png"
            />
            <Card
              text="+ Follow"
              imgSource="/images/cover.png"
              status="Lorem ipsum delor sit amet. Testing hard coded text"
              title="John Wick"
              path="/profile/123"
              profilePic="/images/profile.png"
            />
          </Grid>
        </div>
      </section>

      {/** FREQUENTLY ASKED SECTION *************************************************** */}

      <section className={styles.general}>
        <div className={styles.headline}>
          <h2>Get Ready For Amazing Tutorials</h2>
          <h3>Wanna Ask Something 😃?</h3>
          <button aria-label="Join Community" className="secondary">
            Join Community
          </button>
        </div>
      </section>
    </div>
  );
}
