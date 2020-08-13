import React from "react";
import styles from "./Services.module.css";

import PageFrame from "../shared/UI/PageFrame/PageFrame";
import ServicesContent from "../shared/Services/Services";

const Services = () => {
  return (
    <div>
      <PageFrame pageTitle="Services">
        <ServicesContent />
      </PageFrame>
    </div>
  );
};

export default Services;
