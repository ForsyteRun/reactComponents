import React, { useCallback, useEffect, useState } from 'react';
import {
  useSearchValue,
  useSetSearchValue,
} from '../../context/SearchProvider/hooks';
import { setQueryParam } from '../../utils';

const Search = () => {
  const setQuery = useSetSearchValue();
  const query = useSearchValue();

  const [value, setValue] = useState(query);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const form = event.target as HTMLFormElement;
      const input = form.elements.namedItem('search') as HTMLInputElement;

      localStorage.setItem('formValue', JSON.stringify(input.value));

      setQueryParam('page', '1');
      setQuery(input.value);
    },
    [setQuery]
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
    setQuery(JSON.parse(storageData) ? JSON.parse(storageData) : '');
    setQueryParam('search', JSON.parse(storageData));
  }, [setQuery]);

  return (
    <form role="search" onSubmit={handleSubmit}>
      <input type="text" name="search" onChange={handleChange} value={value} />
      <button type="submit">search</button>
    </form>
  );
};

export default Search;
