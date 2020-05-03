import produce from "immer";

import { setLocalValue } from "../utils/localstorage";
import { State, Action, Project } from "../types/common";
import Actions from "../constants/actions";
import Statuses from "../constants/statuses";

const projectsReducer = (state: State, action: Action) => {
  switch (action.type) {
    case Actions.SORT_BY_DEADLINE: {
      const sortedState = produce(state, (draftState) =>
        draftState.sort((a: Project, b: Project) => {
          const deadlineA = new Date(a.deadline).getTime();
          const deadlineB = new Date(b.deadline).getTime();

          return deadlineA - deadlineB;
        })
      );

      return sortedState;
    }
    case Actions.SORT_BY_CREATION_DATE: {
      const sortedState = produce(state, (draftState) =>
        draftState.sort((a: Project, b: Project) => {
          const creationDateA = new Date(a.createdAt).getTime();
          const creationDateB = new Date(b.createdAt).getTime();

          return creationDateB - creationDateA;
        })
      );

      return sortedState;
    }
    case Actions.ADD_PROJECT: {
      const newState = [action.payload, ...state];

      setLocalValue("projects", newState);

      return newState;
    }
    case Actions.ADD_TIME: {
      return state;
    }
    case Actions.MARK_COMPLETE: {
      const newState = produce(state, (draftState) =>
        draftState.forEach((e) => {
          if (e.id === action.payload) {
            e.status = Statuses.COMPLETE;
          }
        })
      );

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

      return newState;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export default projectsReducer;
