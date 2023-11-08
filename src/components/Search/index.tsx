import React, { useCallback, useEffect, useState } from 'react';
import { setQueryParam } from '../../utils';
import { PropsType } from './types';

const Search = ({ setQuery }: PropsType) => {
  const [value, setValue] = useState<string>('');

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      localStorage.setItem('formValue', JSON.stringify(value));

      setQueryParam('page', '1');
      setQuery(value);
    },
    [value, setQuery]
  );

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setQueryParam('search', event.target.value);
      setValue(event.target.value);
    },
    []
  );

  useEffect(() => {
    const storageData = localStorage.getItem('formValue') as string;
    setValue(JSON.parse(storageData) ? JSON.parse(storageData) : '');
    setQuery(JSON.parse(storageData) ? JSON.parse(storageData) : '');
    setQueryParam('search', JSON.parse(storageData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form role="search" onSubmit={handleSubmit}>
      <input type="text" name="search" onChange={handleChange} value={value} />
      <button type="submit">search</button>
    </form>
  );
};

export default Search;
