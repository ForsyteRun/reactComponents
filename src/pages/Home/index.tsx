import { useCallback, useState } from 'react';
import { ListItems, Search } from '../../components';
import Select from '../../components/Select';
import { useAppSelector } from '../../hooks/useRedux';
import { useGetAllBooksQuery } from '../../services/fetchData';
import s from './styles.module.css';
import { shallowEqual } from 'react-redux';
import { getStartIndex } from '../../utils';

const Home = () => {
  const { value } = useAppSelector((state) => state.search, {
    equalityFn: shallowEqual,
  });

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

  if (error || isError) {
    throw new Error('Error');
  }

  return (
    <div className={s.container}>
      <Search />
      <button onClick={handleError}>get error</button>
      <Select />
      {isFetching ? (
        <div className="lds-dual-ring"></div>
      ) : (
        <ListItems data={data?.items} />
      )}
    </div>
  );
};

export default Home;
