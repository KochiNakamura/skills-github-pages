import styled from "styled-components";
import { gts } from "../../utils/styles";

export const Wrapper = styled.div`
  position: fixed;
  padding: ${gts("smMargin")}px;
  background: ${gts("greyBackground")};
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: calc(100vw - ${gts("lgMargin")}px);
  height: auto;
  max-height: calc(100vh - ${gts("lgMargin")}px);
  max-width: 500px;
  display: flex;
  flex-direction: column;
  box-shadow: ${gts("boxShadow")};
  background: ${gts("white")};
`;

export const ContentWrapper = styled.div`
  padding: ${gts("mdMargin")}px ${gts("smMargin")}px ${gts("smMargin")}px;
  overflow-y: auto;
`;

export const Heading = styled.h4`
  border-bottom: solid 1px ${gts("grey")};
  text-align: center;
`;
