export interface IItem {
  id: string;
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

export interface IFetchData {
  items: IItem[];
  kind: string;
  totalItems: number;
}
