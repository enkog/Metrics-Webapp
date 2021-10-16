import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import countriesSlice from './countriesSlice';
import detailsSlice from './detailsSlice';

const store = configureStore({
  reducer: { countries: countriesSlice.reducer, details: detailsSlice.reducer },
  middleware: [thunk, logger],
});

export default store;
