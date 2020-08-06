import React from "react";
import styles from "./About.module.css";
import PageFrame from "../shared/UI/PageFrame/PageFrame";

import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

const About = () => {
  return (
    <div className={styles.About}>
      <PageFrame pageTitle="About">
        <div>
          <p>Im a child</p>
        </div>
        <div>
          <p>Im a child</p>
        </div>
      </PageFrame>
    </div>
  );
};

export default About;
