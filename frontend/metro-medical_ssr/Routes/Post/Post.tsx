import React from "react";
import styles from "./Post.module.css";
import PageFrame from "../shared/UI/PageFrame/PageFrame";

const { gutenbergToReact } = require("@threemammals/gutenberg-to-react");

interface Post {
  content: string;
  date: string;
  title: string;
  excerpt: string;
  postExist: boolean;
}
interface PostInput {
  post: Post;
}
const Post: React.FC<PostInput> = (props) => {
  const { post } = props;
  let render: JSX.Element[] | JSX.Element;

  let exp = null;
  console.log(post);
  if (!post.postExist) {
    render = <h3 className={styles.post_heading}>Post not found.</h3>;
  } else {
    let items = gutenbergToReact(post.content);
    items.forEach((item, i) => {
      console.log(item.props.children[0]);
    });

    exp = items.map((item) => (
      <React.Fragment>
        {" "}
        {item.props.children[0]}
        <br />
      </React.Fragment>
    ));
    render = (
      <React.Fragment>
        <h3 className={styles.post_heading}>{post.title}</h3>
        <p className={styles.post_date}>{post.date}</p>
        {exp}
      </React.Fragment>
    );
  }

  return (
    //require a head component
    <PageFrame pageTitle="Post">
      <section className={styles.blogPost}>
        <div className="wrapper">{render}</div>
      </section>
    </PageFrame>
  );
};

export default Post;
