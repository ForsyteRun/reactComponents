/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { setSearchValue } from '../../store/slices/search';
import { storageData } from '../../types';
import { getStorageData, setQueryParam } from '../../utils';

const Search = () => {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state) => state.search);

  const [queryOnChange, setQueryOnChange] = useState('');

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const form = event.target as HTMLFormElement;
      const input = form.elements.namedItem('search') as HTMLInputElement;

      localStorage.setItem(storageData.formValue, JSON.stringify(input.value));

      setQueryParam('page', '1');

      dispatch(setSearchValue(input.value));
    },
    []
  );

  const handleChange = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      setQueryParam('search', value);
      setQueryOnChange(value);
    },
    []
  );

  useEffect(() => {
    const data = getStorageData(storageData.formValue);

    if (data) {
      dispatch(setSearchValue(data ? data : ''));
      setQueryParam('search', data);
    }
  }, []);

  useEffect(() => {
    setQueryOnChange(value);
  }, [value]);

  return (
    <form role="search" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        onChange={handleChange}
        value={queryOnChange}
      />
      <button type="submit">search</button>
    </form>
  );
};

export default Search;
