import { useEffect, useState } from 'react';
import { ITEMS_PER_PAGE, URL } from '../../constants';
import { IItem } from '../../types';
import fetchData from '../../utils/fetchData';
import ListItems from '../ListItem';
import Search from '../Search';
import s from './App.module.css';
import Pagination from '../Pagination';
import { useLocation } from 'react-router-dom';

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('nature');
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pagesCount, setPagesCount] = useState<number>(10);
  const [books, setBooks] = useState<IItem[]>([]);
  const [error, setError] = useState<boolean>(false);

  const location = useLocation();

  if (error) {
    throw new Error('Error');
  }

  const currentStartIndex = parseInt(location.search.replace(/[^\d]/g, ''));

  const handleError = () => {
    setError(true);
  };

  const getPagesCount = (total: number, itemsPerPage: number): number => {
    return Math.ceil(total / itemsPerPage);
  };

  useEffect(() => {
    setPageNumber(currentStartIndex);
  }, [currentStartIndex]);

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
          ITEMS_PER_PAGE,
          pageNumber
        );

        console.log(data.totalItems, ITEMS_PER_PAGE);

        const count = getPagesCount(data.totalItems, ITEMS_PER_PAGE);

        setPagesCount(count);
        setLoading(false);
        setBooks(data.items);
      } catch (error) {
        setLoading(false);
        setBooks([]);
        setError(true);
      }
    })();
  }, [query, pageNumber]);

  return (
    <div className={s.container}>
      <Search setQuery={setQuery} />
      <button onClick={handleError}>get error</button>
      {loading ? (
        <div className="lds-dual-ring"></div>
      ) : (
        <>
          <ListItems items={books} query={query} />
          <Pagination pagesCount={pagesCount} pageNumber={pageNumber} />
        </>
      )}
    </div>
  );
};

export default App;
