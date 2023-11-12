// import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import BooksProvider from './context/BooksProvider';
import SearchProvider from './context/SearchProvider';
import { Home } from './pages';
import { IFetchData, storageData } from './types';
import { getStorageData } from './utils';

const App = () => {
  const fetchInitData = useLoaderData() as IFetchData;

  const storageQuery = getStorageData(storageData.formValue);

  return (
    <SearchProvider value={storageQuery}>
      <BooksProvider value={fetchInitData.items}>
        <Home />
      </BooksProvider>
    </SearchProvider>
  );
};

export default App;
