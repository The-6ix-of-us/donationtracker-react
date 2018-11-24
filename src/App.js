import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Auth from './components/Auth';

import Locations from './components/Locations';

const history = createBrowserHistory();

const Home = () => (
  <HashRouter history={history}>
    <div className="content">
      <Header />
      <Switch>
        <Route path="/locations" component={Locations} />
      </Switch>
    </div>
  </HashRouter>
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
