/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { Home } from '../../../src/pages';

global.React = React;

describe('Home component', () => {
  test('snapshot page when loading', () => {
    const { asFragment } = render(<Home />);

    expect(asFragment()).toMatchSnapshot();
  });

  test('render spinner in init loading', () => {
    const { container } = render(<Home />);

    const spinner = container.querySelector('.lds-dual-ring');

    expect(spinner).toBeInTheDocument();
  });
});
