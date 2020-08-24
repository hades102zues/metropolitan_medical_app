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

  const fb_url = "https://www.facebook.com/c.bowenmedical/";
  const instagram_url = "https://www.instagram.com/metropolitanmedicalbb/";

  return (
    <footer className={styles.footer}>
      <p className={styles.footerInfo}>
        New Market Business Centre, Cheapside (Opposite Cheapside Market),
        Bridgetown. <br />
        Tel: (246) 823-9559. <br />
        Email : metropolitanmedicalbb@gmail.com{" "}
      </p>
      <a target="_blank" rel="noopener noreferrer" href={fb_url}>
        <StyFacebookIcon />
      </a>
      <a target="_blank" rel="noopener noreferrer" href={instagram_url}>
        <StyInstagramIcon />
      </a>
    </footer>
  );
};

export default Footer;
