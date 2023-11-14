import React, { useCallback, useEffect, useState } from 'react';
import { setQueryParam } from '../../utils';
import { storageData } from '../../types';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { setSearchValue } from '../../store/slices/search';

const Search = () => {
  const { value } = useAppSelector((state) => state.search);
  const dipatch = useAppDispatch();

  const [query, setQuery] = useState(value);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const form = event.target as HTMLFormElement;
      const input = form.elements.namedItem('search') as HTMLInputElement;

      localStorage.setItem(storageData.formValue, JSON.stringify(input.value));

      setQueryParam('page', '1');

      dipatch(setSearchValue(input.value));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value]
  );

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setQueryParam('search', event.target.value);
      setQuery(event.target.value);
    },
    []
  );

  useEffect(() => {
    const data = localStorage.getItem(storageData.formValue) as string;
    setQuery(JSON.parse(data) ? JSON.parse(data) : '');
    setQueryParam('search', JSON.parse(data));
  }, []);

  return (
    <form role="search" onSubmit={handleSubmit}>
      <input type="text" name="search" onChange={handleChange} value={query} />
      <button type="submit">search</button>
    </form>
  );
};

export default Search;
