import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { setVisible } from '../../store/slices/card';
import s from './pagination.module.css';

const Pagination = () => {
  const dispatch = useAppDispatch();
  const [, setSearchParams] = useSearchParams();

  const { currentPage, totalCount, pageSize } = useAppSelector(
    (state) => state.pagination
  );

  const handlePageNumber = useCallback((num: number) => {
    setSearchParams((param) => {
      param.set('page', String(num + 1));
      return param;
    });

    dispatch(setVisible(false));
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
