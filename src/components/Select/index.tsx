/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { setVisible } from '../../store/slices/card';

const Select = () => {
  const dispatch = useAppDispatch();
  const { pageSize } = useAppSelector((state) => state.pagination);
  const [, setSearchParams] = useSearchParams();

  const handleChange = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) => {
      setSearchParams((params) => {
        params.set('pageSize', value);
        params.set('page', '1');
        return params;
      });

      dispatch(setVisible(false));
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
