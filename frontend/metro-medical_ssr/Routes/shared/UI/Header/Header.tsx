import styles from "./Header.module.css";
import Link from "next/link";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

const Header = () => {
  return (
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
                  <Link href={path}>
                    <a>{text}</a>
                  </Link>
                );
              })}
            </nav>
            <nav className={styles.navbarMobile}>
              <MenuRoundedIcon fontSize="large" />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
