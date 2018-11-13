import { combineReducers } from 'redux'
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import calendarReducer from "./calendarReducer";
import configReducer from "./configReducer";
import officeReducer from "./officeReducer";
import listReducer from "./listReducer";

const rootReducer = combineReducers({
    auth : authReducer,
    users : userReducer,
    calendars : calendarReducer,
    configs : configReducer,
    offices : officeReducer,
    list : listReducer
})

export default rootReducer