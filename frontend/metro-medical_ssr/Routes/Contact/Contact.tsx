//================================
//** LOCAL IMPORTS ==================
//================================
import PageFrame from "../shared/UI/PageFrame/PageFrame";
import ContactInfo from "../shared/Contact/ContactInfo/ContactInfo";
import ContactForm from "../shared/Contact/ContactForm/ContactForm";
import styles from "./Contact.module.css";

//================================
//** PACKAGE IMPORTS ==================
//================================
import React from "react";

const Contact = () => {
  return (
    <div>
      <PageFrame pageTitle="Contact">
        <ContactForm />
        <ContactInfo />
      </PageFrame>
    </div>
  );
};

export default Contact;
