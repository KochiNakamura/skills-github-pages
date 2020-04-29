import React from "react";
import { Wrapper } from "./styles";
import NoProject from "../NoProject";
import Project from "../Project";

const AllProjects = () => {
  const getProjects = (projects: any) => {
    if (projects.length === 0) {
      return <NoProject />;
    } else {
      return projects.map((e: any) => <Project key={e} />);
    }
  };

  const content = getProjects([1, 2, 3]);

  return <Wrapper>{content}</Wrapper>;
};

export default AllProjects;
