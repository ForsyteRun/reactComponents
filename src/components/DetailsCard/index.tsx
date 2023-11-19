import React, { useCallback, useEffect } from 'react';
import { DEFAULT_IMG } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { useGetBookQuery } from '../../services/fetchData';
import { setVisible } from '../../store/slices/card';
import CardContent from '../CardContent';
import s from './detailsCard.module.css';
import { toggleLoading } from '../../store/slices/loading';

const DetailsCard = React.memo(() => {
  const dispatch = useAppDispatch();
  const { bookId } = useAppSelector((state) => state.card);

  const { data, isFetching } = useGetBookQuery(bookId);

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

  return isFetching ? (
    <div className={s.container}>
      <div className="lds-dual-ring"></div>
    </div>
  ) : (
    <div className={s.container}>
      <div>
        <img
          src={volumeInfo?.imageLinks?.thumbnail || DEFAULT_IMG}
          alt={volumeInfo.title}
        />
        <CardContent volumeInfo={volumeInfo} />
      </div>
      <div className={s.close} onClick={handleClick}></div>
    </div>
  );
});
export default DetailsCard;
