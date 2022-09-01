import {
  configureStore,
  applyMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import countryReducer from './countries/countries';
import categoryReducer from './countries/categories';

const rootReducer = combineReducers({
  countries: countryReducer,
  category: categoryReducer,
});

const store = configureStore(
  { reducer: rootReducer },
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
