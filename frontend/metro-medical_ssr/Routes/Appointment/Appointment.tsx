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

const Appointment = () => {
  // picker
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

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
  const [age, setAge] = React.useState("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
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
                      value={selectedDate}
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
                      value={age}
                      onChange={handleChange}
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
