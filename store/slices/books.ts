import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IItem } from '../../types';

interface InitialState {
  data: IItem[];
  singleBook: IItem;
}

const initialState: InitialState = {
  data: [],
  singleBook: {
    id: '',
    volumeInfo: {
      authors: [],
      imageLinks: {
        thumbnail: '',
      },
      language: '',
      pageCount: 0,
      title: '',
    },
  },
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooks: (state: InitialState, action: PayloadAction<IItem[]>) => {
      state.data = action.payload;
    },
    addBookById: (state: InitialState, action: PayloadAction<IItem>) => {
      state.singleBook = action.payload;
    },
  },
});

export const { addBooks, addBookById } = booksSlice.actions;

export default booksSlice.reducer;
