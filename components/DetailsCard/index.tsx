import Image from 'next/image';
import React, { useCallback, useEffect } from 'react';

import { toggleLoading } from '../../store/slices/loading';
import CardContent from '../CardContent';
import { useAppDispatch } from './../../hooks/useRedux';
import { DEFAULT_IMG } from './../../utils/constants';
import s from './detailsCard.module.css';
import { IItem } from '../../types';
import { useRouter } from 'next/router';

const DetailsCard = React.memo(
  ({ data, isFetching }: { data: IItem | undefined; isFetching: boolean }) => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const handleClick = useCallback(() => {
      const query = router.asPath.split('?');

      router.push(`/${query[1] ? '?' + query[1] : ''}`);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      if (isFetching) {
        dispatch(toggleLoading(true));
      } else {
        dispatch(toggleLoading(false));
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFetching]);

    if (!data) {
      return;
    }

    const { volumeInfo } = data;

    // return isFetching ? (
    //   <div className={s.container}>
    //     <div className="lds-dual-ring"></div>
    //   </div>
    // ) : (
    return (
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
    );
  }
);
export default DetailsCard;
