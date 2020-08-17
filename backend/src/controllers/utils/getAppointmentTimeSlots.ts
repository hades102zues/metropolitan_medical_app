import moment, { Moment } from "moment";

interface Frame {
  momentDay: number;
  weekDay: string;
  startHour: number;
  startMin: number;
  endHour: number;
  endMin: number;
}

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

const getTimeFrames = (momentDay: number): any => {
  const timeFrames: Frame[] = [
    //PM times must be expressed in 24hr format!!!
    //12am is 0, 12pm is 12
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

// You change these values according to your needs
exports.getTimeSlots = (
  date: string,
  splits: number = 30 //the interval by which to cut the times
): string[] => {
  const interval: number = splits;
  const { startHour, startMin, endHour, endMin }: Frame = getTimeFrames(
    moment(date).day()
  );

  const startTime: Moment = moment({ hour: startHour, minute: startMin });
  const endTime: Moment = moment({ hour: endHour, minute: endMin });

  const timeSlices = splitTime(startTime, endTime, interval);
  return timeSlices;
};
