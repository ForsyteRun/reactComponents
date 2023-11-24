import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
  bookId: string;
  isVisible: boolean;
}

const initialState: InitialState = {
  bookId: '',
  isVisible: false,
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addId: (state: InitialState, action: PayloadAction<string>) => {
      state.bookId = action.payload;
    },
    setVisible: (state: InitialState, action: PayloadAction<boolean>) => {
      state.isVisible = action.payload;
    },
  },
});

export const { addId, setVisible } = cardSlice.actions;
export default cardSlice.reducer;
