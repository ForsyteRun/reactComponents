import {
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from 'react';
import { IItem } from '../../types';

export const BooksContext = createContext<IItem[]>([]);
export const SetBooksContext = createContext<Dispatch<SetStateAction<IItem[]>>>(
  () => {}
);

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
