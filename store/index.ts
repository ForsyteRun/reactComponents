import {
  // eslint-disable-next-line import/named
  ThunkMiddleware,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import { booksApi } from '../services/fetchData';
import cardSlice from './slices/card';
import loadingSlice from './slices/loading';
import paginationSlice from './slices/pagination';
import booksSlice from './slices/books';
import searchSlice from './slices/search';
import { createWrapper } from 'next-redux-wrapper';

const rootReducer = combineReducers({
  books: booksSlice,
  search: searchSlice,
  pagination: paginationSlice,
  card: cardSlice,
  loading: loadingSlice,
});

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (gDM) => gDM().concat(booksApi.middleware as ThunkMiddleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
