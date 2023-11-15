import { useCallback, useEffect, useState } from 'react';
import { ListItems, Search } from '../../components';
import Select from '../../components/Select';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { fetchData } from '../../loaders';
import { addBooks } from '../../store/slices/books';
import s from './styles.module.css';

const Home = () => {
  const dispatch = useAppDispatch();

  const { value: query } = useAppSelector((state) => state.search);
  const { currentPage, pageSize } = useAppSelector((state) => state.pagination);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  if (error) {
    throw new Error('Error');
  }

  const handleError = useCallback(() => {
    setError(true);
  }, []);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const data = await fetchData(query, currentPage, pageSize);

        if (!data?.items) {
          setLoading(false);
          return;
        }

        dispatch(addBooks(data.items));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        throw new Error('error' + error);
      }
    }

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, , pageSize, currentPage]);

  return (
    <div className={s.container}>
      <Search />
      <button onClick={handleError}>get error</button>
      <Select />
      {loading ? <div className="lds-dual-ring"></div> : <ListItems />}
    </div>
  );
};

export default Home;
