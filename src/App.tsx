import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from './hooks/useRedux';
import { Home } from './pages';
import { setPageNumber, setPageSize } from './store/slices/pagination';
import { setSearchValue } from './store/slices/search';

const App = () => {
  const dispatch = useAppDispatch();
  const [params] = useSearchParams();

  useEffect(() => {
    dispatch(setPageNumber(Number(params.get('page')) || 1));
    dispatch(setPageSize(Number(params.get('pageSize')) || 10));
    dispatch(setSearchValue(params.get('search') || 'nature'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return <Home />;
};

export default App;
