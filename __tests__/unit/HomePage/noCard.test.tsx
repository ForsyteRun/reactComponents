/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { default as React } from 'react';
import { BrowserRouter } from 'react-router-dom';
import BooksProvider from '../../../src/context/BooksProvider';
import { Home } from '../../../src/pages';

global.React = React;

test('render error message when 0 card present in Home Page init loading', async () => {
  render(
    <BrowserRouter>
      <BooksProvider value={[]}>
        <Home />
      </BooksProvider>
    </BrowserRouter>
  );
  await waitFor(() => {
    expect(screen.getByText('Not found books')).toBeInTheDocument();
  });
});
