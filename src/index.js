import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore , combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import a from '/Users/yuriikalashnikov/Desktop/auth/form/src/reducers';

import App from './App';


const store = createStore(a)



 ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
  );

