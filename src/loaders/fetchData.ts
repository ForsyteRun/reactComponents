import { URL } from '../constants';
import { IFetchData } from '../types';
import { buildURL, fetchAndParseData } from '../utils';

export const fetchData = async (
  query: string,
  pageNumber: number
): Promise<IFetchData | null> => {
  const fullURL = buildURL(URL, query || 'nature', pageNumber);
  const data = await fetchAndParseData(fullURL);
  return data;
};

export default fetchData;
