import { Dispatch, SetStateAction } from 'react';

export type PropsType = {
  setQuery: Dispatch<SetStateAction<string>>;
};
