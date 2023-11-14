/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { default as React } from 'react';
import { renderWithProviders } from '../../../__mocks__/reduxProvide';
import App from '../../../src/App';
import { IFetchData } from '../../../src/types';
import data from './../../../__mocks__/data.json';

global.React = React;
const jsonData: IFetchData = data;

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLoaderData: jest.fn(() => {
    return {
      items: jsonData.items.slice(0, 10),
    };
  }),
}));

describe('Home component', () => {
  let fragment: () => DocumentFragment;
  let rootContainer: HTMLElement;

  beforeEach(() => {
    const { asFragment, container } = renderWithProviders(<App />);

    fragment = asFragment;
    rootContainer = container;
  });

  test('snapshot page when loading', () => {
    expect(fragment()).toMatchSnapshot();
  });

  test('render spinner when loading', () => {
    const spinner = rootContainer.querySelector('.lds-dual-ring');

    expect(spinner).toBeInTheDocument();
  });

  test('render correct title Card', async () => {
    const elements = await screen.findAllByText(/Sex Development/i);
    expect(elements[0]).toBeInTheDocument();
  });

  test('render correct author Card', async () => {
    const elements = await screen.findAllByText(/Zograb/i);
    expect(elements[0]).toBeInTheDocument();
  });

  test('render correct page count in first book', async () => {
    const elements = await screen.findAllByText(/Count/i);

    const nextSiblingValue = elements[0].nextElementSibling?.textContent;
    expect(nextSiblingValue).toEqual('167');
  });

  test('render correct language in first book', async () => {
    const elements = await screen.findAllByText(/language/i);

    const nextSiblingValue = elements[0].nextElementSibling?.textContent;
    expect(nextSiblingValue).toEqual('ru');
  });

  test('render correct img path in first book', async () => {
    const elements: HTMLImageElement[] =
      await screen.findAllByAltText(/Disorders of Sex/i);

    expect(elements[0].alt).toEqual(
      'Disorders of Sex Development in Gynaecology (Russian edition)'
    );
  });
});
