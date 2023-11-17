import { useCallback, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { IItem } from '../../types';
import Card from '../Card';
import Pagination from '../Pagination';
import s from './listItem.module.css';

const ListItems = ({ data: books }: { data?: IItem[] }) => {
  const [id, setId] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);

  const handleClick = useCallback((id: string) => {
    setId(id);
    setVisible(true);
  }, []);

  return (
    <div className={s.container}>
      <Outlet context={{ id, visible, setVisible }} />
      <div className={s.containerList}>
        <ul>
          {books ? (
            books.map((data: IItem) => (
              <Card data={data} handleClick={handleClick} key={data.id} />
            ))
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
