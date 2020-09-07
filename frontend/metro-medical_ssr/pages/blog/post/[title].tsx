import React from "react";
import BlogPost from "../../../Routes/Post/Post";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

const BASE_URL = "http://metropolitan-medical.local";
const URI = "/wp-json/wapi/wp-post/";

interface Post {
  content: any;
  date: string;
  title: string;
  excerpt: string;
  url_cleaned_title: string;
  featured_image_url: string;
}

const Post = ({ post }) => {
  let inspect: any = post.post;
  let postExist: boolean;

  let apost: Post;
  if (inspect === undefined) {
    apost = {
      content: "",
      date: "",
      title: "",
      excerpt: "",
      featured_image_url: "",
      url_cleaned_title: "",
    };
    postExist = false;
  } else {
    apost = inspect;
    postExist = true;
  }

  return <BlogPost post={apost} doesPostExist={postExist} />;
};

// This gets called on every request
export async function getServerSideProps(context) {
  const postTitle = context.params.title;
  const targetUrl = BASE_URL + URI + postTitle;

  let res: any;
  let post: any;

  // Fetch data from external API
  try {
    res = await fetch(targetUrl);
    post = await res.json();
  } catch (e) {
    console.error("Request Failed.");
  }

  return { props: { post } };

  // let responseGood = true;
  // fetch(targetUrl)
  //   .then((res) => {
  //     if (res.status != 200) responseGood = false;

  //     return res.json();
  //   })
  //   .then((data: any) => {
  //     let post: Post;
  //     if (responseGood) post = data;
  //     else {

  //     }
  //     return { props: { post } };
  //   })
  //   .catch((err) => {
  //     let post: Post = {
  //       content: "",
  //       date: "",
  //       title: "",
  //       excerpt: "",
  //       postExist: false,
  //     };
  //     console.error("Error fetching post.");

  //   });

  // Pass data to the page via props
}

export default Post;
