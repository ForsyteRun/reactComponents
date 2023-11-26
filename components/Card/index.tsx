'client ';

import Link from 'next/link';
import { useCallback } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';
import { useAppDispatch } from '../../hooks/useRedux';
import { addId } from '../../store/slices/card';
import { toggleDetailsLoading } from '../../store/slices/loading';
import { IItem } from '../../types';
import CardContent from '../CardContent';
import { DEFAULT_IMG } from './../../utils/constants';
import s from './style.module.css';

const Card = ({ data: { id, volumeInfo } }: { data: IItem }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleClick = useCallback(
    (id: string) => {
      dispatch(addId(id));
      dispatch(toggleDetailsLoading(true));
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
          height={130}
          loading="eager"
        />
      </Link>
      <CardContent volumeInfo={volumeInfo} />
    </li>
  );
};

export default Card;
