import React from "react";
import styles from "./Footer.module.css";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerInfo}>
        New Market Business Centre, Cheapside (Opposite Cheapside Market),
        Bridgetown. <br />
        Tel: (246) 823-9559. <br />
        Email : metropolitanmedicalbb@gmail.com{" "}
      </p>
      <FacebookIcon fontSize="large" />
      <InstagramIcon fontSize="large" />
    </footer>
  );
};

export default Footer;
