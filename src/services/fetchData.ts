import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IFetchData } from '../types';

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.googleapis.com/books/v1/volumes',
  }),
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
  }),
});

export const { useGetAllBooksQuery, useLazyGetAllBooksQuery } = booksApi;
