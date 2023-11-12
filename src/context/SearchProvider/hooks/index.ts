import { useContext } from 'react';
import { SearchContext, SetSearchContext } from '..';

export const useSearchValue = () => {
  return useContext(SearchContext);
};

export const useSetSearchValue = () => {
  return useContext(SetSearchContext);
};
