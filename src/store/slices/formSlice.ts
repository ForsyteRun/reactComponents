import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  name: string;
  age: number | null;
  email: string;
  password: string;
  gender: 'male' | 'female' | null;
  file: string;
  country: ICountry;
  terms: boolean;
}

type ICountry =
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
  | null;

const initialState: CounterState = {
  name: '',
  age: null,
  email: '',
  password: '',
  gender: null,
  file: '',
  country: null,
  terms: false,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addFormData: (state, action: PayloadAction<CounterState>) => {
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
