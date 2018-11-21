import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../redux/auth/actions';

import Login from './Login';
import Register from './Register';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: true,
    }

    this.onRegister = this.onRegister.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  onRegister() {
    this.setState({ login: false });
  }

  onLogin() {
    this.setState({ login: true });
  }

  render() {
    if (this.state.login) {
      return <Login login={this.props.login} onRegister={this.onRegister}/>
    } else {
      return <Register register={this.props.register} onLogin={this.onLogin}/>
    }
  }
}

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(actions.login(email, password)),
  register: (email, password, userType) => dispatch(actions.register(email, password, userType)),
});

export default connect(null, mapDispatchToProps)(Auth);
