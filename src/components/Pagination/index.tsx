import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { setPageNumber } from '../../store/slices/pagination';
import { setQueryParam } from '../../utils';
import s from './pagination.module.css';
import { setVisible } from '../../store/slices/card';

const Pagination = () => {
  const dispatch = useAppDispatch();

  const { currentPage, totalCount, pageSize } = useAppSelector(
    (state) => state.pagination
  );

  const handlePageNumber = useCallback((num: number) => {
    setQueryParam('page', String(num + 1));

    dispatch(setVisible(false));
    dispatch(setPageNumber(num + 1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={s.pagination}>
      {Array.from(Array(Math.floor(totalCount / pageSize)).keys()).map(
        (num: number) => (
          <a
            key={num + 1}
            className={currentPage === num + 1 ? 'active' : undefined}
            onClick={() => handlePageNumber(num)}
          >
            {num + 1}
          </a>
        )
      )}
    </div>
  );
};

export default Pagination;
