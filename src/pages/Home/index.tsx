import { useCallback, useState } from 'react';
import { ListItems, Search } from '../../components';
import Select from '../../components/Select';
import s from './styles.module.css';
import { useGetAllBooksQuery } from '../../services/fetchData';

const Home = () => {
  const { isError, isLoading } = useGetAllBooksQuery('');

  const [error, setError] = useState<boolean>(false);

  if (error || isError) {
    throw new Error('Error');
  }

  const handleError = useCallback(() => {
    setError(true);
  }, []);

  return (
    <div className={s.container}>
      <Search />
      <button onClick={handleError}>get error</button>
      <Select />
      {isLoading ? <div className="lds-dual-ring"></div> : <ListItems />}
    </div>
  );
};

export default Home;
