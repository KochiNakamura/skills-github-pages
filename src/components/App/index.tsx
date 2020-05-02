import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import produce from "immer";
import Header from "../Header";
import ProjectSort from "../ProjectSort";
import AllProjects from "../AllProjects";
import Footer from "../Footer";
import AddProjectModal from "../AddProjectModal";
import { Wrapper } from "./styles";
import GlobalStyle from "../../styles/GlobalStyle";
import { theme } from "../../styles/theme";
import useLocalStorage from "../../hooks/localstorage";

const App = () => {
  const [showModal, setModalVisibility] = useState(false);
  const [sortType, setSortType] = useState("CREATION_DATE");
  const [projects, setProjects] = useLocalStorage("projects", []);
  const addProject = (newProject: any) => setProjects([newProject, ...projects]);
  const closeModal = () => setModalVisibility(false);

  useEffect(() => {
    const sortedProjects = produce(projects, (draftState: any) => {
      switch (sortType) {
        case "DEADLINE":
          draftState.sort((a: any, b: any) => {
            const deadlineA = new Date(a.deadline).getTime();
            const deadlineB = new Date(b.deadline).getTime();

            return deadlineA - deadlineB;
          });
        default:
          // projects are already sorted by creation date
          return draftState;
      }
    });
    setProjects(sortedProjects);
  }, [sortType]);

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyle />
        <Header openModal={() => setModalVisibility(true)} />
        <ProjectSort setSortType={setSortType} type={sortType} />
        <AllProjects projects={projects} />
        <Footer />
        <AddProjectModal show={showModal} onSave={addProject} onClose={closeModal} />
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
