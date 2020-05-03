import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { useProjectsDispatch } from "../../contexts/projectsContext";
import { useSetSort } from "../../contexts/sortContext";

import Modal from "../Modal";
import Actions from "../../constants/actions";
import Statuses from "../../constants/statuses";
import FieldWrapper from "../../styles/FieldWrapper";
import Sorts from "../../constants/sorts";

interface Props {
  show: boolean;
  onClose: () => void;
}

const AddProjectModal = ({ show, onClose }: Props) => {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [timeSpent, setTimeSpent] = useState(0);
  const setSort = useSetSort();
  const dispatch = useProjectsDispatch();

  useEffect(() => {
    setName("");
    setDeadline("");
    setTimeSpent(0);
    setError("");
  }, [show]);

  const addProject = () => {
    if (name && deadline && timeSpent >= 0) {
      const newProject = {
        name,
        deadline,
        id: uuidv4(),
        createdAt: Date.now(),
        status: Statuses.INCOMPLETE,
        timeLogged: timeSpent,
      };

      // sort the projects by CREATION_DATE first so that projects are in order
      setSort(Sorts.CREATION_DATE);

      dispatch({ type: Actions.ADD_PROJECT, payload: newProject });
      return true;
    }

    setError("All fields are required!");
    return false;
  };

  return show ? (
    <Modal heading='Add Project' onClose={onClose} onSave={addProject} error={error}>
      <FieldWrapper>
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
            placeholder='Enter time spent on project in minutes'
            onChange={({ target }) =>
              setTimeSpent(Number(target.value) > 0 ? Number(target.value) : 0)
            }
          />
        </label>
      </FieldWrapper>
    </Modal>
  ) : null;
};

export default AddProjectModal;
