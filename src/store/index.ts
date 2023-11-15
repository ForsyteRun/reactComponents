import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './slices/search';
import booksSlice from './slices/books';
import paginationSlice from './slices/pagination';

export const store = configureStore({
  reducer: {
    search: searchSlice,
    books: booksSlice,
    pagination: paginationSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
