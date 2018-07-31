import { ERROR_MESSAGE } from '../actions/errorMessage';


export default function errorMessage(state = {}, action) {
  switch (action.type) {
    case ERROR_MESSAGE:
      return { errorZprava: 'mame tu error' };
    default:
      return state;
  }
}
