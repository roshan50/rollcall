import axios from "axios/index";
import config from '../../config.js';

export const createOffice = (data,token) => {
    return (dispatch) => {
        return axios.post(`${config.url}/${token}/office/add`, data)
            .then(response => {
                dispatch(createOfficeSuccess(response.data.msg,data))
            })
            .catch(error => {
                var msg='';
                for(var key in error.response.data.desc){
                    msg+=` ${error.response.data.desc[key]}.`
                }
                dispatch(createOfficeFailed(msg))
            });
    };
};

export const createOfficeSuccess =  (msg,office) => {
    return {
        type: 'ADD_OFFICE',
        office:office,
        add_msg: msg
    }
};

export const createOfficeFailed =  (msg) => {
    return {
        type: 'ADD_OFFICE_FAILED',
        add_msg: msg
    }
};


export function fetchAllOffices(token) {
    return (dispatch) => {
        return axios.get(`${config.url}/${token}/office/list`)
            .then(response => {
                dispatch(fetchOffices(response.data.offices));
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

export const deleteOffice = (id,url,token) => {
    return (dispatch,getState) => {
        var offices = getState().offices.offices;
        return axios.get(`${config.url}/${token}/${url}/delete/${id}`)
            .then(response => {
                dispatch(deleteOfficeSuccess(response.data,offices,id))
                console.log(response.data);
            })
            .catch(error => {
                // throw(error);
                console.log(error.response)
            });
    };
};
export const deleteOfficeSuccess = (data,offices,id) => {
    return {
        type: 'DELETE_OFFICE',
        delete_msg: data.msg,
        offices : offices,
        id : id
    }
}

export function updateOffice(data,id,token) {
    return (dispatch) => {
        return axios.post(`${config.url}/${token}/office/update/${id}`,data)
            .then(response => {
                dispatch(updateOfficeSuccess(data,response.data.msg));
                console.log(response.data);
            })
            .catch(error => {
                var msg='';
                for(var key in error.response.data.desc){
                    msg+=` ${error.response.data.desc[key]}.`
                }
                dispatch(createOfficeFailed(msg))
            });
    };
};

export const updateOfficeSuccess = (office,msg) => {
    return {
        type: 'UPDATE_OFFICE',
        office,
        update_msg: msg
    }
};

export const updateOfficeFailed = (office,msg) => {
    return {
        type: 'UPDATE_OFFICE_FAILED',
        office,
        update_msg: msg
    }
};