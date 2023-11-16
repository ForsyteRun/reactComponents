import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IFetchData } from '../types';

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.googleapis.com/books/v1/volumes',
  }),
  endpoints: (builder) => ({
    getAllBooks: builder.query<IFetchData, string>({
      query: () => '?q=nature',
    }),
    getBook: builder.query({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetAllBooksQuery } = booksApi;
