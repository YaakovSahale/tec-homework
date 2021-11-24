import { Component } from "react";

export default class ShowHIde extends Component {
  state = { exist: "100" };
  hideAndShowText = () => {
    this.setState({ exist: this.state.exist === "0" ? "100" : "0" });
  };
  render() {
    const { exist } = this.state;
    const { text } = this.props;
    return (
      <div>
        <p style={{ opacity: exist }}>{text}</p>
        <br></br>
        <button onClick={this.hideAndShowText}>show/hide</button>
      </div>
    );
  }
}
