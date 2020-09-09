import React, { useState, useEffect } from "react";
import styles from "./Posts.module.css";

import Link from "next/link";

import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const BASE_URL = "http://metropolitan-medical.local";
const URI = "/wp-json/wapi/wp-post-items-page/";
const IMG_URI = "/wp-content";

const Posts = () => {
  interface PShape {
    id: string;
    title: string;
    author: string;
    date: string;
    excerpt: string;
    featured_image_url: string;
    url_cleaned_title: string;
  }

  //****STATE
  const [totalNumPgState, settotalNumPg]: [number, any] = useState(10);
  const [currentPgNum, setcurrentPgNum]: [number, any] = useState(1);
  const [posts, setPosts]: [PShape[], any] = useState([]);

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

  const fetchPosts = (): void => {
    interface T {
      posts: PShape[];
      maxNumPages: number;
    }

    //reset the ui server flags
    setisLoading(true);
    seterrorDidOccur(false);
    setdataDidGet(false);

    //set local serverFlags
    let successFulFetch: boolean = false;
    const targetUrl = BASE_URL + URI + currentPgNum;
    fetch(targetUrl)
      .then(
        (res: any): Promise<T> => {
          if (res.status === 200) {
            setisLoading(false);
            setdataDidGet(true);
            successFulFetch = true;
          }
          return res.json();
        }
      )
      .then((data: T): void => {
        if (successFulFetch) {
          setPosts(data.posts);
          settotalNumPg(data.maxNumPages);
        }
      })
      .catch((err: any) => {
        setisLoading(true);
        seterrorDidOccur(true);
        console.error("Error occured when fetching post", err);
      });

    //build the targetUrl
    //send the fetch request
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  useEffect(() => {
    fetchPosts();
  }, [currentPgNum]);

  //**Context

  console.log("PG number", currentPgNum);

  //**STYLES
  const useStyles = makeStyles({
    progessRoot: {
      color: "#dd6a8f",
    },
  });

  const classes = useStyles();

  //***RENDER
  let render: JSX.Element | JSX.Element[];

  if (isLoading)
    render = <CircularProgress classes={{ root: classes.progessRoot }} />;

  if (errorDidOccur)
    render = (
      <p className={styles.posts_errorMessage}>Error retrieving posts.</p>
    );

  console.log("Bug", posts);
  if (posts.length && !errorDidOccur && !isLoading)
    render = posts.map((item: PShape, i: number) => {
      return (
        <div key={i}>
          <Link
            href="/blog/post/title"
            as={"/blog/post/" + item.url_cleaned_title}
          >
            <a>
              <article className={styles.post}>
                <div className={styles.post_image}>
                  <img
                    src={
                      item.featured_image_url.length
                        ? BASE_URL + IMG_URI + item.featured_image_url
                        : "/metro_logo.png"
                    }
                    alt={"Image for a post with title " + item.title}
                  />
                </div>
                <div className={styles.post_info}>
                  <h3 className={styles.post_title}>{item.title}</h3>
                  <p className={styles.post_date}>{item.date}</p>
                  <p className={styles.post_preview}>{item.excerpt}</p>

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
      );
    });

  console.log(render);
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
