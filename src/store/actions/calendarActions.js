import axios from "axios/index";
import config from '../../config.js';

export const createCalendar = (calendar,token) => {
    return (dispatch) => {
        return axios.post(`${config.url}/${token}/calendar/add`, calendar)
            .then(response => {
                dispatch(createCalendarSuccess(calendar,response.data.msg))
            })
            .catch(error => {
                // throw(error);
                console.log(error.response)
                dispatch(createCalendarFailed(error.response.data.msg))
            });
    };
};

export const createCalendarSuccess =  (calendar,msg) => {
    return {
        type: 'CREATE_CALENDAR',
        calendar: calendar,
        add_msg: msg
    }
};
export const createCalendarFailed =  (msg) => {
    return {
        type: 'CREATE_CALENDAR_FAILED',
        add_msg:msg
    }
};

export const updateCalendar = (calendar,id,token) => {
    return (dispatch) => {
        return axios.post(`${config.url}/${token}/calendar/update/${id}`, calendar)
            .then(response => {
                dispatch(updateCalendarSuccess(response.data.msg,calendar))
            })
            .catch(error => {
                // throw(error);
                console.log(error.response)
                dispatch(updateCalendarFailed(error.response.data.msg))
            });
    };
};

export const updateCalendarSuccess =  (msg,calendar) => {
    return {
        type: 'UPDATE_CALENDAR',
        calendar: calendar,
        update_msg:msg
    }
};
export const updateCalendarFailed =  (msg) => {
    return {
        type: 'UPDATE_CALENDAR_FAILED',
        update_msg:msg
    }
};


export function fetchAllCalendars(token) {
    return (dispatch) => {
        return axios.get(`${config.url}/${token}/calendar/list`)
            .then(response => {
                dispatch(fetchCalendars(response.data.calendars));
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
export function fetchOneCalendar(id,token) {
    return (dispatch) => {
        return axios.get(`${config.url}/${token}/calendar/${id}`)
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

export const deleteCalendar = (id,url,token) => {
    return (dispatch,getState) => {
        var calendars = getState().calendars.calendars;
        return axios.get(`${config.url}/${token}/${url}/delete/${id}`)
            .then(response => {
                dispatch(deleteCalendarSuccess(response.data,calendars,id))
                console.log(response.data);
            })
            .catch(error => {
                throw(error);
                // console.log(error.response)
            });
    };
};
export const deleteCalendarSuccess = (data,calendars,id) => {
    return {
        type: 'DELETE_CALENDAR',
        delete_msg: data.msg,
        calendars : calendars,
        id : id
    }
}
