import React from "react";
import styles from "./About.module.css";

import Link from "next/link";

import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

const About = () => {
  return (
    <div className={styles.About}>
      <div className={styles.hero}>
        <div className={styles.hero_bgImage}>
          <img
            src="https://images.unsplash.com/photo-1478476868527-002ae3f3e159?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
            alt="The background image of the hero"
          />
        </div>
        <div className={styles.hero_tint}></div>
        <header className={styles.hero_header}>
          <div className={"wrapper"}>
            <div className={styles.header1}>
              <div className={styles.divider1}>
                <div className={styles.logoArea_logo}>
                  <img src="" alt="The logo of Metropolitan Medical." />
                </div>
              </div>
              <div className={styles.divider2}>
                <nav className={styles.navbarDesktop}>
                  <Link href="/">
                    <a className={styles.active}>Home</a>
                  </Link>
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                  <Link href="/services">
                    <a>Services</a>
                  </Link>
                  <Link href="/blog">
                    <a>Blog</a>
                  </Link>
                  <Link href="/appointment">
                    <a>Book Now</a>
                  </Link>
                  <Link href="/contact">
                    <a>Contact</a>
                  </Link>
                </nav>
                <nav className={styles.navbarMobile}></nav>
              </div>
            </div>
          </div>
        </header>

        <section className={styles.showcase}>
          <h1>Showcase header</h1>
        </section>
      </div>
    </div>
  );
};

export default About;
