import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
  currentPage: number;
  totalCount: number;
  pageSize: number;
}

const initialState: InitialState = {
  currentPage: 1,
  totalCount: 100,
  pageSize: 10,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPageNumber: (state: InitialState, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setPageSize: (state: InitialState, action: PayloadAction<number>) => {
      state.pageSize = action.payload;
    },
  },
});

export const { setPageNumber, setPageSize } = paginationSlice.actions;
export default paginationSlice.reducer;
