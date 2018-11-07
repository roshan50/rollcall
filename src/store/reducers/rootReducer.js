import { combineReducers } from 'redux'
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import calendarReducer from "./calendarReducer";

const rootReducer = combineReducers({
    auth : authReducer,
    users : userReducer,
    calendars : calendarReducer
})

export default rootReducer