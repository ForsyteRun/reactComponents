import React, { useEffect, useState } from 'react';
import ListItems from '../ListItem';
import Search from '../Search';
import s from './App.module.css';
import { URL } from '../../constants';
import { IItem } from '../../types';
import fetchData from '../../utils/fetchData';

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('nature');
  const [books, setBooks] = useState<IItem[]>([]);
  const [error, setError] = useState<boolean>(false);

  if (error) {
    throw new Error('Error');
  }

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

        const data = await fetchData(URL, storageData ? storageData : query);

        setLoading(false);
        setBooks(data);
      } catch (error) {
        setLoading(false);
        setBooks([]);
        setError(true);
      }
    })();
  }, [query]);

  return (
    <div className={s.container}>
      <Search setQuery={setQuery} />
      <button onClick={handleError}>get error</button>
      {loading ? (
        <div className="lds-dual-ring"></div>
      ) : (
        <ListItems items={books} query={query} />
      )}
    </div>
  );
};

export default App;
