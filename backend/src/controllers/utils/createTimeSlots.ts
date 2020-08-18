import moment, { Moment } from "moment";

const splitTime = (
  startTime: Moment,
  endTime: Moment,
  interval: number
): string[] => {
  //**NOTE never push a raw moment to an array!!!
  //**The values in the array will become incorrect!
  //**format seems to work

  const result: string[] = [startTime.format("h:mmA")];
  let time: Moment = startTime.clone().add(interval, "m");

  while (time.isBetween(startTime, endTime, undefined, "[]")) {
    result.push(time.format("h:mmA"));
    time = time.add(interval, "m");
  }

  return result;
};

export default splitTime;
