import axios from "axios/index";

export const createOffice = (office) =>{
    return (dispatch, getState)=>{
        dispatch({type:'CREATE_CALENDER',office});
    }
}

export function fetchAllOffices() {
    return (dispatch) => {
        return axios.get('http://127.0.0.1:8000/api/offices')
            .then(response => {
                dispatch(fetchOffices(response.data));
            })
            .catch(error => {
                throw(error);
            });
    };
};

const fetchOffices = (offices) => {
    return {
        type: 'FETCH_OFFICE',
        offices
    }
};