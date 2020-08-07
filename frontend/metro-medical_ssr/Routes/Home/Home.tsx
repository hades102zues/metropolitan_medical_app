import React, { useState } from "react";
import styles from "./Home.module.css";

import Header from "../shared/UI/Header/Header";
import Footer from "../shared/UI/Footer/Footer";
import Drawer from "../shared/UI/Drawer/Drawer";

import Link from "next/link";

const instagram_icon = "/icon_instagram-min.png";
const fb_icon = "/icon_facebook-min.png";

const Home = () => {
  const [drawerState, setDrawerState] = useState(false);
  const drawerOpener = (): void => {
    setDrawerState((prevDrawerState): any => !prevDrawerState);
  };

  console.log("drawer: ", drawerState);

  return (
    <div className={styles.Home}>
      <div className={styles.hero}>
        <div className={styles.hero_bgImage}>
          <img
            src="https://images.unsplash.com/photo-1478476868527-002ae3f3e159?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
            alt="The background image of the hero"
          />
        </div>
        <div className={styles.hero_tint}></div>

        <Header drawerHandler={drawerOpener} />

        <section className={styles.showcase}>
          <div className={styles.wrapper}>
            <div className={styles.showcase1}>
              <h1>Out Reach Text. Super super super super nifty.</h1>
              <h2>miniline supser lorem ispsum soiam era</h2>
              <div className={styles.buttonBox}>
                <Link href="/appointment">
                  <a>Book Now</a>
                </Link>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.announcement}>
            <div className={styles.announcementwrap}>
              <div className={styles.announcement1}>
                <div className={styles.announcementIcon}></div>
              </div>
              <div className={styles.announcement2}>
                <p className={styles.accouncementTitle}>
                  when an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries,{" "}
                </p>
                <div className={styles.accouncementLink}></div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className={styles.about}>
        <div className="wrapper">
          <h2 className={styles.aboutHeadline}>Who we are</h2>
          <div className={styles.aboutStory}>
            <p className={styles.aboutStory_item}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate
            </p>
            <p className={styles.aboutStory_item}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate
            </p>
          </div>
        </div>
      </section>

      <section className={styles.services}>
        <div className="wrapper">
          <div className={styles.servicesBox}>
            <div className={styles.servicesHeadline}>
              <h2 className={styles.servicesHeadline_title}>
                quis nostrud exercitation ullamco
              </h2>
            </div>
            <div className={styles.servicesCards}>
              {[
                { icon: "", title: "", info: "" },
                { icon: "", title: "", info: "" },
                { icon: "", title: "", info: "" },
                { icon: "", title: "", info: "" },
                { icon: "", title: "", info: "" },
                { icon: "", title: "", info: "" },
                { icon: "", title: "", info: "" },
              ].map((card, i) => (
                <article
                  className={styles.serviceCard}
                  style={{ background: "purple" }}
                >
                  <div className={styles.cardIcon}>
                    <img src="" alt="" />
                  </div>
                  <h3 className={styles.cardTitle}>Card Title</h3>
                  <p className={styles.cardInfo}>
                    Predatory lending is a form of abuse in the granting of
                    loan.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Drawer shouldOpen={drawerState} drawerStateHandler={drawerOpener} />
    </div>
  );
};

export default Home;
