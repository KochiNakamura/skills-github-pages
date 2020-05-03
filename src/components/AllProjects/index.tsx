import React from "react";

import { useProjectsState } from "../../contexts/projectsContext";
import { Wrapper } from "./styles";
import NoProject from "../NoProject";
import Project from "../Project";
import { Project as TProject } from "../../types/common";

const AllProjects = () => {
  const projects = useProjectsState();

  const renderProjects = (projects: Array<TProject>) => {
    if (projects.length === 0) {
      return <NoProject />;
    } else {
      return projects.map((project: TProject) => <Project key={project.createdAt} {...project} />);
    }
  };

  return <Wrapper>{renderProjects(projects)}</Wrapper>;
};

export default AllProjects;
