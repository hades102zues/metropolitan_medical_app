import React from "react";
import styles from "./Posts.module.css";

import Link from "next/link";

const Posts = () => {
  return (
    <section className={styles.blog}>
      <div className="wrapper">
        <h2 className={styles.blogHeading}>Posts</h2>
        <div className={styles.posts}>
          <div>
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
                    <p className={styles.post_date}>13 Jul, 2020</p>
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
                      animi, id est laborum et dolorum fuga. At vero eos et
                      accusamus et iusto odio dignissimos ducimus qui blanditiis
                      praesentium voluptatum deleniti atque corrupti quos
                      dolores et quas molestias excepturi sint occaecati
                      cupiditate non provident, similique sunt in culpa qui
                      officia deserunt mollitia animi, id est laborum et dolorum
                      fuga. At vero eos et accusamus et iusto odio dignissimos
                      ducimus qui blanditiis praesentium voluptatum deleniti
                      atque corrupti quos dolores et quas molestias excepturi
                      sint occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga.{" "}
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
          </div>
          <div>
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
                    <p className={styles.post_date}>13 Jul, 2020</p>
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
                      animi, id est laborum et dolorum fuga. At vero eos et
                      accusamus et iusto odio dignissimos ducimus qui blanditiis
                      praesentium voluptatum deleniti atque corrupti quos
                      dolores et quas molestias excepturi sint occaecati
                      cupiditate non provident, similique sunt in culpa qui
                      officia deserunt mollitia animi, id est laborum et dolorum
                      fuga. At vero eos et accusamus et iusto odio dignissimos
                      ducimus qui blanditiis praesentium voluptatum deleniti
                      atque corrupti quos dolores et quas molestias excepturi
                      sint occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga.{" "}
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
          </div>
          <div>
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
                    <p className={styles.post_date}>13 Jul, 2020</p>
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
                      animi, id est laborum et dolorum fuga. At vero eos et
                      accusamus et iusto odio dignissimos ducimus qui blanditiis
                      praesentium voluptatum deleniti atque corrupti quos
                      dolores et quas molestias excepturi sint occaecati
                      cupiditate non provident, similique sunt in culpa qui
                      officia deserunt mollitia animi, id est laborum et dolorum
                      fuga. At vero eos et accusamus et iusto odio dignissimos
                      ducimus qui blanditiis praesentium voluptatum deleniti
                      atque corrupti quos dolores et quas molestias excepturi
                      sint occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga.{" "}
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
          </div>
          <div>
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
                    <p className={styles.post_date}>13 Jul, 2020</p>
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
                      animi, id est laborum et dolorum fuga. At vero eos et
                      accusamus et iusto odio dignissimos ducimus qui blanditiis
                      praesentium voluptatum deleniti atque corrupti quos
                      dolores et quas molestias excepturi sint occaecati
                      cupiditate non provident, similique sunt in culpa qui
                      officia deserunt mollitia animi, id est laborum et dolorum
                      fuga. At vero eos et accusamus et iusto odio dignissimos
                      ducimus qui blanditiis praesentium voluptatum deleniti
                      atque corrupti quos dolores et quas molestias excepturi
                      sint occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga.{" "}
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
          </div>
          <div>
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
                    <p className={styles.post_date}>13 Jul, 2020</p>
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
                      animi, id est laborum et dolorum fuga. At vero eos et
                      accusamus et iusto odio dignissimos ducimus qui blanditiis
                      praesentium voluptatum deleniti atque corrupti quos
                      dolores et quas molestias excepturi sint occaecati
                      cupiditate non provident, similique sunt in culpa qui
                      officia deserunt mollitia animi, id est laborum et dolorum
                      fuga. At vero eos et accusamus et iusto odio dignissimos
                      ducimus qui blanditiis praesentium voluptatum deleniti
                      atque corrupti quos dolores et quas molestias excepturi
                      sint occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga.{" "}
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
          </div>
          <div>
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
                    <p className={styles.post_date}>13 Jul, 2020</p>
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
                      animi, id est laborum et dolorum fuga. At vero eos et
                      accusamus et iusto odio dignissimos ducimus qui blanditiis
                      praesentium voluptatum deleniti atque corrupti quos
                      dolores et quas molestias excepturi sint occaecati
                      cupiditate non provident, similique sunt in culpa qui
                      officia deserunt mollitia animi, id est laborum et dolorum
                      fuga. At vero eos et accusamus et iusto odio dignissimos
                      ducimus qui blanditiis praesentium voluptatum deleniti
                      atque corrupti quos dolores et quas molestias excepturi
                      sint occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga.{" "}
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
          </div>
          <div>
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
                    <p className={styles.post_date}>13 Jul, 2020</p>
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
                      animi, id est laborum et dolorum fuga. At vero eos et
                      accusamus et iusto odio dignissimos ducimus qui blanditiis
                      praesentium voluptatum deleniti atque corrupti quos
                      dolores et quas molestias excepturi sint occaecati
                      cupiditate non provident, similique sunt in culpa qui
                      officia deserunt mollitia animi, id est laborum et dolorum
                      fuga. At vero eos et accusamus et iusto odio dignissimos
                      ducimus qui blanditiis praesentium voluptatum deleniti
                      atque corrupti quos dolores et quas molestias excepturi
                      sint occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga.{" "}
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
          </div>
          <div>
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
                    <p className={styles.post_date}>13 Jul, 2020</p>
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
                      animi, id est laborum et dolorum fuga. At vero eos et
                      accusamus et iusto odio dignissimos ducimus qui blanditiis
                      praesentium voluptatum deleniti atque corrupti quos
                      dolores et quas molestias excepturi sint occaecati
                      cupiditate non provident, similique sunt in culpa qui
                      officia deserunt mollitia animi, id est laborum et dolorum
                      fuga. At vero eos et accusamus et iusto odio dignissimos
                      ducimus qui blanditiis praesentium voluptatum deleniti
                      atque corrupti quos dolores et quas molestias excepturi
                      sint occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga.{" "}
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
          </div>
          <div>
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
                    <p className={styles.post_date}>13 Jul, 2020</p>
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
                      animi, id est laborum et dolorum fuga. At vero eos et
                      accusamus et iusto odio dignissimos ducimus qui blanditiis
                      praesentium voluptatum deleniti atque corrupti quos
                      dolores et quas molestias excepturi sint occaecati
                      cupiditate non provident, similique sunt in culpa qui
                      officia deserunt mollitia animi, id est laborum et dolorum
                      fuga. At vero eos et accusamus et iusto odio dignissimos
                      ducimus qui blanditiis praesentium voluptatum deleniti
                      atque corrupti quos dolores et quas molestias excepturi
                      sint occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga.{" "}
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
          </div>
        </div>
      </div>
      <div className={styles.blog_controlbox}>
        <div className="wrapper">
          <button className={styles.controlbox_button}>Older Posts</button>
          <button className={styles.controlbox_button}>Newer Posts</button>
        </div>
      </div>
    </section>
  );
};

export default Posts;
