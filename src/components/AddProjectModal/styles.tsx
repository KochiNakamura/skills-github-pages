import styled from "styled-components";
import { gts } from "../../utils/styles";

export const Wrapper = styled.div`
  label {
    display: block;
    margin-bottom: ${gts("mdMargin")}px;
    font-weight: 400;
    font-size: 1.2rem;
    color: ${gts("darkGrey")};
    input {
      margin-top: 5px;
      background: none;
      outline: none;
      box-shadow: none;
      border: none;
      border-bottom: solid 1px ${gts("grey")};
      padding: ${gts("xsMargin")}px 0;
      width: 100%;
      display: block;
      font-size: 1.4rem;

      &:focus {
        border-color: ${gts("black")};
      }
    }
  }
`;
