import styled from "styled-components";
import { gts } from "../../utils/styles";

export const FooterPara = styled.p`
  padding: ${gts("xlMargin")}px 0 ${gts("lgMargin")}px;
  text-align: center;
  a {
    margin: ${gts("xsMargin")}px;
  }
`;
