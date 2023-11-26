import Image from 'next/image';
import React, { useCallback } from 'react';

import { useRouter } from 'next/router';
import { IItem } from '../../types';
import CardContent from '../CardContent';
import { DEFAULT_IMG } from './../../utils/constants';
import s from './detailsCard.module.css';

const DetailsCard = React.memo(({ data }: { data: IItem | undefined }) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    const query = router.asPath.split('?');

    router.push(`/${query[1] ? '?' + query[1] : ''}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { volumeInfo } = data;

  return (
    <div>
      {data && (
        <div className={s.container}>
          <Image
            src={volumeInfo?.imageLinks?.thumbnail || DEFAULT_IMG}
            alt={volumeInfo.title}
            width={100}
            height={130}
          />
          <CardContent volumeInfo={volumeInfo} />
          <div className={s.close} onClick={handleClick}></div>
        </div>
      )}
    </div>
  );
});

export default DetailsCard;
