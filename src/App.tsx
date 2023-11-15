import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useAppDispatch } from './hooks/useRedux';
import { Home } from './pages';
import { addBooks } from './store/slices/books';
import { IFetchData } from './types';

const App = () => {
  const dispatch = useAppDispatch();
  const fetchInitData = useLoaderData() as IFetchData;

  useEffect(() => {
    dispatch(addBooks(fetchInitData.items));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Home />;
};

export default App;
