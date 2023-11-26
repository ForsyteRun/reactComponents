import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  isLoading: boolean;
  isLoadingDetails: boolean;
}

const initialState: InitialState = {
  isLoading: true,
  isLoadingDetails: true,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    toggleLoading: (state: InitialState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    toggleDetailsLoading: (
      state: InitialState,
      action: PayloadAction<boolean>
    ) => {
      state.isLoadingDetails = action.payload;
    },
  },
});

export const { toggleLoading, toggleDetailsLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
