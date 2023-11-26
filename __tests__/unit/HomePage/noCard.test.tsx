/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import React from 'react';
import { renderWithProviders } from '../../../__mocks__/reduxProvide';
import { http, HttpResponse } from 'msw';
import { server } from './../../../__mocks__/node';
import App from './../../../pages/index';
import { IItem } from '../../../types';

global.React = React;
jest.mock('next/router', () => require('next-router-mock'));
jest.mock('next/navigation', () => {
  return {
    useSearchParams: jest.fn(() => ({
      get: jest.fn(),
    })),
  };
});

test('render error message when 0 card present in Home Page init loading', () => {
  server.use(
    http.get('https://www.googleapis.com/books/v1/volumes', () => {
      return HttpResponse.json({ msg: 'error loading data' });
    })
  );

  const value = {
    books: {
      data: {
        items: [] as IItem[],
        kind: 'test',
        totalItems: 100,
      },
      singleBook: {
        id: 'pfaeBAAAQBAJ',
        volumeInfo: {
          title:
            'Disorders of Sex Development in Gynaecology (Russian edition)',
          authors: ['Zograb Makiyan'],
          pageCount: 167,
          imageLinks: {
            thumbnail:
              'http://books.google.com/books/content?id=pfaeBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          },
          language: 'ru',
        },
      },
    },
    loading: {
      isLoading: false,
    },
  };

  renderWithProviders(<App value={value} />);

  expect(screen.queryAllByRole('img')).toStrictEqual([]);
});
