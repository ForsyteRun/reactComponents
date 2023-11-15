/**
 * @jest-environment jsdom
 */

import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { renderWithProviders } from '../../../__mocks__/reduxProvide';
import { Select } from '../../../src/components';

global.React = React;

describe('Select component', () => {
  test('handles change correctly', () => {
    renderWithProviders(<Select />);
    const selectElement = screen.getByRole('combobox') as HTMLSelectElement;

    fireEvent.change(selectElement, { target: { value: '15' } });

    expect(selectElement.value).toBe('15');
  });
});
