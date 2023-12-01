import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CountryType } from '../../types';

export interface InitialState {
  name: string;
  age: number;
  email: string;
  password: string;
  gender: 'male' | 'female';
  file: string | ArrayBuffer | null;
  country: CountryType;
  terms: boolean;
  fixedData: {
    allCountries: CountryType[];
  };
}

const initialState: InitialState = {
  name: '',
  age: 0,
  email: '',
  password: '',
  gender: 'male',
  file: null,
  country: 'Australia',
  terms: false,
  fixedData: {
    allCountries: [
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
    ],
  },
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addFormData: (
      state,
      action: PayloadAction<Omit<InitialState, 'fixedData'>>
    ) => {
      const { name, age, email, password, gender, file, terms, country } =
        action.payload;

      state.name = name;
      state.age = age;
      state.email = email;
      state.password = password;
      state.gender = gender;
      state.country = country;
      state.file = file;
      state.terms = terms;
    },
  },
});

export const { addFormData } = formSlice.actions;

export default formSlice.reducer;
