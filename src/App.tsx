import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import s from './App.module.css';
import { ListItems, Pagination, Search } from './components';
import { fetchDataByQuery } from './loaders/fetchData';
import { IFetchData, IItem } from './types';

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [bookId, setBookId] = useState<string>('');
  const [query, setQuery] = useState<string>('');
  const [books, setBooks] = useState<IItem[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const fetchData = useLoaderData() as IFetchData;

  console.log(bookId);

  if (error) {
    throw new Error('Error');
  }

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        const data = await fetchDataByQuery(query, pageNumber);

        if (!data) {
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

    fetchData();
  }, [query, pageNumber]);

  useEffect(() => {
    setBooks(fetchData.items);
  }, [fetchData]);

  const handleError = () => {
    setError(true);
  };

  return (
    <div className={s.container}>
      <Search setQuery={setQuery} />
      <button onClick={handleError}>get error</button>
      {loading ? (
        <div className="lds-dual-ring"></div>
      ) : books ? (
        <>
          <ListItems items={books} setBookId={setBookId} />
          <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
        </>
      ) : (
        <div>Not found book with name {query ? query : 'Noname'}</div>
      )}
    </div>
  );
};

export default App;
