import axios from 'axios';

export function login(data){
    return dispatch => {
        return axios.post('http://127.0.0.1:8000/api/login',data)
            .then(response => {
                dispatch(loginSuccess(response.data));
                // console.log(response.data);
                // this.props.history.push("/");
            })
            .catch(error => {
                throw(error);
            });
    }
}
export const loginSuccess =  (data) => {
    return {
        type: 'LOGIN',
        data: {
            msg: data.msg,
            token: data.token,
            username: data.username
        }
    }
};

export function logout()  {
    return {type: 'LOGOUT'}
};
