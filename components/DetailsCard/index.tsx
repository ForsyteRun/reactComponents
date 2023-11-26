import Image from 'next/image';
import React, { useCallback, useEffect } from 'react';

import { IItem } from '@/types';
import { setVisible } from '../../store/slices/card';
import { toggleLoading } from '../../store/slices/loading';
import CardContent from '../CardContent';
import { useAppDispatch } from './../../hooks/useRedux';
import { DEFAULT_IMG } from './../../utils/constants';
import s from './detailsCard.module.css';

const DetailsCard = React.memo(
  ({ data, isFetching }: { data: IItem | undefined; isFetching: boolean }) => {
    const dispatch = useAppDispatch();

    const handleClick = useCallback(() => {
      dispatch(setVisible(false));
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
        <div style={{ width: '10rem', height: '10rem' }}>
          <Image
            src={volumeInfo?.imageLinks?.thumbnail || DEFAULT_IMG}
            alt={volumeInfo.title}
            fill
          />
          <CardContent volumeInfo={volumeInfo} />
        </div>
        <div className={s.close} onClick={handleClick}></div>
      </div>
    );
  }
);
export default DetailsCard;
