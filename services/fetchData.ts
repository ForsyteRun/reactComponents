import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IFetchData, IItem } from '../types';
import { HYDRATE } from 'next-redux-wrapper';

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.googleapis.com/books/v1/volumes',
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: ['Books'],
  endpoints: (builder) => ({
    getAllBooks: builder.query<
      IFetchData,
      { value: string; startIndex: number; maxResults: number }
    >({
      query: ({ value, startIndex, maxResults }) =>
        `?q=${
          value.length ? value : 'nature'
        }&startIndex=${startIndex}&maxResults=${maxResults}`,
      providesTags: ['Books'],
    }),
    getBook: builder.query<IItem, string>({
      query: (id) => `/${id}`,
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useLazyGetAllBooksQuery,
  useGetBookQuery,
  util: { getRunningQueriesThunk },
} = booksApi;

export const { getAllBooks, getBook } = booksApi.endpoints;
