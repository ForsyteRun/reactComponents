import { URL } from '../constants';
import { IFetchData, IItem } from '../types';

const detailsLoader = async (id: string): Promise<IItem | null> => {
  const res: Response = await fetch(URL + `${id}`);
  const resJson: IFetchData = await res.json();

  const foundItem: IItem | null =
    resJson.items.find((el: IItem) => el.id === id) || null;

  return foundItem && foundItem;
};

export default detailsLoader;
