import React, { useState } from "react";
import Header from "../Header";
import ProjectSort from "../ProjectSort";
import AllProjects from "../AllProjects";
import Footer from "../Footer";
import Modal from "../Modal";
import Field from "../Field";
import { Wrapper } from "./styles";
import GlobalStyle from "../../styles/GlobalStyle";
import { theme } from "../../styles/theme";
import { ThemeProvider } from "styled-components";

const App = () => {
  const [showModal, setModalVisibility] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyle />
        <Header openModal={() => setModalVisibility(true)} />
        <ProjectSort />
        <AllProjects />
        <Footer />
        {showModal && (
          <Modal heading='Modal Heading' onClose={() => setModalVisibility(false)}>
            <Field type='text' name='Project Name' />
            <Field type='date' name='Deadline' />
          </Modal>
        )}
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
