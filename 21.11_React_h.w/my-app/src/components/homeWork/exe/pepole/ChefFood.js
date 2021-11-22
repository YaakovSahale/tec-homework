import React from "react";
import "./ChefFood.css";

export default class ChefFood extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="foodTab"> 
        <h1 className="foodImgAndTitle" >{this.props.foodTitle}</h1>
        <p className="foodImgAndTitle" >{this.props.description}</p>
        <img className="imgUrl" src={this.props.imgUrl} alt=""></img>
      </div>
    );
  }
}
