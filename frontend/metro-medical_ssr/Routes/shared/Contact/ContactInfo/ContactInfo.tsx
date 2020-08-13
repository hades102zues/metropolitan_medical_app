import React from "react";
import styles from "./ContactInfo.module.css";

import { withStyles } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";

const ContactInfo = () => {
  const sharedRoot = {
    root: {
      fontSize: 50,
      marginBottom: 20,
      color: "#333",
    },
  };
  const StyEmailIcon = withStyles(sharedRoot)(EmailIcon);
  const StyLocation = withStyles(sharedRoot)(LocationOnIcon);
  const StyPhoneIcon = withStyles(sharedRoot)(PhoneIcon);
  const StyWorkIcon = withStyles(sharedRoot)(QueryBuilderIcon);

  return (
    <div className={styles.info}>
      <div className="wrapper">
        <div className={styles.infoLayout}>
          <div className={styles.details}>
            <article className={styles.contacts}>
              <StyLocation />
              <h3 className={styles.contacts_title}>Address</h3>
              <p className={styles.contact_info}>
                New Market Business Centre <br /> Cheapside <br /> Bridgetown{" "}
                <br /> Barbados (Opposite Cheapside Market)
              </p>
            </article>
            <article className={styles.contacts}>
              <StyEmailIcon />
              <h3 className={styles.contacts_title}>Email</h3>
              <p className={styles.contact_info}>
                metropolitanmedicalbb@gmail.com
              </p>
            </article>
            <article className={styles.contacts}>
              <StyPhoneIcon />
              <h3 className={styles.contacts_title}>Phone</h3>
              <p className={styles.contact_info}>(246) 823-9559</p>
            </article>
            <article className={styles.contacts}>
              <StyWorkIcon />
              <h3 className={styles.contacts_title}>Working Hours</h3>
              <p className={styles.contact_info}>
                Monday: 7AM-3PM
                <br />
                Tuesday: 8AM-4PM
                <br />
                Wednesday: 7AM-3PM
                <br />
                Thursday: 8AM-4PM
                <br />
                Friday: 9AM-5PM
                <br />
                Saturday: 9AM-1PM
              </p>
            </article>
          </div>
          <div className={styles.gmap}></div>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0073560444303!2d-59.62304108522802!3d13.098720190772546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c43f7c9ff1ee379%3A0xfda53f6ab45f1a88!2sDr.%20C%20Bowen%20(Metropolitan%20Medical)!5e0!3m2!1sen!2s!4v1597007801993!5m2!1sen!2s"
        // width="600"
        // height="450"
        frameBorder={0}
        style={{
          border: 0,
        }}
        className={styles.gMapCorrect}
        allow-full-screen=""
        aria-hidden="false"
        tabIndex={0}
      ></iframe>
    </div>
  );
};

export default ContactInfo;
