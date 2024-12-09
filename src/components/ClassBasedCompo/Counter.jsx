import { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  resetCount = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <h2>Count: {this.state.count}</h2>

        <div>
          <button onClick={this.incrementCount}>Increment</button>
          <button onClick={this.decrementCount}>Decrement</button>
          <button onClick={this.resetCount}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Counter;
