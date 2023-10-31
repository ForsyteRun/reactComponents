import React, { useEffect, useState } from 'react';
import { PropsType } from './types';

const Search = ({ query, setQuery }: PropsType) => {
  const [value, setValue] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const input = form.firstChild as HTMLInputElement;

    localStorage.setItem('formValue', JSON.stringify(input.value));

    setQuery(input.value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
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
      {/* <button onClick={handleError}>get error</button> */}
    </>
  );
};

export default Search;
