/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import BooksProvider from '../../src/context/BooksProvider';
import { Home } from '../../src/pages/index';
import { BrowserRouter } from 'react-router-dom';

global.React = React;

test('renders async Home', async () => {
  render(
    <BrowserRouter>
      <BooksProvider
        value={[
          {
            id: 'wGTwAAAAMAAJ',
            volumeInfo: {
              title: "Nature's Economy",
              language: 'en',
              pageCount: 888,
              imageLinks: {
                thumbnail:
                  'http://books.google.com/books/content?id=wGTwAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
              },
              authors: ['qqq'],
            },
          },
        ]}
      >
        <Home />
      </BooksProvider>
    </BrowserRouter>
  );
  await waitFor(() => {
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
