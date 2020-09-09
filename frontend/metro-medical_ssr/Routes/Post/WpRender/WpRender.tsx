import React from "react";
import styles from "./WpRender.module.css";

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
