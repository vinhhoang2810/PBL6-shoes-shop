import React, { Component } from 'react';
import './App.css'; // Đảm bảo đường dẫn đúng đến tệp CSS của bạn

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'admin',
      password: 'admin',
      rememberMe: false,
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Xử lý đăng nhập tại đây, có thể gửi dữ liệu đăng nhập đến máy chủ
  };

  render() {
    const { username, password, rememberMe } = this.state;

    return (
      <div className="wrapper">
        <div className="form-box login">
          <h1>Welcome Back!</h1>
          <form id="login-form" onSubmit={this.handleSubmit}>
            <div className="input-box">
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={this.handleInputChange}
              />
              <label>Username</label>
            </div>
            <div className="input-box">
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={this.handleInputChange}
              />
              <label>Password</label>
            </div>
            <div className="remember-forgot">
              <label>
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={rememberMe}
                  onChange={this.handleInputChange}
                />
                Remember me
              </label>
              <a href="forgerpass.html">Forget Password</a>
            </div>
            <button type="submit" className="btn" id="btn-login">
              LOGIN
            </button>
            <div className="login-register">
              <p>
                Don't have an account?<a href="./register.html" className="register-link">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
