/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';

import { useAppSelector } from '../../hooks/useRedux';
import setQueryParam from '../../utils/setQueryParam';
import { useRouter } from 'next/router';

const Search = () => {
  const {query, pathname, push} = useRouter();
  const { value } = useAppSelector((state) => state.search);
  
  const [queryOnChange, setQueryOnChange] = useState<string>(value);

  const handleSubmit = 
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      
      const form = event.target as HTMLFormElement;
      const input = form.elements.namedItem('search') as HTMLInputElement;

      const modifyQuery = {
        ...query,
        'page': '1',
        'search': input.value || 'nature'
      }

      push({ pathname, query: modifyQuery })
    }

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
