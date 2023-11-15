import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
  pageNumber: number;
  totalCount: number;
}

const initialState: InitialState = {
  pageNumber: 1,
  totalCount: 100,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPageNumber: (state: InitialState, action: PayloadAction<number>) => {
      state.pageNumber = action.payload;
    },
  },
});

export const { setPageNumber } = paginationSlice.actions;
export default paginationSlice.reducer;
