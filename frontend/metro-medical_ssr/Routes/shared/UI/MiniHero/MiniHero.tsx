import React from "react";
import styles from "./MiniHero.module.css";

interface Props {
  children: JSX.Element;
}
const MiniHero: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_bgImage}>
        <img
          src="https://images.unsplash.com/photo-1478476868527-002ae3f3e159?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
          alt="The background image of the hero"
        />
      </div>
      <div className={styles.hero_tint}></div>
      {children}
      <section className={styles.showcase}>
        <h1>Showcase header</h1>
      </section>
    </div>
  );
};

export default MiniHero;
