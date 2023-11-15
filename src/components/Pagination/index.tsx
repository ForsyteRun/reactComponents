import { useCallback, useEffect } from 'react';
import { setQueryParam } from '../../utils';
import s from './pagination.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { setPageNumber } from '../../store/slices/pagination';

const Pagination = () => {
  const dispatch = useAppDispatch();
  const { pageNumber, totalCount } = useAppSelector(
    (state) => state.pagination
  );

  const handlePageNumber = useCallback((num: number) => {
    setQueryParam('page', String(num + 1));

    dispatch(setPageNumber(num + 1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const pageFromUrl = searchParams.get('page');

    dispatch(setPageNumber(Number(pageFromUrl) || 1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={s.pagination}>
      {Array.from(Array(totalCount / 10).keys()).map(
        (
          num: number //TODO
        ) => (
          <a
            key={num + 1}
            className={pageNumber === num + 1 ? 'active' : undefined}
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
