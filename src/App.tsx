import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import s from './App.module.css';
import { ListItems, Search } from './components';
import { fetchDataByQuery } from './loaders/fetchData';
import { IFetchData, IItem } from './types';

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [bookId, setBookId] = useState<string>('');
  const [query, setQuery] = useState<string>('');
  const [books, setBooks] = useState<IItem[]>([]);
  const [error, setError] = useState<boolean>(false);
  // const [currentPage, setCurrentPage] = useState<number>(1);
  // const [searchParams, setSearchParams] = useSearchParams();

  const fetchData = useLoaderData() as IFetchData;

  console.log(bookId);

  if (error) {
    throw new Error('Error');
  }

  // const removeQueryParams = () => {
  //   const param = searchParams.get('page');

  //   if (param) {
  //     searchParams.delete('page');

  //     setSearchParams(searchParams);
  //   }
  // };

  // useEffect(() => {
  //   const pageNumber = searchParams.get('page');

  //   if (pageNumber) {
  //     setCurrentPage(Number(pageNumber));
  //   }
  // }, [searchParams]);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = await fetchDataByQuery(query);

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
  }, [query]);

  useEffect(() => {
    setBooks(fetchData.items);
  }, [fetchData]);

  // useEffect(() => {
  //   const data = fetchDataByQuery(query);

  //   console.log(data);

  //   // setCurrentPage(1);
  //   // removeQueryParams();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [query]);

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
          {/* <Pagination pageNumber={currentPage} /> */}
        </>
      ) : (
        <div>Not found book with name {query ? query : 'Noname'}</div>
      )}
    </div>
  );
};

export default App;
