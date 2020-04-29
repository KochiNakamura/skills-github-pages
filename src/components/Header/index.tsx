import React from "react";
import TextButton from "../../styles/TextButton";
import { StyledHeader } from "./styles";

const Header = ({ openModal }: any) => {
  return (
    <StyledHeader>
      <h3>Timelogger</h3>
      <TextButton onClick={openModal}>
        <i className='material-icons'>add</i>Add Project
      </TextButton>
    </StyledHeader>
  );
};

export default Header;
