import moment from "moment";

import { getTimeDifference } from "./time";

const datePrev = moment().subtract(1, "days");
const dateNext = moment();

describe("Time Utils:", () => {
  it("getTimeDifference: negative time differnce", () => {
    expect(getTimeDifference(datePrev, dateNext)).toBeLessThan(0);
  });

  it("getTimeDifference: positive time differnce", () => {
    expect(getTimeDifference(dateNext, datePrev)).toBeGreaterThan(0);
  });

  it("getTimeDifference: no time differnce", () => {
    expect(getTimeDifference(dateNext, dateNext)).toBe(0);
  });
});
