import { INPUT_CHANGE } from '../actions/input';

export default function inputReducer(state = '', action) {
  switch (action.type) {
    case INPUT_CHANGE:
      return action.inputValue;
    default:
      return state;
  }
}
