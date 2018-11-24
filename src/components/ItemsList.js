import React, { Component } from 'react';

class ItemsList extends Component {
  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
  }

  renderItem(item) {
    return (
      <li className="list-group-item">
        {this.props.allItems[item]['Name']}
      </li>
    )
  }

  render() {
    return (
      <div className="content-container">
        <ul className="list-group">
          {this.props.items.map(item => this.renderItem(item))}
        </ul>
      </div>
    )
  }
}

export default ItemsList;
