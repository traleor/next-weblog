import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { Card, Grid } from "@/components";

export default function Page() {
  return (
    <div className={styles.container}>
      <section id="about-us" className={styles.general}>
        <div className={styles.headline}>
          <h2>About Us</h2>
          <h3>
            Crafting Success Stories Through Code: Your Path to Software
            Excellence Begins with Us
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
              <h2>Discover Who We Are</h2>
              <p>
                At Academy Omen, we&apos;re on a mission to empower and inspire
                software engineers at every stage of their journey. Our passion
                is to provide world-class tutorials and projects that help you
                master the art of software engineering. With a focus on modern
                technologies like Blockchain, AI, and programming languages such
                as Python, Go, TypeScript, and Solidity, we&apos;re here to
                guide you to success. Our community of experienced software
                engineers and enthusiastic learners is the heart of Academy
                Omen. Together, we aim to create a dynamic learning environment
                where creativity and innovation flourish. Join us on this
                exciting adventure into the world of software engineering.
                Let&apos;s build, create, and learn together. Welcome to Academy
                Omen.
              </p>
              <Link
                href="https://discord.com/invite/UKaQs2WmvT"
                passHref
                target="_blank"
              >
                <button aria-label="show more" className="primary">
                  Join Discord Community
                </button>
              </Link>
            </div>
          </Grid>
        </div>
      </section>

      {/** TOP CREATORS SECTION *************************************************** */}

      <section className={styles.general}>
        <div className={styles.headline}>
          <h2>Top Content Creators</h2>
          <h3>
            Exploring Our Pioneering Content Creators: The Masters Behind Our
            Top Content
          </h3>
        </div>
        <div className={styles.wrapper}>
          <Grid num={3}>
            <Card
              text="+ Follow"
              imgSource="/images/cover.png"
              status="Experienced software engineer with a passion for Artificial Intelligence, and backend engineering"
              title="Peng Boris"
              path="https://www.linkedin.com/in/peng-boris-akebuon/"
              profilePic="/images/profile.png"
            />
            <Card
              text="+ Follow"
              imgSource="/images/cover.png"
              status="Legendary hitman with a lethal reputation, seeking justice and vengeance."
              title="John Wick"
              path="https://www.linkedin.com/in/peng-boris-akebuon/"
              profilePic="/images/profile.png"
            />
          </Grid>
        </div>
      </section>

      <section className={styles.general}>
        <div className={styles.headline}>
          <h2>Get Ready For Amazing Tutorials</h2>
          <h3>Wanna Ask Something 😃?</h3>
          <Link href="/blog" passHref>
            <button aria-label="Join Discord Community" className="secondary">
              Join Discord Community
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
