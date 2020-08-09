import React, { useState } from "react";
import styles from "./Home.module.css";

import Header from "../shared/UI/Header/Header";
import Footer from "../shared/UI/Footer/Footer";
import Drawer from "../shared/UI/Drawer/Drawer";

import Link from "next/link";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Map, GoogleApiWrapper } from "google-maps-react";

const Home = () => {
  const [drawerState, setDrawerState] = useState(false);
  const drawerOpener = (): void => {
    setDrawerState((prevDrawerState): any => !prevDrawerState);
  };

  const mapStyles = {
    width: "100%",
    height: "100%",
  };

  const MapContainer = (props): any => (
    <Map
      google={props.google}
      // zoom={14}
      style={mapStyles}
      initialCenter={{
        lat: -1.2884,
        lng: 36.8233,
      }}
    />
  );

  const GoogleMapAPi = (): any => {
    return GoogleApiWrapper({
      apiKey: "AIzaSyB_80ZZtsg2FQcTnGIWitBUYSacwKUZPmw",
    })(MapContainer);
  };

  const GoogleMap = GoogleMapAPi();

  //Remember to activate the google map javascript api on your account

  console.log(GoogleMap);
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

      {/* <section className={styles.about}>
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
      </section> */}
      <section className={styles.about}>
        <div className={styles.about1}>
          <div className={styles.aboutImage}>
            <img src="https://images.unsplash.com/photo-1579840900569-f266a155415f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" />
          </div>
        </div>
        <div className={styles.about2}>
          <div className={styles.adjust}>
            <h2 className={styles.aboutTitle}>
              Who <br />
              We Are
            </h2>
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
              family planning and pap smears. We also have a passion for public
              health and offer free or low cost screening at intervals as well
              as disseminate health information via social media, email and hand
              outs.
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

      <section className={styles.contact}>
        <div className={styles.info}>
          <div className="wrapper">
            <div className={styles.infoLayout}>
              <div className={styles.details}>
                <article className={styles.contacts}>
                  <div className={styles.contacts_icon}>
                    <img />
                  </div>
                  <h3 className={styles.contacts_title}>Address</h3>
                  <p className={styles.contact_info}>
                    New Market Business Centre <br /> Cheapside <br />{" "}
                    Bridgetown <br /> Barbados (Opposite Cheapside Market)
                  </p>
                </article>
                <article className={styles.contacts}>
                  <div className={styles.contacts_icon}>
                    <img />
                  </div>
                  <h3 className={styles.contacts_title}>Email</h3>
                  <p className={styles.contact_info}>
                    metropolitanmedicalbb@gmail.co
                  </p>
                </article>
                <article className={styles.contacts}>
                  <div className={styles.contacts_icon}>
                    <img />
                  </div>
                  <h3 className={styles.contacts_title}>Phone</h3>
                  <p className={styles.contact_info}>(246) 823-9559</p>
                </article>
                <article className={styles.contacts}>
                  <div className={styles.contacts_icon}>
                    <img />
                  </div>
                  <h3 className={styles.contacts_title}>Working Hours</h3>
                  <p className={styles.contact_info}>
                    Monday: 7AM-3PM
                    <br />
                    Tuesday: 8AM-4PM
                    <br />
                    Wednesday: 7AM-3PM
                    <br />
                    Thursday: 8AM-4PM
                    <br />
                    Friday: 9AM-5PM
                    <br />
                    Saturday: 9AM-1PM
                  </p>
                </article>
              </div>
              <div className={styles.gmap}>{/* <GoogleMap /> */}</div>
            </div>
          </div>
        </div>

        <div className={styles.socialSpace}>
          <div className={styles.contactWrapper}>
            <FacebookIcon fontSize="large" />
            <InstagramIcon fontSize="large" />
          </div>
        </div>

        <div>
          <div className="wrapper">
            <div className={styles.formHeading}>
              <h2 className={styles.mainFormHead}>LEAVE US YOUR INFO</h2>
              <p className={styles.secondFormHead}>
                and we will get back to you.
              </p>
            </div>
            <div className={styles.contactFormArea}>
              <div className={styles.contactForm}>
                <form className={styles.form}>
                  <input
                    type="text"
                    placeholder="Full Name*"
                    className={styles.form_item + " " + styles.itemAdjust}
                  />
                  <input
                    type="text"
                    placeholder="Email*"
                    className={styles.form_item + " " + styles.itemAdjust}
                  />
                  <input
                    type="text"
                    placeholder="Subject*"
                    className={styles.form_item}
                  />
                  <textarea
                    rows={7}
                    placeholder="Message*"
                    className={styles.form_textarea}
                  ></textarea>
                  <button type="submit" className={styles.form_button}>
                    Submit Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
      <Drawer shouldOpen={drawerState} drawerStateHandler={drawerOpener} />
    </div>
  );
};

export default Home;
