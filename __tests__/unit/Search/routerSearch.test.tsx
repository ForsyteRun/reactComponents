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

describe('Search component', () => {
  it('clicking the Search button saves the entered value to the local storage;', () => {
    const storedValue = 'Hello';

    renderWithProviders(<App />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: storedValue } });

    const searchBtn = screen.getAllByRole('button')[0];
    fireEvent.click(searchBtn);

    const storageData = JSON.parse(localStorage.getItem('formValue') as string);
    expect(storageData).toBe(storedValue);
  });
});
