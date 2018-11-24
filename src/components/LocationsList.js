import React, { Component } from 'react';
import Modal from 'react-modal';

import ItemsList from './ItemsList';
import AddItemForm from './AddItem';

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
    <button className="btn btn-outline-primary" onClick={props.openAddModal}>Add Donation Item</button>
    <button className="btn btn-outline-danger" onClick={props.closeModal}>Close</button>
  </div>
);

class LocationsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locationModalIsOpen: false,
      addModalIsOpen: false,
      location: {},
    }

    this.renderItem = this.renderItem.bind(this);
    this.closeLocationModal = this.closeLocationModal.bind(this);
    this.closeAddModal = this.closeAddModal.bind(this);
    this.openAddModal = this.openAddModal.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  closeLocationModal() {
    this.setState({ locationModalIsOpen: false });
  }

  openAddModal() {
    this.closeLocationModal();
    this.setState({ addModalIsOpen: true});
  }

  closeAddModal() {
    this.setState({ locationModalIsOpen: true});
    this.setState({ addModalIsOpen: false});
  }

  addItem(itemInfo) {
    this.props.addItem({ ...itemInfo, location: this.state.location.id });
  }

  renderItem(location) {
    return (
      <li className="list-group-item" onClick={() => {
        this.setState({ locationModalIsOpen: true });
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
            isOpen={this.state.locationModalIsOpen}
            onRequestClose={this.closeLocationModal}
            contentLabel="View Location"
          >
            <LocationInfo
              location={this.state.location}
              closeModal={this.closeLocationModal}
              items={this.props.items}
              openAddModal={this.openAddModal}
            />
          </Modal>
          <Modal
            isOpen={this.state.addModalIsOpen}
            onRequestClose={this.closeAddModal}
            contentLabel="Add Donation Item"
          >
            <AddItemForm
              closeModal={this.closeAddModal}
              addItem={this.addItem}/>
          </Modal>
        </ul>
      </div>
    )
  }
}

export default LocationsList;
