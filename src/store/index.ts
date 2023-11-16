import {
  ThunkMiddleware,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import searchSlice from './slices/search';
import paginationSlice from './slices/pagination';
import { booksApi } from '../services/fetchData';

const rootReducer = combineReducers({
  [booksApi.reducerPath]: booksApi.reducer,
  search: searchSlice,
  pagination: paginationSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware as ThunkMiddleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
