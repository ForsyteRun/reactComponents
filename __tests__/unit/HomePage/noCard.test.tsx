/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/react';
import React from 'react';
import { renderWithProviders } from '../../../__mocks__/reduxProvide';
import App from '../../../src/App';
import { http, HttpResponse } from 'msw';
import { server } from './../../../__mocks__/node';

global.React = React;

test('render error message when 0 card present in Home Page init loading', async () => {
  server.use(
    http.get('https://www.googleapis.com/books/v1/volumes', () => {
      return HttpResponse.json({ msg: 'error loading data' });
    })
  );

  renderWithProviders(<App />);

  await waitFor(() => {
    expect(screen.getByText('Not found books')).toBeInTheDocument();
  });
});
