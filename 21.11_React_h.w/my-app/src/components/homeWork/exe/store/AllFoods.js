import React from "react";
import Food from "./Food";

export default class AllFoods extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const candy={
      imgUrl : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.PAzOUXaRFSCygh9zF8gyOwHaHa%26pid%3DApi&f=1"  ,
      title : "candies",
      description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    }

    const cake={
        imgUrl : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.5NZxLJOXJmX1U2f_zC8mVQHaHa%26pid%3DApi&f=1"  ,
        title : "candies",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    }

    const biscuit={
        imgUrl : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.FRRm8FwXv7cp0V5xfyhfLAHaHa%26pid%3DApi&f=1"  ,
        title : "candies",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    }

      const bread={
        imgUrl : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.ahpTsFU2DTuKr7zdiPOgdAHaHa%26pid%3DApi&f=1"  ,
        title : "candies",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    }

      const croissant={
        imgUrl : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.C4Frxom6rsM8dq03FibCqgHaHa%26pid%3DApi&f=1"  ,
        title : "candies",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    }

      const lollipop={
        imgUrl : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.lk3chnQxlw0qcpaWxeAggwAAAA%26pid%3DApi&f=1"  ,
        title : "candies",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    }


    return (
      <div className="foodDiv">
        <Food item = {candy}/>
        <Food item = {cake}/>
        <Food item = {biscuit}/>
        <Food item = {bread}/>
        <Food item = {croissant}/>
        <Food item = {lollipop}/>
      </div>
    );
  }
}
