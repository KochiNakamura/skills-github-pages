import React from "react";
import { StyledSort } from "./styles";

const ProjectSort = () => {
  return (
    <StyledSort>
      <label htmlFor='sort'>
        <i className='material-icons'>sort</i>Sort by
      </label>
      <select id='sort' value='CREATION_DATE'>
        <option value='CREATION_DATE'>Creation Date</option>
        <option value='DEADLINE'>Deadline</option>
      </select>
    </StyledSort>
  );
};

export default ProjectSort;
