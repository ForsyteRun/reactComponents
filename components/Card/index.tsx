'client ';

import Link from 'next/link';
import { useCallback } from 'react';

import Image from 'next/image';
import { useAppDispatch } from '../../hooks/useRedux';
import { addId, setVisible } from '../../store/slices/card';
import { IItem } from '../../types';
import CardContent from '../CardContent';
import { DEFAULT_IMG } from './../../utils/constants';
import s from './style.module.css';
import { useRouter } from 'next/router';

const Card = ({ data: { id, volumeInfo } }: { data: IItem }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

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
        href={`/${id}/details?${router.asPath.split('?')[1] || ''}`}
        onClick={() => handleClick(id)}
      >
        <Image
          src={volumeInfo?.imageLinks?.thumbnail || DEFAULT_IMG}
          alt={volumeInfo.title}
          width={100}
          height={100}
          loading="eager"
        />
      </Link>
      <CardContent volumeInfo={volumeInfo} />
    </li>
  );
};

export default Card;
