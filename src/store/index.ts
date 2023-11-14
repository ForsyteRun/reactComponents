import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './slices/search';
import booksSlice from './slices/books';

export const store = configureStore({
  reducer: {
    search: searchSlice,
    books: booksSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
