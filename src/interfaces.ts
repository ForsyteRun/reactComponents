import { InitialState } from './store/slices/formSlice';
import { SupportedImageFormats } from './types';

export interface IFile {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: SupportedImageFormats;
  webkitRelativePath: string;
}

export interface IConfirmPassword
  extends Omit<Record<keyof InitialState, string[]>, 'fixedData'> {
  confirmPassword: string[];
}

export interface IInitialBufferState
  extends Omit<InitialState, 'fixedData' | 'file'> {
  file: IFile | undefined;
}
