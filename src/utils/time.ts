import moment from "moment";

export const getTimeDifference = (dateA: string, dateB: string) =>
  moment.duration(moment(dateA).diff(moment(dateB))).asSeconds();
