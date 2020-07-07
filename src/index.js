import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import indexReducer from './reducers/index';
import App from './containers/App';
import './index.css';

const store = createStore(indexReducer, composeWithDevTools(
  applyMiddleware(thunkMiddleware),
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
