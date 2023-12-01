import { ObjectSchema, boolean, mixed, number, object, ref, string } from 'yup';
import { IFile, IInitialBufferState } from '../../interfaces';
import { store } from '../../store';
import { CountryType } from '../../types';
import { FILE_SIZE, SUPPORTED_FORMATS } from '../constants';

const formSchema: ObjectSchema<IInitialBufferState> = object({
  name: string()
    .required('name is required')
    .test('firstUppercase', 'First letter must be uppercase', (value) => {
      if (!value) {
        return true;
      }
      return /^[A-Z]/.test(value);
    }),
  age: number()
    .required('age is required')
    .positive('must be a positive')
    .integer('must be an integer')
    .typeError('age must be a number'),
  email: string().email('email incorrect').required('email is required'),
  password: string()
    .matches(/^(?=.*[a-z])/, 'at least one lowercase character')
    .matches(/^(?=.*[A-Z])/, 'at least one uppercase character')
    .matches(/^(?=.*[0-9])/, 'at least one number')
    .matches(/^(?=.*[!@#%&])/, 'at least one special character')
    .min(8, 'too short')
    .required(),
  confirmPassword: string()
    .oneOf([ref('password')], 'Your passwords do not match.')
    .min(8, 'too short.')
    .required(),
  gender: string()
    .oneOf(['male', 'female'], 'invalid gender selection')
    .required('Gender is required'),
  file: mixed<IFile>()
    .test('fileSize', 'file is too large', (value) => {
      if (typeof value === 'object' && value instanceof File) {
        return value.size <= FILE_SIZE;
      }
    })
    .test(
      'fileType',
      'invalid file type',
      (value) => value && SUPPORTED_FORMATS.includes(value?.type)
    ),
  country: mixed<CountryType>()
    .test(
      'isValidCountry',
      'invalid country',
      function (value: string | undefined) {
        return (
          value !== undefined &&
          store
            .getState()
            .form.fixedData.allCountries.includes(value as CountryType)
        );
      }
    )
    .required('country is required'),
  terms: boolean()
    .required('the terms and conditions must be accepted.')
    .oneOf([true], 'the terms and conditions must be accepted.'),
});

export default formSchema;
