//================================
//**Local Imports
//================================

//================================
//**Package imports
//================================
import React from "react";
import BlogPost from "../../../Routes/Post/Post";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

//================================
//**KEYS AND CONSTRAINTS
//================================
const BASE_URL = "http://metropolitan-medical.local";
const URI = "/wp-json/wapi/wp-post/";

//================================
//**INTERFACES
//================================
interface Post {
  content: any;
  date: string;
  title: string;
  excerpt: string;
  url_cleaned_title: string;
  featured_image_url: string;
}

interface PostResponse {
  post: Post;
  goodObject: boolean;
}

const Post = ({ postRep }) => {
  return <BlogPost post={postRep.post} doesPostExist={postRep.goodObject} />;
};

// This gets called on every request
export async function getServerSideProps(context) {
  const postTitle = context.params.title;
  const targetUrl = BASE_URL + URI + postTitle;

  let res: any;
  let unserialized_postRep = {};
  let postRep: PostResponse = {
    post: {
      content: "",
      date: "",
      title: "",
      excerpt: "",
      url_cleaned_title: "",
      featured_image_url: "",
    },
    goodObject: false,
  };

  // Fetch post data from backend; If the fetch finds no target then it will throw an error.
  try {
    res = await fetch(targetUrl);
    unserialized_postRep = await res.json();
    postRep = JSON.parse(JSON.stringify(unserialized_postRep));
  } catch (e) {
    console.log("Request Failed.");
  }

  return { props: { postRep } }; //the props object is passed on
}

export default Post;
