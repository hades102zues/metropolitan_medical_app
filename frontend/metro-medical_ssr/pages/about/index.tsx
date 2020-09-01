import React from "react";

//import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import About from "../../Routes/About/About";
import HtmlHead from "../../HtmlHead";

const AboutPage = () => {
  const title = "About";
  const baseURL = "localhost";
  const description = "Learn a bit about us and what we do.";
  const allowIndexing = false;
  const logo_path = "/metro_logo.png";
  const relativePath = "/about";

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
      <About />
    </React.Fragment>
  );
};

export default AboutPage;
