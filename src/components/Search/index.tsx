import React, { useEffect, useState } from 'react';
import { PropsType } from './types';

const Search = ({ setQuery }: PropsType) => {
  const [value, setValue] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    localStorage.setItem('formValue', JSON.stringify(value));
    setQuery(value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    const storageData = localStorage.getItem('formValue');

    if (storageData) {
      setValue(JSON.parse(storageData));
    }
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">search</button>
      </form>
    </>
  );
};

export default Search;
