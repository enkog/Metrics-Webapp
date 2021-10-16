import { createSlice } from '@reduxjs/toolkit';

const detailsSlice = createSlice({
  name: 'countries',
  initialState: {},
  reducers: {
    selectedCountry(_state, action) {
      return action.payload;
    },
  },
});

export const detailsSliceAction = detailsSlice.actions;

export default detailsSlice;
