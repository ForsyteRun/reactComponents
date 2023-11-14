/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
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

describe('Card component', () => {
  beforeEach(() => {
    renderWithProviders(<App />);
  });

  it('change URI params by click on img', async () => {
    const images = await screen.findAllByRole('img');
    fireEvent.click(images[0]);

    expect(window.location.pathname).toBe('/pfaeBAAAQBAJ/details');
  });
});
