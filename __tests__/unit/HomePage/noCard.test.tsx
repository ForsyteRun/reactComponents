/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/react';
import React from 'react';
import { renderWithProviders } from '../../../__mocks__/reduxProvide';
import App from '../../../src/App';

global.React = React;

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLoaderData: jest.fn(() => {
    return {
      items: [],
    };
  }),
}));

test('render error message when 0 card present in Home Page init loading', async () => {
  renderWithProviders(<App />);

  await waitFor(() => {
    expect(screen.getByText('Not found books')).toBeInTheDocument();
  });
});
