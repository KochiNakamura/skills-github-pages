import React from "react";
import { Wrapper } from "./styles";

const Field = ({ name }: any) => {
  return (
    <Wrapper>
      <label>
        {name}
        <input type='text' />
      </label>
    </Wrapper>
  );
};

export default Field;
