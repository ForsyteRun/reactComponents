/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { setPageSize } from '../../store/slices/pagination';
import { getStorageData, setQueryParam } from '../../utils';

const Select = () => {
  const dispatch = useAppDispatch();
  const { pageSize } = useAppSelector((state) => state.pagination);

  const handleChange = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedValue = value;

      localStorage.setItem('pageSize', JSON.stringify(value));
      setQueryParam('page', '1');

      dispatch(setPageSize(Number(selectedValue)));
    },
    []
  );

  useEffect(() => {
    const cardsPage = getStorageData('pageSize');

    if (cardsPage) {
      dispatch(setPageSize(Number(cardsPage)));
    }
  }, []);

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
