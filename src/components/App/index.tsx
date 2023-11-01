import { useEffect, useState } from 'react';
import { URL } from '../../constants';
import { IItem } from '../../types';
import fetchData from '../../utils/fetchData';
import ListItems from '../ListItem';
import Search from '../Search';
import s from './App.module.css';
import Pagination from '../Pagination';
import { useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();

  const [loading, setLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('nature');
  const [books, setBooks] = useState<IItem[]>([]);
  const [error, setError] = useState<boolean>(false);

  if (error) {
    throw new Error('Error');
  }

  const currentPage = parseInt(location.search.replace(/[^\d]/g, ''));

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
