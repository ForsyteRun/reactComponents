import { useEffect } from 'react';
import { Home } from './pages';
import { IFetchData, storageData } from './types';
import { getStorageData } from './utils';
import { useAppDispatch } from './hooks/useRedux';
import { setSearchValue } from './store/slices/search';
import { useLoaderData } from 'react-router-dom';
import { addBooks } from './store/slices/books';

const App = () => {
  const storageQuery = getStorageData(storageData.formValue);

  const dispatch = useAppDispatch();
  const fetchInitData = useLoaderData() as IFetchData;

  useEffect(() => {
    dispatch(setSearchValue(storageQuery));
    dispatch(addBooks(fetchInitData.items));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Home />;
};

export default App;
