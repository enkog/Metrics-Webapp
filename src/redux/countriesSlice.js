import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
  const response = await axios.get('https://restcountries.com/v2/all');
  return response.data;
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState: { countries: [], loading: false },
  reducers: {},
  extraReducers: {
    [fetchCountries.pending]: (state) => {
      state.loading = true;
    },
    [fetchCountries.fulfilled]: (state, action) => {
      state.countries = action.payload;
      state.loading = false;
    },
    [fetchCountries.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const countriesActions = countriesSlice.actions;

export default countriesSlice;
