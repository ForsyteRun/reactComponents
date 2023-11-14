import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  value: string;
}

const initialState: InitialState = {
  value: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state: InitialState, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    removeSearchValue: (state: InitialState) => {
      state.value = '';
    },
  },
});

export const { setSearchValue, removeSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
