const initialState = {
    calendars: []
};
const  calendarReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'CREATE_CALENDAR':
            console.log('created calendar', action.calendar)
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
