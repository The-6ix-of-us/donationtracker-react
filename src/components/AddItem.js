import React, { Component } from 'react';

class AddItemForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      category: '',
      description: '',
      descriptionFull: '',
      value: '',
    }

    this.onAddItem = this.onAddItem.bind(this);
  }

  onAddItem() {
    const { name, category, description, descriptionFull, value } = this.state;
    this.props.addItem({ name, category, description, descriptionFull, value });
  }

  render() {
    return (
      <div className="content-container">
        <h2>Add Donation Item</h2>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input className="form-control" type="text" onChange={(e) => this.setState({ name: e.target.value})} />
          </div>
          <div className="form-group">
            <label>Category</label>
            <input className="form-control" type="text" onChange={(e) => this.setState({ category: e.target.value})} />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input className="form-control" type="text" onChange={(e) => this.setState({ description: e.target.value})} />
          </div>
          <div className="form-group">
            <label>Full Description</label>
            <input className="form-control" type="text" onChange={(e) => this.setState({ descriptionFull: e.target.value})} />
          </div>
          <div className="form-group">
            <label>Value</label>
            <input className="form-control" type="text" onChange={(e) => this.setState({ value: e.target.value})} />
          </div>
        </form>
        <button className="btn btn-outline-success" onClick={this.onAddItem}>Add Item</button>
        <button className="btn btn-outline-secondary" onClick={this.closeModal}>Cancel</button>z
      </div>
    )
  }
}

export default AddItemForm;
