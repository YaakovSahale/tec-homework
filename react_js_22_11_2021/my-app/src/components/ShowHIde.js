import { Component } from "react";

export default class ShowHIde extends Component {
    state = {exist: 'inline-block'}
    hideAndShowText=()=>{
        this.setState({exist : this.state.exist === 'none' ? 'inline-block':'none'})
    }
  render() {
    return (
      <div>
        <p style={{display : this.state.exist}}>{this.props.text}</p><br></br>
        <button onClick={this.hideAndShowText}>show/hide</button>
      </div>
    );
  }
}
