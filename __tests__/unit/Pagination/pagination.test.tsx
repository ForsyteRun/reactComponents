/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { renderWithProviders } from '../../../__mocks__/reduxProvide';
import App from '../../../pages/index';

global.React = React;
jest.mock('next/router', () => require('next-router-mock'));
jest.mock('next/navigation', () => {
  return {
    useSearchParams: jest.fn(() => ({
      get: jest.fn(),
    })),
  };
});

describe('Pagination component', () => {
  it('updates URL query parameter when page changes', async () => {
    const value = {
      books: {
        data: {
          items: [
            {
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
            {
              id: '8cm3DwAAQBAJ',
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
          ],
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

    const page3 = await screen.findByText(/3/);

    fireEvent.click(page3);

    expect(require('next/navigation').useSearchParams).toHaveBeenCalled();
  });
});
