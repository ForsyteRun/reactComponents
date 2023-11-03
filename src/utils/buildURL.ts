import { ITEMS_PER_PAGE } from '../constants';

const buildURL = (
  baseURL: string,
  query: string,
  pageNumber: number,
  itemsPerPage: number
): string => {
  let url = baseURL + (query ? query.trim() : 'nature');

  if (pageNumber === 1) {
    url += `&startIndex=${pageNumber}`;
  } else if (pageNumber === 2) {
    url += `&startIndex=${pageNumber + ITEMS_PER_PAGE - 1}`;
  } else {
    url += `&startIndex=${pageNumber * ITEMS_PER_PAGE - ITEMS_PER_PAGE + 1}`;
  }

  if (itemsPerPage) {
    url += `&maxResults=${itemsPerPage}`;
  }

  return url;
};

export default buildURL;
