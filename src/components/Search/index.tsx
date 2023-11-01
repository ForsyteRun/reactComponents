import React, { useEffect, useState } from 'react';
import { PropsType } from './types';

const Search = ({ query, setQuery }: PropsType) => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  if (error) {
    throw new Error('Error');
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    localStorage.setItem('formValue', JSON.stringify(value));
    setQuery(value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleError = () => {
    setError(true);
  };

  useEffect(() => {
    const storageData = localStorage.getItem('formValue');

    if (storageData) {
      setValue(JSON.parse(storageData));
    }
  }, [query]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">search</button>
      </form>
      <button onClick={handleError}>get error</button>
    </>
  );
};

export default Search;
