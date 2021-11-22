import React from "react";
import Managers1 from "./Managers1";

export default class AllManagers extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const name1 = "adrian shel";
    const name2 = "ketty nellson";
    const name3 = "janie clarck";

    const jobTitle1 = "financial director"
    const jobTitle2 = "advertising manager"
    const jobTitle3 = "secretary"

    const imgUrl1 = "https://cdn.pixabay.com/photo/2018/07/25/08/58/business-3560916__340.jpg"
    const imgUrl2 = "https://cdn.pixabay.com/photo/2017/09/21/19/06/woman-2773007__340.jpg"
    const imgUrl3 = "https://cdn.pixabay.com/photo/2017/11/02/14/27/model-2911332__340.jpg"


    return (
      <div className="managerContainer">
        <Managers1 name={name1} jobTitle={jobTitle1} imgUrl = {imgUrl1}/>
        <Managers1 name={name2} jobTitle={jobTitle2} imgUrl = {imgUrl2}/>
        <Managers1 name={name3} jobTitle={jobTitle3} imgUrl = {imgUrl3}/>
      </div>
    );
  }
}
