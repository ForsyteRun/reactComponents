import { useAppDispatch } from './hooks/useRedux';
import { Home } from './pages';
import { setSearchValue } from './store/slices/search';
import { setPageNumber, setPageSize } from './store/slices/pagination';
import { useSearchParams } from 'react-router-dom';

const App = () => {
  const dispatch = useAppDispatch();

  const [params] = useSearchParams();
  const urlParams: Record<string, string> = {};

  for (const [key, value] of params.entries()) {
    urlParams[key] = value;
  }

  dispatch(setPageNumber(Number(urlParams['page']) || 1));
  dispatch(setPageSize(Number(urlParams['pageSize']) || 10));
  dispatch(setSearchValue(urlParams['search'] || 'nature'));

  return <Home />;
};

export default App;
