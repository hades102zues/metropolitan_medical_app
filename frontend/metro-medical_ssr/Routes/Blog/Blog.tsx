import React from "react";
import styles from "./Blog.module.css";

import Event from "./Sections/Event/Event";
import Posts from "./Sections/Posts/Posts";

const Blog = () => {
  return (
    <div>
      <Event />
      <Posts />
    </div>
  );
};

export default Blog;
