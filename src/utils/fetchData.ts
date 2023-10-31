import { IFetchData } from '../components/App/types';
import { IItem } from '../types';

const fetchData = async (URL: string, query: string): Promise<IItem[]> => {
  const response = await fetch(URL + query.trim());
  const data: IFetchData = await response.json();
  return data.items;
};

export default fetchData;
