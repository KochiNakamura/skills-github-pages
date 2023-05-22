import { v4 as uuidv4 } from "uuid";

import projectReducer from "./projectsReducer";
import Actions from "../constants/actions";
import projectsReducer from "./projectsReducer";
import Statuses from "../constants/statuses";
import moment from "moment";

const ids = [uuidv4(), uuidv4()];

const state = [
  {
    name: "A",
    deadline: moment().add(4, "days").unix(),
    id: ids[0],
    createdAt: moment().unix(),
    status: Statuses.INCOMPLETE,
    timeLogged: 60,
  },
  {
    name: "B",
    deadline: moment().add(2, "days").unix(),
    id: ids[1],
    createdAt: moment().add(4, "days").unix(),
    status: Statuses.COMPLETE,
    timeLogged: 60,
  },
];

describe("projectReducer:", () => {
  afterEach(() => {
    localStorage.clear();
  });

  it(`Action: ${Actions.ADD_PROJECT}`, () => {
    const newProject = {
      name: "C",
      deadline: moment().add(2, "days").unix(),
      id: ids[1],
      createdAt: moment().add(4, "days").unix(),
      status: Statuses.COMPLETE,
      timeLogged: 60,
    };
    const expectedNewState = [newProject, ...state];

    const newState = projectReducer(state, { type: Actions.ADD_PROJECT, payload: newProject });

    expect(newState).toEqual(expectedNewState);
  });

  it(`Action: ${Actions.ADD_TIME}`, () => {
    const timeToBeAdded = 31;
    const id = ids[0];

    const newState = projectReducer(state, {
      type: Actions.ADD_TIME,
      payload: { id, time: timeToBeAdded },
    });
    const expectedNewState = state.map((e) => {
      if (e.id === id) {
        return { ...e, timeLogged: e.timeLogged + timeToBeAdded };
      }

      return e;
    });

    expect(newState).toEqual(expectedNewState);
  });

  it(`Action: ${Actions.SORT_BY_CREATION_DATE}`, () => {
    const newState = projectReducer(state, { type: Actions.SORT_BY_CREATION_DATE });
    const expectedNewState = [state[1], state[0]];

    expect(newState).toEqual(expectedNewState);
  });

  it(`Action: ${Actions.SORT_BY_DEADLINE}`, () => {
    const newState = projectReducer(state, { type: Actions.SORT_BY_DEADLINE });
    const expectedNewState = [state[1], state[0]];

    expect(newState).toEqual(expectedNewState);
  });

  it(`Action: ${Actions.MARK_COMPLETE}`, () => {
    const action = { type: Actions.MARK_COMPLETE, payload: ids[0] };
    const newState = projectReducer(state, action);
    const expectedNewState = state.map((e) => {
      if (e.id === action.payload) {
        return { ...e, status: Statuses.COMPLETE };
      }

      return e;
    });

    expect(newState).toEqual(expectedNewState);
  });

  it(`Action: ${Actions.MARK_INCOMPLETE}`, () => {
    const action = { type: Actions.MARK_INCOMPLETE, payload: ids[1] };
    const newState = projectReducer(state, action);
    const expectedNewState = state.map((e) => {
      if (e.id === action.payload) {
        return { ...e, status: Statuses.INCOMPLETE };
      }
      return e;
    });

    expect(newState).toEqual(expectedNewState);
  });

  it("Action: Unhandled action", () => {
    const action = { type: "UNHANDLED_ACTION" as Actions };
    let errorThrown = false;

    try {
      projectsReducer(state, action);
    } catch (error) {
      errorThrown = true;
      expect(error.message).toBe(`Unhandled action type: ${action.type}`);
    }

    expect(errorThrown).toBe(true);
  });
});
