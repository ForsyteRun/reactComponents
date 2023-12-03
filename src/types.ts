import { IInitialBufferState } from './interfaces';

export type CountryType =
  | 'Germany'
  | 'France'
  | 'Australia'
  | 'Japan'
  | 'Brazil'
  | 'India'
  | 'South Africa'
  | 'United States'
  | 'Canada'
  | 'United Kingdom'
  | 'Germany'
  | 'France'
  | 'Australia'
  | 'Japan'
  | 'Brazil'
  | 'India'
  | 'South Africa'
  | 'Mexico'
  | 'Spain'
  | 'Italy'
  | 'China'
  | 'Russia'
  | 'Argentina'
  | 'Nigeria'
  | 'South Korea'
  | 'Turkey'
  | 'Sweden'
  | 'Egypt';

export type SupportedImageFormats = 'image/jpeg' | 'image/png';

type ErrorMessageType = { message?: string };

export type ErrorType = Partial<
  Record<keyof IInitialBufferState, ErrorMessageType>
>;
