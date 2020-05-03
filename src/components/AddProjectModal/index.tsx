import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Modal from "../Modal";
import { Wrapper } from "./styles";
import { useProjectsDispatch } from "../../contexts/projectsContext";
import Actions from "../../constants/actions";
import Statuses from "../../constants/statuses";

interface Props {
  show: boolean;
  onClose: () => void;
}

const AddProjectModal = ({ show, onClose }: Props) => {
  const [name, setName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [timeSpent, setTimeSpent] = useState(0);
  const dispatch = useProjectsDispatch();

  useEffect(() => {
    setName("");
    setDeadline("");
    setTimeSpent(0);
  }, [show]);

  const addProject = () => {
    if (name && deadline && timeSpent) {
      const newProject = {
        name,
        deadline,
        id: uuidv4(),
        createdAt: Date.now(),
        status: Statuses.INCOMPLETE,
        timeLogged: timeSpent,
      };

      dispatch({ type: Actions.ADD_PROJECT, payload: newProject });
      return true;
    }
    return false;
  };

  return show ? (
    <Modal heading='Add Project' onClose={onClose} onSave={addProject}>
      <Wrapper>
        <label>
          Project Name
          <input
            type='text'
            name='project_name'
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
        <label>
          Time Spent(minutes)
          <input
            type='text'
            name='time_spent'
            value={timeSpent}
            pattern='[0-9]'
            placeholder='Enter time spent on project'
            onChange={({ target }) =>
              setTimeSpent(Number(target.value) > 0 ? Number(target.value) : 0)
            }
          />
        </label>
      </Wrapper>
    </Modal>
  ) : null;
};

export default AddProjectModal;
