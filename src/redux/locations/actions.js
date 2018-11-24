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
          locations.push(Object.assign({}, doc.data(), { id: doc.id }));
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

const addItemRequest = () => ({
  type: types.ADD_ITEM_REQUEST,
});

const addItemSuccess = () => ({
  type: types.ADD_ITEM_SUCCESS,
});

const addItem = (info) => (
  (dispatch) => {
    dispatch(addItemRequest());

    const item = firestore.collection('donation-item').doc();
    const itemInfo = {
      'Name': info.name,
      'Category': info.category,
      'Description': info.description,
      'Description Full': info.descriptionFull,
      'Value': info.value,
      'Location ID': info.location,
    };
    item.set(itemInfo);

    const locationReference = firestore.collection('location-data').doc(info.location)
    locationReference.get().then(doc => {
      const items = doc.data()['Items'];
      console.log(item.id);
      items.push(item.id);
      locationReference.update({ 'Items': items })
        .then(() => dispatch(addItemSuccess()))
        .catch(error => ({
          type: types.ADD_ITEM_FAILURE,
          error,
        }))
    });
  }
)

const actions = {
  fetchLocations,
  fetchItems,
  addItem,
};

export default actions;
