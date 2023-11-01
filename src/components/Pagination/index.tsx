import { Link } from 'react-router-dom';
import s from './pagination.module.css';

const Pagination = ({
  pagesCount,
  pageNumber,
}: {
  pagesCount: number;
  pageNumber: number;
}) => {
  return (
    <div className={s.pagination}>
      {Array.from(Array(pagesCount).keys()).map((num: number) => (
        <Link
          key={num}
          to={`?page=${num}`}
          className={pageNumber === num ? 'active' : undefined}
        >
          {num}
        </Link>
      ))}
    </div>
  );
};

export default Pagination;
