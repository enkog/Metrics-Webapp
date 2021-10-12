import { createSlice } from '@reduxjs/toolkit';

const countriesSlice = createSlice({
  name: 'countries',
  initialState: { countries: [], loading: false },
  reducers: {},
});

export const countriesActions = countriesSlice.actions;

export default countriesSlice;
