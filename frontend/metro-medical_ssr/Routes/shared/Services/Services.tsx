import React from "react";
import styles from "./Services.module.css";

import AirlineSeatFlatAngledIcon from "@material-ui/icons/AirlineSeatFlatAngled";
import { withStyles } from "@material-ui/core";

const Services = () => {
  const StyCardIcon = withStyles({
    root: {
      color: "#dd6a8f",
      fontSize: 50,
    },
  })(AirlineSeatFlatAngledIcon);

  return (
    <section className={styles.services}>
      <div className="wrapper">
        <h2 className={styles.servicesTitle}> Our Procedures & Treatments</h2>
        <div className={styles.cardList}>
          <article className={styles.serviceCard}>
            <StyCardIcon />
            <h3 className={styles.serviceTitle}> Service Name</h3>
          </article>
          <article className={styles.serviceCard}>
            <StyCardIcon />
            <h3 className={styles.serviceTitle}> Service Name</h3>
          </article>
          <article className={styles.serviceCard}>
            <StyCardIcon />
            <h3 className={styles.serviceTitle}> Service Name</h3>
          </article>
          <article className={styles.serviceCard}>
            <StyCardIcon />
            <h3 className={styles.serviceTitle}> Service Name</h3>
          </article>
          <article className={styles.serviceCard}>
            <StyCardIcon />
            <h3 className={styles.serviceTitle}> Service Name</h3>
          </article>
          <article className={styles.serviceCard}>
            <StyCardIcon />
            <h3 className={styles.serviceTitle}> Service Name</h3>
          </article>
          <article className={styles.serviceCard}>
            <StyCardIcon />
            <h3 className={styles.serviceTitle}> Service Name</h3>
          </article>
          <article className={styles.serviceCard}>
            <StyCardIcon />
            <h3 className={styles.serviceTitle}> Service Name</h3>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;
