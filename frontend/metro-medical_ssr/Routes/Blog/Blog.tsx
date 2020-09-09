import React from "react";

import styles from "./Blog.module.css";

import Event from "../shared/Blog/Event/Event";
import Posts from "./Sections/Posts/Posts";
import PageFrame from "../shared/UI/PageFrame/PageFrame";

const Blog = () => {
  return (
    <div>
      <PageFrame pageTitle="Blog">
        <Event />
        <Posts />
      </PageFrame>
    </div>
  );
};

export default Blog;
