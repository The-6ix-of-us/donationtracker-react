import firebase from '../../firebase';

import types from './types';

const loginRequest = () => ({
  type: types.LOGIN_REQUEST_TYPE,
});

const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS_TYPE,
  payload: user
});

const login = (email, password) => (
  dispatch => {
    dispatch(loginRequest());
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res => dispatch(loginSuccess(res)))
    .catch(error => ({
      type: types.LOGIN_FAILURE_TYPE,
      error
    }));
  }
);

const registerRequest = () => ({
  type: types.REGISTER_REQUEST_TYPE,
});

const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS_TYPE,
  payload: user,
});

const register = (email, password, userType) => (
  dispatch => {
    dispatch(registerRequest());
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(res => dispatch(registerSuccess(res)))
      .catch(error => ({
        type: types.REGISTER_FAILURE_TYPE,
        error,
      }));
  }
);

const actions = {
  login,
  register,
};

export default actions;
