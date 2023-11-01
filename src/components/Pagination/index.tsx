import { Link } from 'react-router-dom';
import s from './pagination.module.css';
import { PAGES_COUNT } from '../../constants';

const Pagination = ({ pageNumber }: { pageNumber: number }) => {
  return (
    <div className={s.pagination}>
      {Array.from(Array(PAGES_COUNT).keys()).map((num: number) => (
        <Link
          key={num + 1}
          to={`?page=${num + 1}`}
          className={pageNumber === num + 1 ? 'active' : undefined}
        >
          {num + 1}
        </Link>
      ))}
    </div>
  );
};

export default Pagination;
