//================================
//** LOCAL IMPORTS ==================
//================================
import styles from "./About.module.css";
import PageFrame from "../shared/UI/PageFrame/PageFrame";
import AboutContent from "../shared/About/About";

//================================
//** PACKAGE IMPORTS ==================
//================================
import React from "react";

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
