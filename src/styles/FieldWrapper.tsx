import styled from "styled-components";
import { gts } from "../utils/styles";

const FieldWrapper = styled.div`
  label {
    display: block;
    margin-bottom: ${gts("mdMargin")}px;
    font-weight: 400;
    font-size: 1.2rem;
    color: ${gts("darkGrey")};

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export default FieldWrapper;
