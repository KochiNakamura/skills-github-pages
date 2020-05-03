import React, { useState, ChangeEvent } from "react";

import { StyledSortWrapper } from "./styles";
import Sorts from "../../constants/sorts";
import { useProjectsDispatch } from "../../contexts/projectsContext";
import Actions from "../../constants/actions";

const ProjectSort = () => {
  const [sortType, setSortType] = useState<Sorts>(Sorts.CREATION_DATE);
  const dispatch = useProjectsDispatch();

  const onChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    const newSortType = target.value as Sorts;

    setSortType(newSortType);
    dispatch({ type: `SORT:${newSortType}` as Actions });
  };

  return (
    <StyledSortWrapper>
      <label htmlFor='sort'>
        <i className='material-icons'>sort</i>Sort by
      </label>
      <select id='sort' value={sortType} onChange={onChange}>
        <option value={Sorts.CREATION_DATE}>Creation Date</option>
        <option value={Sorts.DEADLINE}>Deadline</option>
      </select>
    </StyledSortWrapper>
  );
};

export default ProjectSort;
