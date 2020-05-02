import React, { useState, useEffect } from "react";
import Modal from "../Modal";
import { Wrapper } from "./styles";

const AddProjectModal = ({ show, onClose, onSave }: any) => {
  const [name, setName] = useState("");
  const [deadline, setDeadline] = useState("");
  const addProject = () => {
    if (name && deadline) {
      const createdAt = Date.now();
      onSave({ createdAt, name, deadline });
    }
  };

  useEffect(() => {
    setName("");
    setDeadline("");
  }, [show]);

  return (
    show && (
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
    )
  );
};

export default AddProjectModal;
