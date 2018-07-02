import { ERROR_MESSAGE } from '../actions/errorMessage';


export default function errorMessage(state = {}, action) {
  switch (action.type) {
    case ERROR_MESSAGE:
      return { code: action.code, statusMessage: action.statusMessage };
    default:
      return state;
  }
}
