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

const Post = ({ post }) => {
  //================================
  //**STATE
  //================================
  let inspect: PostResponse = post;

  let postExist: boolean;
  let apost: Post;

  const defaultObj: Post = {
    content: "",
    date: "",
    title: "",
    excerpt: "",
    featured_image_url: "",
    url_cleaned_title: "",
  };

  if (inspect.post === undefined) {
    //we did not get a reponse
    apost = defaultObj;
    postExist = false;
  } else {
    if (inspect.goodObject) {
      apost = inspect.post;
      postExist = true;
    } else {
      apost = defaultObj;
      postExist = false;
    }
  }

  return <BlogPost post={apost} doesPostExist={postExist} />;
};

// This gets called on every request
export async function getServerSideProps(context) {


  const postTitle = context.params.title;
  const targetUrl = BASE_URL + URI + postTitle;

  let res: any;
  let post: any;

  // Fetch post data from backend
  try {
    res = await fetch(targetUrl);
    post = await res.json(); //will either be undefined or a response object
  } catch (e) {
    console.error("Request Failed.");
  }

  return { props: { post } };

  

export default Post;
