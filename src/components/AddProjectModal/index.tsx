import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import moment, { Moment } from "moment";

import { useProjectsDispatch } from "../../contexts/projectsContext";
import { useSetSort } from "../../contexts/sortContext";

import DateTime from "../DateTime";
import Modal from "../Modal";
import Actions from "../../constants/actions";
import Statuses from "../../constants/statuses";
import FieldWrapper from "../../styles/FieldWrapper";
import Sorts from "../../constants/sorts";
import { getTimeDifference } from "../../utils/time";

interface Props {
  show: boolean;
  onClose: () => void;
}

const AddProjectModal = ({ show, onClose }: Props) => {
  const minDate = moment().add(1, "days");

  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [deadline, setDeadline] = useState<Moment>(minDate);
  const [timeSpent, setTimeSpent] = useState(0);
  const setSort = useSetSort();
  const dispatch = useProjectsDispatch();

  // Deadline is invalid if it is less than a day.
  const isDeadlineInvalid = getTimeDifference(deadline, minDate) < 0;

  // reset modal state
  useEffect(() => {
    setName("");
    setDeadline(minDate);
    setTimeSpent(0);
    setError("");
    // Have not added minDateTime to dependency array so that it doesn't reset the state.
    // eslint-disable-next-line
  }, [show]);

  const addProject = () => {
    if (isDeadlineInvalid) {
      setError("Deadline should be atleast 1 day in future!");
      return false;
    } else if (name && deadline && timeSpent >= 0) {
      const newProject = {
        name,
        deadline: deadline.toString(),
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
          Deadline(1 day minimum)
          <DateTime
            value={deadline}
            closeOnSelect={true}
            isValidDate={(current) => current.isSameOrAfter(minDate)}
            onChange={(newDate) => {
              if (typeof newDate === "string") {
                setDeadline(minDate);
              } else {
                setDeadline(newDate);
              }
            }}
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
