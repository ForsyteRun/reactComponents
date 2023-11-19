/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useRedux';
import setQueryParam from '../../utils/setQueryParam';

const Search = () => {
  const { value } = useAppSelector((state) => state.search);

  const [queryOnChange, setQueryOnChange] = useState<string>(value);
  const [, setSearchParams] = useSearchParams();

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const form = event.target as HTMLFormElement;
      const input = form.elements.namedItem('search') as HTMLInputElement;

      setSearchParams((params) => {
        params.set('page', '1');
        params.set('search', input.value || 'nature');
        return params;
      });
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
