import moment, { Moment } from "moment";

export const getTimeDifference = (dateA: Moment, dateB: Moment) => {
  if (typeof dateA === "string" && typeof dateB === "string") {
    return moment.duration(moment(dateA).diff(moment(dateB))).asMinutes();
  } else {
    return moment.duration(dateA.diff(dateB)).asMinutes();
  }
};
