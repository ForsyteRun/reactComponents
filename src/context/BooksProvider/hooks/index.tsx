import { useContext } from 'react';
import { BooksContext, SetBooksContext } from '..';

export const useBooksValue = () => {
  return useContext(BooksContext);
};

export const useSetBooksValue = () => {
  return useContext(SetBooksContext);
};
