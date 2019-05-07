import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import RuleList from './RuleList';
import store from './app-store';

ReactDOM.render(
    <Provider store={store}>
        <RuleList />
    </Provider>
    ,
    document.querySelector('#root')
);