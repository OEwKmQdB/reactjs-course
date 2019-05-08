import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import Layout from './layout';
import store from './app-store';
import { BrowserRouter, Route } from 'react-router-dom'

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <Route path="/" component={Layout} />
    </BrowserRouter> 
    </Provider>
    ,
    document.querySelector('#root')
);