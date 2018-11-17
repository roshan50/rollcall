const initialState = {
    users: [],
    user : []
};
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                user:action.user,
                add_msg: action.add_msg
            };
        case 'ADD_USER_FAILED':
            return {
                ...state,
                add_msg: action.add_msg
            };
        case 'FETCH_USER':
            return {
                ...state,
                users: action.users
            };
        case 'FETCH_ONE_USER':
            return {
                ...state,
                user: action.user
            };
        case 'DELETE_USER':
            return {
                ...state,
                users: action.users.filter(user =>
                    user.id !== action.id
                )
            };
        case 'UPDATE_USER':
            return {
                ...state,
                users: action.users
            };
        case 'FETCH_USER_CHIEF':
            return {
                ...state,
                chiefs: action.users
            };
        case 'FETCH_USER_DIRECT':
            return {
                ...state,
                directs: action.users
            };
        default:
            return state;
    }
}
