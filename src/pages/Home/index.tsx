import { useCallback, useState } from 'react';
import { shallowEqual } from 'react-redux';
import { ListItems, Search } from '../../components';
import Select from '../../components/Select';
import { useAppSelector } from '../../hooks/useRedux';
import { useGetAllBooksQuery } from '../../services/fetchData';
import s from './styles.module.css';

const Home = () => {
  const [value, currentPage, pageSize] = useAppSelector(
    ({ search: { value }, pagination: { currentPage, pageSize } }) => [
      value,
      currentPage,
      pageSize,
    ],
    shallowEqual
  );

  const { data, isError, isLoading } = useGetAllBooksQuery({
    value,
    startIndex: currentPage,
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
      {isLoading ? (
        <div className="lds-dual-ring"></div>
      ) : (
        <ListItems data={data?.items} />
      )}
    </div>
  );
};

export default Home;
