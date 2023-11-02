import React, { useEffect, useState } from 'react';
import { PropsType } from './types';
import setQueryParam from '../../utils/setQueryParam';

const Search = ({ setQuery }: PropsType) => {
  const [value, setValue] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    localStorage.setItem('formValue', JSON.stringify(value));
    setQuery(value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQueryParam('search', event.target.value);
    setValue(event.target.value);
  };

  useEffect(() => {
    const storageData = localStorage.getItem('formValue') as string;
    setValue(JSON.parse(storageData));
    setQuery(JSON.parse(storageData));
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
