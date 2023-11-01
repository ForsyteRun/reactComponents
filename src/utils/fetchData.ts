import { ITEMS_PER_PAGE } from '../constants';
import { IFetchData } from '../types';

const fetchData = async (
  URL: string,
  query: string,
  pageNumber: number = 1
): Promise<IFetchData> => {
  const fullURL = buildURL(URL, query, pageNumber);
  const data = await fetchAndParseData(fullURL);
  return data;
};

const buildURL = (
  baseURL: string,
  query: string,
  pageNumber: number
): string => {
  let url = baseURL + query.trim();

  if (pageNumber === 1) {
    url += `&startIndex=${pageNumber}`;
  } else if (pageNumber === 2) {
    url += `&startIndex=${pageNumber + ITEMS_PER_PAGE - 1}`;
  } else {
    url += `&startIndex=${pageNumber * ITEMS_PER_PAGE - ITEMS_PER_PAGE + 1}`;
  }

  return url;
};

const fetchAndParseData = async (URL: string): Promise<IFetchData> => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

export default fetchData;
