import React, { useState } from "react";
import styles from "./Home.module.css";

import Header from "../shared/UI/Header/Header";
import Footer from "../shared/UI/Footer/Footer";
import Event from "../shared/Blog/Event/Event";
import Drawer from "../shared/UI/Drawer/Drawer";
import Hero from "./Sections/Hero/Hero";
import About from "../shared/About/About";
import Services from "../shared/Services/Services";
import Contact from "../shared/Contact/Contact";

const Home = () => {
  const [drawerState, setDrawerState] = useState(false);
  const drawerOpener = (): void => {
    setDrawerState((prevDrawerState): any => !prevDrawerState);
  };

  return (
    <div className={styles.Home}>
      <Hero>
        <Header drawerHandler={drawerOpener} />
      </Hero>

      <About />
      <Event />
      <Services />
      <Contact />
      <Footer />
      <Drawer shouldOpen={drawerState} drawerStateHandler={drawerOpener} />
    </div>
  );
};

export default Home;
