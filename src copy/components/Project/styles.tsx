import styled from "styled-components";
import { gts } from "../../utils/styles";

export const Wrapper = styled.div`
  align-self: start;
  box-shadow: ${gts("boxShadow")};
  border: 1px solid ${gts("grey")};
  .info {
    display: flex;
    flex-wrap: wrap;
    padding: ${gts("smMargin")}px;
    h4 {
      width: 100%;
      padding: ${gts("xsMargin")}px 0 0;
    }
    .creation-date {
      width: 100%;
      margin-bottom: ${gts("smMargin")}px;
      color: ${gts("darkGrey")};
    }
    p:not(.creation-date) {
      flex: 1;
      min-width: 230px;
      color: ${gts("darkGrey")};
      b {
        color: ${gts("black")};
        display: block;
        margin-bottom: ${gts("xsMargin")}px;
      }
    }
  }
`;
