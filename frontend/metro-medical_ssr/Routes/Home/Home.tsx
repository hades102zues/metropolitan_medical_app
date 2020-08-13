import React, { useState } from "react";
import styles from "./Home.module.css";

import Header from "../shared/UI/Header/Header";
import Footer from "../shared/UI/Footer/Footer";
import Drawer from "../shared/UI/Drawer/Drawer";
import Hero from "./Sections/Hero/Hero";
import About from "../shared/About/About";
import Services from "../shared/Services/Services";
import ContactInfo from "../shared/Contact/ContactInfo/ContactInfo";

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
        <ContactInfo />

        <div className={styles.contactUs}>
          <div className="wrapper">
            <div className={styles.formHeading}>
              <h2 className={styles.mainFormHead}>Leave Us Your Info</h2>
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
                    rows={6}
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
          <div className={styles.formHeading}>
            <h2 className={styles.mainFormHead}>Book Now</h2>
            <p className={styles.secondFormHead}>
              and we will get back to you.
            </p>
          </div>

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
                  rows={6}
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
                Your form has been submitted. If there any changes to your
                appointment time we will be sure to reach out to you.
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
