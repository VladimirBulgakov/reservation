import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  {
    terms: { payload: [] },
    reservations: { payload: [] },
    input: 'pocatecni stav',
  },
  
  composeEnhancers(applyMiddleware(thunk))
);
