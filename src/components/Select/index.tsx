/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { setPageSize } from '../../store/slices/pagination';
import { setQueryParam } from '../../utils';
import { setVisible } from '../../store/slices/card';

const Select = () => {
  const dispatch = useAppDispatch();
  const { pageSize } = useAppSelector((state) => state.pagination);

  const handleChange = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) => {
      setQueryParam('pageSize', value);
      setQueryParam('page', '1');

      console.log(33);
      dispatch(setVisible(false));
      dispatch(setPageSize(Number(value)));
    },
    []
  );

  return (
    <select value={pageSize} onChange={handleChange}>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="20">20</option>
      <option value="25">25</option>
    </select>
  );
};

export default Select;
