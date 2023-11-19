import { ThunkMiddleware, configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { booksApi } from '../src/services/fetchData';
import paginationSlice from './../src/store/slices/pagination';
import searchSlice from './../src/store/slices/search';
import cardSlice from './../src/store/slices/card';
import loadingSlice from './../src/store/slices/loading';

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = configureStore({
      reducer: {
        [booksApi.reducerPath]: booksApi.reducer,
        search: searchSlice,
        pagination: paginationSlice,
        card: cardSlice,
        loading: loadingSlice,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(booksApi.middleware as ThunkMiddleware),
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <BrowserRouter>
        <Provider store={store}>{children}</Provider>;
      </BrowserRouter>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
