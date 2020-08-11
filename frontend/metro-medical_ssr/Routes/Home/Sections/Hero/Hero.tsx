import React from "react";
import styles from "./Hero.module.css";

import { withStyles } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";

interface Props {
  children: JSX.Element;
}
const Hero: React.FC<Props> = (props) => {
  const StyledLocationIcon = withStyles({
    root: {
      color: "#FF80AB",
      fontSize: 40,
      border: "2px solid #FF80AB",
      borderRadius: "50%",
      marginRight: 5,
      padding: 5,
    },
  })(LocationOnIcon);

  return (
    <section className={styles.hero}>
      <div className={styles.hero_bgImage}>
        <img
          src="https://images.unsplash.com/photo-1478476868527-002ae3f3e159?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
          alt="The background image of the hero"
        />
      </div>
      <div className={styles.hero_tint}></div>

      {props.children}

      <section className={styles.showcase}>
        <div className={styles.wrapper}>
          <div className={styles.showcase1}>
            <h1>You're in Good Hands</h1>
            <h2>
              Welcome to Metropolitan Medical where your health, wellness and
              comfort is our priority. We go above and beyond to ensure good
              patient care in a comforting welcoming environment
            </h2>
          </div>
        </div>

        <div className={styles.announcement}>
          <div className="wrapper">
            <div className={styles.location}>
              <StyledLocationIcon />

              <p className={styles.location_address}>
                New Market Business Centre, Cheapside, Bridgetown, Barbados.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
