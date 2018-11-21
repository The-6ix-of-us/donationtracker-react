import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light navbar-expand-lg">
          <a className="navbar-brand">Donation Tracker</a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/#/store">Store</a>
              </li>
            </ul>
          </div>
          <a className="nav-link" style={{float: 'right'}} href="/#/cart">My Cart</a>
        </nav>
      </div>
    )
  }
}

export default Header;
