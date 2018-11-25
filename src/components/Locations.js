import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../redux/locations/actions';

import LocationsMap from './LocationsMap';
import LocationsList from './LocationsList';

class Locations extends Component {
  render() {
    return (
      <div className="content-container">
        <h2>Locations</h2>
        <div className="row">
          <div className="col-4">
            <LocationsList
              locations={this.props.locations.locations}
              items={this.props.locations.items}
              addItem={this.props.addItem}
            />
          </div>
          <div className="col-8">
            <LocationsMap
              locations={this.props.locations.locations}
              mapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC7qDP0nGFZaA-rnvRT_hLdz4MgZGaILVE&v=3.exp&libraries=geometry,drawing,places"
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  locations: state.locations,
});

const mapDispatchToProps = (dispatch) => ({
  fetchLocations: dispatch(actions.fetchLocations()),
  fetchItems: dispatch(actions.fetchItems()),
  addItem: (itemInfo) => dispatch(actions.addItem(itemInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Locations);
