/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { renderWithProviders } from '../../../__mocks__/reduxProvide';
import App from '../../../src/App';
import { IFetchData } from '../../../src/types';
import data from './../../../__mocks__/data.json';

global.React = React;
const jsonData: IFetchData = data;

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLoaderData: jest.fn(() => {
    return {
      items: jsonData.items.slice(0, 10),
    };
  }),
}));

describe('Pagination component', () => {
  it('updates URL query parameter when page changes', async () => {
    renderWithProviders(<App />);

    const page3 = await screen.findByText(/3/);

    fireEvent.click(page3);

    expect(window.location.search).toEqual('?page=3');
  });
});
