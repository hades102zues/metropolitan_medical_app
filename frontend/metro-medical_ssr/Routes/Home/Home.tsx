import React from "react";
import styles from "./Home.module.css";

import Link from "next/link";

import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const instagram_icon = "/icon_instagram-min.png";
const fb_icon = "/icon_facebook-min.png";

const Home = () => {
  const open: boolean = false;

  const SpecialListItemText = withStyles({
    root: {
      fontSize: 16,
    },
  })(ListItemText);

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
        </div>
      </div>

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
      <Drawer open={open}>
        <div className={styles.sideMenu_topAccent}></div>
        <div className={styles.sideMenu_companyLogo}>
          <div className={styles.logo}>
            <img src="" alt="The company logo of Metropolitan Medical" />
          </div>
        </div>

        <List>
          {["Home", "About", "Services", "Blog", "Appointment", "Contact"].map(
            (text, index) => {
              const path =
                text.toLowerCase() !== "home" ? `/${text.toLowerCase()}` : "/";
              return (
                <Link href={path} key={text}>
                  <a>
                    <ListItem button>
                      <ListItemIcon>
                        <FacebookIcon fontSize="large" />
                      </ListItemIcon>
                      <SpecialListItemText disableTypography primary={text} />
                    </ListItem>
                  </a>
                </Link>
              );
            }
          )}
        </List>
        <div className={styles.sideMenu_social}>
          <FacebookIcon fontSize="large" />
          <InstagramIcon fontSize="large" />
        </div>
      </Drawer>
    </div>
  );
};

export default Home;
