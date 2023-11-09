import { LoaderFunction } from 'react-router-dom';
import { URL } from '../constants';
import { IFetchData, IItem, IVolumeInfo } from '../types';

const detailsLoader: LoaderFunction = async ({
  params,
}): Promise<IVolumeInfo | null> => {
  try {
    const response = await fetch(URL + params.id);
    const resJson: IFetchData = await response.json();

    const foundItem: IItem | undefined = resJson.items.find(
      (el: IItem) => el.id === params.id
    );

    return foundItem?.volumeInfo || null;
  } catch (error) {
    return null;
  }
};

export default detailsLoader;
