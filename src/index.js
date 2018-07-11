import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Popup from 'react-popup';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      <Popup />
    </div>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
