import { Dispatch, SetStateAction } from 'react';

export type PropsType = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
};
