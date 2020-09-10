import React from "react";
import styles from "./About.module.css";

import { withStyles } from "@material-ui/core";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import PeopleIcon from "@material-ui/icons/People";

const sectionImage = "/about.jpg";

const About = () => {
  const StylMissionIcon = withStyles({
    root: {
      fontSize: 35,
      color: "#dd6a8f",
      marginRight: 10,
    },
  })(LocalHospitalIcon);

  const StylePeopleIcon = withStyles({
    root: {
      fontSize: 40,
      color: "#583b4c",
      marginRight: 10,
    },
  })(PeopleIcon);

  return (
    <section className={styles.about}>
      <div className={styles.aboutImage}>
        <img src={sectionImage} />
      </div>

      <div className="wrapper">
        <div className={styles.aboutFlex}>
          <div className={styles.about2}>
            <div className={styles.adjust}>
              <StylePeopleIcon />
              <h3 className={styles.aboutTitle}>Who We Are</h3>
            </div>
            <div className={styles.aboutTalk}>
              <p className={styles.talk}>
                Metropolitan Medical was founded and is run by Dr. Camille Bowen
                (BSc, BSc, MBBS, MPH) a Barbadian with a passion for excellent
                patient care with a particular emphasis on women's health and
                wellness.
              </p>
              <p className={styles.talk}>
                At our clinic we offer an array of medical services including
                family planning and pap smears. We also have a passion for
                public health and offer free or low cost screening at intervals
                as well as disseminate health information via social media,
                email and hand outs.
              </p>
            </div>
          </div>
          <div className={styles.about3}>
            <div className={styles.mission}>
              <StylMissionIcon />
              <h3 className={styles.mission_title}>Mission</h3>

              <p className={styles.mission_statement}>
                Our mission here at Metropolitan Medical is to bring you high
                quality healthcare at an affordable cost in a central location
                with a beautiful environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
