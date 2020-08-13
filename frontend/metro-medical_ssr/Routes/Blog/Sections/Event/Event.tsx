import React from "react";
import styles from "./Event.module.css";

const Event = () => {
  return (
    <section className={styles.events}>
      <div className={styles.eventWrapper}>
        <div className={styles.event}>
          <img
            src="https://jimdo-storage.freetls.fastly.net/image/70488130/d0621a03-4eda-4871-a5f4-2cf5a341dd71.png?quality=80&auto=webp&disable=upscale&width=800&height=671&trim=0,0,0,0"
            alt=""
            className={styles.eventImg}
          />
        </div>
      </div>
      <p className={styles.eventA}>Event</p>
    </section>
  );
};

export default Event;
