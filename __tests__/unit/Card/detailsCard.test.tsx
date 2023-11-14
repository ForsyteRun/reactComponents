/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Select from '../../../src/components/Select';

global.React = React;

describe('Select component', () => {
  test('handles change correctly', () => {
    const setItemsPerPageMock = jest.fn();

    const { getByRole } = render(
      <Select setItemsPerPage={setItemsPerPageMock} />
    );

    const selectElement = getByRole('combobox');

    fireEvent.change(selectElement, { target: { value: '15' } });

    expect(setItemsPerPageMock).toHaveBeenCalledWith(15);
  });
});
