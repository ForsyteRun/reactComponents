import { object, string, number, date, ref, ObjectSchema, boolean } from 'yup';
import { InitialState } from '../../store/slices/formSlice';
import * as Yup from 'yup';

const formSchema: ObjectSchema<InitialState> = object({
  name: string().required(),
  age: number().required().positive().integer(),
  email: string().email().required(),
  password: string()
    .required('Please enter your password.')
    .min(8, 'Your password is too short.'),
  confirmPassword: string()
    .required('Please retype your password.')
    .oneOf([ref('password')], 'Your passwords do not match.'),
  gender: Yup.string()
    .oneOf(['male', 'female'], 'Invalid gender selection')
    .required('Gender is required'),
  file: string(),
  country: string()
    .oneOf([
      'United States',
      'Canada',
      'United Kingdom',
      'Germany',
      'France',
      'Australia',
      'Japan',
      'Brazil',
      'India',
      'South Africa',
    ])
    .required('Country is required'),
  terms: boolean()
    .required('The terms and conditions must be accepted.')
    .oneOf([true], 'The terms and conditions must be accepted.'),
  createdOn: date().default(() => new Date()),
});

export default formSchema;
