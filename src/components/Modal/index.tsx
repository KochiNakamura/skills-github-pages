import React, { useEffect } from "react";

import { Wrapper, ContentWrapper, Heading, ModalWrapper } from "./styles";
import ButtonWrapper from "../../styles/ButtonWrapper";
import TextButton from "../../styles/TextButton";

interface Props {
  heading: string;
  children: React.ReactNode;
  onClose: () => void;
  onSave: () => void;
}

const Modal = ({ heading, children, onClose, onSave }: Props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  });

  const saveAndClose = () => {
    onSave();
    onClose();
  };

  return (
    <Wrapper>
      <ModalWrapper>
        <Heading>{heading}</Heading>
        <ContentWrapper>{children}</ContentWrapper>
        <ButtonWrapper>
          <TextButton onClick={saveAndClose}>Save</TextButton>
          <TextButton onClick={onClose}>Cancel</TextButton>
        </ButtonWrapper>
      </ModalWrapper>
    </Wrapper>
  );
};

export default Modal;
