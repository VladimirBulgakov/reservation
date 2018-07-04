import { FULFILL_RESERVATIONS, REQUEST_RESERVATIONS } from '../actions/reservations';

export default function reservations(state = {}, action) {
  switch (action.type) {
    case FULFILL_RESERVATIONS:
      return { payload: action.payload };
    case REQUEST_RESERVATIONS:
    default:
      return state;
  }
}
