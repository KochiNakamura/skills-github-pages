import styled from "styled-components";

const TextButton = styled.button`
  border: none;
  background: none;
  padding: 10px 5px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 1.3rem;
  line-height: 1.2;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: 1px dotted;
  }
`;

export default TextButton;
