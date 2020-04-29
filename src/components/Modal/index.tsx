import React, { useEffect } from "react";
import { Wrapper, ContentWrapper, Heading, ModalWrapper } from "./styles";
import ButtonWrapper from "../../styles/ButtonWrapper";
import TextButton from "../../styles/TextButton";

const Modal = ({ heading, children, onClose }: any) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  });

  return (
    <Wrapper>
      <ModalWrapper>
        <Heading>{heading}</Heading>
        <ContentWrapper>{children}</ContentWrapper>
        <ButtonWrapper>
          <TextButton>Save</TextButton>
          <TextButton onClick={onClose}>Cancel</TextButton>
        </ButtonWrapper>
      </ModalWrapper>
    </Wrapper>
  );
};

export default Modal;
