import React from "react";
import styles from "./ContactForm.module.css";

import { withStyles } from "@material-ui/core";

const ContactForm = () => {
  return (
    <div className={styles.contactUs}>
      <div className="wrapper">
        <div className={styles.formHeading}>
          <h2 className={styles.mainFormHead}>Leave Us Your Info</h2>
          <p className={styles.secondFormHead}>and we will get back to you.</p>
        </div>
        <div className={styles.contactFormArea}>
          <div className={styles.contactForm}>
            <form className={styles.form}>
              <input
                type="text"
                placeholder="Full Name*"
                className={styles.form_item + " " + styles.itemAdjust}
              />
              <input
                type="text"
                placeholder="Email*"
                className={styles.form_item + " " + styles.itemAdjust}
              />
              <input
                type="text"
                placeholder="Subject*"
                className={styles.form_item}
              />
              <textarea
                rows={6}
                placeholder="Message*"
                className={styles.form_textarea}
              ></textarea>
              <button type="submit" className={styles.form_button}>
                Submit Now
              </button>
            </form>

            <p className={styles.form_submit}>Your form has been submitted.</p>

            <p className={styles.form_error}>
              An error has occured. Please, try a gain Later.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
