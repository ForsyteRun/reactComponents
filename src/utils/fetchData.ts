import { IFetchData } from '../types';

const fetchData = async (
  URL: string,
  query: string,
  itemsPageCount?: number,
  pageNumber?: number
): Promise<IFetchData> => {
  const fullURL = buildURL(URL, query, itemsPageCount, pageNumber);
  const data = await fetchAndParseData(fullURL);
  return data;
};

const buildURL = (
  baseURL: string,
  query: string,
  itemsPageCount?: number,
  pageNumber?: number
): string => {
  let url = baseURL + query.trim();
  if (itemsPageCount) {
    url += `&maxResults=${itemsPageCount}`;
  }
  if (pageNumber) {
    url += `&startIndex=${pageNumber}`;
  }
  return url;
};

const fetchAndParseData = async (URL: string): Promise<IFetchData> => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

export default fetchData;
