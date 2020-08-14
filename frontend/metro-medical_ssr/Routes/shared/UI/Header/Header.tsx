import styles from "./Header.module.css";
import Link from "next/link";

// import { withStyles } from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const companyLogo = "/metro_logo.png";

import { makeStyles } from "@material-ui/core/styles";

interface Props {
  drawerHandler: () => void;
}
const Header: React.FC<Props> = (props) => {
  // const iconSize = "large";

  // const StyledFaceBookIcon = withStyles({
  //   root: {
  //     marginRight: 20,
  //     fontSize: 20,
  //   },
  // })(FacebookIcon);

  const iconStyles = makeStyles({
    root: {
      marginRight: 20,
      fontSize: 22,
    },
  });

  const iconClasses = iconStyles();
  return (
    <header className={styles.hero_header}>
      <div className={styles.header0}>
        <div className="wrapper" style={{ overflow: "visible" }}>
          <div className={styles.socialAdj}>
            <p className={styles.socialText}>Follow us on: </p>
            <FacebookIcon classes={{ root: iconClasses.root }} />
            <InstagramIcon classes={{ root: iconClasses.root }} />
            <div className={styles.companyLogo}>
              <div className={styles.colorBox}>
                <img src={companyLogo} alt="The metropolitan medical's logo" />
                {/* <h3 className={styles.company}>Metropolitan Medical</h3> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.navBgColor}>
        <div className={"wrapper"}>
          <div className={styles.header1}>
            <div className={styles.divider1}>
              <div className={styles.logoArea_logo}>
                <img src="" alt="The logo of Metropolitan Medical." />
              </div>
            </div>
            <div className={styles.divider2}>
              <nav className={styles.navbarDesktop}>
                {[
                  "Home",
                  "About",
                  "Services",
                  "Blog",
                  "Appointment",
                  "Contact",
                ].map((text: string, i: number) => {
                  const path =
                    text.toLowerCase() !== "home"
                      ? `/${text.toLowerCase()}`
                      : "/";
                  return (
                    <Link href={path} key={text}>
                      <a className={styles.linkText}>{text}</a>
                    </Link>
                  );
                })}
              </nav>
              <nav className={styles.navbarMobile}>
                <MenuRoundedIcon
                  fontSize="large"
                  onClick={(): void => {
                    props.drawerHandler();
                  }}
                />
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
