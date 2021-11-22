import React from "react";

export default class Footer extends React.Component{
    constructor(props){
        super()
    }

    render(){
        return(
            <div>
                <form>
                    <input placeholder="enter your first name:"></input>
                    <input placeholder="enter your last name:"></input>
                    <input placeholder="enter your email:"></input>
                </form>
            </div>
        )
    }
}