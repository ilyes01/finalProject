import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './JS/Store/store'
import 'animate.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  
  <BrowserRouter >
     <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>,
  
  document.getElementById('root')
);


