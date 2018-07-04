import { combineReducers } from 'redux';
import terms from './terms';
import input from './input';
import error from './errorMessage';
import reservations from './reservations';

export default combineReducers({
  terms,
  error,
  input,
  reservations,
});
