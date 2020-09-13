import moment, { Moment } from "moment";

/**
 *
 *
 * This function is tasked with generating time string items in the form XX:XX AM/PM or XX:XX.
 * It accepts a start and end time, and slices the time range into blocks, determined by the interval value.
 * For example, 10:00am to 12:00pm broken up into 30 minute intervals yields:
 * 10:00am, 10:30am, ..., 11:30am, 12:00pm
 *
 * */

const splitTime = (
  startTime: Moment,
  endTime: Moment,
  interval: number,
  raw: boolean = false
): string[] => {
  const formatType = !raw ? "h:mm A" : "H:mm";

  //**NOTE never push a raw moment to an array!!!
  //**The values in the array will become incorrect!
  //**format seems to work
  const result: string[] = [startTime.format(formatType)]; //add the start time to the array.
  let time: Moment = startTime.clone().add(interval, "m");

  //so long at the time block falls within the start and endtime, inclusively of both, then
  //insert it into the array.
  while (time.isBetween(startTime, endTime, undefined, "[]")) {
    result.push(time.format(formatType));
    time = time.add(interval, "m"); //add on interval to the minutes
  }

  return result;
};

export default splitTime;
