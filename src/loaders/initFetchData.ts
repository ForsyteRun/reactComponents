import { URL } from '../constants';
import { IFetchData } from '../types';
import { buildURL, fetchAndParseData } from '../utils';

export const initFetchData = async (
  storageKey: string
): Promise<IFetchData> => {
  const storageData = JSON.parse(localStorage.getItem(storageKey) as string);

  const fullURL = buildURL(URL, storageData ? storageData : 'nature', 1);
  const data = await fetchAndParseData(fullURL);

  return data;
};

export default initFetchData;
