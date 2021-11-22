import React from "react";
import Person1 from "./Person1";

export default class AllPeople extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const shefName1 = "Conner Quinn";
    const shefName2 = "Samuel Schick";
    const shefName3 = "Fred Morrison";
    const shefName4 = "Celia Alameda";

    const urlImg1 = "https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907__340.jpg"
    const urlImg2 = "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445__340.jpg"
    const urlImg3 = "https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699__340.jpg"
    const urlImg4 = "https://cdn.pixabay.com/photo/2017/02/09/15/06/girl-2052641__340.jpg"

    const jobTitle1 = "executive chef"
    const jobTitle2 = "restaurant manager"
    const jobTitle3 = "co-chef"




    return (
      <div className="chefContainer"> 
        <Person1 shefName={shefName1} urlImg = {urlImg1} jobTitle = {jobTitle1} urlImg = {urlImg1}/>
        <Person1 shefName={shefName2} urlImg = {urlImg2} jobTitle = {jobTitle2} urlImg = {urlImg2}/>
        <Person1 shefName={shefName3} urlImg = {urlImg3} jobTitle = {jobTitle3} urlImg = {urlImg3}/>
        <Person1 shefName={shefName4} urlImg = {urlImg4} jobTitle = {jobTitle3} urlImg = {urlImg4}/>
      </div>
    );
  }
}
