/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { renderWithProviders } from '../../../__mocks__/reduxProvide';
import App from '../../../src/App';

global.React = React;

describe('Search component', () => {
  it('clicking the Search button do not saves the entered value to the local storage;', () => {
    const storedValue = 'Hello';

    renderWithProviders(<App />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: storedValue } });

    const searchBtn = screen.getAllByRole('button')[0];
    fireEvent.click(searchBtn);

    const storageData = JSON.parse(localStorage.getItem('formValue') as string);
    expect(storageData).toBeNull;
  });
});
