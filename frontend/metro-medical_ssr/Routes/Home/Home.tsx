import React from "react";
import styles from "./Home.module.css";

import Link from "next/link";

import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

const instagram_icon = "/icon_instagram-min.png";
const fb_icon = "/icon_facebook-min.png";

const Home = () => {
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
                <nav className={styles.navbarMobile}>
                  <MenuRoundedIcon fontSize="large" />
                </nav>
              </div>
            </div>
          </div>
        </header>
        <div className={styles.showcase}>
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

            <div className={styles.showcase2}>
              <div className={styles.tint}></div>

              <div className={styles.announcement_tint}></div>
              <Link href="blog">
                <a>
                  <p className={styles.announcement}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor. <br />
                    <br />
                    Find out more.
                  </p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className={styles.footer1}>
          <div className={styles.footerSocial}>
            <div className={styles.footerSocial_icon}>
              <img src={fb_icon} alt="This a facebook icon." />
            </div>
            <div className={styles.footerSocial_icon}>
              <img src={instagram_icon} alt="This an instagram icon." />
            </div>
          </div>
        </div>
        <div className={styles.footer2}>
          <p>
            New Market Business Centre, Cheapside (Opposite Cheapside Market),
            Bridgetown. <br />
            Tel: (246) 823-9559. <br />
            Email : metropolitanmedicalbb@gmail.com{" "}
          </p>
        </div>
      </footer>

      {/* <aside className={styles.sideDrawer}>
                <div className={styles.companyLogo}>
                    <img src ="" alt="This is the logo of metropolitan medical"/>
                </div>
                <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Blog</li>
                        <li>Book Now</li>
                        <li>Contact</li>
                    </ul>

            </aside>
            <div className={styles.backdrop}></div> */}
    </div>
  );
};

export default Home;
