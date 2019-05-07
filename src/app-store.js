import { createStore, combineReducers, compose } from 'redux';
import { applyMiddleware } from 'http-proxy-middleware';
import {thunk} from 'react-thunk'
import rulesReducer from './rule-reducer'

const reducer = combineReducers({
    rules: rulesReducer
})

const store = createStore(
    reducer,
    compose(    
        applyMiddleware(thunk)),
        window.__REDUX_DEVTOOLS_EXTENSION__ && 
        window.__REDUX_DEVTOOLS_EXTENSION__()
    
);
 
export default store;