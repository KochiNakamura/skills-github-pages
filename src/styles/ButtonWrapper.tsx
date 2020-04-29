import styled from "styled-components";
import { gts } from "../utils/styles";

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  > * {
    min-width: 180px;
    flex: 1;
    padding: ${gts("smMargin")}px;
    border-top: 1px solid ${gts("grey")};
    &:first-child {
      border-right: 1px solid ${gts("grey")};
      margin-right: 1px;
      margin-bottom: 1px;
    }

    @media (max-width: 400px) {
      &:first-child {
        margin-right: 0;
        border-right: none;
      }
    }
  }
`;

export default ButtonWrapper;
