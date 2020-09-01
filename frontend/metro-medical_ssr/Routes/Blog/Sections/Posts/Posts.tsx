import React, { useState } from "react";
import styles from "./Posts.module.css";

import Link from "next/link";

import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const Posts = () => {
  //****STATE
  const [totalNumPgState, settotalNumPg]: [number, any] = useState(10);
  const [currentPgNum, setcurrentPgNum]: [number, any] = useState(1);
  const [posts, setPosts]: [String[], any] = useState(["", "", ""]);
  const [errorDidOccur, seterrorDidOccur]: [boolean, any] = useState(false);
  const [dataDidGet, setdataDidGet]: [boolean, any] = useState(false);
  const [isLoading, setisLoading]: [boolean, any] = useState(true);

  //**HANDLERS
  const olderPostHandler = (): void => {
    setcurrentPgNum((currentPageNumber) => {
      if (currentPageNumber === totalNumPgState) return totalNumPgState;
      else return currentPageNumber + 1;
    });
  };

  const newerPostHandler = (): void => {
    setcurrentPgNum((currentPageNumber) => {
      if (currentPageNumber === 1) return 1;
      else return currentPageNumber - 1;
    });
  };

  console.log("PG number", currentPgNum);

  //**STYLES
  const useStyles = makeStyles({
    progessRoot: {
      color: "#dd6a8f",
    },
  });

  const classes = useStyles();

  //***RENDER
  let render: any;

  if (isLoading)
    render = <CircularProgress classes={{ root: classes.progessRoot }} />;

  if (errorDidOccur)
    render = (
      <p className={styles.posts_errorMessage}>Error retrieving posts.</p>
    );

  if (posts.length && !errorDidOccur && !isLoading)
    render = posts.map((item, i) => (
      <div key={i}>
        <Link href="/blog/post/id" as="/blog/post/1">
          <a>
            <article className={styles.post}>
              <div className={styles.post_image}>
                <img src="/Red-Clouds-Nature-4K-Wallpapers-UHD.jpg" alt="" />
              </div>
              <div className={styles.post_info}>
                <h3 className={styles.post_title}> I am a post title.</h3>
                <p className={styles.post_date}>13 Jul, 2020</p>
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
                  mollitia animi, id est laborum et dolorum fuga. At vero eos et
                  accusamus et iusto odio dignissimos ducimus qui blanditiis
                  praesentium voluptatum deleniti atque corrupti quos dolores et
                  quas molestias excepturi sint occaecati cupiditate non
                  provident, similique sunt in culpa qui officia deserunt
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
          </a>
        </Link>
      </div>
    ));

  return (
    <section className={styles.blog}>
      <div className="wrapper">
        <h2 className={styles.blogHeading}>Posts</h2>

        <div className={styles.posts}>{render}</div>
      </div>

      {isLoading || errorDidOccur || posts.length <= 0 ? null : (
        <div className={styles.blog_controlbox}>
          <div className="wrapper">
            <button
              className={styles.controlbox_button}
              onClick={olderPostHandler}
              disabled={
                currentPgNum === totalNumPgState || isLoading ? true : false
              }
            >
              Older Posts
            </button>
            <button
              className={styles.controlbox_button}
              onClick={newerPostHandler}
              disabled={currentPgNum === 1 || isLoading ? true : false}
            >
              Newer Posts
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Posts;
