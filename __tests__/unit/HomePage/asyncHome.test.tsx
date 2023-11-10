/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import BooksProvider from '../../../src/context/BooksProvider';
import { Home } from '../../../src/pages/index';
import { BrowserRouter } from 'react-router-dom';
import data from './../../../__mocks__/data.json';
import { IFetchData } from '../../../src/types';

global.React = React;

const jsonData: IFetchData = data;

test('renders async Home', async () => {
  render(
    <BrowserRouter>
      <BooksProvider value={jsonData.items}>
        <Home />
      </BooksProvider>
    </BrowserRouter>
  );
  await waitFor(() => {
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
