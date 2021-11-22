import React from "react";
import './Header.css'

export default class Header extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <img className="logo" src={this.props.logoUrl}></img>
        <h1>{this.props.logoName}</h1>
      </div>
    );
  }
}
