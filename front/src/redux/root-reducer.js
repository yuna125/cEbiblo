import {combineReducers} from 'redux';
import statusReducer from './status/status.reducer';

export default combineReducers({
  status: statusReducer,
});
