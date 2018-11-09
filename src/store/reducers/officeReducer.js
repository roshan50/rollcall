const initialState = {
    offices: []
};
const  officeReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'CREATE_OFFICE':
            console.log('created office', action.office)
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
