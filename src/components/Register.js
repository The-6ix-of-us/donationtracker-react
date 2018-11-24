import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      userType: '',
    }

    this.onRegister = this.onRegister.bind(this);
  }

  onRegister() {
    this.props.register(this.state.email, this.state.password, this.state.userType);
  }

  render() {
    return (
      <div className="container">
        <div className="input-group">
          <div>
            <label>Email</label>
          </div>
          <input type="text" name="email" onChange={(e) => this.setState({ email: e.target.value })}/>
        </div>
        <div className="input-group">
          <div>
            <label>Password</label>
          </div>
          <input type="password" name="password" onChange={(e) => this.setState({ password: e.target.value })}/>
        </div>
        <div className="input-group">
          <div>
            <input type="radio" name="userType" onChange={() => this.setState({ userType: 'admin'})}/>
            <label className="inline-label">Admin</label>
          </div>
          <div>
            <input type="radio" name="userType" onChange={() => this.setState({ userType: 'locationEmployee'})}/>
            <label className="inline-label">Location Employee</label>
          </div>
        </div>
        <button className="btn btn-outline-success" onClick={this.onRegister}>Register</button>
        <button className="btn btn-small" onClick={this.props.onLogin}>Have an account?</button>
      </div>
    )
  }
}

export default Register;
