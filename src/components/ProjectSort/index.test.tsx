import React from "react";
import { v4 as uuidv4 } from "uuid";
import { render, cleanup, fireEvent } from "@testing-library/react";

import { ProjectsProvider, useProjectsState } from "../../contexts/projectsContext";
import { SortProvider } from "../../contexts/sortContext";

import ProjectSort from "./";
import Sorts from "../../constants/sorts";
import { Project } from "../../types/common";
import moment from "moment";
import Statuses from "../../constants/statuses";
import { getTimeDifference } from "../../utils/time";

const ids = [uuidv4(), uuidv4()];
const sortType = Sorts.CREATION_DATE;
const projects: Project[] = [
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

const renderWithContext = (
  node: React.ReactNode,
  { sortValue = sortType, projectsValue = projects, ...options } = {}
) => {
  return render(
    <SortProvider value={sortValue}>
      <ProjectsProvider value={projectsValue}>{node}</ProjectsProvider>
    </SortProvider>,
    options
  );
};

describe("ProjectSort:", () => {
  afterEach(cleanup);

  it("renders", () => {
    const { container } = renderWithContext(<ProjectSort />);
    const select: HTMLSelectElement | null = container.querySelector("#sort");

    expect(select).not.toBe(null);

    if (select !== null) {
      expect(select.value).toBe(sortType);
    }
  });

  it("change sort type", () => {
    const { container } = renderWithContext(<ProjectSort />);
    const select: HTMLSelectElement | null = container.querySelector("#sort");

    expect(select).not.toBe(null);

    if (select !== null) {
      fireEvent.change(select, { target: { value: Sorts.DEADLINE } });

      expect(select.value).toBe(Sorts.DEADLINE);
    }
  });

  it("changing sort type sorts the projects in DOM", async () => {
    const ShowProjectsDeadline = () => {
      const projects: Project[] = useProjectsState();

      return (
        <div>
          {projects.map((e: Project) => (
            <span data-testid='deadline' key={e.id}>
              {e.deadline}
            </span>
          ))}
        </div>
      );
    };

    const { container, findAllByTestId } = renderWithContext(
      <>
        <ProjectSort />
        <ShowProjectsDeadline />
      </>
    );
    const select: HTMLSelectElement | null = container.querySelector("#sort");

    expect(select).not.toBe(null);

    if (select !== null) {
      fireEvent.change(select, { target: { value: Sorts.DEADLINE } });

      expect(select.value).toBe(Sorts.DEADLINE);

      const deadlineElems = await findAllByTestId("deadline");
      const sortedDeadlines = projects.sort((a, b) =>
        getTimeDifference(moment(a.deadline), moment(b.deadline))
      );

      expect(deadlineElems.length).toBe(sortedDeadlines.length);

      const deadlinesInDOM = deadlineElems.map((e) => Number(e.textContent));
      const deadlinesInSortedProjects = sortedDeadlines.map((e) => e.deadline);

      // Makes sure that projects were sorted in DOM
      expect(deadlinesInDOM).toEqual(deadlinesInSortedProjects);
    }
  });
});
