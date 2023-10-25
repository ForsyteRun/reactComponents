export interface IItem {
  id: number;
  volumeInfo: {
    title: string;
    language: string;
    pageCount: number;
    imageLinks: {
      thumbnail: string;
    };
    authors: Array<string>;
  };
}

export enum noImgTemplate {
  'noImg' = 'http://books.google.com/books/content?id=7ixWZpG8ScEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
}
