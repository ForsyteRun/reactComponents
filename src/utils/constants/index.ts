import { IConfirmPassword } from '../../interfaces';

export const formDataErrors: Omit<IConfirmPassword, 'fixedData'> = {
  name: [],
  age: [],
  email: [],
  password: [],
  confirmPassword: [],
  gender: [],
  file: [],
  country: [],
  terms: [],
};

export const FILE_SIZE = 5000;

export const SUPPORTED_FORMATS = ['image/jpeg', 'image/png'];
