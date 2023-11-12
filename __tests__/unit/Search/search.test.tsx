/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { act, render } from '@testing-library/react';
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from '../../../src/App';
import { getStorageData } from '../../../src/utils';

global.React = React;

jest.mock('../../../src/utils');
jest.mock('./../../../src/pages/Home/index');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/mocked-path',
  }),
  useRouteMatch: () => ({ url: '/mocked-url' }),
  useLoaderData: jest.fn(() => {
    return {
      items: '',
    };
  }),
}));

describe('Search component', () => {
  it('clicking the Search button saves the entered value to the local storage;', async () => {
    const router = createBrowserRouter([
      {
        id: 'root',
        path: '/',
        element: <App />,
        loader: () => null,
        errorElement: null,
      },
    ]);

    await act(async () => {
      render(<RouterProvider router={router} />);
    });

    expect(getStorageData).toHaveBeenCalled();
  });
});
