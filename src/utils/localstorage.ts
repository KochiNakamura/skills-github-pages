import { State as Projects } from "../types/common";

const getLocalValue = (key: string, initialValue: Projects) => {
  try {
    const item = window.localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    } else {
      setLocalValue(key, initialValue);
      return initialValue;
    }
  } catch (error) {
    console.log(error);
    setLocalValue(key, initialValue);
    return initialValue;
  }
};

const setLocalValue = (key: string, value: Projects) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

export { getLocalValue, setLocalValue };
