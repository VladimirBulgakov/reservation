import { POST_RESERVATION, REQUEST_POST_RESERVATIONS } from '../actions/reservations';

export default function reservations(state = {}, action) {
  switch (action.type) {
    case POST_RESERVATION:
      return { reservations: action.newResevation };
    case REQUEST_POST_RESERVATIONS:
    default:
      return state;
  }
}
