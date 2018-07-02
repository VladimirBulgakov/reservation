import { FULFILL_TERMS, REQUEST_TERMS } from '../actions/terms';


export default function terms(state = {}, action) {
  switch (action.type) {
    case FULFILL_TERMS:
      return { payload: action.payload };
    case REQUEST_TERMS:
    default:
      return state;
  }
}
