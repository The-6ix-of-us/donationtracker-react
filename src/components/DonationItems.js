import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';

import actions from '../redux/locations/actions';

const ItemInfo = (props) => (
  <div>
    <div>
      <h2>{props.item['Name']}</h2>
      <h5>Category</h5>{props.item['Category']}
      <h5>Short Description</h5>{props.item['Description']}
      <h5>Full Description</h5>{props.item['Description Full']}
      <h5>Value</h5>{props.item['Value']}
    </div>
    <button className="btn btn-outline-danger" onClick={props.closeModal}>Close</button>
  </div>
);

class DonationItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      item: {},
      search: '',
    }

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.filterItems = this.filterItems.bind(this);
  }

  closeModal() {
    this.setState({ modalIsOpen: false});
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  renderItem(item) {
    return (
      <li className="list-group-item" onClick={() => {
        this.openModal();
        this.setState({ item });
      }}>
        {item['Name']}
      </li>
    )
  }

  filterItems(items, search) {
    const filteredItems = [];
    Object.keys(items).forEach((id) => {
      if (items[id]['Name'].toLowerCase().includes(search.toLowerCase())) {
        filteredItems.push(items[id]);
      }
    });
    return filteredItems;
  }

  render() {
    const { items } = this.props.locations;
    return (
      <div className="container">
        <h2>Donation Items</h2>
        <input type="text" className="form-control" placeholder="Search Items" onChange={(e) => {
          this.setState({ search: e.target.value });
        }}/>
        <ul className="list-group">
          {this.filterItems(items, this.state.search).map((item) => this.renderItem(item))}
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="View Location"
          >
            <ItemInfo
              item={this.state.item}
              closeModal={this.closeModal}
            />
          </Modal>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  locations: state.locations
});

const mapDispatchToProps = (dispatch) => ({
  fetchItems: dispatch(actions.fetchItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DonationItems);
