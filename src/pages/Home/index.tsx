import { useCallback, useEffect, useState } from 'react';
import { ListItems, Pagination, Search } from '../../components';
import Select from '../../components/Select';
import { fetchData } from '../../loaders';
import s from './styles.module.css';
import { useAppSelector } from '../../hooks/useRedux';

const Home = () => {
  // const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.books);
  const { value } = useAppSelector((state) => state.search);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

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
        const data = await fetchData(value, pageNumber, itemsPerPage);

        if (!data?.items) {
          setLoading(false);

          return;
        }

        // setBooks(data.items);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        throw new Error('error' + error);
      }
    }

    getData();
  }, [value, pageNumber, itemsPerPage]);

  return (
    <div className={s.container}>
      <Search />
      <button onClick={handleError}>get error</button>
      <Select setItemsPerPage={setItemsPerPage} />
      {loading ? (
        <div className="lds-dual-ring"></div>
      ) : data.length ? (
        <>
          <ListItems />
          <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
        </>
      ) : (
        <div style={{ fontSize: '4rem' }}>Not found books</div>
      )}
    </div>
  );
};

export default Home;
