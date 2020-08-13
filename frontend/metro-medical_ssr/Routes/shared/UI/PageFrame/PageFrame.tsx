import React, { useState } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Drawer from "../Drawer/Drawer";
import MiniHero from "../MiniHero/MiniHero";

interface Props {
  children: JSX.Element[] | JSX.Element;
  pageTitle: string;
}

const PageFrame: React.FC<Props> = (props) => {
  const { pageTitle, children } = props;
  const [drawerState, setDrawerState] = useState(false);
  const drawerOpener = (): void => {
    setDrawerState((prevDrawerState): any => !prevDrawerState);
  };

  return (
    <>
      <MiniHero headline={pageTitle}>
        <Header drawerHandler={drawerOpener} />
      </MiniHero>
      {children}
      <Footer />
      <Drawer shouldOpen={drawerState} drawerStateHandler={drawerOpener} />
    </>
  );
};

export default PageFrame;
