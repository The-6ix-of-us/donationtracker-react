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
        <LocationsList
          locations={this.props.locations.locations}
          items={this.props.locations.items}
          addItem={this.props.addItem}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  locations: state.locations,
  items: state.items
});

const mapDispatchToProps = (dispatch) => ({
  fetchLocations: dispatch(actions.fetchLocations()),
  fetchItems: dispatch(actions.fetchItems()),
  addItem: (itemInfo) => dispatch(actions.addItem(itemInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Locations);
