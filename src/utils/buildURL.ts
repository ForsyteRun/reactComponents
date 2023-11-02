import { ITEMS_PER_PAGE } from '../constants';

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

export default buildURL;
