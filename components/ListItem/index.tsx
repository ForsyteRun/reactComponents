import React from 'react';
import { IItem } from '../../types';
import Card from '../Card';
import Pagination from '../Pagination';
import s from './listItem.module.css';

interface IListItem {
  data?: IItem[]
}

const ListItems = React.memo(({ data: books }: IListItem) => {
  // const { isVisible } = useAppSelector((state) => state.card);

  return (
    <div className={s.container}>
      {/* {children} */}
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
});

export default ListItems;
