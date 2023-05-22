import { v4 as uuidv4 } from "uuid";

import { getLocalValue, setLocalValue } from "./localstorage";
import Statuses from "../constants/statuses";
import moment from "moment";

const state = [
  {
    name: "asd",
    deadline: moment().unix(),
    id: uuidv4(),
    createdAt: moment().unix(),
    status: Statuses.INCOMPLETE,
    timeLogged: 60,
  },
];

describe("Localstorage methods:", () => {
  afterEach(() => {
    localStorage.clear();
  });

  it("setLocalValue: sets right value in localstorage", () => {
    const key = uuidv4();

    setLocalValue(key, state);

    const getRawLocalValue = localStorage.getItem(key);

    expect(getRawLocalValue).not.toBe(null);

    if (getRawLocalValue !== null) {
      expect(JSON.parse(getRawLocalValue)).toEqual(state);
    }
  });

  it("getLocalValue: gets right value from localstorage", () => {
    const key = uuidv4();
    const value = { text: "random string" };

    localStorage.setItem(key, JSON.stringify(value));

    expect(getLocalValue(key, [])).toEqual(value);
  });
});
