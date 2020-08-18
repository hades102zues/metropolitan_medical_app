import moment, { Moment } from "moment";

const splitTime = (
  startTime: Moment,
  endTime: Moment,
  interval: number = 30,
  raw: boolean = false
): string[] => {
  //**NOTE never push a raw moment to an array!!!
  //**The values in the array will become incorrect!
  //**format seems to work

  const formatType = !raw ? "h:mmA" : "H:mm";

  const result: string[] = [startTime.format(formatType)];
  let time: Moment = startTime.clone().add(interval, "m");

  while (time.isBetween(startTime, endTime, undefined, "[]")) {
    result.push(time.format(formatType));
    time = time.add(interval, "m");
  }

  return result;
};

export default splitTime;
