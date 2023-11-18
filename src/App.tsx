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
    if (params.get('page')) {
      dispatch(setPageNumber(Number(params.get('page'))));
    }

    if (params.get('pageSize')) {
      dispatch(setPageSize(Number(params.get('pageSize'))));
    }

    if (params.get('search')) {
      dispatch(setSearchValue(params.get('search') as string));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return <Home />;
};

export default App;
