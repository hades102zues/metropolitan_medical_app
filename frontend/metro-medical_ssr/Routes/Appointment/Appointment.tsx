import React from "react";
import styles from "./Appointment.module.css";
import PageFrame from "../shared/UI/PageFrame/PageFrame";

//date picker
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import DateFnsUtils from "@date-io/date-fns";
import "date-fns";

//select
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Select,
} from "@material-ui/core";
import { deserialize } from "v8";
import { time } from "console";

import * as Yup from "yup";
import { useFormik, Form, Field } from "formik";

const Appointment = () => {
  const defaultMaterialTheme = createMuiTheme({
    typography: {
      fontSize: 20, //sweet spot. going to large will ruin the component's layout
    },
    overrides: {
      MuiPickersToolbar: {
        toolbar: {
          backgroundColor: "#583b4c",
        },
      },
      MuiPickersDay: {
        day: {
          color: "#583b4c", //sets the color for individual unselected days
        },
        daySelected: {
          backgroundColor: "#dd6a8f", //sets the color of the selection sphere
        },
        current: {
          color: "red", //sets the color for the number that matches today's date
        },

        //property that handles the color for hover has not been found yet
      },
    } as any,
  });

  //picker end

  //selector
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      formControl: {
        marginRight: theme.spacing(1),
        width: 170,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
      selectLabel: {
        fontSize: 14, //this affects the placeholder and value sizes of select
      },
    })
  );

  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      message: "",
      date: new Date(),
      service: "",
      time: "",
      captchaDidVerify: false, //flag for captcha verify

      formDidSubmit: false, //displays success message if server responded with a 2xx
      errorDidOccur: false, //displays error message if server responded with anything other than 2xx
      isWaiting: false, //display message while waiting on server response
    },
    onSubmit: (values) => {
      console.log("handle Submit: ", values);
    },
  });

  // date picker handler
  const handleDateChange = (date: Date | null) => {
    formik.setFieldValue("date", date);
  };

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    formik.setFieldValue("service", event.target.value as string);
  };

  interface Service {
    name: string;
    description: string;
  }
  const services: Service[] = [
    {
      name: "Pap Smear",
      description: "Pap Smear - 30 minutes · Ask For Price",
    },
    {
      name: "Phlebotomy",
      description: "Phlebotomy - Duration Varies Blood drawing for testing",
    },
    {
      name: "Home Visits",
      description: "Home Visits - Duration Varies · $85BDS",
    },
    {
      name: "Kid's Checkup",
      description: "Kid's Checkup - Duration Varies · $35BDS",
    },
    {
      name: "Catheterisations",
      description: "Catheterisations - Duration Varies · Cost Varies ",
    },
    {
      name: "Food Handler Certificates",
      description:
        "Food Handler Certificates - Duration Varies · $20BDS  For those working in the food and beverage industry requiring certificates",
    },
    {
      name: "Routine Visit",
      description: "Routine Visit - Duration Varies · $55 BDS",
    },
  ];

  const selectServices: JSX.Element[] = services.map(
    (service: Service, i: number) => (
      <MenuItem value={service.name} key={i}>
        {service.description}
      </MenuItem>
    )
  );

  //selector end

  return (
    <PageFrame pageTitle="Book Now">
      <section className={styles.appointment}>
        <div className="wrapper">
          <div className={styles.appFormArea}>
            <div className={styles.appForm}>
              <form onSubmit={formik.handleSubmit} className={styles.form}>
                <input
                  type="text"
                  placeholder="Full Name*"
                  className={styles.form_item + " " + styles.itemAdjust}
                  id="fullName"
                  name="fullName"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.fullName}
                  style={{
                    border:
                      formik.touched.fullName && formik.errors.fullName
                        ? "1px solid red"
                        : null,
                  }}
                />
                <input
                  type="email"
                  placeholder="Email (optional)"
                  className={styles.form_item + " " + styles.itemAdjust}
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  style={{
                    border:
                      formik.touched.email && formik.errors.email
                        ? "1px solid red"
                        : null,
                  }}
                />

                <input
                  type="text"
                  placeholder="Phone Number*"
                  className={styles.form_item}
                  id="phoneNumber"
                  name="phoneNumber"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneNumber}
                  style={{
                    border:
                      formik.touched.phoneNumber && formik.errors.phoneNumber
                        ? "1px solid red"
                        : null,
                  }}
                />
                <textarea
                  rows={6}
                  placeholder="Message (optional)"
                  className={styles.form_textarea}
                  id="message"
                  name="message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  style={{
                    border:
                      formik.touched.message && formik.errors.message
                        ? "1px solid red"
                        : null,
                  }}
                ></textarea>
                <p className={styles.instruct}>
                  {" "}
                  Select a Date, Service and Time...
                </p>
                <br />
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <ThemeProvider theme={defaultMaterialTheme}>
                    <KeyboardDatePicker
                      margin="normal"
                      id="date-picker-dialog"
                      label=""
                      format="MM/dd/yyyy"
                      value={formik.values.date}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </ThemeProvider>
                </MuiPickersUtilsProvider>

                <div style={{ width: "100%" }}></div>
                <div className={styles.materiAdj}>
                  <FormControl required className={classes.formControl}>
                    <InputLabel
                      id="demo-simple-select-required-label"
                      className={classes.selectLabel}
                    >
                      Services
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-required-label"
                      id="demo-simple-select-required"
                      value={formik.values.service}
                      onChange={handleSelectChange}
                      className={classes.selectEmpty}
                    >
                      {selectServices}
                    </Select>
                  </FormControl>
                </div>

                <div className={styles.times}>
                  <div className={styles.times_box + " " + styles.timesActive}>
                    <p className={styles.time}>10:30 AM</p>
                  </div>
                  <div className={styles.times_box}>
                    <p className={styles.time}>10:30 AM</p>
                  </div>
                  <div className={styles.times_box}>
                    <p className={styles.time}>10:30 AM</p>
                  </div>
                  <div className={styles.times_box}>
                    <p className={styles.time}>10:30 AM</p>
                  </div>
                  <div className={styles.times_box}>
                    <p className={styles.time}>10:30 AM</p>
                  </div>
                  <div className={styles.times_box}>
                    <p className={styles.time}>10:30 AM</p>
                  </div>
                  <div className={styles.times_box}>
                    <p className={styles.time}>10:30 AM</p>
                  </div>
                  <div className={styles.times_box}>
                    <p className={styles.time}>10:30 AM</p>
                  </div>
                  <div className={styles.times_box}>
                    <p className={styles.time}>10:30 AM</p>
                  </div>
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
    </PageFrame>
  );
};

export default Appointment;
