/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import BooksProvider from '../../../src/context/BooksProvider';
import { Home } from '../../../src/pages/index';
import { IFetchData } from '../../../src/types';
import data from './../../../__mocks__/data.json';

global.React = React;
const jsonData: IFetchData = data;

describe('Pagination component', () => {
  it('updates URL query parameter when page changes', async () => {
    render(
      <BrowserRouter>
        <BooksProvider value={jsonData.items.slice(0, 10)}>
          <Home />
        </BooksProvider>
      </BrowserRouter>
    );

    await waitFor(() => {
      const page3 = screen.getByText(/3/);

      fireEvent.click(page3);

      expect(window.location.search).toEqual('?page=3');
    });
  });
});
