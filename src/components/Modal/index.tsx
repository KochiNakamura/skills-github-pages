import React, { useEffect } from "react";

import { Wrapper, ContentWrapper, Heading, ModalWrapper, ErrorMessage } from "./styles";
import ButtonWrapper from "../../styles/ButtonWrapper";
import TextButton from "../../styles/TextButton";

interface Props {
  heading: string;
  children: React.ReactNode;
  onClose: () => void;
  onSave: () => boolean;
  error?: string;
}

const Modal = ({ heading, children, onClose, onSave, error = "" }: Props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  });

  const saveAndClose = () => {
    const saveSuccess = onSave();

    if (saveSuccess) {
      onClose();
    }
  };

  return (
    <Wrapper>
      <ModalWrapper>
        <Heading>{heading}</Heading>
        <ContentWrapper>
          <ErrorMessage>{error}</ErrorMessage>
          {children}
        </ContentWrapper>
        <ButtonWrapper>
          <TextButton onClick={saveAndClose}>Save</TextButton>
          <TextButton onClick={onClose}>Cancel</TextButton>
        </ButtonWrapper>
      </ModalWrapper>
    </Wrapper>
  );
};

export default Modal;
