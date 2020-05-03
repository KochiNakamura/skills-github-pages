import produce from "immer";

import { setLocalValue } from "../utils/localstorage";
import { State, Action, Project } from "../types/common";
import Actions from "../constants/actions";

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
      return state;
    }
    case Actions.MARK_INCOMPLETE: {
      return state;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export default projectsReducer;
