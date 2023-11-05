import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { DEFAULT_IMG } from '../../constants';
import { IItem } from '../../types';
import CardContent from '../CardContent';
import s from './listItem.module.css';

const ListItems = ({ items }: { items: IItem[] }) => {
  const [id, setId] = useState<string>('');
  const [query, setQuery] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(true);

  const handleClick = (id: string) => {
    setId(id);
    setVisible(true);
  };

  useEffect(() => {
    const path = window.location.search;
    setQuery(path);
  }, []);

  return (
    <div className={s.container}>
      <Outlet context={{ id, visible, setVisible }} />
      <ul>
        {items.map(({ id, volumeInfo }: IItem) => (
          <li key={id} className={s.item}>
            <Link to={`/${id}/details${query}`} onClick={() => handleClick(id)}>
              <img
                src={volumeInfo?.imageLinks?.thumbnail || DEFAULT_IMG}
                alt={volumeInfo.title}
              />
            </Link>
            <CardContent volumeInfo={volumeInfo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
