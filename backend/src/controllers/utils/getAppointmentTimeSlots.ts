import moment, { Moment } from "moment";

import splitTime from "./createTimeSlots";

interface Frame {
  //12am is 0, 12pm is 12
  momentDay: number;
  weekDay: string;
  startHour: number; //given in 24hr format
  startMin: number;
  endHour: number; //given in 24hr format
  endMin: number;
}

/**
 *
 * This function is tasked with returning the start and end time for appointments, given a particular day, as set by the client.
 * Matching moment.js day() format, where 0 = sunday and 6=saturday
 * The corresponding days are inserted at the matching array index.
 */
const getTimeFrames = (momentDay: number): any => {
  const timeFrames: Frame[] = [
    {
      momentDay: 0,
      weekDay: "Sunday",
      startHour: 0,
      startMin: 0,
      endHour: 0,
      endMin: 0,
    },
    {
      momentDay: 1,
      weekDay: "Monday",
      startHour: 7,
      startMin: 30,
      endHour: 13,
      endMin: 0,
    },
    {
      momentDay: 2,
      weekDay: "Tuesday",
      startHour: 8,
      startMin: 30,
      endHour: 14,
      endMin: 0,
    },
    {
      momentDay: 3,
      weekDay: "Wednesday",
      startHour: 7,
      startMin: 30,
      endHour: 13,
      endMin: 0,
    },
    {
      momentDay: 4,
      weekDay: "Thursday",
      startHour: 8,
      startMin: 30,
      endHour: 14,
      endMin: 0,
    },
    {
      momentDay: 5,
      weekDay: "Friday",
      startHour: 9,
      startMin: 30,
      endHour: 15,
      endMin: 0,
    },
    {
      momentDay: 6,
      weekDay: "Saturday",
      startHour: 9,
      startMin: 30,
      endHour: 12,
      endMin: 0,
    },
  ];

  return timeFrames[momentDay]; //an array of shape ["8:00 AM"..."3:00PM"]
};

/**
 * It first gets the appointment start and end times for a specific day.
 * Converts them to moments for it's utility.
 * Supplies the time and interval to time slot block creator function.
 * Returns all time slots blocks assignable for the particular day.
 * Note no conflict handling is done at this stage, the time blocks are returned in their totality.
 */

const getTimeSlots = (
  date: string,
  raw: boolean = false,
  splits: number //the interval by which to cut the times
): string[] => {
  const { startHour, startMin, endHour, endMin }: Frame = getTimeFrames(
    moment(date).day() //.day() is not locale specific which makes it deterministic
  );

  const startTime: Moment = moment({ hour: startHour, minute: startMin });
  const endTime: Moment = moment({ hour: endHour, minute: endMin });

  const interval: number = splits;
  const timeSlices = splitTime(startTime, endTime, interval, raw);
  return timeSlices;
};

export default getTimeSlots;
