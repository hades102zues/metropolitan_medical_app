import { Request, Response, NextFunction } from "express";
const { google } = require("googleapis");
import ServiceAccount from "./utils/getServiceAccountClient";
import moment, { Moment } from "moment";

import createTimeSlots from "./utils/createTimeSlots";
import getAppointmentSlots from "./utils/getAppointmentTimeSlots";

const CALENDAR_ID = "jwiggins.works@gmail.com";

exports.getAvailableTimes = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
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

  const TIME_ZONE: string = "America/Barbados";
  const DAY_START: string = "T00:00:00-04:00";
  const DAY_END: string = "T23:59:59-04:00";
  const LOCALE_ISO_ENDING = ":00-04:00";
  const date: string = "2020-08-18"; //api call date

  const appointment24HRTimes = getAppointmentSlots(date, true);
  const ISO_appointment24HRTimes = appointment24HRTimes.map(
    (time: string, index: number): string => {
      const split: string[] = time.split(":");
      const hour: string = split[0].length > 1 ? split[0] : "0" + split[0];
      const minute: string = split[1];
      const result: string =
        date + "T" + hour + ":" + minute + LOCALE_ISO_ENDING;
      return result;
    }
  );

  let isConflicting: any = {};
  ISO_appointment24HRTimes.forEach((iso: string, i: number) => {
    isConflicting[iso] = false;
  });

  //Requires that the FreeBusy api be set on the service account
  interface idItem {
    id: string;
  }
  interface Resource {
    timeMin: string;
    timeMax: string;
    timeZone: string;
    items: idItem[];
  }
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

      const busy: Busy[] = response.data.calendars[CALENDAR_ID].busy;
      const busyTimeMoments: BusyMoment[] = busy.map((item: Busy, index) => {
        //start time
        const S_firstSplit: string = item.start.split("T")[1];
        const S_secondSplit: string[] = S_firstSplit.split(":");
        const S_appHour: number = Number(S_secondSplit[0]);
        const S_appMin: number = Number(S_secondSplit[1]);
        const S_appMoment = moment({ hour: S_appHour, minute: S_appMin }); //ISO locale time

        //end time
        const E_firstSplit: string = item.end.split("T")[1];
        const E_secondSplit: string[] = E_firstSplit.split(":");
        const E_appHour: number = Number(E_secondSplit[0]);
        const E_appMin: number = Number(E_secondSplit[1]);
        const E_appMoment = moment({ hour: E_appHour, minute: E_appMin }); //ISO locale time

        return {
          momentStart: S_appMoment,
          momentEnd: E_appMoment,
        };
      });

      ISO_appointment24HRTimes.forEach((iso: string, i: number) => {
        //appointment
        const firstSplit: string = iso.split("T")[1];
        const secondSplit: string[] = firstSplit.split(":");
        const appHour: number = Number(secondSplit[0]);
        const appMin: number = Number(secondSplit[1]);
        const appMoment = moment({ hour: appHour, minute: appMin }); //ISO locale time

        busyTimeMoments.forEach((item: BusyMoment, index: number) => {
          // console.log(
          //   "Comparison APP:",
          //   appMoment,
          //   item.momentStart,
          //   item.momentEnd,
          //   appMoment.isBetween(
          //     item.momentStart,
          //     item.momentEnd,
          //     undefined,
          //     "[]"
          //   )
          // );
          if (
            appMoment.isBetween(
              item.momentStart,
              item.momentEnd,
              undefined,
              "[]"
            )
          ) {
            isConflicting[iso] = true;
            return;
          }
        });
      });

      let availableTimeSlots: string[] = [];

      //send back slot of nonconflicting time
      for (const time in isConflicting) {
        if (isConflicting[time]) continue;

        //split into hour and min
        const firstSplit: string = time.split("T")[1];
        const secondSplit: string[] = firstSplit.split(":");
        const startHour: number = Number(secondSplit[0]);
        const startMin: number = Number(secondSplit[1]);

        console.log("START HOUR:", startHour);
        console.log("START MIN", startMin);
        //they will both be the same and the implement will work
        const startMoment: Moment = moment({
          hour: startHour,
          minute: startMin,
        });
        const endMoment: Moment = moment({ hour: startHour, minute: startMin });

        const timeSlot: string[] = createTimeSlots(startMoment, endMoment);
        console.log("TIMESLOT", timeSlot);
        //add info
        availableTimeSlots = availableTimeSlots.concat(timeSlot);
      }

      res.status(200).json({
        busy: busy,
        ISO_appointment24HRTimes,
        isConflicting,
        availableTimeSlots: availableTimeSlots,
      });
    }
  );

  // const event = {
  //   summary: "The end if struggle.",
  //   location: "130 Citrus Avenue, Lower Burney, St. Michael.",
  //   description: "I will be successful.",
  //   colorId: 6,
  //   start: {
  //     dateTime: "" + "T" + "" + "-04:00",
  //     //timeZone: "Etc/GMT-4",
  //   },
  //   end: {
  //     dateTime: "" + "T" + "" + "-04:00",
  //     //timeZone: "Etc/GMT-4",
  //   },
  // };

  // calendar.events.insert(
  //   {
  //     //setting this to primary would make the event on the service accounts calendar!!
  //     //Go into the specific Google Calendar's setting and share the calendar you want with the service account.
  //     //Set these permissions to "Make changes to event"
  //     //You can find the calender Id for the calender in the settings as well
  //     calendarId: "jwiggins.works@gmail.com",
  //     resource: event,
  //   },
  //   function (err: any, event: any) {
  //     if (err) {
  //       console.log(
  //         "There was an error contacting the Calendar service: " + err
  //       );
  //       return;
  //     }
  //     console.log("Event created: ", event);
  //   }
  // );

  //Grab event Start Time slots from the calender, for the particular day
  // calendar.events
  //   .list({
  //     calendarId: CALENDAR_ID,

  //     timeMin: "2020-08-17" + DAY_START,
  //     timeMax: "2020-08-17" + DAY_START,
  //   })
  //   .then((response: any) => {
  //     return response.data;
  //   })
  //   .then((data: any) => {
  //     const events: any = data.items;
  //     const startSlots: string[] = events.map((event: any, i: number) =>
  //       moment(event.start.dateTime).format("h:mmA")
  //     );

  //create a lookup object from appointTImeSlots, and default items to false
  //if a startTime is in lookup, then set the look item to true
  //return appointTImeSLots iff their lookup is still false.
  // })
  // .catch((err: Error) => {
  //   next(err);
  // });
};
exports.postContactForm = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  return res.status(200).json({ message: "Contact Form" });
};
exports.postAppForm = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  return res.status(200).json({ message: "App form" });
};
