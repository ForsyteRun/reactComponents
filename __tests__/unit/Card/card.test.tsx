/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import BooksProvider from '../../../src/context/BooksProvider';
import { Home } from '../../../src/pages/index';
import { IFetchData } from '../../../src/types';
import data from './../../../__mocks__/data.json';

global.React = React;
const jsonData: IFetchData = data;

describe('Card component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <BooksProvider value={jsonData.items.slice(0, 10)}>
          <Home />
        </BooksProvider>
      </BrowserRouter>
    );
  });

  it('change URI params by click on img', async () => {
    await waitFor(() => {
      const firstImg = screen.getAllByRole('img')[0];
      fireEvent.click(firstImg);
    });

    expect(window.location.pathname).toBe('/pfaeBAAAQBAJ/details');
  });

  // it('displaying details block on the right by clicking on img', async () => {
  //   render(
  //     <MemoryRouter
  //       initialEntries={[
  //         'https://www.googleapis.com/books/v1/volumes/pfaeBAAAQBAJ',
  //       ]}
  //     >
  //       <Routes>
  //         <Route path="/" element={<Home />} />
  //       </Routes>
  //     </MemoryRouter>
  //   );

  //   expect(screen.queryByText('fake text')).toBeInTheDocument();
  //   // render(
  //   //   <BrowserRouter>
  //   //     <BooksProvider value={jsonData.items.slice(0, 10)}>
  //   //       <Home />
  //   //     </BooksProvider>
  //   //   </BrowserRouter>
  //   // );

  //   // await waitFor(() => {
  //   //   fireEvent.click(screen.getAllByRole('link')[0]);
  //   //   console.log(window.location.pathname);
  //   // });

  //   // const detailsImg = screen.getAllByRole('img');
  //   // const lastImg = screen.getAllByRole('img');
  //   // console.log(detailsImg.length, lastImg.length);
  // });
});
