import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CountryType } from '../../types';

export interface InitialState {
  isChanging: {
    name: boolean;
    age: boolean;
    email: boolean;
    gender: boolean;
    country: boolean;
    file: boolean;
  };
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

export const initialState: InitialState = {
  isChanging: {
    name: false,
    age: false,
    email: false,
    gender: false,
    country: false,
    file: false,
  },
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
      'Mexico',
      'Spain',
      'Italy',
      'China',
      'Russia',
      'Argentina',
      'Nigeria',
      'South Korea',
      'Turkey',
      'Sweden',
      'Egypt',
    ],
  },
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addFormData: (
      state,
      action: PayloadAction<Omit<InitialState, 'fixedData' | 'isChanging'>>
    ) => {
      const { name, age, email, password, gender, file, terms, country } =
        action.payload;

      if (state.name !== name) {
        state.name = name;
        state.isChanging.name = true;
      } else {
        state.isChanging.name = false;
      }

      if (state.age !== age) {
        state.age = age;
        state.isChanging.age = true;
      } else {
        state.isChanging.age = false;
      }

      if (state.email !== email) {
        state.email = email;
        state.isChanging.email = true;
      } else {
        state.isChanging.email = false;
      }

      if (state.gender !== gender) {
        state.gender = gender;
        state.isChanging.gender = true;
      } else {
        state.isChanging.gender = false;
      }

      if (state.country !== country) {
        state.country = country;
        state.isChanging.country = true;
      } else {
        state.isChanging.country = false;
      }

      if (state.file !== file) {
        state.file = file;
        state.isChanging.file = true;
      } else {
        state.isChanging.file = false;
      }

      state.password = password;
      state.terms = terms;
    },
  },
});

export const { addFormData } = formSlice.actions;

export default formSlice.reducer;
