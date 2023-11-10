import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://www.googleapis.com/books/v1/volumes', () => {
    return HttpResponse.json({
      msg: 'error request',
    });
  }),
  http.get(
    'https://www.googleapis.com/books/v1/volumes/D75NDwAAQBAJ',
    ({ request }) => {
      const url = new URL(request.url);

      const productId = url.searchParams.get('id');

      if (!productId) {
        return new HttpResponse(null, { status: 404 });
      }

      return HttpResponse.json({ productId });
    }
  ),
];
