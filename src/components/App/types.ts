import { IItem } from '../../types';

export type StateType = {
  items: IItem[];
  error: boolean;
  loading: boolean;
};
