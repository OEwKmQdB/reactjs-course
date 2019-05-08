
const INITIAL_STATE = {
    username: '', password: ''
}

const LOGIN = "LOGIN"

const loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type ) {
        case LOGIN: return state;
        default: return state;
    }
}

export default loginReducer;