import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import { ProjectsProvider } from "../../contexts/projectsContext";
import { SortProvider } from "../../contexts/sortContext";

import Header from "../Header";
import ProjectSort from "../ProjectSort";
import AllProjects from "../AllProjects";
import Footer from "../Footer";
import AddProjectModal from "../AddProjectModal";
import { Wrapper } from "./styles";
import GlobalStyle from "../../styles/GlobalStyle";
import { theme } from "../../styles/theme";
import { getLocalValue } from "../../utils/localstorage";
import Sorts from "../../constants/sorts";

const App = () => {
  const [showModal, setModalVisibility] = useState(false);
  const projects = getLocalValue("projects", []);

  const openModal = () => setModalVisibility(true);
  const closeModal = () => setModalVisibility(false);

  return (
    <ThemeProvider theme={theme}>
      <SortProvider value={Sorts.CREATION_DATE}>
        <ProjectsProvider value={projects}>
          <Wrapper>
            <GlobalStyle />
            <Header openModal={openModal} />
            <ProjectSort />
            <AllProjects />
            <Footer />
            <AddProjectModal show={showModal} onClose={closeModal} />
          </Wrapper>
        </ProjectsProvider>
      </SortProvider>
    </ThemeProvider>
  );
};

export default App;
