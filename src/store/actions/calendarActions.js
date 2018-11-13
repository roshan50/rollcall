import axios from "axios/index";
import config from '../../config.js';

// export const createCalendar = (calendar) =>{
//     console.log(calendar)
//     return (dispatch, getState)=>{
//         dispatch({type:'CREATE_CALENDAR',calendar});
//     }
// }
export const createCalendar = (calendar) => {
    return (dispatch) => {
        return axios.post(`${config.url}/calendars/add`, calendar)
            .then(response => {
                dispatch(createCalendarSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const createCalendarSuccess =  (calendar) => {
    return {
        type: 'CREATE_CALENDAR',
        calendar: {
            _id: calendar._id,
            year: calendar.year,
            month: calendar.month,
            holidays: calendar.holidays,
            ReadOnly: calendar.ReadOnly,
        }
    }
};

export const updateCalendar = (calendar,id) => {
    return (dispatch) => {
        return axios.post(`${config.url}/calendars/update/${id}`, calendar)
            .then(response => {
                dispatch(updateCalendarSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const updateCalendarSuccess =  (calendar) => {
    return {
        type: 'UPDATE_CALENDAR',
        calendar: {
            _id: calendar._id,
            year: calendar.year,
            month: calendar.month,
            holidays: calendar.holidays,
            ReadOnly: calendar.ReadOnly,
        }
    }
};



export function fetchAllCalendars() {
    return (dispatch) => {
        return axios.get(`${config.url}/calendars`)
            .then(response => {
                dispatch(fetchCalendars(response.data));
            })
            .catch(error => {
                throw(error);
            });
    };
};

const fetchCalendars = (calendars) => {
    return {
        type: 'FETCH_CALENDAR',
        calendars
    }
};
export function fetchOneCalendar(id) {
    return (dispatch) => {
        return axios.get(`${config.url}/calendar/${id}`)
            .then(response => {
                dispatch(fetchCalendarSuccess(response.data));
            })
            .catch(error => {
                throw(error);
            });
    };
};

const fetchCalendarSuccess = (calendars) => {
    return {
        type: 'FETCH_CALENDAR',
        calendars
    }
};