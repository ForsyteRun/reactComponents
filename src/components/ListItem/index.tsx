import { useCallback, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useRedux';
import { IItem } from '../../types';
import Card from '../Card';
import Pagination from '../Pagination';
import s from './listItem.module.css';

const ListItems = () => {
  const { data: books } = useAppSelector((state) => state.books);

  const [id, setId] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);

  const handleClick = useCallback((id: string) => {
    setId(id);
    setVisible(true);
  }, []);

  if (!books.length) {
    return <div style={{ fontSize: '4rem' }}>Not found books</div>;
  }
  return (
    <div className={s.container}>
      <Outlet context={{ id, visible, setVisible }} />
      <div className={s.containerList}>
        <ul>
          {books.map((data: IItem) => (
            <Card data={data} handleClick={handleClick} key={data.id} />
          ))}
        </ul>
        <Pagination />
      </div>
    </div>
  );
};

export default ListItems;
