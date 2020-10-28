import axios from 'axios';
import authActions from './authAction';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};
const register = credentials => dispatch => {
    dispatch(authActions.registerRequest());
    axios
    .post(`https://goit-phonebook-api.herokuapp.com/users/signup`, credentials)
    .then(response => {
        token.set(response.data.token)
        dispatch(authActions.registerSuccess(response.data));
    })
    .catch(error => dispatch(authActions.registerError(error)))
};

const logIn = credentials => dispatch => {
    dispatch(authActions.loginRequest());
    axios
    .post('https://goit-phonebook-api.herokuapp.com/users/login', credentials )
    .then(response => {
        token.set(response.data.token);
        dispatch(authActions.loginSuccess(response.data));
        console.log(response)
    })
    .catch(error => dispatch(authActions.loginError(error)))
}

const logOut = () => dispatch => {
    dispatch(authActions.logoutRequest());

    axios
    .post('https://goit-phonebook-api.herokuapp.com/users/logout')
    .then(() => {
        token.unset();
        dispatch(authActions.logoutSuccess());
    })
    .catch(error => dispatch(authActions.logoutError(error)))
}
const getCurrentUser = () => (dispatch, getState) => {
    const {auth: {token: persistedToken}} = getState();
    if(!persistedToken) {
        return;
    }
    token.set(persistedToken);
    dispatch(authActions.getCurrentUserRequest());
    axios
    .get('https://goit-phonebook-api.herokuapp.com/users/current')
    .then(({data}) => dispatch(authActions.getCurrentUserSuccess(data)))
    .catch((error) => authActions.getCurrentUserError(error))
}

export default {
    register,
    logIn,
    logOut,
    getCurrentUser
}