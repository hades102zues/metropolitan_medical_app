import React from "react";
import styles from "./Drawer.module.css";
import Link from "next/link";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles, makeStyles } from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import BookIcon from "@material-ui/icons/Book";
import ScheduleIcon from "@material-ui/icons/Schedule";
import ChatIcon from "@material-ui/icons/Chat";

interface Props {
  shouldOpen: boolean;
  drawerStateHandler: () => void;
}
const SideDrawer: React.FC<Props> = (props) => {
  const logo = "/metro_logo.png";
  const open: boolean = props.shouldOpen;
  const closeDrawer: () => void = props.drawerStateHandler;

  const StylList = withStyles({
    root: {
      paddingTop: 0,
      height: "100%",
    },
  })(List);
  const SpecialListItemText = withStyles({
    root: {
      fontSize: 14,
    },
  })(ListItemText);

  const StyListIcon = withStyles({
    root: {
      color: "#583b4c",
    },
  })(ListItemIcon);

  const drawerStyle = makeStyles({
    paper: {
      backgroundImage: 'url("/bg_compressed.jpg")',
    },
  });

  const drawerClasses = drawerStyle();

  /*EVERY THING SHOULD APPEAR WITHIN THE LIST, OTHERWISE SIDEDRAWE MISBEHAVES*/

  return (
    <Drawer
      open={open}
      onClose={closeDrawer}
      anchor="left"
      classes={{ paper: drawerClasses.paper }}
    >
      <StylList>
        <div className={styles.sideMenu_topAccent}></div>
        <div className={styles.sideMenu_companyLogo}>
          <div className={styles.logo}>
            <Link href="/">
              <a>
                <img
                  src={logo}
                  alt="The company logo of Metropolitan Medical"
                />{" "}
              </a>
            </Link>
          </div>
        </div>

        <div className={styles.divider}></div>

        <Link href="/">
          <a>
            <ListItem button>
              <StyListIcon>
                <HomeIcon fontSize="large" />
              </StyListIcon>
              <SpecialListItemText disableTypography primary="Home" />
            </ListItem>
          </a>
        </Link>

        <Link href="/about">
          <a>
            <ListItem button>
              <StyListIcon>
                <InfoIcon fontSize="large" />
              </StyListIcon>
              <SpecialListItemText disableTypography primary="About" />
            </ListItem>
          </a>
        </Link>

        <Link href="/services">
          <a>
            <ListItem button>
              <StyListIcon>
                <LocalOfferIcon fontSize="large" />
              </StyListIcon>
              <SpecialListItemText disableTypography primary="Services" />
            </ListItem>
          </a>
        </Link>

        <Link href="/blog">
          <a>
            <ListItem button>
              <StyListIcon>
                <BookIcon fontSize="large" />
              </StyListIcon>
              <SpecialListItemText disableTypography primary="Blog" />
            </ListItem>
          </a>
        </Link>

        <Link href="/appointment">
          <a>
            <ListItem button>
              <StyListIcon>
                <ScheduleIcon fontSize="large" />
              </StyListIcon>
              <SpecialListItemText disableTypography primary="Appointment" />
            </ListItem>
          </a>
        </Link>

        <Link href="/contact">
          <a>
            <ListItem button>
              <StyListIcon>
                <ChatIcon fontSize="large" />
              </StyListIcon>
              <SpecialListItemText disableTypography primary="Contact" />
            </ListItem>
          </a>
        </Link>
      </StylList>
    </Drawer>
  );
};

export default SideDrawer;
