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
