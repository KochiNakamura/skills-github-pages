import React, { useEffect, ChangeEvent } from "react";

import { useProjectsDispatch } from "../../contexts/projectsContext";
import { useSortState, useSetSort } from "../../contexts/sortContext";

import { StyledSortWrapper } from "./styles";
import Sorts from "../../constants/sorts";
import Actions from "../../constants/actions";

const ProjectSort = () => {
  const sortType = useSortState();
  const setSort = useSetSort();
  const dispatch = useProjectsDispatch();

  // By having this useEffect not only we sort the projects
  // but we also set the sort select element to the right value.
  useEffect(() => {
    dispatch({ type: `SORT:${sortType}` as Actions });
  }, [sortType, dispatch]);

  const onChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    const newSortType = target.value as Sorts;

    setSort(newSortType);
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
