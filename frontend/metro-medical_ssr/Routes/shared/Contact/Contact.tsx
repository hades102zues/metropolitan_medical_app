import React from "react";
import styles from "./Contact.module.css";
import ContactInfo from "./ContactInfo/ContactInfo";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <ContactInfo />
      <ContactForm />
    </section>
  );
};

export default Contact;
