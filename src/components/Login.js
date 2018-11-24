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
      <div>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input className="form-control" type="text" name="email" onChange={(e) => this.setState({ email: e.target.value })}/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input className="form-control" type="password" name="password" onChange={(e) => this.setState({ password: e.target.value })}/>
          </div>
        </form>

        <span>
          <button className="btn btn-outline-success" onClick={this.onLogin}>Login</button>
          <button className="btn btn-small" onClick={this.props.onRegister}>Create an account</button>
        </span>
      </div>
    )
  }
}

export default Login;
