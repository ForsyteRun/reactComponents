/* eslint-disable import/no-unresolved */
import { ReactNode, useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { shallowEqual } from 'react-redux';

import { useAppDispatch, useAppSelector } from './../../hooks/useRedux';
import { ListItems, Search, Select } from './../../components';
import { useGetAllBooksQuery } from './../../services/fetchData';
import { getStartIndex } from './../../utils';
import { toggleLoading } from './../../store/slices/loading';
import ErrorPage from './../../pages/error';
import s from './styles.module.css';
import { setPageNumber, setPageSize } from './../../store/slices/pagination';
import { setSearchValue } from './../../store/slices/search';

interface IHome {
  children?: ReactNode
}

const Home = ({children}: IHome) => {
  const params = useSearchParams();

  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state) => state.search, {
    equalityFn: shallowEqual,
  });

  useEffect(() => {
    if (params.get('page')) {
      dispatch(setPageNumber(Number(params.get('page'))));
    }

    if (params.get('pageSize')) {
      dispatch(setPageSize(Number(params.get('pageSize'))));
    }

    if (params.get('search')) {
      dispatch(setSearchValue(params.get('search') as string));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const { currentPage, pageSize } = useAppSelector(
    (state) => state.pagination,
    { equalityFn: shallowEqual }
  );

  const { data, isError, isFetching } = useGetAllBooksQuery({
    value,
    startIndex: getStartIndex(currentPage, pageSize),
    maxResults: pageSize,
  });

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
   return <ErrorPage />
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
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <ListItems data={data?.items} />
            {children}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
