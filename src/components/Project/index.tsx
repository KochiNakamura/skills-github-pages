import React, { useState } from "react";
import moment from "moment";

import AddTimeModal from "../AddTimeModal";
import { Wrapper } from "./styles";
import TextButton from "../../styles/TextButton";
import ButtonWrapper from "../../styles/ButtonWrapper";
import { Project as TProject } from "../../types/common";
import { useProjectsDispatch } from "../../contexts/projectsContext";
import Statuses from "../../constants/statuses";
import Actions from "../../constants/actions";

const Project = ({ name, createdAt, deadline, status, id, timeLogged }: TProject) => {
  const [showModal, setModalVisibility] = useState(false);
  const dispatch = useProjectsDispatch();

  const formattedDeadline = moment.unix(deadline).format("h:mm a, MMMM Do YYYY");
  const creationDate = moment.unix(createdAt).fromNow();
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
    if (typeof timeLogged !== "number" || timeLogged === 0) return "None";

    const hours = Math.floor(timeLogged / 60);
    const minutes = timeLogged % 60;

    if (hours > 0) {
      return `${hours} hr ${minutes > 0 ? `${minutes} min` : ""}`;
    } else {
      return `${minutes} min`;
    }
  };
  const openAddTimeModal = () => setModalVisibility(true);
  const closeAddTimeModal = () => setModalVisibility(false);

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
        <TextButton disabled={isProjectCompleted} onClick={openAddTimeModal}>
          <i className='material-icons'>alarm_add</i>Add Time
        </TextButton>
        <TextButton onClick={toggleProjectStatus}>
          <i className='material-icons'>{statusButton.icon}</i>
          {statusButton.text}
        </TextButton>
      </ButtonWrapper>
      <AddTimeModal
        show={showModal}
        onClose={closeAddTimeModal}
        projectName={name}
        projectId={id}
      />
    </Wrapper>
  );
};

export default Project;
