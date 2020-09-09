import React, { useState, useEffect } from "react";
import styles from "./Event.module.css";

const BASE_URL = "http://metropolitan-medical.local";
const ANNOUNTMENT_URI = "/wp-json/wapi/wp-announcement";
const IMG_URI = "/wp-content";

const Event = () => {
  const [annoucement, setAnnouncement]: [string, any] = useState("");
  const [gotAnnoucement, setGetAnnouncement]: [boolean, any] = useState(false);

  const fetchAnnoucement = () => {
    interface Announcement {
      featured_image_url: string;
    }
    interface ResponseObject {
      announcement: Announcement;
      goodObject: boolean;
    }

    const targetUrl: string = BASE_URL + ANNOUNTMENT_URI;
    setGetAnnouncement(false);
    let goodResponse: boolean = false;

    fetch(targetUrl)
      .then((res: any) => {
        console.log("res", res);
        if (res.status === 200) goodResponse = true;

        return res.json();
      })
      .then((data: ResponseObject) => {
        if (goodResponse) {
          setAnnouncement(data.announcement.featured_image_url);
          setGetAnnouncement(true);
        } else {
          setAnnouncement("");
          setGetAnnouncement(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setAnnouncement("");
        setGetAnnouncement(false);
      });
  };

  useEffect(() => {
    console.log("Usefewffect");
    fetchAnnoucement();
  }, []);

  let render: JSX.Element;

  if (!gotAnnoucement) {
    render = null;
  } else {
    render = (
      <section className={styles.events}>
        <div className={styles.eventWrapper}>
          <div className={styles.event}>
            <img
              src={BASE_URL + IMG_URI + annoucement}
              alt=""
              className={styles.eventImg}
            />
          </div>
        </div>
        <p className={styles.eventA}>Announcement</p>
      </section>
    );
  }
  return render;
};

export default Event;
