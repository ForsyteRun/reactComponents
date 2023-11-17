import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useRedux';
import { IItem } from '../../types';
import Card from '../Card';
import Pagination from '../Pagination';
import s from './listItem.module.css';

const ListItems = ({ data: books }: { data?: IItem[] }) => {
  const { isVisible } = useAppSelector((state) => state.card);

  return (
    <div className={s.container}>
      {isVisible && <Outlet />}
      <div className={s.containerList}>
        <ul>
          {books ? (
            books.map((book: IItem) => <Card data={book} key={book.id} />)
          ) : (
            <div style={{ fontSize: '5rem', margin: '2rem 0' }}>
              Books not found
            </div>
          )}
        </ul>
        <Pagination />
      </div>
    </div>
  );
};

export default ListItems;
