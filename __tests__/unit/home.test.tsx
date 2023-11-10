/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { Home } from '../../src/pages/index';

global.React = React;

test('renders Home component', async () => {
  await act(async () => {
    render(<Home />);
  });

  expect(screen.getByRole('textbox')).toBeInTheDocument();
});
