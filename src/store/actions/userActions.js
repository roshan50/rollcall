import axios from 'axios';
import config from '../../config.js';

export const createUser = (data,token) => {
    console.log(data);
    return (dispatch) => {
        return axios.post(`${config.url}/${token}/user/add`, data)
            .then(response => {
                dispatch(createUserSuccess(response.data.msg,data))
                console.log(response.data.msg)
            })
            .catch(error => {
                // throw(error);
                console.log(error.response.data.desc)
                dispatch(createUserFailed(error.response.data.msg))
            });
    };
};

export const createUserSuccess =  (msg,user) => {
    return {
        type: 'ADD_USER',
        user : user,
        add_msg : msg
    }
};
export const createUserFailed =  (msg) => {
    return {
        type: 'ADD_USER_FAILED',
        add_msg : msg
    }
};

export function fetchAllUsers(token) {
    return (dispatch) => {
        return axios.get(`${config.url}/${token}/user/list`)
            .then(response => {
                // console.log(response.data.users);
                dispatch(fetchUsers(response.data.users));

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

export const deleteUser = (id,url,token) => {
    return (dispatch,getState) => {
        var users = getState().users.users;
        dispatch(deleteUserSuccess('msg',users,id))
        return axios.get(`${config.url}/${token}/${url}/delete/${id}`)
            .then(response => {
                dispatch(deleteUserSuccess(response.data,users,id))
                console.log(response.data);
            })
            .catch(error => {
                throw(error);
            });
    };
};
export const deleteUserSuccess = (data,users,id) => {
    return {
        type: 'DELETE_USER',
        delete_msg: data.msg,
        users : users,
        id : id
    }
}

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


