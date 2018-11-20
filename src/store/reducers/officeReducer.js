const initialState = {
    offices: []
};
const  officeReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'ADD_OFFICE':
            return {
                ...state,
                office: action.office,
                add_msg: action.add_msg
            };
        case 'ADD_OFFICE_FAILED':
            return {
                ...state,
                add_msg: action.add_msg
            };
        case 'FETCH_OFFICE':
            return {
                ...state,
                offices: action.offices
            };
        case 'DELETE_OFFICE':
            return {
                ...state,
                offices: action.offices.filter(office =>
                    office.id !== action.id
                )
            };
        case 'UPDATE_OFFICE':
            return {
                ...state,
                office: action.office,
                update_msg: action.update_msg
            };
        case 'UPDATE_OFFICE_FAILED':
            return {
                ...state,
                update_msg: action.update_msg
            };
        default:
            return state;
    }
}
export default officeReducer
