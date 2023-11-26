import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { setVisible } from '../../store/slices/card';
import { useRouter } from 'next/router';

const Select = () => {
  const dispatch = useAppDispatch();
  const { pageSize } = useAppSelector((state) => state.pagination);
  const { query, pathname, push } = useRouter();

  const handleChange = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) => {
      const newQuery = {
        ...query,
        page: '1',
        pageSize: value,
      };

      push({
        pathname,
        query: newQuery,
      });

      dispatch(setVisible(false));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [query, pathname]
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
