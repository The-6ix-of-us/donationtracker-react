import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }

    this.onLogin = this.onLogin.bind(this);
  }

  onLogin() {
    this.props.login(this.state.email, this.state.password);
  }

  render() {
    return (
      <div className="d-flex flex-wrap">
        <div className="input-group">
          <label>Email</label>
          <input type="text" name="email" onChange={(e) => this.setState({ email: e.target.value })}/>
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" name="password" onChange={(e) => this.setState({ password: e.target.value })}/>
        </div>
        <button className="btn btn-outline-success" onClick={this.onLogin}>Login</button>
        <button className="btn btn-small" onClick={this.props.onRegister}>Create an account</button>
      </div>
    )
  }
}

export default Login;
