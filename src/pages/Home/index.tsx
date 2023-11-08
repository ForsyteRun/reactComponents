import { useCallback, useEffect, useState } from 'react';
import { ListItems, Pagination, Search } from '../../components';
import Select from '../../components/Select';
import { fetchData } from '../../loaders';
import s from './styles.module.css';
import { useBooksValue, useSetBooksValue } from '../../context';

const Home = () => {
  const books = useBooksValue();
  const setBooks = useSetBooksValue();

  const [loading, setLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  if (error) {
    throw new Error('Error');
  }

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const data = await fetchData(query, pageNumber, itemsPerPage);

        if (!data?.items) {
          setLoading(false);
          return;
        }

        setBooks(data.items);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        throw new Error('error' + error);
      }
    }

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, pageNumber, itemsPerPage]);

  const handleError = useCallback(() => {
    setError(true);
  }, []);

  return (
    <div className={s.container}>
      <Search setQuery={setQuery} />
      <button onClick={handleError}>get error</button>
      <Select setItemsPerPage={setItemsPerPage} />
      {loading ? (
        <div className="lds-dual-ring"></div>
      ) : books ? (
        <>
          <ListItems />
          <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
        </>
      ) : (
        <div>Not found book with name {query ? query : 'Noname'}</div>
      )}
    </div>
  );
};

export default Home;
