import React from "react";
import { Wrapper } from "./styles";
import TextButton from "../../styles/TextButton";
import ButtonWrapper from "../../styles/ButtonWrapper";

const Project = () => {
  return (
    <Wrapper>
      <div className='info'>
        <h4>Project Name</h4>
        <p className='creation-date'>2pm 23 March, 2019</p>
        <p>
          <b>Status</b> In progress
        </p>
        <p>
          <b>Deadline</b> 2pm, 23 April, 2019
        </p>
        <p>
          <b>Time logged</b> 2hrs
        </p>
      </div>
      <ButtonWrapper>
        <TextButton>
          <i className='material-icons'>alarm_add</i>Add Time
        </TextButton>
        <TextButton>
          <i className='material-icons'>done</i>Mark Complete
        </TextButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Project;
