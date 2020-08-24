//import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React from "react";

import Contact from "../../Routes/Contact/Contact";
import HtmlHead from "../../HtmlHead";

const ContactPage = () => {
  const title = "Contact";
  const baseURL = "localhost";
  const description = "Have a question to ask? Here's how to reach us.";
  const allowIndexing = false;
  const logo_path = "/metro_logo.png";
  const relativePath = "/contact";

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

      <Contact />
    </React.Fragment>
  );
};

export default ContactPage;
