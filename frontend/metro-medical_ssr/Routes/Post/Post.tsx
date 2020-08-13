import React from "react";
import styles from "./Post.module.css";

const Post = () => {
  return (
    <section className={styles.blogPost}>
      <div className="wrapper">
        <article className={styles.post}>
          <h3 className={styles.post_heading}>
            The fight against the corona virus has left society feeling
            exhausted.
          </h3>
          <p className={styles.post_date}>November 20, 2020</p>
          <div className={styles.post_imageAdj}>
            <div className={styles.post_image}>
              <img
                alt=""
                src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixlib=rb-1.2.1&w=1000&q=80"
              />
            </div>
          </div>

          <div className={styles.content}>
            <p className={styles.body}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga.{" "}
            </p>
            <p className={styles.body}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga.{" "}
            </p>
            <p className={styles.body}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga.{" "}
            </p>
            <p className={styles.body}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga.{" "}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Post;
