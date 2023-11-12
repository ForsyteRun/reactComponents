/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { default as React } from 'react';
import { BrowserRouter } from 'react-router-dom';
import BooksProvider from '../../../src/context/BooksProvider';
import { Home } from '../../../src/pages';
import { IFetchData } from '../../../src/types';
import data from './../../../__mocks__/data.json';

global.React = React;
const jsonData: IFetchData = data;

describe('Home component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <BooksProvider value={jsonData.items.slice(0, 10)}>
          <Home />
        </BooksProvider>
      </BrowserRouter>
    );
  });

  test('snapshot page when loading', () => {
    const { asFragment } = render(<Home />);

    expect(asFragment()).toMatchSnapshot();
  });

  test('render spinner when loading', () => {
    const { container } = render(<Home />);

    const spinner = container.querySelector('.lds-dual-ring');

    expect(spinner).toBeInTheDocument();
  });

  test('render all 10 cards in Home Page init loading', async () => {
    await waitFor(() => {
      expect(screen.getAllByRole('img')).toHaveLength(10);
      expect(screen.getAllByRole('img')[0]).toBeInTheDocument();
    });
  });

  test('render correct title Card', async () => {
    await waitFor(() => {
      const elements = screen.getAllByText(/Sex Development/i);
      expect(elements[0]).toBeInTheDocument();
    });
  });

  test('render correct author Card', async () => {
    await waitFor(() => {
      const elements = screen.getAllByText(/Zograb/i);
      expect(elements[0]).toBeInTheDocument();
    });
  });

  test('render correct page count in first book', async () => {
    await waitFor(() => {
      const elements = screen.getAllByText(/Count/i);

      const nextSiblingValue = elements[0].nextElementSibling?.textContent;

      expect(nextSiblingValue).toEqual('167');
    });
  });

  test('render correct language in first book', async () => {
    await waitFor(() => {
      const elements = screen.getAllByText(/language/i);

      const nextSiblingValue = elements[0].nextElementSibling?.textContent;

      expect(nextSiblingValue).toEqual('ru');
    });
  });

  test('render correct img path in first book', async () => {
    await waitFor(() => {
      const elements: HTMLImageElement[] =
        screen.getAllByAltText(/Disorders of Sex/i);

      expect(elements[0].alt).toEqual(
        'Disorders of Sex Development in Gynaecology (Russian edition)'
      );
    });
  });
});
