import React from "react";
import { StyledSort } from "./styles";

const ProjectSort = ({ type, setSortType }: any) => {
  const onChange = ({ target }: any) => setSortType(target.value);

  return (
    <StyledSort>
      <label htmlFor='sort'>
        <i className='material-icons'>sort</i>Sort by
      </label>
      <select id='sort' value={type} onChange={onChange}>
        <option value='CREATION_DATE'>Creation Date</option>
        <option value='DEADLINE'>Deadline</option>
      </select>
    </StyledSort>
  );
};

export default ProjectSort;
