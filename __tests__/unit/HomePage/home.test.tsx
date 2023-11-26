/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { default as React } from 'react';
import { renderWithProviders } from '../../../__mocks__/reduxProvide';
import App from './../../../pages';

global.React = React;

jest.mock('next/router', () => require('next-router-mock'));
jest.mock('next/navigation', () => {
  return {
    useSearchParams: jest.fn(() => ({
      get: jest.fn(),
    })),
  };
});

describe('Home component', () => {
  let fragment: () => DocumentFragment;

  beforeEach(() => {
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

    const { asFragment } = renderWithProviders(<App value={value} />);

    fragment = asFragment;
  });

  test('snapshot page', () => {
    expect(fragment()).toMatchSnapshot();
  });

  test('render images', () => {
    const images = screen.getAllByRole('img');

    expect(images.length).toBe(2);
  });

  test('render correct title Card', async () => {
    const elements = await screen.findAllByText(/Sex Development/i);
    expect(elements[0]).toBeInTheDocument();
  });

  test('render correct author Card', async () => {
    const elements = await screen.findAllByText(/Zograb/i);
    expect(elements[0]).toBeInTheDocument();
  });

  test('render correct page count in first book', async () => {
    const elements = await screen.findAllByText(/Count/i);

    const nextSiblingValue = elements[0].nextElementSibling?.textContent;
    expect(nextSiblingValue).toEqual('167');
  });

  test('render correct language in first book', async () => {
    const elements = await screen.findAllByText(/language/i);

    const nextSiblingValue = elements[0].nextElementSibling?.textContent;
    expect(nextSiblingValue).toEqual('ru');
  });

  test('render correct img path in first book', async () => {
    const elements: HTMLImageElement[] =
      await screen.findAllByAltText(/Disorders of Sex/i);

    expect(elements[0].alt).toEqual(
      'Disorders of Sex Development in Gynaecology (Russian edition)'
    );
  });
});
