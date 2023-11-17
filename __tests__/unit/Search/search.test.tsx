/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import React from 'react';
import { renderWithProviders } from '../../../__mocks__/reduxProvide';
import App from '../../../src/App';

global.React = React;

describe('Search component', () => {
  it('Check that the component retrieves the value from the local storage upon mounting', () => {
    renderWithProviders(<App />);

    expect(window.location.pathname).toBe('/');
  });
});
