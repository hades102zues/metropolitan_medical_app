import React from "react";
import styles from "./Blog.module.css";
import Link from "next/link";
const Blog = () => {
  return (
    <div>
      <section className={styles.events}>
        <div className={styles.eventWrapper}>
          <div className={styles.event}>
            <img
              src="https://jimdo-storage.freetls.fastly.net/image/70488130/d0621a03-4eda-4871-a5f4-2cf5a341dd71.png?quality=80&auto=webp&disable=upscale&width=800&height=671&trim=0,0,0,0"
              alt=""
              className={styles.eventImg}
            />
          </div>
          <p className={styles.eventA}>Announcement</p>
        </div>
      </section>

      <section className={styles.blog}>
        <div className="wrapper">
          <h2 className={styles.blogHeading}>Posts</h2>
          <div className={styles.posts}>
            <Link href="/blog/post/id" as="/blog/post/1">
              <a>
                <article className={styles.post}>
                  <div className={styles.post_image}>
                    <img
                      src="/Red-Clouds-Nature-4K-Wallpapers-UHD.jpg"
                      alt=""
                    />
                  </div>
                  <div className={styles.post_info}>
                    <h3 className={styles.post_title}> I am a post title.</h3>
                    <p className={styles.post_date}>Date</p>
                    <p className={styles.post_preview}>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga. At vero eos et accusamus et iusto odio
                      dignissimos ducimus qui blanditiis praesentium voluptatum
                      deleniti atque corrupti quos dolores et quas molestias
                      excepturi sint occaecati cupiditate non provident,
                      similique sunt in culpa qui officia deserunt mollitia
                      animi, id est laborum et dolorum fuga.{" "}
                    </p>
                    {/* <Link href="/blog/post/" as="/blog/post/1">
                  <a>
                    <button>{`Read More >>`}</button>
                  </a>
                </Link> */}
                  </div>
                </article>
              </a>
            </Link>

            <article className={styles.post}>
              <div className={styles.post_image}>
                <img src="/Red-Clouds-Nature-4K-Wallpapers-UHD.jpg" alt="" />
              </div>
              <div className={styles.post_info}>
                <h3 className={styles.post_title}> I am a post title.</h3>
                <p className={styles.post_date}>Date</p>
                <p className={styles.post_preview}>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. At vero eos et
                  accusamus et iusto odio dignissimos ducimus qui blanditiis
                  praesentium voluptatum deleniti atque corrupti quos dolores et
                  quas molestias excepturi sint occaecati cupiditate non
                  provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga.{" "}
                </p>
                {/* <Link href="/blog/post/" as="/blog/post/1">
                  <a>
                    <button>{`Read More >>`}</button>
                  </a>
                </Link> */}
              </div>
            </article>
          </div>
        </div>
        <div className={styles.blog_controlbox}>
          <div className="wrapper">
            <button className={styles.controlbox_button}>Older Posts</button>
            <button className={styles.controlbox_button}>Newer Posts</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
