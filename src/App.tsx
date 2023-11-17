import { useEffect } from 'react';
import { useAppDispatch } from './hooks/useRedux';
import { Home } from './pages';
import { setSearchValue } from './store/slices/search';
import { setPageNumber } from './store/slices/pagination';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const queryFromUrl = searchParams.get('search');
    const pageFromUrl = searchParams.get('page');

    if (!queryFromUrl) {
      return;
    }

    dispatch(setPageNumber(Number(pageFromUrl) || 1));
    dispatch(setSearchValue(queryFromUrl));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Home />;
};

export default App;
