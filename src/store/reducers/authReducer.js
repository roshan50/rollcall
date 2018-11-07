const initialState = {
    username: "No User",
    isLoggedIn: false
};
const authReducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                username: action.data.username,
                isLoggedIn: true
            };
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
};

export default authReducer
