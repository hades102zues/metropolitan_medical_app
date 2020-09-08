import React from "react";
import styles from "./Post.module.css";
import PageFrame from "../shared/UI/PageFrame/PageFrame";
import HtmlHead from "../../HtmlHead";

//import "./wpstyles.css";

const { gutenbergToReact } = require("@threemammals/gutenberg-to-react");
import WPGBlocks from "react-gutenberg";
import parse from "html-react-parser";

interface Post {
  content: any;
  date: string;
  title: string;
  excerpt: string;
  url_cleaned_title: string;
  featured_image_url: string;
}
interface PostInput {
  post: Post;
  doesPostExist: boolean;
}
const Post: React.FC<PostInput> = (props) => {
  const { post, doesPostExist } = props;
  let render: JSX.Element[] | JSX.Element;

  let exp: any = [];

  const defaultMessage: string = "Post not found.";
  const allowIndexing = false;
  const baseURL: string = "localhost";
  const logo_path = post.featured_image_url.length
    ? post.featured_image_url
    : "/metro_logo.png";

  let title: string = "Blog | " + defaultMessage;
  let description: string = defaultMessage;
  let relativePath = "/blog/post/post-not-found";

  if (!doesPostExist) {
    render = <h3 className={styles.post_heading}>Post not found.</h3>;
  } else {
    title = "Blog | " + post.title;
    description = post.excerpt;
    relativePath = "/blog/post/" + post.url_cleaned_title;
    render = (
      <article className={styles.post}>
        <h1 className={styles.post_heading}>{post.title}</h1>
        <p className={styles.post_date}>{post.date}</p>
        <div className={styles.post_imageAdj}>
          <div className={styles.post_image}>
            <img
              alt=""
              src={
                post.featured_image_url.length
                  ? post.featured_image_url
                  : "/metro_logo.png"
              }
            />
          </div>
        </div>
        <div
          className={styles.wpAdjust}
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
      </article>
    );
  }

  return (
    //require a head component
    <PageFrame pageTitle="Post">
      <HtmlHead
        allowIndex={allowIndexing}
        baseUrl={baseURL}
        logoPath={logo_path}
        title={title}
        contentDescription={description}
        canonical={baseURL + relativePath}
        googleOwnerShipID=""
        bingOwnerShipID=""
      />
      <section className={styles.blogPost}>
        <div className={styles.blogPost_wrapper}>{render}</div>
      </section>
    </PageFrame>
  );
};

export default Post;
