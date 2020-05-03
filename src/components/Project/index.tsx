import React from "react";
import moment from "moment";

import { Wrapper } from "./styles";
import TextButton from "../../styles/TextButton";
import ButtonWrapper from "../../styles/ButtonWrapper";
import { Project as TProject } from "../../types/common";

const Project = ({ name, createdAt, deadline }: TProject) => {
  const formattedDeadline = moment(deadline).format("h:mm a, MMMM Do YYYY");
  const creationDate = moment(createdAt).fromNow();

  return (
    <Wrapper>
      <div className='info'>
        <h4>{name}</h4>
        <p className='creation-date'>{creationDate}</p>
        <p>
          <b>Status</b> In progress
        </p>
        <p>
          <b>Deadline</b> {formattedDeadline}
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
