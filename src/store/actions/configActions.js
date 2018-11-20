import axios from "axios/index";
import config from '../../config.js';

export const updateConfig = (data,id,token) => {
    return (dispatch) => {
        return axios.post(`${config.url}/${token}/config/update/${id}`, data)
            .then(response => {
                dispatch(updateConfigSuccess(response.data,data))
            })
            .catch(error => {
                // throw(error);
                console.log(error.response)
                dispatch(updateConfigFailed(error.response.data.msg))
            });
    };
};

export const updateConfigSuccess =  (data,config) => {
    return {
        type: 'UPDATE_CONFIG',
        config: config,
        update_msg : data.msg
    }
};

export const updateConfigFailed =  (data) => {
    return {
        type: 'UPDATE_CONFIG_FAILED',
        update_msg : data.msg
    }
};

export function fetchAllConfigs(token) {
    return (dispatch) => {
        return axios.get(`${config.url}/${token}/config/list`)
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
