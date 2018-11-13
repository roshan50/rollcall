const initialState = {
    offices: []
};
const  officeReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'ADD_OFFICE':
            return {
                ...state,
                offices: action.offices
            };
            break;
        case 'FETCH_OFFICE':
            return {
                ...state,
                offices: action.offices
            };
        default:
            return state;
    }
}
export default officeReducer
