import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from './components/Login';

import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Auth from './components/Auth';

const Home = () => (
  <div>
    <Header />
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        {!this.props.auth.user && <Auth />}
        {this.props.auth.user && <Home />}
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <Header />
      //   </header>
      // </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(App);
