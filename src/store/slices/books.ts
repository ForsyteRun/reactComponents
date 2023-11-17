import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IItem } from '../../types';

interface InitialState {
  data: IItem[];
}

const initialState: InitialState = {
  data: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooks: (state: InitialState, action: PayloadAction<IItem[]>) => {
      state.data = action.payload;
    },
  },
});

export const { addBooks } = booksSlice.actions;

export default booksSlice.reducer;
