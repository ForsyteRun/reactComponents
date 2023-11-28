import s from './pagination.module.css';
import { PAGES_COUNT } from '../../constants';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { setQueryParam } from '../../utils';

interface IPagination {
  pageNumber: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
}

const Pagination = ({ pageNumber, setPageNumber }: IPagination) => {
  const handleQueryString = (num: number): string => {
    setQueryParam('page', String(num + 1));
    setPageNumber(num + 1);
    return `?page=${num + 1}`;
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    const pageNumber = searchParams.get('page');
    setPageNumber(Number(pageNumber) || 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={s.pagination}>
      {Array.from(Array(PAGES_COUNT).keys()).map((num: number) => (
        <a
          key={num + 1}
          className={pageNumber === num + 1 ? 'active' : undefined}
          onClick={() => handleQueryString(num)}
        >
          {num + 1}
        </a>
      ))}
    </div>
  );
};

export default Pagination;
