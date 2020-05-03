import React from "react";
import moment from "moment";

import { Wrapper } from "./styles";
import TextButton from "../../styles/TextButton";
import ButtonWrapper from "../../styles/ButtonWrapper";
import { Project as TProject } from "../../types/common";
import { useProjectsDispatch } from "../../contexts/projectsContext";
import Statuses from "../../constants/statuses";
import Actions from "../../constants/actions";

const Project = ({ name, createdAt, deadline, status, id, timeLogged }: TProject) => {
  const dispatch = useProjectsDispatch();

  const formattedDeadline = moment(deadline).format("h:mm a, MMMM Do YYYY");
  const creationDate = moment(createdAt).fromNow();
  const isProjectCompleted = status === Statuses.COMPLETE;
  const statusButton = isProjectCompleted
    ? { text: "Mark InComplete", icon: "loop" }
    : { text: "Mark Complete", icon: "done" };

  const toggleProjectStatus = () => {
    if (isProjectCompleted) {
      dispatch({ type: Actions.MARK_INCOMPLETE, payload: id });
    } else {
      dispatch({ type: Actions.MARK_COMPLETE, payload: id });
    }
  };
  const getTimeString = () => {
    const hours = Math.floor(timeLogged / 60);
    const minutes = timeLogged % 60;

    if (hours > 0) {
      return `${hours} hr ${minutes} min`;
    } else {
      return `${minutes} min`;
    }
  };

  return (
    <Wrapper>
      <div className='info'>
        <h4>{name}</h4>
        <p className='creation-date'>{creationDate}</p>
        <p>
          <b>Status</b> {status}
        </p>
        <p>
          <b>Deadline</b> {formattedDeadline}
        </p>
        <p>
          <b>Time logged</b> {getTimeString()}
        </p>
      </div>
      <ButtonWrapper>
        <TextButton disabled={isProjectCompleted}>
          <i className='material-icons'>alarm_add</i>Add Time
        </TextButton>
        <TextButton onClick={toggleProjectStatus}>
          <i className='material-icons'>{statusButton.icon}</i>
          {statusButton.text}
        </TextButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Project;
