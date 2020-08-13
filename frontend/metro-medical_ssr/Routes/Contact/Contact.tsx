import React from "react";
import styles from "./Contact.module.css";
import PageFrame from "../shared/UI/PageFrame/PageFrame";

import ContactInfo from "../shared/Contact/ContactInfo/ContactInfo";
import ContactForm from "../shared/Contact/ContactForm/ContactForm";

const Contact = () => {
  return (
    <div>
      <PageFrame pageTitle="Contact">
        <ContactInfo />
        <ContactForm />
      </PageFrame>
    </div>
  );
};

export default Contact;
