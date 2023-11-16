import { useCallback, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useGetAllBooksQuery } from '../../services/fetchData';
import { IItem } from '../../types';
import Card from '../Card';
import Pagination from '../Pagination';
import s from './listItem.module.css';

const ListItems = () => {
  const { data: books } = useGetAllBooksQuery('');

  const [id, setId] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);

  const handleClick = useCallback((id: string) => {
    setId(id);
    setVisible(true);
  }, []);

  if (!books?.items) {
    return <div style={{ fontSize: '4rem' }}>Not found books</div>;
  }

  return (
    <div className={s.container}>
      <Outlet context={{ id, visible, setVisible }} />
      <div className={s.containerList}>
        <ul>
          {books.items.map((data: IItem) => (
            <Card data={data} handleClick={handleClick} key={data.id} />
          ))}
        </ul>
        <Pagination />
      </div>
    </div>
  );
};

export default ListItems;
