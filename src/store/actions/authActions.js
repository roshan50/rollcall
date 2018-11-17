import axios from 'axios';
import config from '../../config.js';

export function login(data,history){
    // console.log(config.url);
    return dispatch => {
        return axios.post(`${config.url}/login`,data)
            .then(response => {
                if(response.data.msg === "OK"){
                    dispatch(loginSuccess(response.data,data.username));
                    // console.log(response.data)
                    history.push('/');
                }
            })
            .catch(error => {
                // throw(error);
                console.log(error.response);
                dispatch(loginFailed(error.response.data));
            });
    }
}
export const loginSuccess =  (data,username) => {
    // localStorage.setItem('isLogIn', true);
    // localStorage.setItem('username', data.username);
    return {
        type: 'LOGIN',
        data: {
            msg: data.msg,
            token: data.token,
            username: username
        }
    }
};
export const loginFailed =  (data) => {
    return {
        type: 'LOGIN_FAILED',
        data: {
            msg: data.msg
        }
    }
};

export function logout()  {
    // localStorage.setItem('isLogIn', false);
    // localStorage.setItem('username', 'No User');
    return {type: 'LOGOUT'}
};
