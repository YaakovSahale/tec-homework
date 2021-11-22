import { Component } from "react";

export default class Counter extends Component {
  state = { counter: this.props.startValue };
  incHandler = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decHandler = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={this.incHandler}>increment</button>
        <button onClick={this.decHandler}>decrement</button>
      </div>
    );
  }
}
