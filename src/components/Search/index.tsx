/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { setSearchValue } from '../../store/slices/search';
import { setQueryParam } from '../../utils';

const Search = () => {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state) => state.search);

  const [queryOnChange, setQueryOnChange] = useState<string>(value);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const form = event.target as HTMLFormElement;
      const input = form.elements.namedItem('search') as HTMLInputElement;

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
