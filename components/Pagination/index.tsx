import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { useRouter } from 'next/router';
import { toggleLoading } from '../../store/slices/loading';
import s from './pagination.module.css';

const Pagination = () => {
  const dispatch = useAppDispatch();
  const { query, pathname, push } = useRouter();

  const { currentPage, totalCount, pageSize } = useAppSelector(
    (state) => state.pagination
  );

  const handlePageNumber = useCallback(
    (num: number) => {
      const newQuery = {
        ...query,
        page: `${String(num + 1)}`,
      };

      push({
        pathname,
        query: newQuery,
      });

      dispatch(toggleLoading(true));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [query, pathname]
  );

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
