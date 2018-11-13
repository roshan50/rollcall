import axios from "axios/index";
import config from '../../config.js';

export const createOffice = (data) => {
    return (dispatch) => {
        return axios.post(`${config.url}/office/add`, data)
            .then(response => {
                dispatch(createOfficeSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const createOfficeSuccess =  (data) => {
    return {
        type: 'ADD_OFFICE',
        user: {
            _id: data._id,
            name: data.name,
            lat: data.lat,
            long: data.long,
            address: data.address,
            ReadOnly: data.ReadOnly,
        }
    }
};


export function fetchAllOffices() {
    return (dispatch) => {
        return axios.get(`${config.url}/offices`)
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