import { useCallback, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { DEFAULT_IMG } from '../../constants';
import { IItem } from '../../types';
import CardContent from '../CardContent';
import s from './listItem.module.css';
import { useAppSelector } from '../../hooks/useRedux';

const ListItems = () => {
  const { data } = useAppSelector((state) => state.books);

  const [id, setId] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);

  const handleClick = useCallback((id: string) => {
    setId(id);
    setVisible(true);
  }, []);

  return (
    <div className={s.container}>
      <Outlet context={{ id, visible, setVisible }} />
      <ul>
        {data.map(({ id, volumeInfo }: IItem) => (
          <li key={id} className={s.item}>
            <Link
              to={`/${id}/details${window.location.search}`}
              onClick={() => handleClick(id)}
            >
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
