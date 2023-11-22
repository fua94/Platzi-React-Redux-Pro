import { combineReducers } from 'redux';
import dataReducer from './features/data';
import uiReducer from './features/ui';

const rootReducer = combineReducers({
  data: dataReducer,
  ui: uiReducer,
});

export default rootReducer;
