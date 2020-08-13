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

  const services: String[] = [
    "Pap Smear",
    "Phlebotomy",
    "Home Visits",
    "Kid's Checkup",
    "Catheterisations",
    "Food Handler Certificates",
    "Routine Visit",
  ];

  return (
    <section className={styles.services}>
      <div className="wrapper">
        <h2 className={styles.servicesTitle}> Our Procedures & Treatments</h2>
        <div className={styles.cardList}>
          {services.map((serviceName: string, i: number) => (
            <article className={styles.serviceCard} key={i}>
              <StyCardIcon />
              <h3 className={styles.serviceTitle}> {serviceName}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
