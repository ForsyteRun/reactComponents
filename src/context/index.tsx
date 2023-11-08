import {
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
  useEffect,
} from 'react';
import { IItem } from '../types';

const BooksContext = createContext<IItem[]>([]);
const SetBooksContext = createContext<Dispatch<SetStateAction<IItem[]>>>(
  () => {}
);

export const useBooksValue = () => {
  return useContext(BooksContext);
};

export const useSetBooksValue = () => {
  return useContext(SetBooksContext);
};

const BooksProvider = ({
  value,
  children,
}: {
  value: IItem[];
  children: ReactNode;
}) => {
  const [books, setBooks] = useState<IItem[]>(value);

  useEffect(() => {
    setBooks(value);
  }, [value]);

  return (
    <BooksContext.Provider value={books}>
      <SetBooksContext.Provider value={setBooks}>
        {children}
      </SetBooksContext.Provider>
    </BooksContext.Provider>
  );
};

export default BooksProvider;
