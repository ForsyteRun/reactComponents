/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/react';
import React from 'react';
import { renderWithProviders } from '../../../__mocks__/reduxProvide';
import { IFetchData } from '../../../src/types';
import data from './../../../__mocks__/data.json';
import App from '././../../../src/App';

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

describe('Redux', () => {
  beforeEach(() => {
    renderWithProviders(<App />);
  });

  test('render all 10 cards in Home Page init loading via redux', async () => {
    await waitFor(() => {
      const linkElements = screen.getAllByRole('img');

      expect(linkElements.length).toBe(10);
    });
  });

  test('render correct name Card', async () => {
    const elements = await screen.findAllByRole('heading', { level: 3 });
    const title = elements[0].firstChild as Element;
    expect(title.textContent).toEqual('name:');
    expect(title).toBeInTheDocument();
  });

  test('render correct author Card', async () => {
    const elements = await screen.findAllByRole('heading', { level: 3 });
    const author = elements[1].firstChild as Element;
    expect(author.textContent).toEqual('authors:');
    expect(author).toBeInTheDocument();
  });

  test('render correct language in first book', async () => {
    const elements = await screen.findAllByRole('heading', { level: 3 });
    const language = elements[2].firstChild as Element;
    expect(language.textContent).toEqual('language:');
    expect(language).toBeInTheDocument();
  });

  test('render correct page count in first book', async () => {
    const elements = await screen.findAllByRole('heading', { level: 3 });
    const pageCount = elements[3].firstChild as Element;
    expect(pageCount.textContent).toEqual('pageCount:');
    expect(pageCount).toBeInTheDocument();
  });

  test('render correct img path in first book', async () => {
    const elements: HTMLImageElement[] = await screen.findAllByRole('img');

    expect(elements[0].alt).toEqual(
      'Disorders of Sex Development in Gynaecology (Russian edition)'
    );
  });
});