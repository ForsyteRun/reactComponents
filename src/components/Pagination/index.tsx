import CustomLink from '../CustomLink';
import s from './pagination.module.css';

const Pagination = () => {
  return (
    <div className={s.pagination}>
      <CustomLink href="1" styles={{ color: 'red' }}>
        qq
      </CustomLink>
    </div>
  );
};

export default Pagination;
