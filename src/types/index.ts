export interface StateType {
  count: number;
  next: string;
  previous: string | null;
  results: IItem[] | null;
  error: boolean;
}

export interface IItem {
  name: string;
  url: string;
}
