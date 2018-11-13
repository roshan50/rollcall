import axios from "axios/index";
import config from '../../config.js';

export const updateConfig = (data,id) => {
    return (dispatch) => {
        return axios.post(`${config.url}/config/update/${id}`, data)
            .then(response => {
                dispatch(updateConfigSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const updateConfigSuccess =  (data) => {
    return {
        type: 'UPDATE_CONFIG',
        config: {
            _id: data._id,
            title: data.title,
            value: data.value,
            type: data.type,
        }
    }
};

export function fetchAllConfigs() {
    return (dispatch) => {
        return axios.get(`${config.url}/configs`)
            .then(response => {
                dispatch(fetchConfigs(response.data));
            })
            .catch(error => {
                throw(error);
            });
    };
};

const fetchConfigs = (configs) => {
    return {
        type: 'FETCH_CONFIG',
        configs
    }
};