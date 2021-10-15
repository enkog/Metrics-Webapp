import { combineReducers } from 'redux';

import countriesSlice from './redux/countriesSlice';
import detailsSlice from './redux/detailsSlice';

const rootReducer = combineReducers({
  countries: countriesSlice.reducer,
  details: detailsSlice.reducer,
});

export default rootReducer;
