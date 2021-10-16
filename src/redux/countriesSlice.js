/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
  const response = await axios.get('https://restcountries.com/v2/all');
  return response.data;
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchCountries.fulfilled]: (_state, action) => action.payload,
  },
});

export const countriesActions = countriesSlice.actions;

export default countriesSlice;
