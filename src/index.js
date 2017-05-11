import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { CookiesProvider  } from 'react-cookie';  //, withCookies, Cookies
import { Provider } from 'react-redux';
import configureStore  from './config/Store';
import App from './App';
import {loadState, saveState} from './config/localStorage';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import './assets/font-awesome/css/font-awesome.min.css';
import './index.css';

const initialState = loadState();
const StoreInstance = configureStore(initialState);

StoreInstance.subscribe(()=> {
  saveState(StoreInstance.getState());
});

ReactDOM.render(
 <Provider store={StoreInstance}> 
    <BrowserRouter>
      <CookiesProvider>
        <App />
      </CookiesProvider>  
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
