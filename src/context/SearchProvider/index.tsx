import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';

export const SearchContext = createContext<string>('');
export const SetSearchContext = createContext<Dispatch<SetStateAction<string>>>(
  () => {}
);

const SearchProvider = ({
  value,
  children,
}: {
  value: string;
  children: ReactNode;
}) => {
  const [search, setSearch] = useState<string>(value);

  useEffect(() => {
    setSearch(value);
  }, [value]);

  return (
    <SearchContext.Provider value={search}>
      <SetSearchContext.Provider value={setSearch}>
        {children}
      </SetSearchContext.Provider>
    </SearchContext.Provider>
  );
};

export default SearchProvider;
