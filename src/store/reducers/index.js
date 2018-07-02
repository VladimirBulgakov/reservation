import { combineReducers } from 'redux';
import terms from './terms';
import input from './input';
import error from './errorMessage';

export default combineReducers({
  terms,
  error,
  input,
});
