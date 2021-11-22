import React from "react";
import './Person1.css'

export default class Person1 extends React.Component{
    constructor(props){
        super()
    }

    render(){
        return(
            <div className="chefTab">
                <img className="chefImg" src={this.props.urlImg} alt=""></img>
                <h1 className="nameAndJob">{this.props.shefName}</h1>
                <h3 className="nameAndJob">{this.props.jobTitle}</h3>
            </div>
        )
    }
}