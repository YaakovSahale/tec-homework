import React from "react";
import "./Food.css";

export default class Food extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="foodTab">
        <div className="foodImgAndTitle">
          <img className="foodImg" src={this.props.item.imgUrl} alt=""></img>
          <h1 className="foodTitle">{this.props.item.title}</h1>
        </div>
        <p>{this.props.item.description}</p>
      </div>
    );
  }
}
