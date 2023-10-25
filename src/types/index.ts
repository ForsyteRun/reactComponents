export interface IItem {
  id: number;
  volumeInfo: {
    title: string;
    language: string;
    pageCount: number;
    year: number;
    imageLinks: {
      thumbnail: string;
    };
    authors: Array<string>;
  };
}
