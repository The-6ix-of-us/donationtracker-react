import types from './types';

import firestore from '../../firestore';

const fetchLocationsRequest = () => ({
  type: types.FETCH_LOCATIONS_REQUEST,
  isFetching: true,
});

const fetchLocationsSuccess = (locations) => ({
  type: types.FETCH_LOCATIONS_SUCCESS,
  payload: locations,
});

const fetchLocations = () => (
  (dispatch) => {
    dispatch(fetchLocationsRequest())

    firestore.collection('location-data').get()
      .then(querySnapshot => {
        const locations = [];

        querySnapshot.forEach(doc => {
          locations.push(doc.data());
        });

        dispatch(fetchLocationsSuccess(locations));
      })
      .catch(error => ({
        type: types.FETCH_LOCATIONS_FAILURE,
        error,
      }));
    }
);

const fetchItemsRequest = () => ({
  type: types.FETCH_ITEMS_REQUEST,
});

const fetchItemsSuccess = (items) => ({
  type: types.FETCH_ITEMS_SUCCESS,
  payload: items,
});

const fetchItems = () => (
  (dispatch) => {
    dispatch(fetchItemsRequest());

    firestore.collection('donation-item').get()
      .then(querySnapshot => {
        const items = {};

        querySnapshot.forEach(doc => {
          items[doc.id] = doc.data();
        })

        dispatch(fetchItemsSuccess(items));
      })
      .catch(error => ({
        type: types.FETCH_ITEMS_FAILURE,
        error
      }))
  }
);

const actions = {
  fetchLocations,
  fetchItems,
};

export default actions;
