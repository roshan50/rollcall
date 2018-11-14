const initialState = {

};

export default function listReducer(state = initialState, action) {
    switch (action.type) {
        case 'DELETE_RECORD':
            // return state.filter(users => users.id !== action.id);
            // return state;
            // return { users: state.users.users.filter(user =>
            //         user.id !== action.id
            //     )}
            return {
                ...state,
                users: action.users.filter(user =>
                    user.id !== action.id
                )
            };
        default:
            return state;
    }
}
