import  { createStore, combineReducers, compose, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk'
import rulesReducer from './rule-reducer' 
import loginReducer from './login-reducer'
import { reducer as formReducer} from 'redux-form'

// Gather values into a single function
// 1. Hook up redux for mreducer
// 2. Connect reduxForm in RuleForm in compose(...)
// 3. ???
// 4. Handle onSubmit in RuleForm
const reducer = combineReducers({
    rules: rulesReducer,
    login: loginReducer,
    form: formReducer
})

let devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && 
window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
    reducer, compose(
        applyMiddleware(thunk), devTools
    )
    
);
 
export default store;