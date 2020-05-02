import React from "react";
import { Wrapper } from "./styles";
import NoProject from "../NoProject";
import Project from "../Project";

const AllProjects = ({ projects }: any) => {
  const getProjects = (projects: any) => {
    if (projects.length === 0) {
      return <NoProject />;
    } else {
      return projects.map((project: any) => <Project key={project.createdAt} {...project} />);
    }
  };

  const content = getProjects(projects);

  return <Wrapper>{content}</Wrapper>;
};

export default AllProjects;
