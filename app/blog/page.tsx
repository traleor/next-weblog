import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { Card, Grid } from "@/components";
import { allBlogs, cmsClient } from "@/lib";

async function getBlogs(limit: number) {
  const blogs = await allBlogs({ limit });
  return {
    blogs: blogs.items || null,
  };
}

export default async function Page() {
  const blogsData = getBlogs(10);
  // Wait for the promises to resolve
  const [{ blogs }] = await Promise.all([blogsData]);
  console.group("BLOG PAGE");
  console.log("Blogs: ", blogs);
  console.groupEnd();

  return (
    <div className={styles.blog_container}>
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
            {blogs?.map((blog) => (
              <Card
                key={blog.id}
                imgSource={
                  cmsClient.getMediaSrc(blog.image.meta) || "/images/cover.png"
                }
                title={blog.headline}
                category={blog.category.name}
                text={blog.meta.search_description || "No description"}
                status={blog.date_published}
                path={new URL(blog.meta.html_url).pathname}
              />
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}
