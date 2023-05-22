import styled from "styled-components";
import { gts } from "../../utils/styles";

export const Wrapper = styled.div`
  text-align: center;
  padding: ${gts("xxlMargin")}px 0;
  align-self: center;
  p {
    color: ${gts("darkGrey")};
  }
`;
