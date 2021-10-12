import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
  const response = await axios.get('https://restcountries.com/v3.1/all');
  return response.data;
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState: { countries: [], loading: false },
  reducers: {},
});

export const countriesActions = countriesSlice.actions;

export default countriesSlice;
