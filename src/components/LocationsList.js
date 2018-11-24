import React, { Component } from 'react';
import Modal from 'react-modal';

import ItemsList from './ItemsList';

const LocationInfo = (props) => (
  <div>
    <h2>{props.location['Name']}</h2>
    <h5>Street Address</h5>{props.location['Street Address']}
    <h5>City</h5>{props.location['City']}
    <h5>State</h5>{props.location['State']}
    <h5>ZIP</h5>{props.location['Zip']}
    <h5>Coordinates</h5>{`${props.location['Coordinates'].latitude}, ${props.location['Coordinates'].longitude}`}
    <h5>Phone</h5>{props.location['Phone']}
    <h5>Website</h5>{props.location['Website']}
    <h5>Type</h5>{props.location['Type']}
    <h5>Items</h5>
    <ItemsList items={props.location['Items']} allItems={props.items} />
    <button className="btn btn-outline-danger" onClick={props.closeModal}>Close</button>
  </div>
);

class LocationsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      location: {},
    }

    this.renderItem = this.renderItem.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  renderItem(location) {
    return (
      <li className="list-group-item" onClick={() => {
        this.setState({ modalIsOpen: true });
        this.setState({ location });
      }}>
        {location['Name']}
      </li>
    )
  }

  render() {
    return (
      <div className="container">
        <ul className="list-group">
          {this.props.locations.map((location) => this.renderItem(location))}
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="View Location"
          >
            <LocationInfo location={this.state.location} closeModal={this.closeModal} items={this.props.items}/>
          </Modal>
        </ul>
      </div>
    )
  }
}

export default LocationsList;
