import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CountryType } from '../../types';

export interface InitialState {
  name: string;
  age: number;
  email: string;
  password: string;
  gender: 'male' | 'female';
  file: string | undefined;
  country: CountryType;
  terms: boolean;
}

const initialState: InitialState = {
  name: '',
  age: 0,
  email: '',
  password: '',
  gender: 'male',
  file: undefined,
  country: 'Australia',
  terms: false,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addFormData: (state, action: PayloadAction<InitialState>) => {
      const { name, age, email, password, gender, file, country, terms } =
        action.payload;

      state.name = name;
      state.age = age;
      state.email = email;
      state.password = password;
      state.gender = gender;
      state.file = file;
      state.country = country;
      state.terms = terms;
    },
  },
});

export const { addFormData } = formSlice.actions;

export default formSlice.reducer;
