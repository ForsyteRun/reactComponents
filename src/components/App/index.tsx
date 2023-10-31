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

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const storageData = localStorage.getItem('formValue');

        const data = await fetchData(
          URL,
          storageData ? JSON.parse(storageData) : query
        );

        setLoading(false);
        setBooks(data);
      } catch (error) {
        setLoading(false);
        setBooks([]);
      }
    })();
  }, [query]);

  return (
    <div className={s.container}>
      <Search setQuery={setQuery} query={query} />
      {loading ? (
        <div className="lds-dual-ring"></div>
      ) : books ? (
        <ListItems items={books} />
      ) : (
        <div>Not found</div>
      )}
    </div>
  );
};

export default App;
