//================================
//**LOCAL IMPORTS
//================================
import HtmlHead from "../../HtmlHead";
import Blog from "../../Routes/Blog/Blog";

//================================
//**Package imports
//================================
import React from "react";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

const BlogPage = () => {
  const title = "Blog";
  const baseURL = "localhost";
  const description = "Check out our posts.";
  const allowIndexing = false;
  const logo_path = "/metro_logo.png";
  const relativePath = "/blog";
  return (
    <React.Fragment>
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
      <Blog />
    </React.Fragment>
  );
};

export default BlogPage;
