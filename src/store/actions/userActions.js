import axios from 'axios';

export const createUser = (data) => {
    return (dispatch) => {
        return axios.post(`http://127.0.0.1:8000/api/users/add`, data)
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
        user: {
            _id: data._id,
            name: data.name,
            email: data.email
        }
    }
};

export const deleteUserSuccess = id => {
    return {
        type: 'DELETE_USER',
        user: {
            id
        }
    }
}

export const deleteUser = id => {
    return (dispatch) => {
        return axios.get(`http://127.0.0.1:8000/api/users/delete/${id}`)
            .then(response => {
                dispatch(deleteUserSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};

export function fetchAllUsers() {
    return (dispatch) => {
        return axios.get('http://127.0.0.1:8000/api/users')
            .then(response => {
                dispatch(fetchUsers(response.data));
                // console.log(response.data);
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