import React, { useState } from "react";

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
  const [time, setTime] = useState(30);
  const dispatch = useProjectsDispatch();

  const addTime = () => {
    if (time < 30) {
      return false;
    }

    dispatch({ type: Actions.ADD_TIME, payload: { time, id: projectId } });
    return true;
  };

  return show ? (
    <Modal heading={"Add Time: " + projectName} onClose={onClose} onSave={addTime}>
      <FieldWrapper>
        <label>
          Time Spent(greater than 30 minutes)
          <input
            name='time_spent'
            type='number'
            placeholder='Enter time spent on project in minutes'
            min='30'
            value={time}
            onChange={({ target }) =>
              setTime(Number(target.value) >= 30 ? Number(target.value) : 30)
            }
          />
        </label>
      </FieldWrapper>
    </Modal>
  ) : null;
};

export default AddTimeModal;
