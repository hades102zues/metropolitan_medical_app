import React from "react";

import Appointment from "../../Routes/Appointment/Appointment";
import HtmlHead from "../../HtmlHead";

const AppPage = () => {
  const title = "Appointment";
  const baseURL = "localhost";
  const description =
    "Book an appointment online through our appointment form!";
  const allowIndexing = false;
  const logo_path = "/metro_logo.png";
  const relativePath = "/appointment";

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
      <Appointment />
    </React.Fragment>
  );
};

export default AppPage;
