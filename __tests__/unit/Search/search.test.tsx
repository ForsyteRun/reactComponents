/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import App from '../../../src/App';
import { Home } from '../../../src/pages';
import { getStorageData } from '../../../src/utils';

global.React = React;

jest.mock('../../../src/utils');

describe('Search component', () => {
  it('clicking the Search button saves the entered value to the local storage;', () => {
    const storedValue = 'Hello';

    render(<Home />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: storedValue } });

    const searchBtn = screen.getAllByRole('button')[0];
    fireEvent.click(searchBtn);

    const storageData = JSON.parse(localStorage.getItem('formValue') as string);
    expect(storageData).toBe(storedValue);
  });

  it('clicking the Search button saves the entered value to the local storage;', () => {
    const router = createMemoryRouter([{ path: '/', element: <App /> }], {
      initialEntries: ['/'],
    });

    render(<RouterProvider router={router} />);
    expect(getStorageData).toHaveBeenCalled();
  });
});
