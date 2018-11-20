const initialState = {
    calendars: []
};
const  calendarReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'CREATE_CALENDAR':
            return {
            ...state,
                calendar: action.calendar,
                add_msg: action.add_msg
            };
        case 'CREATE_CALENDAR_FAILED':
            return {
                ...state,
                add_msg: action.add_msg
            };
        case 'DELETE_CALENDAR':
            return {
                ...state,
                calendars: action.calendars.filter(calendar =>
                    calendar.id !== action.id
                )
            };
        case 'UPDATE_CALENDAR':
            return {
                ...state,
                calendar: action.calendar,
                update_msg: action.update_msg
            };
        case 'UPDATE_CALENDAR_FAILED':
            return {
                ...state,
                update_msg: action.update_msg
            };
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
