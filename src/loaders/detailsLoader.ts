import { LoaderFunction } from 'react-router-dom';
import { URL } from '../constants';
import { IItem } from '../types';

const detailsLoader: LoaderFunction<{ id: string }> = async ({
  params,
}): Promise<IItem | null> => {
  const res = await fetch(`${URL}/${params.id}`);
  const resJson = await res.json();

  const foundItem: IItem = resJson.items.find(
    (el: IItem) => el.id === params.id
  );

  if (!foundItem) {
    return null;
  }

  return foundItem;
};

export default detailsLoader;
