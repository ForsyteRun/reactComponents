/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { DetailsCard } from '../../../components';
import { renderWithProviders } from '../../../__mocks__/reduxProvide';
import App from '../../../pages/index';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { useRouter } from 'next/router';

global.React = React;
jest.mock('next/router', () => {
  return {
    useRouter: jest.fn(() => ({
      asPath: jest.fn(() => '/WWWWW?page=2'),
    })),
  };
});

jest.mock('next/navigation', () => {
  return {
    useSearchParams: jest.fn(() => ({
      get: jest.fn(),
    })),
  };
});

jest.mock('next/image', () => ({ src, alt }: { src: string; alt: string }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src={src} alt={alt} />
));

describe('DetailsCard component', () => {
  it('should have images', async () => {
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
        isLoadingDetails: false,
      },
    };

    const pushMock = jest.fn();

    (useRouter as jest.Mock).mockReturnValue({
      asPath: '/WWWWW?page=2',
      push: pushMock,
    });

    renderWithProviders(<App value={value} />);

    const cards = await screen.findAllByRole('img');

    waitFor(() => {
      fireEvent.click(cards[0]);
    });

    expect(useRouter().asPath).toEqual('/WWWWW?page=2');
  });
  it('renders loader card details', () => {
    const mockData = {
      id: 'www',
      volumeInfo: {
        language: 'ru',
        pageCount: 10,
        authors: ['Ivanov'],
        title: 'Test Book',
        imageLinks: {
          thumbnail: 'test-image-url',
        },
      },
    };

    const { container } = renderWithProviders(<DetailsCard data={mockData} />);

    const spinner = container.querySelector('.lds-dual-ring');
    expect(spinner).toBeInTheDocument();
  });
});
