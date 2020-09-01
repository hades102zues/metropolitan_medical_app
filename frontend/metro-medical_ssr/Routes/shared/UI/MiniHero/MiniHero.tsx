import React from "react";
import styles from "./MiniHero.module.css";

interface Props {
  children: JSX.Element;
  headline: string;
  // drawerHandler: () => void;
}
const MiniHero: React.FC<Props> = ({ children, headline }) => {
  const heroImage = "/hero.jpg";

  return (
    <div className={styles.hero}>
      <div className={styles.hero_bgImage}>
        <img src={heroImage} alt="The background image of the hero" />
      </div>
      <div className={styles.hero_tint}></div>
      {children}
      <section className={styles.showcase}>
        <h1 className={styles.showcase_headline}>{headline}</h1>
      </section>
    </div>
  );
};

export default MiniHero;
