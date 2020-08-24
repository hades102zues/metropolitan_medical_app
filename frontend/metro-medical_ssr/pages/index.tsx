import React from "react";

import Home from "../Routes/Home/Home";
import HtmlHead from "../HtmlHead";

const HomePage = () => {
  const baseURL = "localhost";
  const description =
    "Welcome to Metropolitan Medical. We offer general medical services at affordable prices.";
  const allowIndexing = false;
  const logo_path = "/metro_logo.png";
  return (
    <React.Fragment>
      <HtmlHead
        allowIndex={allowIndexing}
        baseUrl={baseURL}
        logoPath={logo_path}
        title="Home"
        contentDescription={description}
        canonical={baseURL + ""}
        googleOwnerShipID=""
        bingOwnerShipID=""
      />
      <Home />
    </React.Fragment>
  );
};

export default HomePage;
