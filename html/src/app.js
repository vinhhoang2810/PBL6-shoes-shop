import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    // Khởi tạo state của ứng dụng
    this.state = {
      message: "Hello, World!",
      count: 0,
    };
  }

  // Phương thức xử lý sự kiện
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increase Count</button>
      </div>
    );
  }
}

export default App;
