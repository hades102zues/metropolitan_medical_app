import React from "react";
import styles from "./Footer.module.css";

import { withStyles } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => {
  const iconStyles = {
    root: {
      color: "#583b4c",
      marginRight: 20,
      fontSize: 35,
    },
  };
  const StyFacebookIcon = withStyles(iconStyles)(FacebookIcon);
  const StyInstagramIcon = withStyles(iconStyles)(InstagramIcon);
  return (
    <footer className={styles.footer}>
      <p className={styles.footerInfo}>
        New Market Business Centre, Cheapside (Opposite Cheapside Market),
        Bridgetown. <br />
        Tel: (246) 823-9559. <br />
        Email : metropolitanmedicalbb@gmail.com{" "}
      </p>
      <StyFacebookIcon />
      <StyInstagramIcon />
    </footer>
  );
};

export default Footer;
