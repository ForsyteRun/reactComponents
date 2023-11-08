import { useCallback, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import s from './App.module.css';
import { IFetchData, IItem } from '../../types';
import { fetchData } from '../../loaders';
import { ListItems, Pagination, Search } from '../../components';
import Select from '../../components/Select';

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [books, setBooks] = useState<IItem[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  const fetchInitData = useLoaderData() as IFetchData;

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
  }, [query, pageNumber, itemsPerPage]);

  useEffect(() => {
    setBooks(fetchInitData.items);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <ListItems items={books} />
          <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
        </>
      ) : (
        <div>Not found book with name {query ? query : 'Noname'}</div>
      )}
    </div>
  );
};

export default App;
