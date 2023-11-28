import { IFetchData } from '../types';

const fetchAndParseData = async (URL: string): Promise<IFetchData> => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

export default fetchAndParseData;
