import React, { useState } from "react";
import styles from "./Home.module.css";

import Header from "../shared/UI/Header/Header";
import Footer from "../shared/UI/Footer/Footer";
import Drawer from "../shared/UI/Drawer/Drawer";
import Hero from "./Sections/Hero/Hero";
import About from "../shared/About/About";
import Services from "../shared/Services/Services";

import Link from "next/link";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

import { withStyles } from "@material-ui/core";

// import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import DateFnsUtils from "@date-io/date-fns";
import "date-fns";

import {
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Select,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const Home = () => {
  const [drawerState, setDrawerState] = useState(false);
  const drawerOpener = (): void => {
    setDrawerState((prevDrawerState): any => !prevDrawerState);
  };

  //accordion

  const useStyles1 = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        width: "100%",
      },
      heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
      },
    })
  );

  const classes1 = useStyles1();
  //accordion edn

  // picker
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  //picker end

  //selector
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      formControl: {
        margin: theme.spacing(1),
        width: 120,
        border: "2px solid red",
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
    })
  );

  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

  //selector end
  return (
    <div className={styles.Home}>
      <Hero>
        <Header drawerHandler={drawerOpener} />
      </Hero>

      <About />
      <Services />

      <section className={styles.contact}>
        <div className={styles.info}>
          <div className="wrapper">
            <div className={styles.infoLayout}>
              <div className={styles.details}>
                <article className={styles.contacts}>
                  <div className={styles.contacts_icon}>
                    <img />
                  </div>
                  <h3 className={styles.contacts_title}>Address</h3>
                  <p className={styles.contact_info}>
                    New Market Business Centre <br /> Cheapside <br />{" "}
                    Bridgetown <br /> Barbados (Opposite Cheapside Market)
                  </p>
                </article>
                <article className={styles.contacts}>
                  <div className={styles.contacts_icon}>
                    <img />
                  </div>
                  <h3 className={styles.contacts_title}>Email</h3>
                  <p className={styles.contact_info}>
                    metropolitanmedicalbb@gmail.co
                  </p>
                </article>
                <article className={styles.contacts}>
                  <div className={styles.contacts_icon}>
                    <img />
                  </div>
                  <h3 className={styles.contacts_title}>Phone</h3>
                  <p className={styles.contact_info}>(246) 823-9559</p>
                </article>
                <article className={styles.contacts}>
                  <div className={styles.contacts_icon}>
                    <img />
                  </div>
                  <h3 className={styles.contacts_title}>Working Hours</h3>
                  <p className={styles.contact_info}>
                    Monday: 7AM-3PM
                    <br />
                    Tuesday: 8AM-4PM
                    <br />
                    Wednesday: 7AM-3PM
                    <br />
                    Thursday: 8AM-4PM
                    <br />
                    Friday: 9AM-5PM
                    <br />
                    Saturday: 9AM-1PM
                  </p>
                </article>
              </div>
              <div className={styles.gmap}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0073560444303!2d-59.62304108522802!3d13.098720190772546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c43f7c9ff1ee379%3A0xfda53f6ab45f1a88!2sDr.%20C%20Bowen%20(Metropolitan%20Medical)!5e0!3m2!1sen!2s!4v1597007801993!5m2!1sen!2s"
                  // width="600"
                  // height="450"
                  frameBorder={0}
                  style={{ border: 0, width: "100%", height: "100%" }}
                  allow-full-screen=""
                  aria-hidden="false"
                  tabIndex={0}
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.socialSpace}>
          <div className={styles.contactWrapper}>
            <FacebookIcon fontSize="large" />
            <InstagramIcon fontSize="large" />
          </div>
        </div>

        <div>
          <div className="wrapper">
            <div className={styles.formHeading}>
              <h2 className={styles.mainFormHead}>LEAVE US YOUR INFO</h2>
              <p className={styles.secondFormHead}>
                and we will get back to you.
              </p>
            </div>
            <div className={styles.contactFormArea}>
              <div className={styles.contactForm}>
                <form className={styles.form}>
                  <input
                    type="text"
                    placeholder="Full Name*"
                    className={styles.form_item + " " + styles.itemAdjust}
                  />
                  <input
                    type="text"
                    placeholder="Email*"
                    className={styles.form_item + " " + styles.itemAdjust}
                  />
                  <input
                    type="text"
                    placeholder="Subject*"
                    className={styles.form_item}
                  />
                  <textarea
                    rows={4}
                    placeholder="Message*"
                    className={styles.form_textarea}
                  ></textarea>
                  <button type="submit" className={styles.form_button}>
                    Submit Now
                  </button>
                </form>

                <p className={styles.form_submit}>
                  Your form has been submitted.
                </p>

                <p className={styles.form_error}>
                  An error has occured. Please, try a gain Later.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.appointment}>
        <div className="wrapper">
          <div className={styles.appFormArea}>
            <div className={styles.appForm}>
              <form className={styles.form}>
                <input
                  type="text"
                  placeholder="Full Name*"
                  className={styles.form_item + " " + styles.itemAdjust}
                />
                <input
                  type="text"
                  placeholder="Email (optional)"
                  className={styles.form_item + " " + styles.itemAdjust}
                />

                <input
                  type="text"
                  placeholder="Phone Number*"
                  className={styles.form_item}
                />
                <textarea
                  rows={4}
                  placeholder="Message (optional)"
                  className={styles.form_textarea}
                ></textarea>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label=""
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
                <div style={{ width: "100%" }}></div>
                <div className={styles.materiAdj}>
                  <FormControl required className={classes.formControl}>
                    <InputLabel id="demo-simple-select-required-label">
                      Services
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-required-label"
                      id="demo-simple-select-required"
                      value={age}
                      onChange={handleChange}
                      className={classes.selectEmpty}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    {/* <FormHelperText>Required</FormHelperText> */}
                  </FormControl>

                  <FormControl required className={classes.formControl}>
                    <InputLabel id="demo-simple-select-required-label">
                      Time
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-required-label"
                      id="demo-simple-select-required"
                      value={age}
                      onChange={handleChange}
                      className={classes.selectEmpty}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    {/* <FormHelperText>Required</FormHelperText> */}
                  </FormControl>
                </div>

                <button type="submit" className={styles.form_button}>
                  Submit Now
                </button>
              </form>

              <p className={styles.form_submit}>
                Your form has been submitted.
              </p>

              <p className={styles.form_error}>
                An error has occured. Please, try a gain Later.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Drawer shouldOpen={drawerState} drawerStateHandler={drawerOpener} />
    </div>
  );
};

export default Home;
