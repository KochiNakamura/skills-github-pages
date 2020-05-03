import React, { useState, useEffect } from "react";

import Modal from "../Modal";
import { Wrapper } from "./styles";
import { useProjectsDispatch } from "../../contexts/projectsContext";
import Actions from "../../constants/actions";

interface Props {
  show: boolean;
  onClose: () => void;
}

const AddProjectModal = ({ show, onClose }: Props) => {
  const [name, setName] = useState("");
  const [deadline, setDeadline] = useState("");
  const dispatch = useProjectsDispatch();

  useEffect(() => {
    setName("");
    setDeadline("");
  }, [show]);

  const addProject = () => {
    if (name && deadline) {
      const createdAt = Date.now();

      dispatch({ type: Actions.ADD_PROJECT, payload: { createdAt, name, deadline } });
    }
  };

  return show ? (
    <Modal heading='Add Project' onClose={onClose} onSave={addProject}>
      <Wrapper>
        <label>
          Project Name
          <input
            type='text'
            name='project name'
            value={name}
            placeholder='Enter project name'
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label>
          Deadline
          <input
            type='datetime-local'
            name='deadline'
            value={deadline}
            placeholder='Enter project deadline'
            onChange={({ target }) => setDeadline(target.value)}
          />
        </label>
      </Wrapper>
    </Modal>
  ) : null;
};

export default AddProjectModal;
