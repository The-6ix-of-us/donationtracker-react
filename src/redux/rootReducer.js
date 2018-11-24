import { combineReducers } from 'redux';

import auth from './auth/reducer';
import locations from './locations/reducer';

const rootReducer = combineReducers({
  auth,
  locations
});

export default rootReducer;
