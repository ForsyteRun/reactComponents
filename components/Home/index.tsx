/* eslint-disable import/no-unresolved */
import { ReactNode, useCallback, useEffect, useState } from 'react';

import { IItem } from '@/types';
import { ListItems, Search, Select } from './../../components';
import { useAppDispatch } from './../../hooks/useRedux';
import ErrorPage from './../../pages/error';
import { toggleLoading } from './../../store/slices/loading';
import s from './styles.module.css';

interface IHome {
  children?: ReactNode;
  data?: IItem[] | undefined;
  isError?: boolean;
  isFetching?: boolean;
}

const Home = ({ children, data, isError, isFetching }: IHome) => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState<boolean>(false);

  const handleError = useCallback(() => {
    setError(true);
  }, []);

  useEffect(() => {
    if (isFetching) {
      dispatch(toggleLoading(true));
    } else {
      dispatch(toggleLoading(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching]);

  if (error || isError) {
    return <ErrorPage />;
  }

  return (
    <>
      <div className={s.container}>
        <Search />
        <button onClick={handleError}>get error</button>
        <Select />
        {isFetching ? (
          <div className="lds-dual-ring"></div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <ListItems data={data} />
            {children}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
