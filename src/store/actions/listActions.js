import axios from 'axios';
import config from '../../config.js';

export const deleteRecord = (id,url,token) => {
    return (dispatch) => {
        console.log(id+'...'+url);
        return axios.get(`${config.url}/${token}/${url}/delete/${id}`)
            .then(response => {
                dispatch(deleteUserSuccess(response.data))
                console.log(response.data);
            })
            .catch(error => {
                throw(error);
            });
    };
};
export const deleteUserSuccess = id => {
    return {
        type: 'DELETE_RECORD',
        id: id
    }
}