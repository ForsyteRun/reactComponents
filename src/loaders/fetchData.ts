import { ITEMS_PER_PAGE, URL } from '../constants';
import { IFetchData } from '../types';

export const initFetchData = async (
  storageKey: string
): Promise<IFetchData> => {
  const storageData = JSON.parse(localStorage.getItem(storageKey) as string);

  const fullURL = buildURL(URL, storageData || 'nature', 1);
  const data = await fetchAndParseData(fullURL);
  return data;
};

export const fetchDataByQuery = async (
  query: string,
  pageNumber: number
): Promise<IFetchData | null> => {
  if (!query) {
    return null;
  }
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
