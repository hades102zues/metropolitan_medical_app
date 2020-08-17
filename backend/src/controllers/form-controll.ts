import { Request, Response, NextFunction } from "express";
const { google } = require("googleapis");
import ServiceAccount from "./utils/getServiceAccountClient";

exports.getAvailableTimes = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  const account = ServiceAccount();

  //   const now = new Date();
  //   console.log("Now: ", now, "\n", "Now Iso: ", now.toISOString());
  const eventStartTime = new Date();
  eventStartTime.setDate(eventStartTime.getDate() + 1);
  console.log("Start: ", eventStartTime);

  const eventEndTime = eventStartTime;
  //  new Date();
  // eventEndTime.setDate(eventEndTime.getDate() + 2);
  // console.log("EndTime", eventEndTime);

  const event: any = {
    summary: "The start of growing rich.",
    location: "130 Citrus Avenue, Lower Burney, St. Michael.",
    description: "I will be successful.",
    colorId: 6,
    start: {
      dateTime: eventStartTime.toISOString(),
      //timeZone: "Etc/GMT-4",
    },
    end: {
      dateTime: eventEndTime.toISOString(),
      //timeZone: "Etc/GMT-4",
    },
  };

  //api reference
  const calendar = google.calendar({ version: "v3", auth: account });

  return res.status(200).json({ route: "Available times", account });
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
