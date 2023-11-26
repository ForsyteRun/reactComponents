import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  isLoading: boolean;
}

const initialState: InitialState = {
  isLoading: true,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    toggleLoading: (state: InitialState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { toggleLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
