import { Component } from "react";
import "./Register.css";

export default class Register extends Component {
  state = {firstName:null, lastName:null,password1:null,password2:null,email:null,checkbox:null};
//   getInputValue = (e)=> {
//     let objValue = {}
//     objValue[e.target.name] = e.target.value
//     this.setState(objValue)
//   }

  submitForm = (e)=>{
    e.preventDefault()
    
    // for (let i = 0; i < e.target.length-1; i++) {
    //     console.log(e.target[i].value);
    // }

    const firstNameValue = e.target.firstName.value
    const lastNameValue = e.target.lastName.value
    const emailValue = e.target.email.value
    const password1Value = e.target.password1.value
    const password2Value = e.target.password2.value
    const checkboxValue = e.target.checkbox.value


    if(password1Value === password2Value &&  firstNameValue !== undefined && lastNameValue !== undefined && emailValue !== undefined && password1Value !== undefined && password2Value !== undefined){
       console.log(firstNameValue,lastNameValue,emailValue,password1Value,checkboxValue); 
    }
    else console.log(`error`);


  }
  render() {
    return (
      <div className="RegisterContainer">
        <form className="registerForm" onSubmit={this.submitForm} >
          <h1 className="allChildren" >Register </h1>
          <p className="allChildren" >create your account. it's free and only takes a minute</p>
          <div className="firstAndLastName">
            <input   className="allChildren" onChange={this.getInputValue} name="firstName" type="text" placeholder="First Name" />
            <input  className="allChildren"  onChange={this.getInputValue} name="lastName" type="text" placeholder="Last Name"/>
          </div>
          <input  className="allChildren" onChange={this.getInputValue} name="email" type="text" placeholder="Email"/>
          <input  className="allChildren" onChange={this.getInputValue} name="password1" type="text" placeholder="Password"/>
          <input  className="allChildren" onChange={this.getInputValue} name="password2" type="text" placeholder="Confirm Password"/>
          <label className="allChildren" htmlFor="checkbox"><input  onChange={this.getInputValue} name="checkbox" type="checkbox" id="checkbox"/> I accept the <a href="/">Terms of Use</a> & <a href="/">privacy policy</a></label>
          <button>Register Now</button>
        </form>
      </div>
    );
  }
}
