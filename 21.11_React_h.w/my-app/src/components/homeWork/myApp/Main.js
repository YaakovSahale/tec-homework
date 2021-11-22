import React from "react";

export default class Main extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <p>{this.props.description}</p>
        <img src={this.props.imgUrl}></img>
        <video controls autoPlay muted src={this.props.videoUrl}></video>
      </div>
    );
  }
}
