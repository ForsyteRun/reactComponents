import { ErrorType } from '../../types';

export const formDataErrors: ErrorType = {
  name: {},
  age: {},
  email: {},
  password: {},
  confirmPassword: {},
  gender: {},
  file: {},
  country: {},
  terms: {},
};

export const FILE_SIZE = 800000;

export const SUPPORTED_FORMATS = ['image/jpeg', 'image/png'];
