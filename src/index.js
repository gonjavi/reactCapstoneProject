import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import indexReducer from './reducers/index';
import App from './components/App';
import './index.css';

const store = createStore(indexReducer, composeWithDevTools(
  applyMiddleware(logger),
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
