import { IItem } from '../../types';

export interface ICard {
  data: IItem;
  handleClick: (id: string) => void;
}
