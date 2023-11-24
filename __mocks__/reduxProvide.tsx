import React from 'react';
import * as toolkit from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

;
import searchSlice from './../store/slices/search';
import paginationSlice from './../store/slices/pagination';
import cardSlice from './../store/slices/card';
import loadingSlice from './../store/slices/loading';
import { booksApi } from './../services/fetchData';

export function renderWithProviders(
  ui,
  {
    preloadedState = {} as Record<string, string>,
    store = toolkit.configureStore({
      reducer: {
        [booksApi.reducerPath]: booksApi.reducer,
        search: searchSlice,
        pagination: paginationSlice,
        card: cardSlice,
        loading: loadingSlice,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(booksApi.middleware as toolkit.ThunkMiddleware),
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
        <Provider store={store}>{children}</Provider>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
