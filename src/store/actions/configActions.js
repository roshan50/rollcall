import axios from "axios/index";

export const createConfig = (config) =>{
    return (dispatch, getState)=>{
        dispatch({type:'CREATE_CALENDER',config});
    }
}

export function fetchAllConfigs() {
    return (dispatch) => {
        return axios.get('http://127.0.0.1:8000/api/configs')
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