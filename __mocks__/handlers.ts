import { http, HttpResponse } from 'msw';

export const handlers = [
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
  http.get('https://www.googleapis.com/books/v1/volumes', () => {
    return HttpResponse.json({
      items: [
        {
          id: 'wGTwAAAAMAAJ',
          volumeInfo: {
            title: "Nature's Economy",
            language: 'en',
            pageCount: 888,
            imageLinks: {
              thumbnail:
                'http://books.google.com/books/content?id=wGTwAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
            },
            authors: ['qqq'],
          },
        },
      ],
      kind: '',
      totalItems: 999,
    });
  }),
];
