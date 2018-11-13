const initialState = {
    username: "No User",
    isLoggedIn: false,
    msg : '',
    token : ''
};
const authReducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                msg: action.data.msg,
                username: action.data.username,
                token: action.data.token,
                isLoggedIn: true
            };
        case 'LOGIN_FAILED':
            return {
                ...state,
                msg: action.data.msg,
            };
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
};

export default authReducer
