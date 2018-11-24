import types from './types';

const initialState = {
  locations: [],
  items: [],
  isFetching: false,
  error: null,
}

const locations = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ITEM_REQUEST:
    case types.FETCH_ITEMS_REQUEST:
    case types.FETCH_LOCATIONS_REQUEST: return Object.assign({}, state, {
      isFetching: true,
    });
    case types.ADD_ITEM_FAILURE:
    case types.FETCH_ITMES_FAILURE:
    case types.FETCH_LOCATIONS_FAILURE: return Object.assign({}, state, {
      isFetching: false,
      error: action.error,
    });
    case types.FETCH_LOCATIONS_SUCCESS: return Object.assign({}, state, {
      isFetching: false,
      locations: action.payload,
    });
    case types.FETCH_ITEMS_SUCCESS: return Object.assign({}, state, {
      isFetching: false,
      items: action.payload,
    })
    case types.ADD_ITEM_SUCCESS: return Object.assign({}, state, {
      isFetching: false,
    })
    default: return state;
  }
};

export default locations;
