import React from "react";

import Sorts from "../constants/sorts";

type ProjectsProviderProps = { children: React.ReactNode };

const SortStateContext = React.createContext<Sorts | undefined>(undefined);
const SetSortContext = React.createContext<React.Dispatch<React.SetStateAction<Sorts>> | undefined>(
  undefined
);

const SortProvider = ({ children }: ProjectsProviderProps) => {
  const [sortState, setSortState] = React.useState<Sorts>(Sorts.CREATION_DATE);

  return (
    <SortStateContext.Provider value={sortState}>
      <SetSortContext.Provider value={setSortState}>{children}</SetSortContext.Provider>
    </SortStateContext.Provider>
  );
};

const useSortState = () => {
  const context = React.useContext(SortStateContext);
  if (context === undefined) {
    throw new Error("useSortState must be used within a SortProvider");
  }
  return context;
};

const useSetSort = () => {
  const context = React.useContext(SetSortContext);
  if (context === undefined) {
    throw new Error("useSetSort must be used within a SortProvider");
  }
  return context;
};

export { SortProvider, useSortState, useSetSort };
