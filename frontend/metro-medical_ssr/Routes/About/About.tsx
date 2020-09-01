import React from "react";
import styles from "./About.module.css";
import PageFrame from "../shared/UI/PageFrame/PageFrame";
import AboutContent from "../shared/About/About";

import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

const About = () => {
  return (
    <div className={styles.About}>
      <PageFrame pageTitle="About">
        <AboutContent />
      </PageFrame>
    </div>
  );
};

export default About;
