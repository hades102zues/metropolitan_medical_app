import React from "react";
import styles from "./Drawer.module.css";
import Link from "next/link";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

interface Props {
  shouldOpen: boolean;
  drawerStateHandler: () => void;
}
const SideDrawer: React.FC<Props> = (props) => {
  const open: boolean = props.shouldOpen;
  const closeDrawer: () => void = props.drawerStateHandler;

  const SpecialListItemText = withStyles({
    root: {
      fontSize: 16,
    },
  })(ListItemText);

  return (
    <Drawer open={open} onClose={closeDrawer}>
      <div className={styles.sideMenu_topAccent}></div>
      <div className={styles.sideMenu_companyLogo}>
        <div className={styles.logo}>
          <img src="" alt="The company logo of Metropolitan Medical" />
        </div>
      </div>

      <List>
        {["Home", "About", "Services", "Blog", "Appointment", "Contact"].map(
          (text: string, index: number) => {
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
  );
};

export default SideDrawer;
