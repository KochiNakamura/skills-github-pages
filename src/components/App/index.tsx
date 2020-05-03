import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import { ProjectsProvider } from "../../contexts/projectsContext";
import Header from "../Header";
import ProjectSort from "../ProjectSort";
import AllProjects from "../AllProjects";
import Footer from "../Footer";
import AddProjectModal from "../AddProjectModal";
import { Wrapper } from "./styles";
import GlobalStyle from "../../styles/GlobalStyle";
import { theme } from "../../styles/theme";

const App = () => {
  const [showModal, setModalVisibility] = useState(false);

  const openModal = () => setModalVisibility(true);
  const closeModal = () => setModalVisibility(false);

  return (
    <ThemeProvider theme={theme}>
      <ProjectsProvider>
        <Wrapper>
          <GlobalStyle />
          <Header openModal={openModal} />
          <ProjectSort />
          <AllProjects />
          <Footer />
          <AddProjectModal show={showModal} onClose={closeModal} />
        </Wrapper>
      </ProjectsProvider>
    </ThemeProvider>
  );
};

export default App;
