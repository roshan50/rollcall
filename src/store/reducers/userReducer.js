const initialState = {
    users: []
};
export default function userReducer(state = initialState, action) {
    // console.log(action)
    switch (action.type) {
        case 'ADD_USER':
            return [...state, action.user];
        case 'DELETE_USER':
            return state.filter(user => user._id !== action.user.id);
        case 'FETCH_USER':
            return action.users;
        default:
            return state;
    }
}
