import produce from "immer";

import { setLocalValue } from "../utils/localstorage";
import { State, Action, Project } from "../types/common";
import Actions from "../constants/actions";
import Statuses from "../constants/statuses";
import { getTimeDifference } from "../utils/time";

const projectsReducer = (state: State, action: Action) => {
  switch (action.type) {
    case Actions.SORT_BY_DEADLINE: {
      const sortedState = produce(state, (draftState) =>
        draftState.sort((a: Project, b: Project) => getTimeDifference(a.deadline, b.deadline))
      );

      return sortedState;
    }
    case Actions.SORT_BY_CREATION_DATE: {
      const sortedState = produce(state, (draftState) =>
        draftState.sort((a: Project, b: Project) => getTimeDifference(b.createdAt, a.createdAt))
      );

      return sortedState;
    }
    case Actions.ADD_PROJECT: {
      const newState = [action.payload, ...state];

      setLocalValue("projects", newState);

      return newState;
    }
    case Actions.ADD_TIME: {
      const newState = produce(state, (draftState) =>
        draftState.forEach((e) => {
          if (e.id === action.payload.id) {
            e.timeLogged += action.payload.time;
          }
        })
      );

      setLocalValue("projects", newState);

      return newState;
    }
    case Actions.MARK_COMPLETE: {
      const newState = produce(state, (draftState) =>
        draftState.forEach((e) => {
          if (e.id === action.payload) {
            e.status = Statuses.COMPLETE;
          }
        })
      );

      setLocalValue("projects", newState);

      return newState;
    }
    case Actions.MARK_INCOMPLETE: {
      const newState = produce(state, (draftState) =>
        draftState.forEach((e) => {
          if (e.id === action.payload) {
            e.status = Statuses.INCOMPLETE;
          }
        })
      );

      setLocalValue("projects", newState);

      return newState;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export default projectsReducer;
