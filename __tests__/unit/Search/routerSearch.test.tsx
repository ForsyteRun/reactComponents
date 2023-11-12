/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Home } from '../../../src/pages';

global.React = React;

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
});
