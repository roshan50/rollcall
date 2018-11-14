import axios from 'axios';
import config from '../../config.js';

export const deleteRecord = (id,url,token) => {
    return (dispatch,getState) => {
        var users = getState().users.users;
        console.log(getState());
        console.log(id+'...'+url);
        dispatch(deleteUserSuccess('msg',users,id))
        console.log(getState());
        // return axios.get(`${config.url}/${token}/${url}/delete/${id}`)
        //     .then(response => {
        //         dispatch(deleteUserSuccess(response.data,users,id))
        //         console.log(response.data);
        //     })
        //     .catch(error => {
        //         throw(error);
        //     });
    };
};
export const deleteUserSuccess = (msg,users,id) => {
    return {
        type: 'DELETE_RECORD',
        delete_msg: msg,
        users : users,
        id : id
    }
}