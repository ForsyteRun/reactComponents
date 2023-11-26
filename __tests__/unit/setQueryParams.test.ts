/**
 * @jest-environment jsdom
 */

import { setQueryParam } from '../../utils';

describe('setQueryParam function', () => {
  beforeEach(() => {
    window.history.replaceState({}, '', '/');
  });

  it('adds a new query parameter to the URL', () => {
    setQueryParam('param1', 'value1');
    expect(window.location.search).toBe('?param1=value1');
  });

  it('updates an existing query parameter in the URL', () => {
    setQueryParam('param1', 'value1');

    setQueryParam('param1', 'updatedValue');

    expect(window.location.search).toBe('?param1=updatedValue');
  });

  it('deletes a query parameter from the URL', () => {
    setQueryParam('param1', 'value1');

    setQueryParam('param1');

    expect(window.location.search).toBe('');
  });

  it('handles adding multiple query parameters', () => {
    setQueryParam('param1', 'value1');
    setQueryParam('param2', 'value2');

    expect(window.location.search).toBe('?param1=value1&param2=value2');
  });

  it('handles updating and deleting multiple query parameters', () => {
    setQueryParam('param1', 'value1');
    setQueryParam('param2', 'value2');
    setQueryParam('param3', 'value3');

    setQueryParam('param1', 'updatedValue');
    setQueryParam('param2');

    expect(window.location.search).toBe('?param1=updatedValue&param3=value3');
  });
});
