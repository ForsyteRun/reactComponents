import Link from 'next/link';
import { useCallback } from 'react';

import CardContent from '../CardContent';
import { IItem } from '../../types';
import { useAppDispatch } from '../../hooks/useRedux';
import { addId, setVisible } from '../../store/slices/card';
import { DEFAULT_IMG } from './../../utils/constants';
import s from './style.module.css';

const Card = ({ data: { id, volumeInfo } }: { data: IItem }) => {
  const dispatch = useAppDispatch();

  const handleClick = useCallback(
    (id: string) => {
      dispatch(addId(id));
      dispatch(setVisible(true));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id]
  );
  return (
    <li key={id} className={s.item}>
      <Link
        href={`/${id}/details${window.location.search}`}
        onClick={() => handleClick(id)}
      >
        <img
          src={volumeInfo?.imageLinks?.thumbnail || DEFAULT_IMG}
          alt={volumeInfo.title}
        />
      </Link>
      <CardContent volumeInfo={volumeInfo} />
    </li>
  );
};

export default Card;