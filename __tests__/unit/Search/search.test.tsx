/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import React from 'react';
import { renderWithProviders } from '../../../__mocks__/reduxProvide';
import App from '../../../src/App';
import { getStorageData } from '../../../src/utils';

global.React = React;

jest.mock('../../../src/utils');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLoaderData: jest.fn(() => {
    return {
      items: '',
    };
  }),
}));

describe('Search component', () => {
  it('Check that the component retrieves the value from the local storage upon mounting', () => {
    renderWithProviders(<App />);

    expect(getStorageData).toHaveBeenCalled();
  });
});
