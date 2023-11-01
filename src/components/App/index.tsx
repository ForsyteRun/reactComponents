import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { URL } from '../../constants';
import { IItem } from '../../types';
import fetchData from '../../utils/fetchData';
import ListItems from '../ListItem';
import Pagination from '../Pagination';
import Search from '../Search';
import s from './App.module.css';

const App = () => {
  const location = useLocation();

  const [loading, setLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('nature');
  const [books, setBooks] = useState<IItem[]>([]);
  const [error, setError] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [detail, setDetail] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchParams, setSearchParams] = useSearchParams();

  if (error) {
    throw new Error('Error');
  }

  const removeQueryParams = () => {
    const param = searchParams.get('page');

    if (param) {
      searchParams.delete('page');

      setSearchParams(searchParams);
    }
  };

  const current = parseInt(location.search.replace(/[^\d]/g, ''));

  useEffect(() => {
    if (current) {
      setCurrentPage(current);
    }
  }, [current]);

  useEffect(() => {
    setCurrentPage(1);
    removeQueryParams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const handleError = () => {
    setError(true);
  };

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const storageData = JSON.parse(
          localStorage.getItem('formValue') as string
        );

        const data = await fetchData(
          URL,
          storageData ? storageData : query,
          currentPage
        );

        setLoading(false);
        setBooks(data.items);
      } catch (error) {
        setLoading(false);
        setBooks([]);
        setError(true);
      }
    })();
  }, [query, currentPage]);

  return (
    <div className={s.container}>
      <Search setQuery={setQuery} />
      <button onClick={handleError}>get error</button>
      {loading ? (
        <div className="lds-dual-ring"></div>
      ) : books ? (
        <>
          <ListItems items={books} />
          <Pagination pageNumber={currentPage} />
        </>
      ) : (
        <div>Not found book with name {query ? query : 'Noname'}</div>
      )}
    </div>
  );
};

export default App;
