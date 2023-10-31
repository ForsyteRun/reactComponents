import { IItem } from '../../types';

export interface IFetchData {
  items: IItem[];
  kind: string;
  totalItems: number;
}
