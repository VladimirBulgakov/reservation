import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;


export default createStore(
  reducers,
  {
    terms: { payload: [] },
    reservations: { payload: [] },
  },
  composeEnhancers(applyMiddleware(thunk))
);
