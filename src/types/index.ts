export interface StateType {
  count: number;
  next: string;
  previous: string | null;
  results: IItem[] | null;
}

export interface IItem {
  name: string;
  url: string;
}
