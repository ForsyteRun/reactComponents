// import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import BooksProvider from './context';
import { Home } from './pages';
import { IFetchData } from './types';

const App = () => {
  const fetchInitData = useLoaderData() as IFetchData;

  return (
    <BooksProvider value={fetchInitData.items}>
      <Home />
    </BooksProvider>
  );
};

export default App;
