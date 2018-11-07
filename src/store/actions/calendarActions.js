import axios from "axios/index";

export const createCalendar = (calendar) =>{
    return (dispatch, getState)=>{
        dispatch({type:'CREATE_CALENDER',calendar});
    }
}

export function fetchAllCalendars() {
    return (dispatch) => {
        return axios.get('http://127.0.0.1:8000/api/calendars')
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