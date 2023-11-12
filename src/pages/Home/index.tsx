import { useCallback, useEffect, useState } from 'react';
import { ListItems, Pagination, Search } from '../../components';
import Select from '../../components/Select';
import {
  useBooksValue,
  useSetBooksValue,
} from '../../context/BooksProvider/hooks';
import { useSearchValue } from '../../context/SearchProvider/hooks';
import { fetchData } from '../../loaders';
import s from './styles.module.css';

const Home = () => {
  const books = useBooksValue();
  const query = useSearchValue();
  const setBooks = useSetBooksValue();

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
        const data = await fetchData(query, pageNumber, itemsPerPage);

        if (!data?.items) {
          setBooks([]);
          setLoading(false);

          return <div>Not found book</div>;
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

  console.log(books.length);

  return (
    <div className={s.container}>
      <Search />
      <button onClick={handleError}>get error</button>
      <Select setItemsPerPage={setItemsPerPage} />
      {loading ? (
        <div className="lds-dual-ring"></div>
      ) : books.length ? (
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
