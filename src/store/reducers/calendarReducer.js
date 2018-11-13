const initialState = {
    calendars: []
};
const  calendarReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'CREATE_CALENDAR':
            return {
            ...state,
                calendars: action.calendars
            };
            break;
        case 'UPDATE_CALENDAR':
            return {
                ...state,
                calendars: action.calendars
            };
            break;
        case 'FETCH_CALENDAR':
            return {
                ...state,
                calendars: action.calendars
            };
        default:
            return state;
    }
}
export default calendarReducer
