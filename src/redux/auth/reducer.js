import types from './types';

const initialState = {
  isFetching: false,
  user: undefined,
  error: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST_TYPE:
    case types.REGISTER_REQUEST_TYPE: return Object.assign({}, state, {
      isFetching: true,
    });
    case types.LOGIN_SUCCESS_TYPE: return Object.assign({}, state, {
      isFetching: false,
      user: action.payload,
    });
    case types.REGISTER_SUCCESS_TYPE: return Object.assign({}, state, {
      isFetching: false,
      user: action.payload,
    })
    default: return state;
  }
}

export default auth;
