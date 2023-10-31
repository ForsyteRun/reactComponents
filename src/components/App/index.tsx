import React, { useEffect, useState } from 'react';
import ListItems from '../ListItem';
import Search from '../Search';
import s from './App.module.css';
import { URL } from '../../constants';
import { IItem } from '../../types';
import { IFetchData } from './types';

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('nature');
  const [books, setBooks] = useState<IItem[]>([]);

  const fetchData = async (URL: string, query: string): Promise<IItem[]> => {
    const response = await fetch(URL + query.trim());
    const data: IFetchData = await response.json();
    return data.items;
  };

  if (error) {
    throw new Error('Error');
  }

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const storageData = localStorage.getItem('formValue');

        const data = await fetchData(URL, storageData ? storageData : query);

        if (data.length) {
          setLoading(false);
          setBooks(data);
        } else {
          throw new Error('Request failed');
        }
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
      {loading ? (
        <div className="lds-dual-ring"></div>
      ) : (
        <ListItems items={books} />
      )}
    </div>
  );
};

export default App;
