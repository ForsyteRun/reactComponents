import { http, HttpResponse } from 'msw';
import { IFetchData } from '../src/types';
import data from './data.json';

const jsonData: IFetchData = data;

export const handlers = [
  http.get('https://www.googleapis.com/books/v1/volumes', () => {
    return HttpResponse.json(jsonData.items);
  }),

  http.get('https://www.googleapis.com/books/v1/volumes/:id', (req) => {
    const { id } = req.params;

    const foundItem = jsonData.items.find((item) => item.id === id);

    return HttpResponse.json(foundItem);
  }),
];
