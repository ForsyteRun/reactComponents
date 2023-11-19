/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../../../__mocks__/reduxProvide';
import App from '../../../src/App';
global.React = React;

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
