import { Component } from "react";

export default class LongText extends Component {
  render() {
    let textColor = this.props.text.length > 5 ? "red" : "green";
    return (
      <div>
        <h2 style={{ color: textColor }}>{this.props.text}</h2>
      </div>
    );
  }
}

