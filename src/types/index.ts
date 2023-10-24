export interface StateType {
  count: number;
  next: string;
  previous: null;
  results: IItem[] | null;
}

interface IItem {
  name: string;
  url: string;
}
