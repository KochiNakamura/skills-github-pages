import React, { useState, useEffect } from "react";

import Modal from "../Modal";
import FieldWrapper from "../../styles/FieldWrapper";
import { useProjectsDispatch } from "../../contexts/projectsContext";
import Actions from "../../constants/actions";

interface Props {
  show: boolean;
  onClose: () => void;
  projectName: string;
  projectId: string;
}

const AddTimeModal = ({ show, onClose, projectName, projectId }: Props) => {
  const [time, setTime] = useState("30");
  const [error, setError] = useState("");
  const dispatch = useProjectsDispatch();

  // reset modal state
  useEffect(() => {
    setTime("30");
    setError("");
  }, [show]);

  const addTime = () => {
    const parsedTime = Number(time);

    if (isNaN(parsedTime)) {
      setError("Enter correct time interval!");
      return false;
    }
    if (parsedTime < 30) {
      setError("Time intervals should be atleast 30 minutes!");
      return false;
    }

    dispatch({ type: Actions.ADD_TIME, payload: { time: parsedTime, id: projectId } });
    return true;
  };

  return show ? (
    <Modal heading={"Add Time: " + projectName} onClose={onClose} onSave={addTime} error={error}>
      <FieldWrapper>
        <label>
          Time Spent(greater than 30 minutes)
          <input
            name='time_spent'
            type='text'
            placeholder='Enter time in minutes'
            pattern='[0-9]'
            value={time}
            onChange={({ target }) => setTime(target.value)}
          />
        </label>
      </FieldWrapper>
    </Modal>
  ) : null;
};

export default AddTimeModal;
