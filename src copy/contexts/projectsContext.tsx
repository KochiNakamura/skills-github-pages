import React from "react";

import projectsReducer from "../reducers/projectsReducer";
import { Action, State } from "../types/common";

type Dispatch = (action: Action) => void;
type ProjectsProviderProps = { children: React.ReactNode; value: State };

const ProjectsStateContext = React.createContext<State | undefined>(undefined);
const ProjectsDispatchContext = React.createContext<Dispatch | undefined>(undefined);

const ProjectsProvider = ({ children, value }: ProjectsProviderProps) => {
  const [state, dispatch] = React.useReducer(projectsReducer, value);

  return (
    <ProjectsStateContext.Provider value={state}>
      <ProjectsDispatchContext.Provider value={dispatch}>
        {children}
      </ProjectsDispatchContext.Provider>
    </ProjectsStateContext.Provider>
  );
};

const useProjectsState = () => {
  const context = React.useContext(ProjectsStateContext);

  if (context === undefined) {
    throw new Error("useProjectsState must be used within a ProjectsProvider");
  }

  return context;
};

const useProjectsDispatch = () => {
  const context = React.useContext(ProjectsDispatchContext);

  if (context === undefined) {
    throw new Error("useProjectsDispatch must be used within a ProjectsProvider");
  }

  return context;
};

export { ProjectsProvider, useProjectsState, useProjectsDispatch };
