//================================
//**Local Imports
//================================
import styles from "./Appointment.module.css";
import PageFrame from "../shared/UI/PageFrame/PageFrame";

//================================
//**Package imports
//================================
import React, { useState, useEffect } from "react";

import moment from "moment-timezone";
//spinner
import CircularProgress from "@material-ui/core/CircularProgress";

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
import { useFormik, Form, Field, FormikProvider } from "formik";
import ReCAPTCHA from "react-google-recaptcha";

//================================
//**KEYS AND CONSTRAINTS
//================================
//const BASE_URL = "http://104.131.37.158/api";
const BASE_URL = "http://localhost:3001";
const RECAPTCHA_KEY = "6LcNtcIZAAAAAGdb6P0gJmQ5ANM1UdoYRjUnyB9I";

const APPOINTMENT_FORM_TARGET_URL: string = BASE_URL + "/send-appointment-form";
const TIMESLOTS_TARGET_URL = BASE_URL + "/get-available-times";

const Appointment = () => {
  //================================
  //** INTERFACES ==================
  //================================
  interface TimePair {
    _time: string;
    _isotime: string;
  }

  interface FormShape {
    fullName: string;
    email: string;
    phoneNumber: string;
    message: string;
    date: string;
    service: string;
    time: string;
    isDateValid: boolean;
    isWaiting: boolean;
    formDidSubmit: boolean;
    errorDidOccur: boolean;
    timeSlotTaken: boolean;
    captchaDidVerify: boolean;
  }

  interface Service {
    name: string;
    description: string;
  }

  //================================
  //** STATE ==================
  //================================
  const [timeSlots, setTimeSlots]: [TimePair[], any] = useState([]);
  const [captchaDidVerify, setCaptcha]: [boolean, any] = useState(false); //flag for captcha verify
  const [dateDidChange, setDateDidChange]: [boolean, any] = useState(false); //used in service timeslot fetch
  const [dateTimeSlotLoading, setDateTimeSlotLoading]: [
    boolean,
    any
  ] = useState(false); //used as a flag to display spinner while fetching timeslots
  const [timeSlotError, setTimeSlotError]: [boolean, any] = useState(false);
  const [submittedForm, setSubmittedForm]: [any, any] = useState({}); //the successfully submitted form.

  const miminumAllowableDate = moment()
    .add(1, "days")
    .tz("America/Barbados")
    .format("MM/DD/YYYY");

  const form: FormShape = {
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
    date: miminumAllowableDate,
    service: "",
    time: "",

    isDateValid: true, //is used to determine wether a valid date has been supplied from the user's perspective
    captchaDidVerify: false, //flag for captcha verify
    //have a flag for each status/scenerio you planned to have occur
    isWaiting: false, //used to signal waiting on server response
    formDidSubmit: false, //used to display success message if status 200 - form accepted
    errorDidOccur: false, //displays error message if status 400 - form rejected
    timeSlotTaken: false, //display error message if status 409 - timeslot no longer available
  };

  const appFormSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(3, "Please supply your full name.")
      .required("Please supply your full name."),

    phoneNumber: Yup.string()
      .min(7, "Please enter a valid phone mumber")
      .required("Please enter a valid phone mumber"),

    date: Yup.string()
      .min(8, "Please enter a valid date.")
      .required("Please enter a valid date."),

    service: Yup.string()
      .min(3, "Please supply a service.")
      .required("Please supply a service."),

    time: Yup.string()
      .min(4, "Please supply a time.")
      .required("Please supply a time."),
  });
  const formik = useFormik({
    initialValues: form,
    onSubmit: (values) => {
      interface FetchPackage {
        fullName: string;
        email: string;
        phoneNumber: string;
        message: string;
        date: string;
        service: string;
        time: string;
      }

      interface Headers {
        "Content-Type": string;
      }

      interface FetchParameters {
        method: string;
        headers: HeadersInit;
        body: BodyInit;
      }

      if (!values.captchaDidVerify) return; //recaptcha is not verified
      if (!values.isDateValid) return; //date is not valid

      //necessary for easy server manipulation
      const isoFormatedDateWithoutTime = new Date(values.date)
        .toISOString()
        .split("T")[0]; //time portion would be wrong

      const fPackage: FetchPackage = {
        fullName: values.fullName,
        email: values.email,
        phoneNumber: values.phoneNumber,
        message: values.message,
        date: isoFormatedDateWithoutTime,
        service: values.service,
        time: values.time,
      };

      const fetchParameters: FetchParameters = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fPackage),
      };

      formik.setFieldValue("isWaiting", true);
      formik.setFieldValue("formDidSubmit", false);
      formik.setFieldValue("errorDidOccur", false);
      formik.setFieldValue("timeSlotTaken", false);
      setSubmittedForm({});

      //Lesson learnt:
      //the setFieldValue() will not update the value until after onSubmit has concluded. (Note that it also triggers a rerender)
      //Our html elements will update themselves in the intuitive manner we expect,
      //However, the change in the value will not occur immediately and any attempt to use them as flags will lead to failure!!!!
      //if you need flags, define new variables...

      let status: number;

      fetch(APPOINTMENT_FORM_TARGET_URL, fetchParameters)
        .then((response: any) => {
          //set flags based on status

          formik.setFieldValue("isWaiting", false);

          if (response.status === 200) {
            formik.setFieldValue("formDidSubmit", true);
            setSubmittedForm(values);
          } else if (response.status === 400) {
            formik.setFieldValue("errorDidOccur", true);
            console.error("Error: Invalid form was submitted.");
          } else if (response.status === 409) {
            formik.setFieldValue("timeSlotTaken", true);
          } else {
            formik.setFieldValue("errorDidOccur", true);
            console.error("Server response unclear.");
          }

          //refresh the time slots
          dataTimeSlotsFetch();
          formik.setFieldValue("time", "", false);

          return response.json();
        })
        .then((data) => {})
        .catch((err: any) => {
          formik.setFieldValue("isWaiting", false);
          formik.setFieldValue("errorDidOccur", true);
          console.error("Error caught on form request.", err);
        });
    },
    validationSchema: appFormSchema,
  });

  //================================
  //** EVENT HANDLERS ==================
  //================================
  const onRecaptchaVerify = () => {
    formik.setFieldValue("captchaDidVerify", true);
  };

  const onRecaptchaExpired = () => {
    formik.setFieldValue("captchaDidVerify", false);
  };
  const dataTimeSlotsFetch = (): void => {
    //server expects iso format
    const isoDate = new Date(formik.values.date).toISOString().split("T")[0];

    interface Request {
      date: string;
    }

    const request: Request = { date: isoDate };
    setDateTimeSlotLoading(true);

    //console.log(request, isoDate);//debug

    fetch(TIMESLOTS_TARGET_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    })
      .then((res: any) => {
        if (res.status === 200) {
          setTimeSlotError(false);
        } else {
          setTimeSlotError(true);
          setDateTimeSlotLoading(true);
          formik.setFieldValue("errorDidOccur", true);
        }
        return res.json(); //extract data from the promise
      })
      .then((data: { availableTimeSlots: string[] }) => {
        if (data.availableTimeSlots) {
          setDateTimeSlotLoading(false);
          setTimeSlots(data.availableTimeSlots);
        } else {
          setTimeSlotError(true);
          setDateTimeSlotLoading(true);
          formik.setFieldValue("errorDidOccur", true);
          console.error("Failed to fetch time slots: ");
        }
      })
      .catch((err: any) => {
        setTimeSlotError(true);
        setDateTimeSlotLoading(true);
        formik.setFieldValue("errorDidOccur", true);
        console.error("Failed to fetch time slots: ", err);
      });
  };

  const onServiceChange = (time: string): void => {
    formik.setFieldValue("time", time);
  };

  const handleDateChange = (date: Date | null) => {
    // formik.setFieldValue(
    //   "date",
    //   date.toLocaleDateString("en-US", { timeZone: "America/Barbados" })
    // ); //gives a shortDate format : MM/dd/YYYY
    // console.log();

    //if for some reason the picker receives a date that does not match the format that we specified on the picker,
    //it will throw different invalid messages.
    //we can use moment.isvalid to act as a flag in those invalid times.

    if (moment(date).isValid()) {
      formik.setFieldValue(
        "date",
        moment(date).tz("America/Barbados").format("MM/DD/YYYY")
      );
      formik.setFieldValue("isDateValid", true);
      setDateDidChange(true);
    } else {
      formik.setFieldValue("isDateValid", false);
    }
  };

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    formik.setFieldValue("service", event.target.value as string);
  };

  //================================
  //**EFFECTS  =======================
  //================================
  useEffect(() => {
    dataTimeSlotsFetch();
  }, []);

  //on date picker change
  useEffect(() => {
    dataTimeSlotsFetch();
    setDateDidChange(false);
    formik.setFieldValue("time", "", false);
  }, [dateDidChange]);

  const defaultMaterialTheme = createMuiTheme({
    typography: {
      fontSize: 20, //sweet spot. going to large will ruin the component's layout
    },
    overrides: {
      MuiPickersToolbar: {
        toolbar: {
          backgroundColor: "#583b4c", //sets the calendar's head color
        },
      },

      MuiPickersDay: {
        day: {
          color: "#583b4c", //sets the color for individual unselected days
        },
        daySelected: {
          backgroundColor: "#dd6a8f", //sets the color of the selected day's selection sphere
          "&:hover": {
            backgroundColor: "#dd6a8f", //sets the color of the selected day's selection sphere when on hover
          },
        },
      },
    } as any,
  });

  //================================
  //**STYLES========================
  //=================================

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
  const useStyles1 = makeStyles({
    progessRoot: {
      color: "#dd6a8f",
    },
  });

  const classes = useStyles();
  const classes1 = useStyles1();

  //================================
  //==== LISTS , RENDER LOGIC
  //================================

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

  return (
    <PageFrame pageTitle="Book Now">
      <section className={styles.appointment}>
        <div className="wrapper">
          <div className={styles.appFormArea}>
            <div className={styles.appForm}>
              {formik.values.formDidSubmit ? null : (
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
                        minDate={miminumAllowableDate}
                        onChange={handleDateChange}
                        disablePast //any before the minDate is disable
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                        InputProps={{
                          onChange: (e) => {
                            //disables typing into the text field
                            e.preventDefault();
                          },
                          style: { caretColor: "transparent" }, //hides the caret to stop users from thinking they can type in the field
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

                  <div
                    className={styles.times}
                    // style={{
                    //   border:
                    //     formik.touched.time && formik.errors.time
                    //       ? "1px solid red"
                    //       : null,
                    // }}
                  >
                    {dateTimeSlotLoading ? (
                      <CircularProgress
                        classes={{ root: classes1.progessRoot }}
                      />
                    ) : (
                      <React.Fragment>
                        {timeSlots.map(
                          (time: TimePair, i: number): JSX.Element => {
                            const display: string = time._time;
                            return (
                              <div
                                className={
                                  styles.times_box +
                                  " " +
                                  (formik.values.time.trim() === display.trim()
                                    ? styles.timesActive
                                    : " ")
                                }
                                onClick={(): void => {
                                  onServiceChange(display);
                                }}
                                key={i}
                              >
                                <p className={styles.time}>{display}</p>
                              </div>
                            );
                          }
                        )}
                        {timeSlots.length < 1 ? (
                          <p>
                            Sorry, there are no availables time for that date.
                          </p>
                        ) : null}
                      </React.Fragment>
                    )}
                  </div>

                  <ReCAPTCHA
                    sitekey={RECAPTCHA_KEY}
                    onChange={onRecaptchaVerify}
                    onExpired={onRecaptchaExpired}
                  />

                  <button type="submit" className={styles.form_button}>
                    {formik.values.isWaiting ? "Sending..." : "Submit Now"}
                  </button>
                </form>
              )}
              {formik.values.formDidSubmit ? (
                <p className={styles.form_submit}>
                  Your form has been submitted.
                  <br />
                  <br />
                  Name: {submittedForm.fullName}
                  <br />
                  Service: {submittedForm.service}
                  <br />
                  Date: {submittedForm.date}
                  <br />
                  Time: {submittedForm.time}
                  <br />
                  <br />
                  We will reach out to you should there be a change in your
                  appointment date. See you then!
                </p>
              ) : null}

              {formik.values.errorDidOccur ? (
                <p className={styles.form_error}>
                  An error has occured. Please, try again later.
                </p>
              ) : null}

              {formik.values.timeSlotTaken ? (
                <p className={styles.form_error}>
                  Sorry, that time has been taken. Please, choose another
                  appointment slot and resubmit your form.
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  );
};

export default Appointment;
