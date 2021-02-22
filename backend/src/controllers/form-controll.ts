//LOCALS
import ServiceAccount from "./utils/getServiceAccountClient";
import createTimeSlots from "./utils/createTimeSlots";
import getAppointmentSlots from "./utils/getAppointmentTimeSlots";

//PACKAGES
import { Request, Response, NextFunction, response } from "express";
import { validationResult } from "express-validator";
import moment, { Moment } from "moment";
const { google } = require("googleapis");
import mailgun from "mailgun-js";

//KEYS
const DOMAIN: any = process.env.MAILGUN_DOMAIN;
const APIKEY: any = process.env.MAILGUN_KEY;

const TO: any = process.env.MAIL_TO; //email that the mail will be delivered to
const FROM: any = process.env.MAIL_FROM; //the domain that we'll be sending the emails from ;
const EMAIL_NAME: any = process.env.MAIL_NAME; //the name that will appear in the from line

const CALENDAR_ID = "jwiggins.works@gmail.com";

//globals
const mg = mailgun({
  apiKey: APIKEY,
  domain: DOMAIN,
});
const interval: number = 30; //the interval by which to cut the times
const TIME_ZONE: string = "America/Barbados";
const DAY_START: string = "T00:00:00-04:00";
const DAY_END: string = "T23:59:59-04:00";
const LOCAL_ISO_ENDING: string = ":00-04:00";

interface idItem {
  id: string;
}
interface Resource {
  timeMin: string;
  timeMax: string;
  timeZone: string;
  items: idItem[];
}

interface DefaultResponse {
  message: string;
}

/**
 * This function is responsible for generating  a list of AVAILABLE time slots and
 * send those back to the frontend application. To do so it utilizes a number of
 * helper functions found within ./utils
 */
exports.getAvailableTimes = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  interface TimePair {
    _time: string;
    _isotime: string;
  }
  interface slotsResponse {
    availableTimeSlots: TimePair[];
  }

  //note that toIsoString() will produce a RFC3339/ISO timestamp in the UTC timezone!!!.
  //RFC3339/ISO comes in two formats. THH:MM:SS.mmm<> or THH:MM:SS +/- xx:xx
  //UTC can easily be spotted when there is mmmZ
  //UTC has a peculiar nature where
  //Where start of day is T04:00:00.000Z
  //and end of day being T03:59:59.999Z.
  //the times become unintuitive.

  //google apis allow us to work in our tradition time.
  //so long as we set our timezone.
  //Barbados ISO time format is of THH:MM:SS-4:00
  //E.g '2020-08-17T20:23:21-04:00' which is 8:23 PM GMT -4

  //api reference
  const account = ServiceAccount();
  const calendar = google.calendar({ version: "v3", auth: account });

  const date: string = req.body.date; //api call date

  //handle sunday here
  if (moment(date).day() === 0 || !validationResult(req).isEmpty()) {
    const defaultResponse: slotsResponse = { availableTimeSlots: [] };
    return res.status(200).json(defaultResponse);
  }

  //Constructs an array of ISO strings using the appointment time frame slots, for the particular date in question.
  const appointment24HRTimes = getAppointmentSlots(date, true, interval);
  const ISO_appointment24HRTimes = appointment24HRTimes.map(
    (time: string, index: number): string => {
      const split: string[] = time.split(":");
      const hour: string = split[0].length > 1 ? split[0] : "0" + split[0];
      const minute: string = split[1];
      const result: string =
        date + "T" + hour + ":" + minute + LOCAL_ISO_ENDING;
      return result;
    }
  );
  //console.log(ISO_appointment24HRTimes); //debug

  //constructs a lookup object which will be used to determine if an appointment time slot is available.
  let isConflicting: any = {};
  ISO_appointment24HRTimes.forEach((iso: string, i: number) => {
    isConflicting[iso] = false;
  });

  /********************
   ***********BUSY/FREE DETERMINATION******
   ********************/

  //finds all busy periods for the date in question.
  const resourceItem: Resource = {
    timeMin: date + DAY_START,
    timeMax: date + DAY_END,
    timeZone: TIME_ZONE,
    items: [{ id: CALENDAR_ID }],
  };
  calendar.freebusy.query(
    {
      resource: resourceItem,
    },
    (err: any, response: any) => {
      if (err) return next(err);

      interface Busy {
        start: string;
        end: string;
      }

      interface BusyMoment {
        momentStart: Moment;
        momentEnd: Moment;
      }

      //Converts the busy time frame into moments so that confliction checks can be made through moment.isBetween
      const busy: Busy[] = response.data.calendars[CALENDAR_ID].busy;
      //console.log(busy); //debug
      const busyTimeMoments: BusyMoment[] = busy.map((item: Busy, index) => {
        //start time
        const S_splitter: string[] = item.start.split("T");
        const S_appMoment = moment(`${S_splitter[0]} ${S_splitter[1]}`);

        //end time
        const E_splitter: string[] = item.end.split("T");
        const E_appMoment = moment(`${E_splitter[0]} ${E_splitter[1]}`);

        return {
          momentStart: S_appMoment,
          momentEnd: E_appMoment,
        };
      });

      //Checks if an appointment time frame, time slot is avaiable.
      ISO_appointment24HRTimes.forEach((iso: string, i: number) => {
        //first convert the time slot into a moment
        const A_splitter: string[] = iso.split("T");
        const appMoment = moment(`${A_splitter[0]} ${A_splitter[1]}`);

        //check to see if that time slot falls in between a busy period
        //and if so, flag the time slot as unavailable/conflicting
        busyTimeMoments.forEach((item: BusyMoment, index: number) => {
          const endAppMoment = appMoment.clone().add(interval, "m");
          if (
            appMoment.isBetween(
              item.momentStart,
              item.momentEnd,
              undefined,
              "[)" // ) because it is fine to schedule an event at the end of another
            ) ||
            endAppMoment.isBetween(
              item.momentStart,
              item.momentEnd,
              undefined,
              "(]" // because it is fine to end an event at the start of another
            )
          ) {
            isConflicting[iso] = true;
            return;
          }
        });
      });

      //console.log("Point of conflits", isConflicting); //debug

      /********************
       ***********SEND BACK FREE TIME SLOTS******
       ********************/

      let availableTimeSlots: TimePair[] = [];

      //create a slot item of "HH:MM AM/PM" and push it onto available slots.
      for (const time in isConflicting) {
        if (isConflicting[time]) continue;

        //split into hour and min
        const firstSplit: string = time.split("T")[1];
        const secondSplit: string[] = firstSplit.split(":");
        const startHour: number = Number(secondSplit[0]);
        const startMin: number = Number(secondSplit[1]);

        // console.log("START HOUR:", startHour); //debug
        // console.log("START MIN", startMin); //debug

        //they will both be the same and the implement will work
        const startMoment: Moment = moment({
          hour: startHour,
          minute: startMin,
        });
        const endMoment: Moment = moment({ hour: startHour, minute: startMin });

        const timeSlot: string[] = createTimeSlots(
          startMoment,
          endMoment,
          interval
        ); //will always be a single item

        const timePair: TimePair[] = [
          {
            _time: timeSlot[0],
            _isotime: time,
          },
        ];
        availableTimeSlots = availableTimeSlots.concat(timePair);
      }

      //console.log(availableTimeSlots);

      const finalResponse: slotsResponse = { availableTimeSlots };

      return res.status(200).json(finalResponse);
      // {
      // busy: busy,
      // ISO_appointment24HRTimes,
      // isConflicting,
      // availableTimeSlots: availableTimeSlots,
      //}
    }
  );
};

/**
 * This function is responding for sending a email containing the client's inquiry to a designated inbox.
 */
exports.postContactForm = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  interface ContactBody {
    fullName: string;
    email: string;
    subject: string;
    message: string;
  }

  if (!validationResult(req).isEmpty()) {
    const defaultResponse: DefaultResponse = {
      message: "Input field requirements were not met.",
    };
    return res.status(400).json(defaultResponse);
  }

  const body: ContactBody = req.body;

  const { fullName, email, subject, message } = body;

  //Deposit contact slip in our business email
  const mail = {
    from: `${EMAIL_NAME} <${FROM.trim()}>`,
    to: TO,
    subject: subject,
    html: `
<html><body><div class="body_div">
  <h1>Contact</h1>
    <p>Client: ${fullName}</p> 
    <p>Email: ${email}</p>
    <p>Message: ${message}</p>
    <p style="margin-top:50px; text-align:center; color:#ccc;">Generated by the Metropolitan Medical website.</p>
</div></body></html>`,
  };

  mg.messages().send(mail as any, (error, body) => {
    if (!error)
      return res
        .status(200)
        .json({ server: "Contact email was successfully sent.", body });

    return res
      .status(500)
      .json({ server: "Contact email was not sent", error });
  });
};

/**
 * This function is responding for sending a email containing the client's appointment details,
 * and creating the associated event in the gogogle calendar. To do so it utilizes a number of
 * helper functions found within ./utils
 */
exports.postAppForm = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  interface AppointmentBody {
    fullName: string;
    email: string;
    phoneNumber: string;
    message: string;
    date: string;
    service: string;
    time: string;
  }

  const body: AppointmentBody = req.body;
  const { fullName, service, date, time, phoneNumber, email, message } = body;

  //validation of appointment form and requested appointment date
  if (!validationResult(req).isEmpty() || moment(date).day() === 0) {
    const defaultResponse: DefaultResponse = {
      message: "Input field requirements were not met.",
    };
    return res.status(400).json(defaultResponse);
  }

  //********
  //*****Transform time sent in body to iso splits
  //*******
  const split: string[] = time.split(" "); //"1:30 PM"
  const hour_minutes: string[] = split[0].split(":"); //["1","30"]
  let hour: string = hour_minutes[0]; //"1"
  const minutes: string = hour_minutes[1]; //"30"
  const dayPoint: string = split[1]; //"PM"

  if (hour.length < 1 || minutes.length < 2 || Number(minutes) >= 60)
    return res.status(400).json({ message: "Broken time payload." });

  // console.log(
  //   hour,
  //   !hour.includes("12"),
  //   Number(hour) !== 12,
  //   dayPoint.toLowerCase().includes("pm")
  // );
  if (dayPoint.toLowerCase().includes("pm")) {
    if (Number(hour) !== 12) hour = (Number(hour) + 12).toString(); //13 adjusted to 24hr time
  } else if (dayPoint.toLowerCase().includes("am")) {
    if (Number(hour) >= 1 && Number(hour) <= 9 && hour.length === 1)
      hour = "0" + hour;

    if (Number(hour) === 12) hour = "00";
  } else {
    return res.status(400).json({ message: "Broken time payload." });
  }

  // console.log(hour, minutes, dayPoint); //debug

  const firstHalf: string = date;
  const secondHalf: string = hour + ":" + minutes + LOCAL_ISO_ENDING;

  //the splits are used to create a start date moment for busy
  //the splits are used to create a start date iso for the event creation

  //********
  //*****Determine if time slot is still available
  //*******

  const account = ServiceAccount();
  const calendar = google.calendar({ version: "v3", auth: account });

  const resourceItem: Resource = {
    timeMin: date + DAY_START,
    timeMax: date + DAY_END,
    timeZone: TIME_ZONE,
    items: [{ id: CALENDAR_ID }],
  };

  calendar.freebusy.query(
    {
      resource: resourceItem,
    },
    (err: any, response: any) => {
      if (err) return next(err);

      interface Busy {
        start: string;
        end: string;
      }

      interface BusyMoment {
        momentStart: Moment;
        momentEnd: Moment;
      }

      //Converts the busy time frame into moments so that confliction checks can be made through moment.isBetween
      const busy: Busy[] = response.data.calendars[CALENDAR_ID].busy;
      console.log(busy); //debug
      const busyTimeMoments: BusyMoment[] = busy.map((item: Busy, index) => {
        //start time
        const S_splitter: string[] = item.start.split("T");
        const S_appMoment = moment(`${S_splitter[0]} ${S_splitter[1]}`);

        //end time
        const E_splitter: string[] = item.end.split("T");
        const E_appMoment = moment(`${E_splitter[0]} ${E_splitter[1]}`);

        return {
          momentStart: S_appMoment,
          momentEnd: E_appMoment,
        };
      });

      //check if startdate falls in a busy range
      const startDateTimeMoment: Moment = moment(`${firstHalf} ${secondHalf}`);
      let isConflict: boolean = false;
      busyTimeMoments.forEach((item: BusyMoment, index: number) => {
        const endTimeMOment = startDateTimeMoment.clone().add(interval, "m");

        if (
          startDateTimeMoment.isBetween(
            item.momentStart,
            item.momentEnd,
            undefined,
            "[)" // because it is fine to schedule an event at the end of another
          ) ||
          endTimeMOment.isBetween(
            item.momentStart,
            item.momentEnd,
            undefined,
            "(]" // because it is fine to end an event at the start of another
          )
        ) {
          isConflict = true;
          return;
        }
      });

      if (isConflict) {
        return res.status(409).json({
          server: "Time slot is no longer available.",
          noLongerAvailable: true,
        });
      }

      //ADD EVENT TO CALENDAR
      const startDateTime: string = firstHalf + "T" + secondHalf; //ISO format
      //console.log(startDateTime); //debug
      const endDateTime: Moment = startDateTimeMoment.clone();
      endDateTime.add(interval, "m");
      //console.log(endDateTime.format()); //debug

      const event = {
        summary: service + " Appointment: " + fullName,
        description: message,
        colorId: 3,
        start: {
          dateTime: startDateTime,
          timeZone: TIME_ZONE,
        },
        end: {
          dateTime: endDateTime.format(),
          timeZone: TIME_ZONE,
        },
      };

      let APPOINTMENT_EVENT_CREATION: boolean;
      let APPOINTMENT_EMAIL_CREATION: boolean;

      calendar.events.insert(
        {
          //setting this to primary would make the event on the service accounts calendar!!
          //Go into the specific Google Calendar's setting and share the calendar you want with the service account.
          //Set these permissions to "Make changes to event"
          //You can find the calender Id for the calender in the settings as well
          calendarId: CALENDAR_ID,
          resource: event,
        },
        function (err: any, event: any) {
          if (err) {
            console.log(
              "There was an error contacting the Calendar service: " + err
            ); //debug

            return res
              .status(503)
              .json({ message: "Unsuccessfull. Please, try again later." });
          }
          console.log("Appointment event was successfully created.");
          res.status(200).json({ message: "Event successfully created." }); //debug
        }
      );

      //Deposit appointment slip in our business email

      const mail = {
        from: `${EMAIL_NAME} <${FROM.trim()}>`,
        to: TO,
        subject: service + " Appointment Booked: " + req.body.date,
        html: `
    <html><body><div class="body_div">
       
        <p>Client: ${fullName}</p> 
        <p>Service: ${service}</p>
        <p>Appointment Date: ${date}</p>
        <p>Appointment Time: ${time} </p>
        <p>Phone: ${phoneNumber}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>

        <p style="margin-top:50px; text-align:center; color:#ccc;">Generated by the Metropolitan Medical website.</p>
    </div></body></html>`,
      };

      mg.messages().send(mail as any, (error, body) => {
        if (!error) console.log("Appointment email was successfully sent.");
        else console.log("Appointment email was not successfully sent.");
      });
    }
  ); //end of busy query
};
