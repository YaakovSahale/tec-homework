import React from "react";
import "./managers1.css";

export default class Managers1 extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="managerTab"> 
        <img className="managerUrl" src={this.props.imgUrl} alt=""></img>
        <h1 className="urlImgAndTitle" >{this.props.name}</h1>
        <h3 className="urlImgAndTitle" >{this.props.jobTitle}</h3>
      </div>
    );
  }
}
