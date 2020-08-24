import React from "react";
import Services from "../../Routes/Services/Services";
import HtmlHead from "../../HtmlHead";

const ServicesPage = () => {
  const title = "Services";
  const baseURL = "localhost";
  const description = "What we can offer you.";
  const allowIndexing = false;
  const logo_path = "/metro_logo.png";
  const relativePath = "/services";

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
      <Services />
    </React.Fragment>
  );
};

export default ServicesPage;
