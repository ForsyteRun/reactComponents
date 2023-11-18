import bookSlice, { addBooks } from '../../../src/store/slices/books';

describe('bookSlice redux', () => {
  it('reducer should return initial value', () => {
    const result = bookSlice({ data: [] }, { type: '' });

    expect(result).toEqual({ data: [] });
  });

  it('reducer should return new books via action', () => {
    const mockData = [
      {
        id: 'pfaeBAAAQBAJ',
        volumeInfo: {
          title:
            'Disorders of Sex Development in Gynaecology (Russian edition)',
          authors: ['Zograb Makiyan'],
          pageCount: 167,
          imageLinks: {
            thumbnail:
              'http://books.google.com/books/content?id=pfaeBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          },
          language: 'ru',
        },
      },
    ];
    const action = {
      type: addBooks.type,
      payload: mockData,
    };

    const result = bookSlice({ data: [] }, action);

    expect(result).toEqual({ data: mockData });
  });

  it('reducer should return new books in state', () => {
    const initMockData = [
      {
        id: 'pfasdssddeBAAAQBAJ',
        volumeInfo: {
          title:
            'Disorders of Sex Development in Gynaecology (Russian edition)',
          authors: ['Zoooograb Makiyan'],
          pageCount: 167,
          imageLinks: {
            thumbnail:
              'http://books.google.com/books/content?id=pfaeBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          },
          language: 'ru',
        },
      },
    ];
    const mockData = [
      {
        id: 'pfaeBAAAQBAJ',
        volumeInfo: {
          title:
            'Disorders of Sex Development in Gynaecology (Russian edition)',
          authors: ['Zograb Makiyan'],
          pageCount: 167,
          imageLinks: {
            thumbnail:
              'http://books.google.com/books/content?id=pfaeBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          },
          language: 'ru',
        },
      },
    ];
    const initialState = { data: initMockData };
    const action = { type: addBooks.type, payload: mockData };

    const result = bookSlice(initialState, action);

    expect(result).toEqual({ data: mockData });
  });
});
