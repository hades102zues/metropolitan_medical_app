import { Request, Response, NextFunction } from "express";
const { google } = require("googleapis");
import ServiceAccount from "./utils/getServiceAccountClient";
import moment from "moment";

const CALENDAR_ID = "jwiggins.works@gmail.com";

exports.getAvailableTimes = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  const account = ServiceAccount();

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

  const event = {
    summary: "The end if struggle.",
    location: "130 Citrus Avenue, Lower Burney, St. Michael.",
    description: "I will be successful.",
    colorId: 6,
    start: {
      dateTime: "" + "T" + "" + "-04:00",
      //timeZone: "Etc/GMT-4",
    },
    end: {
      dateTime: "" + "T" + "" + "-04:00",
      //timeZone: "Etc/GMT-4",
    },
  };

  //api reference
  const calendar = google.calendar({ version: "v3", auth: account });
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
  calendar.events
    .list({
      calendarId: CALENDAR_ID,

      timeMin: "2020-08-17" + "T00:00:00-04:00",
      timeMax: "2020-08-17" + "T23:59:59-04:00",
    })
    .then((response: any) => {
      return response.data;
    })
    .then((data: any) => {
      const events: any = data.items;
      const startSlots: String[] = events.map((event: any, i: number) =>
        moment(event.start.dateTime).format("h:mmA")
      );

      //create a lookup object from appointTImeSlots, and default items to false
      //if a startTime is in lookup, then set the look item to true
      //return appointTImeSLots iff their lookup is still false.

      console.log(moment().format(), events);
    })
    .catch((err: Error) => {
      next(err);
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
    timeMin: "2020-08-18" + "T00:00:00-04:00",
    timeMax: "2020-08-18" + "T23:59:59-04:00",
    timeZone: "Etc/GMT+4",
    items: [{ id: CALENDAR_ID }],
  };
  calendar.freebusy.query(
    {
      resource: resourceItem,
    },
    (err: any, response: any) => {
      if (err) return next(err);
      res.status(200).json({ busy: response.data });
    }
  );
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
