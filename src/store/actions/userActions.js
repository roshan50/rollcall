import axios from 'axios';
import config from '../../config.js';

export const createUser = (data,token) => {
    console.log(data);
    return (dispatch) => {
        return axios.post(`${config.url}/${token}/user/add`, data)
            .then(response => {
                dispatch(createUserSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const createUserSuccess =  (data) => {
    return {
        type: 'ADD_USER',
        user : data
    }
};

export function fetchAllUsers(token) {
    return (dispatch) => {
        return axios.get(`${config.url}/${token}/user/list`)
            .then(response => {
                dispatch(fetchUsers(response.data.users));
                // console.log(response.data.users);
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const fetchUsers = (users) => {
    return {
        type: 'FETCH_USER',
        users
    }
};

export function fetchOneUser(id,token) {
    return (dispatch) => {
        return axios.get(`${config.url}/${token}/user/show/${id}`)
            .then(response => {
                dispatch(fetchUserSuccess(response.data));
                console.log('fetch one user')
                console.log(response.data.user);
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const fetchUserSuccess = (user) => {
    return {
        type: 'FETCH_ONE_USER',
        user
    }
};

export function updateUser(data,id,token) {
    return (dispatch) => {
        return axios.post(`${config.url}/${token}/user/update/${id}`,data)
            .then(response => {
                dispatch(updateUserSuccess(response.data));
                console.log(response.data);
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const updateUserSuccess = (users) => {
    return {
        type: 'UPDATE_USER',
        users
    }
};

export function fetchUserTypes(type,token){
    return (dispatch) => {
        axios.get(`${config.url}/${token}/user/list?type=${type}`)
            .then(response => {
                if(type === 'chief'){
                    dispatch(fetchUserChiefSuccess(response.data.users));
                }else{
                    dispatch(fetchUserDirectSuccess(response.data.users));
                }

            })
            .catch(error => {
                throw(error);
            });
    };
}

export const fetchUserChiefSuccess = (users) => {
    return {
        type: 'FETCH_USER_CHIEF',
        users
    }
};

export const fetchUserDirectSuccess = (users) => {
    return {
        type: 'FETCH_USER_DIRECT',
        users
    }
};


