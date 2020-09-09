import React from "react";
import styles from "./Services.module.css";

import AirlineSeatFlatAngledIcon from "@material-ui/icons/AirlineSeatFlatAngled";
import { withStyles } from "@material-ui/core";

const Services = () => {
  interface Card {
    service: string;
    imagePath: string;
  }
  const StyCardIcon = withStyles({
    root: {
      color: "#dd6a8f",
      fontSize: 50,
    },
  })(AirlineSeatFlatAngledIcon);

  const services: Card[] = [
    { service: "Pap Smear", imagePath: "/blood.png" },
    { service: "Phlebotomy", imagePath: "/blood.png" },
    { service: "Home Visits", imagePath: "/blood.png" },
    { service: "Kid's Checkup", imagePath: "/blood.png" },
    { service: "Catheterisations", imagePath: "/blood.png" },
    { service: "Food Handler Certificates", imagePath: "/blood.png" },
    { service: "Routine Visit", imagePath: "/blood.png" },
  ];

  return (
    <section className={styles.services}>
      <div className="wrapper">
        <h2 className={styles.servicesTitle}> Our Procedures & Treatments</h2>
        <div className={styles.cardList}>
          {services.map((card: Card, i: number) => (
            <article className={styles.serviceCard} key={i}>
              {/* {<StyCardIcon />} */}
              <div className={styles.cardIcon}>
                <img
                  src={"/services_icons" + card.imagePath}
                  alt="Icon for card."
                />
              </div>
              <h3 className={styles.serviceTitle}> {card.service}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
