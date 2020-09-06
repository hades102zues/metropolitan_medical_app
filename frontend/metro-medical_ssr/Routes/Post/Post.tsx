import React from "react";
import styles from "./Post.module.css";
import PageFrame from "../shared/UI/PageFrame/PageFrame";

const { gutenbergToReact } = require("@threemammals/gutenberg-to-react");
import WPGBlocks from "react-gutenberg";
import parse from "html-react-parser";

interface Post {
  content: any;
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

  let exp: JSX.Element | JSX.Element[] = null;

  // if (!post.postExist) {
  //   render = <h3 className={styles.post_heading}>Post not found.</h3>;
  // } else {
  //   exp = parse(post.content);
  //   console.log(exp);
  //   render = exp;

  // let items = gutenbergToReact(post.content);

  // exp = items.map((item, i) => {
  //   console.log(item);
  // });
  // if (i === 0)
  //   console.log(
  //     item.props.children[0][0].type,
  //     item.props.children[0][0].props.children[0].props.children[0].props
  //   );
  // if (
  //   item.props.children[0][0].type === "p" ||
  //   item.props.children[0][0].type === "img" ||
  //   item.props.children[0][0].type === "div"
  // ) {
  //   return (
  //     <React.Fragment>
  //       {" "}
  //       {item.props.children[0]}
  //       <br />
  //     </React.Fragment>
  //   );
  // } else {
  //   return <React.Fragment></React.Fragment>;
  // }
  //});

  // render = (
  //   <React.Fragment>
  //     <h3 className={styles.post_heading}>{post.title}</h3>
  //     <p className={styles.post_date}>{post.date}</p>
  //     {exp}
  //   </React.Fragment>
  // );
  //}

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
