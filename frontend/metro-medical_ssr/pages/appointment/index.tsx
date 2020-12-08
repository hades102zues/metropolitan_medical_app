//================================
//**LOCAL IMPORTS
//================================
import Appointment from "../../Routes/Appointment/Appointment";
import HtmlHead from "../../HtmlHead";

//================================
//**Package imports
//================================
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";

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
