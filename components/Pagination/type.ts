import { Dispatch, SetStateAction } from 'react';

export interface IPagination {
  pageNumber: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
}
