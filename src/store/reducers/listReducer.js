const initialState = {

};
export default function listReducer(state = initialState, action) {
    switch (action.type) {
        case 'DELETE_RECORD':
            // return state.filter(record => record._id !== action.id);
            return state;
        default:
            return state;
    }
}
