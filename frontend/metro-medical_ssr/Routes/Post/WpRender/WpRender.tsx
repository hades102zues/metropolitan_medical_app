//================================
//** LOCAL IMPORTS ==================
//================================
import styles from "./WpRender.module.css";

//================================
//** PACKAGE IMPORTS ==================
//================================
import React from "react";

interface Props {
  content: string;
}

const wpRenderBox: React.FC<Props> = (props) => {
  return (
    <div
      className={styles.wpAdjust}
      dangerouslySetInnerHTML={{ __html: props.content }}
    ></div>
  );
};

export default wpRenderBox;
