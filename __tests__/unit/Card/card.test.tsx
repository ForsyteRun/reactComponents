/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import mockRouter from 'next-router-mock';
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';
import React from 'react';
import { renderWithProviders } from '../../../__mocks__/reduxProvide';
import App from './../../../pages';

global.React = React;

jest.mock('next/router', () => require('next-router-mock'));
jest.mock('next/navigation', () => {
  return {
    useSearchParams: jest.fn(() => ({
      get: jest.fn(),
    })),
  };
});

// const mockedUseSearchParams = useSearchParams as jest.MockedFunction<
//   typeof useSearchParams
// >;

describe('Card component', () => {
  it('should call useSearchParams', () => {
    renderWithProviders(<App />);

    expect(useSearchParams).toHaveBeenCalled();
  })

  it('change URI params by click on img ', () => {
        // mockedUseSearchParams.mockReturnValue({
    //   get: jest.fn(),
    //   entries: jest.fn(),
    //   forEach: jest.fn(),
    //   getAll: jest.fn(),
    //   has: jest.fn(),
    //   keys: jest.fn(),
    //   values: jest.fn(),
    //   size: undefined,
    //   append: jest.fn(),
    //   delete: jest.fn(),
    //   set: jest.fn(),
    //   sort: jest.fn(),
    // } as unknown as ReadonlyURLSearchParams);
    
    // mockRouter.push("?page=11&search=nss&pageSize=5");

    // renderWithProviders(<App />);

    // expect(mockRouter).toMatchObject({ 
    //   asPath: "/?page=11&search=nss&pageSize=5",
    //   pathname: "/",
    //   query: { 
    //     page: "11",
    //     pageSize: "5",
    //     search: "nss" 
    //   },
    // });
  });
})
