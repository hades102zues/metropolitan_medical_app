//================================
//**Local Imports
//================================
import styles from "./Event.module.css";

//================================
//**Package imports
//================================
import React, { useState, useEffect } from "react";
import Link from "next/link";

//================================
//**KEYS AND CONSTRAINTS
//================================
const BASE_URL = "http://metropolitan-medical.local";
const ANNOUNTMENT_URI = "/wp-json/wapi/wp-announcement";
// const IMG_URI = "/wp-content";

//================================
//**Globals
//================================
interface Announcement {
  featured_image_url: string;
  post_url: string;
  post_uri: string;
}

const Event = () => {
  const [annoucement, setAnnouncement]: [Announcement, any] = useState({
    featured_image_url: "",
    post_url: "",
    post_uri: "",
  });
  const [gotAnnoucement, setGetAnnouncement]: [boolean, any] = useState(false);

  const fetchAnnoucement = () => {
    interface ResponseObject {
      announcement: Announcement;
      goodObject: boolean;
    }

    const targetUrl: string = BASE_URL + ANNOUNTMENT_URI;
    setGetAnnouncement(false);
    let goodResponse: boolean = false;

    fetch(targetUrl)
      .then((res: any) => {
        if (res.status === 200) goodResponse = true;

        return res.json();
      })
      .then((data: ResponseObject) => {
        if (goodResponse) {
          setAnnouncement(data.announcement);
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
            <Link href="/blog/post/title" as={annoucement.post_uri}>
              <img
                src={annoucement.featured_image_url}
                alt=""
                className={styles.eventImg}
                style={{ cursor: "pointer" }}
              />
            </Link>
          </div>
        </div>
        <p className={styles.eventA}>Announcement</p>
      </section>
    );
  }
  return render;
};

export default Event;
